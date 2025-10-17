// 📒📒 Used recharts as i cant replicate the design with chartjs
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


const CustomBar = (props: any) => {
  const { x, y, width, height, payload } = props;
  const { expected, paid } = payload;

  const fillHeight = (paid / expected) * height;

  // ✅ Move these OUTSIDE the return statement
  const r = Math.min(8, (width * 0.7) / 2, fillHeight / 2);
  const gx = x 
  const gy = y + (height - fillHeight);
  const gw = width 
  const gb = y + height;

  const path = `
    M ${gx + r} ${gy}
    L ${gx + gw - r} ${gy}
    A ${r} ${r} 0 0 1 ${gx + gw} ${gy + r}
    L ${gx + gw} ${gb}
    L ${gx} ${gb}
    L ${gx} ${gy + r}
    A ${r} ${r} 0 0 1 ${gx + r} ${gy}
    Z
  `;

  return (
    <g>
      {/* Light gray background bar */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="#E9EBEF"
        rx={0}
        ry={0}
      />

      {/* ✅ Green filled portion with only top rounded */}
      <path d={path} fill="#188038" />
    </g>
  );
};

const RevenuePerformanceChart = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "500px", // 👈 This is critical
        background: "#fff",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
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
            tick={{ fontSize: 12, fill: "#555" }}
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

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "-10px",
          padding: "0 20px",
        }}
      >
        <span style={{ fontSize: 13, color: "#555", fontWeight: 600 }}>
          Vehicle Category
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: 12,
                height: 12,
                backgroundColor: "#188038",
                borderRadius: 2,
              }}
            ></div>
            <span style={{ fontSize: 13, color: "#444" }}>Paid Amount</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: 12,
                height: 12,
                backgroundColor: "#E9EBEF",
                borderRadius: 2,
                border: "1px solid #ccc",
              }}
            ></div>
            <span style={{ fontSize: 13, color: "#444" }}>Expected Amount</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenuePerformanceChart;
