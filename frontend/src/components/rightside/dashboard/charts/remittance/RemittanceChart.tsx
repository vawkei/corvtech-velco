import classes from "./RemittanceChart.module.scss";
import Card from "../../../../ui/card/Card";
import { Doughnut } from "react-chartjs-2";

import type {  ChartOptions,  } from "chart.js";
import {
  Chart as ChartJs,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";



ChartJs.register(ArcElement, Tooltip,Legend);

const data = {
  labels:["Collected","Remitted","Pending","Overdue"],
  datasets:[
    {
      data:[65,25,7,3],
      backgroundColor:["#22c55e","#0ea5e9","#facc15","#ef4444"],
      cutout:"70%"//this right here makes it a doughnut
    }
  ]
};

//Fully typed options:
const options:ChartOptions<"doughnut"> = {
    responsive:true,
    maintainAspectRatio:false,
    plugins:{
        legend:{
            position:"bottom",
            labels:{
                color:"#000"
            }
        },
        tooltip:{
            enabled:true
        }
    }
}

const RemittanceCompliance = () => {
  return (
    <Card className={classes.container}>
      <div className={classes.heading}>
        <h2>Vehicle Category Performance</h2>
        <p>Top Paying Vehicle Categories</p>
      </div>
      <div className={classes.chart}>
        <Doughnut data={data} options={options} />
      </div>
    </Card>
  );
};

export default RemittanceCompliance;
