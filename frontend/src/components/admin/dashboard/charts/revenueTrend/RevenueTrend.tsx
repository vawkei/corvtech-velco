// import classes from "./RevenueTrend.module.scss";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJs,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   plugins,

// } from "chart.js";
// import Card from "../../../../ui/card/Card";

// ChartJs.register(BarElement, CategoryScale, LinearScale, plugins);

// const RevenueTrend = () => {
//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Collected",
//         data: [55, 70, 60, 80, 75, 90],
//         backgroundColor: "#22c55e",
//       },
//       {
//         label: "Remitted",
//         data: [50, 65, 58, 78, 72, 88],
//         backgroundColor: "#6b7280",
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: true,
//         position: "bottom" as const,
//       },
//       scales: {
//         x: {
//           grid: {
//             drawTicks: false,
//             drawBorder: false,
//             color: "transparent",
//             display:false
//           },
//         },
//         y: {
//           grid: {
//             drawTicks: false,
//             drawBorder: false,
//             color: "transparent",
//             display:false
//           },
//         },
//       },
//     },
//   };

//   return (
//     <Card className={classes.container}>
//       <div className={classes.heading}>
//         <h2>Revenue Trend</h2>
//         <p>Monthly Collection Over time</p>
//       </div>
//       <div className={classes.chart}>
//         <Bar data={data} options={options} />
//       </div>
//     </Card>
//   );
// };

// export default RevenueTrend;

import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Tooltip,
  Title,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Tooltip,
  Title
);

/**
 * Helper to format numbers nicely as ₦ and M suffix
 * - returns "0" for zero (to match your screenshot)
 * - returns "₦25M", "₦50M", etc for 1e6 multiples
 */
function formatTickValue(value: any) {
  if (value === 0) return "0";
  // divide by 1,000,000 then show without decimals
  const millions = value / 1_000_000;
  // show as ₦{number}M
  return `₦${Number(millions).toLocaleString()}M`;
}

/**
 * Format currency in tooltip (e.g. ₦64,000,000)
 */
function formatCurrencyFull(value: any) {
  try {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `₦${Number(value).toLocaleString()}`;
  }
}

export default function RevenueTrendGroupedBar({ inputData = null }) {
  // Sample data (Collected vs Remitted)
  const sample = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    collected: [55000000, 65000000, 60000000, 76000000, 74000000, 90000000],
    remitted: [52000000, 62000000, 58000000, 73000000, 72000000, 88000000],
  };

  const d = inputData ?? sample;

  const data = useMemo(
    () => ({
      labels: d.labels,
      datasets: [
        {
          label: "Collected",
          data: d.collected,
          backgroundColor: "#16a34a", // green
          // borderRadius: 6,
          // barThickness: 40, // make bars fatter (try 36–48 range)
          // categoryPercentage: 0.9, // reduce space between grouped bars
          // barPercentage: 0.48, // control individual bar width ratio
        },
        {
          label: "Remitted",
          data: d.remitted,
          backgroundColor: "#6b7280", // gray
          // borderRadius: 6,
          // barThickness: 40, // make bars fatter (try 36–48 range)
          // categoryPercentage: 0.9, // reduce space between grouped bars
          // barPercentage: 0.48, // control individual bar width ratio
        },
      ],
    }),
    [d]
  );

  const maxValue = Math.max(...d.collected, ...d.remitted);
  // Round suggestedMax up to nearest 25,000,000 to get ticks at 0,25M,50M...
  const step = 25_000_000;
  const suggestedMax = Math.ceil(maxValue / step) * step;

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          padding: 16,
        },
      },
      tooltip: {
        callbacks: {
          label(context: any) {
            const label = context.dataset.label || "";
            const value = context.parsed.y ?? context.parsed;
            return `${label}: ${formatCurrencyFull(value)}`;
          },
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false,
        },
        ticks: {
          color: "#374151",
          font: { weight: 500 },
        },
      },
      y: {
        beginAtZero: true,
        // show the axis labels as 0, ₦25M, ₦50M ...
        ticks: {
          stepSize: step,
          callback: function (value: any) {
            // Chart.js sometimes passes tick objects; coerce to number
            const num = Number(value);
            return formatTickValue(num);
          },
          color: "#6b7280",
          font: { weight: 500 },
        },
        grid: {
          ...({ borderDash: [4, 6], color: "rgba(15,23,42,0.06)" } as any),
        },
        suggestedMax,
      },
    },
    // spacing and grouping
    layout: {
      padding: { top: 8, bottom: 8, left: 8, right: 16 },
    },
  };

  return (
    <div style={{ background: "white", borderRadius: 10, padding: 18 }}>
      <h3 style={{ margin: "0 0 12px 0" }}>Revenue Trend</h3>
      <div style={{ height: 320 }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
