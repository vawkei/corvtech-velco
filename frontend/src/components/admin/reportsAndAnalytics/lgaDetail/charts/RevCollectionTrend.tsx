import classes from "./charts.module.scss";
import { useMemo } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Card from "../../../../ui/card/Card";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

/* ---- helpers ---- */
function formatCurrency(n: any) {
  try {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return `₦${Number(n).toLocaleString()}`;
  }
}

/* ---- Plugins ---- */

/* Draw full currency value at the end of each main bar (datasetIndex === 1) */
const endLabelPlugin = {
  id: "endLabelPlugin",
  afterDatasetsDraw(chart: any) {
    const { ctx } = chart;
    const datasetIndex = 1; // main colored bar (0 = track)
    const dataset = chart.data.datasets[datasetIndex];
    if (!dataset) return;
    const meta = chart.getDatasetMeta(datasetIndex);
    meta.data.forEach((bar: any, index: any) => {
      //   const value = dataset.data[index];
      //   const xPos = bar.x + 8;
      //   const yPos = bar.y + bar.height / 2 + 3;

      const value = dataset.data[index];
      // horizontal bar geometry
      const right = bar.x ?? 0;
      const left = bar.base ?? 0;
      const barRight = Math.max(left, right);
      const barHeight = Math.abs(bar.height ?? 0);

      // x position slightly to the right of bar end
      const xPos = barRight + -100;
      // y position above the bar (same vertical offset as month)
      const yAbove = bar.y - barHeight / 2 - 8;

      ctx.save();
      ctx.font = "600 12px Inter, system-ui, -apple-system, 'Segoe UI', Roboto";
      ctx.fillStyle = "#111827";
      ctx.textAlign = "left";
      ctx.fillText(formatCurrency(value), xPos, yAbove);
      ctx.restore();
    });
  },
};

// Replace your insideLabelPlugin with this
const insideLabelPlugin = {
  id: "insideLabelPlugin",
  afterDatasetsDraw(chart: any) {
    const { ctx } = chart;
    // dynamically find the dataset we want to label (label "Collected")
    const dsIndex = chart.data.datasets.findIndex(
      (d: any) => d.label === "Collected"
    );
    if (dsIndex === -1) return;
    const meta = chart.getDatasetMeta(dsIndex);
    if (!meta || !meta.data) return;

    ctx.save();
    ctx.font = "600 12px Inter, system-ui, -apple-system, 'Segoe UI', Roboto";
    ctx.textBaseline = "middle";

    meta.data.forEach((bar: any, i: number) => {
      const label = String(chart.data.labels?.[i] ?? "");
      // For horizontal bars: bar.x is the right edge, bar.base is the left edge (or vice-versa)
      const right = bar.x ?? 0;
      const left = bar.base ?? 0;
      const barLeft = Math.min(left, right);
      const barRight = Math.max(left, right);
      const barWidth = Math.abs(barRight - barLeft);
      const barHeight = Math.abs(bar.height ?? 0);
      const padding = 8;

      // compute center x and y above the bar
      const centerX = barLeft + barWidth / 64;
      const yAbove = bar.y - barHeight / 2 - 8; // 8px above the bar

      const textWidth = ctx.measureText(label).width;

      const fitsInside = barWidth > textWidth + padding * 2;
      ctx.fillStyle = fitsInside ? "#000000" : "#111827";
      ctx.textAlign = "left";

      if (fitsInside) {
        // draw inside, slightly inset from left edge
        // const xPos = barLeft + padding;
        // ctx.fillText(label, xPos, bar.y);
        ctx.fillText(label, centerX, yAbove);
      } else {
        // not enough room — draw to the right of the bar
        const xPos = barRight + padding;
        ctx.fillText(label, xPos, bar.y);
      }
    });

    ctx.restore();
  },
};

