import classes from "./VehicleCategory.module.scss";
import Card from "../../../../ui/card/Card";
import { Bar } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";


const VehicleCategoryPerformance = () => {
  const data = {
    labels: ["Truck", "SUV", "Bus", "Sedan", "Motorcycle"],
    datasets: [
      {
        label: "Revenue",
        data: [2000000, 1700000, 1400000, 1000000, 700000],
        backgroundColor: "#22c55e",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive:true,
    plugins: {
      legend: { 
        display: false 
       },
    },
  };

  return (
    <Card className={classes.container}>
      <div className={classes.heading}>
        <h2>Vehicle Category Performance</h2>
        <p>Top Paying Vehicle Categories</p>
      </div>
      <div className={classes.chart}>
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
};

export default VehicleCategoryPerformance;
