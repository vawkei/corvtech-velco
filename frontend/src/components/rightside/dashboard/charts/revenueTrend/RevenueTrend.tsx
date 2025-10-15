import classes from "./RevenueTrend.module.scss";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  plugins,
  
} from "chart.js";
import Card from "../../../../ui/card/Card";



ChartJs.register(BarElement, CategoryScale, LinearScale, plugins);

const RevenueTrend = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Collected",
        data: [55, 70, 60, 80, 75, 90],
        backgroundColor: "#22c55e",
      },
      {
        label: "Remitted",
        data: [50, 65, 58, 78, 72, 88],
        backgroundColor: "#6b7280",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
      },
      scales: {
        x: {
          grid: {
            drawTicks: false,
            drawBorder: false,
            color: "transparent",
            display:false
          },
        },
        y: {
          grid: {
            drawTicks: false,
            drawBorder: false,
            color: "transparent",
            display:false
          },
        },
      },
    },
  };

  return (
    <Card className={classes.container}>
      <div className={classes.heading}>
        <h2>Revenue Trend</h2>
        <p>Monthly Collection Over time</p>
      </div>
      <div className={classes.chart}>
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
};

export default RevenueTrend;