export default function RevenueCollectionTrend({ data = null }) {
  const sample = {
    labels: [
      "Nov 2024",
      "Dec 2024",
      "Jan 2025",
      "Feb 2025",
      "Mar 2025",
      "Apr 2025",
    ],
    values: [64000000, 66000000, 68000000, 70000000, 72000000, 74000000],
  };

  const chartData = useMemo(() => {
    const d = data ?? sample;
    const labels = d.labels;
    const values = d.values;

    // compute suggestedMax for the track
    const maxVal = Math.max(...values, 0);
    const headroom = 1.05;
    const suggestedMax = Math.ceil((maxVal * headroom) / 1000000) * 1000000; // round up to nearest million

    // track dataset should be drawn first
    const trackDataset = {
      label: "track",
      data: labels.map(() => suggestedMax),
      backgroundColor: "#f3f4f6",
      // slightly thicker so main bar sits visually inside it
      barThickness: 20,
      borderRadius: 12,
      // hide from legend
      hidden: true,
    };

    const mainDataset = {
      label: "Collected",
      data: values,
      backgroundColor: "#16a34a",
      borderRadius: 10,
      // make the main bar a bit thinner than track
      barThickness: 14,
      maxBarThickness: 48,
    };

    return {
      labels,
      datasets: [trackDataset, mainDataset],
    };
  }, [data]);

  // compute suggestedMax from dataset[0] (track)
  const suggestedMax =
    chartData.datasets?.[0]?.data?.[0] ??
    Math.max(...(chartData.datasets?.[1]?.data ?? [])) * 1.05;

  const options: ChartOptions<"bar"> = {
    indexAxis: "y", // horizontal
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label(ctx) {
            // ctx.parsed.x for horizontal bars
            return formatCurrency(ctx.parsed.x);
          },
        },
      },
    },
    // ensure bars don't touch
    datasets: {
      bar: {
        categoryPercentage: 0.7, // group occupies 70% of slot
        barPercentage: 0.5, // each bar occupies 50% of group width
        maxBarThickness: 52,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          display: false,
        },
        suggestedMax,
      },
      y: {
        grid: { display: false },
        ticks: {
          display: false, // hide axis labels since we draw them inside bars
        },
      },
    },
    layout: {
      padding: { top: 8, bottom: 8, left: 8, right: 16 },
    },
  };

  return (
    <Card className={classes["rev-col-trend-container"]}>
      <h2>Revenue Collection Trend</h2>
      <div className={classes.chart}>
        <Bar
          data={chartData}
          options={options}
          plugins={[insideLabelPlugin, endLabelPlugin]}
        />
      </div>
    </Card>
  );
}

// 📒📒📒Used this before 📒📒📒

// import { useMemo } from "react";
// import type { ChartOptions } from "chart.js";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// // Register Chart.js components
// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// // Plugin to draw value labels at the end of each horizontal bar
// const endLabelPlugin = {
//   id: "endLabelPlugin",
//   afterDatasetsDraw(chart:any) {
//     const { ctx} = chart;
//     chart.data.datasets.forEach((dataset:any, datasetIndex:any) => {
//       // only draw labels for visible dataset (we'll use first dataset for values)
//       if (datasetIndex !== 0) return;
//       const meta = chart.getDatasetMeta(datasetIndex);
//       meta.data.forEach((bar:any, index:any) => {
//         const value = dataset.data[index];
//         // position at bar end (x coordinate of bar)
//         const xPos = bar.x + 8;
//         const yPos = bar.y + (bar.height / 2) + 3;
//         ctx.save();
//         ctx.font = "600 12px Inter, system-ui, -apple-system, 'Segoe UI', Roboto";
//         ctx.fillStyle = "#111827"; // dark label color
//         ctx.textAlign = "left";
//         ctx.fillText(formatCurrency(value), xPos, yPos);
//         ctx.restore();
//       });
//     });
//   },
// };

// function formatCurrency(n:any) {
//   // Format as Naira: ₦64,000,000
//   try {
//     return new Intl.NumberFormat("en-NG", {
//       style: "currency",
//       currency: "NGN",
//       maximumFractionDigits: 0,
//     }).format(n);
//   } catch {
//     // fallback
//     return `₦${Number(n).toLocaleString()}`;
//   }
// }

// export default function RevenueCollectionTrend({ data = null }) {
//   // default sample data
//   const sample = {
//     labels: ["Nov 2024", "Dec 2024", "Jan 2025", "Feb 2025", "Mar 2025", "Apr 2025"],
//     values: [64000000, 66000000, 68000000, 70000000, 72000000, 74000000],
//   };

//   const chartData = useMemo(() => {
//     const d = data ?? sample;
//     return {
//       labels: d.labels,
//       datasets: [
//         {
//           label: "Collected",
//           data: d.values,
//           backgroundColor: "#16a34a", // green
//           borderRadius: 12,
//           barThickness: 14,
//         },
//       ],
//     };
//   }, [data]);

// const labels = chartData.labels;

//   const options: ChartOptions<"bar"> = {
//     indexAxis: "y", // horizontal
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label(ctx:any) {
//             return formatCurrency(ctx.parsed.x);
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         grid: { display: false },
//         ticks: {
//           display: false, // hide numeric ticks for cleaner look
//         },
//         // set a reasonable max so bars show proportional widths:
//         suggestedMax: Math.max(...chartData.datasets[0].data) * 1.05,
//       },
//       y: {
//         grid: { display: false, },
//         ticks: {
//           color: "#374151",
//           font: { weight: 500 },
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ height: 360, padding: 16, background: "white", borderRadius: 8 }}>
//       <h3 style={{ margin: "0 0 12px 0", fontSize: 18 }}>Revenue Collection Trend</h3>
//       <div style={{ height: 300 }}>
//         <Bar data={chartData} options={options} plugins={[endLabelPlugin]} />
//       </div>
//     </div>
//   );
// }
