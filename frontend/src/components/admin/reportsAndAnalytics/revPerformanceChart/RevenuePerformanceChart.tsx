// 📒📒 Used recharts as i cant replicate the design with chartjs
import Card from "../../../ui/card/Card";
import classes from "./RevPerformanceChart.module.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { CustomBar, CustomizedAxisTick } from "./utils/CustomizedBarAndAxis";

const data = [
  { name: "SUV/Minibus", expected: 85, paid: 60 },
  { name: "Salon Car", expected: 92, paid: 67 },
  { name: "Motorcycle", expected: 92, paid: 67 },
  { name: "32-seater Bus", expected: 77, paid: 54 },
  { name: "Truck", expected: 76, paid: 53 },
  { name: "Tricycle", expected: 88, paid: 62 },
  { name: "Van", expected: 88, paid: 62 },
  { name: "Pickup Truck", expected: 88, paid: 62 },
  { name: "Heavy Duty Truck", expected: 77, paid: 54 },
  { name: "18-seater Bus", expected: 90, paid: 65 },
];






const RevenuePerformanceChart = () => {
  return (
    <Card className={classes.container}>
      <div className={classes.heading}>
        <h2>Revenue Performance</h2>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 40 }}
          barCategoryGap={20}
        >
          <CartesianGrid
            strokeDasharray={"3 3"}
            vertical={false}
            stroke="#f2f2f2"
          />
          <XAxis
            dataKey={"name"}
            // tick={{ fontSize: 10, fill: "#555" }}
            tick={<CustomizedAxisTick />}
            interval={0}
            angle={0}
            tickMargin={12}
            
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#777" }}
            axisLine={false}
            tickLine={false}
            label={{
              value: "Revenue Generated (₦M)",
              angle: -90,
              position: "insideLeft",
              fill: "#444",
              fontSize: 13,
              fontWeight: 600,
            }}
          />
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.05)" }}
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              border: "1px solid #eee",
              fontSize: "13px",
            }}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            wrapperStyle={{
              fontSize: 12,
              marginTop: 20,
            }}
          />
          <Bar dataKey="expected" shape={CustomBar} />
        </BarChart>
      </ResponsiveContainer>

      <div className={classes["lower-div-container"]}>
        <div className={classes["first-div"]}>
          <p>Vehicle Category</p>
        </div>
        <div className={classes["second-div"]}>
          <div
            style={{
              width: 12,
              height: 12,
              backgroundColor: "#188038",
              borderRadius: 2,
            }}
          ></div>

          <p className={classes["paid-amount"]}>Paid Amount</p>

          <div
            style={{
              width: 12,
              height: 12,
              backgroundColor: "#E9EBEF",
              borderRadius: 2,
              border: "1px solid #ccc",
            }}
          ></div>
          <p className={classes["expected-amount"]}>Expected Amount</p>
        </div>
      </div>
    </Card>
  );
};

export default RevenuePerformanceChart;
