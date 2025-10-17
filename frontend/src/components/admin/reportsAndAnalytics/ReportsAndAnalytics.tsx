import Card from "../../ui/card/Card";
import classes from "./ReportsAndAnalytics.module.scss";
import RevenuePerformanceChart from "./revPerformanceChart/RevenuePerformanceChart";
import ReportAndAnalyticsSummary from "./reportsSummary/ReportsAndAnalyticsSummary";
import MonthlyRemittanceTracker from "./monthlyRTracker/MonthlyRemittanceTracker";
// import { HiOutlineCalculator } from 'react-icons/hi2';

const ReportsAndAnalytics = () => {


  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h2>Reports & Analytics</h2>
        <p>Monitor real-time revenue performance and remittance compliance</p>
      </div>

      <Card className={classes.card}>
        <p>
          3 Vehicle categories have overdue remittances. Immediate action
          required
        </p>
      </Card>
      <ReportAndAnalyticsSummary />
      <div className={classes["rev-chart-container"]}>
        <RevenuePerformanceChart />
      </div>
      <div>
        <MonthlyRemittanceTracker />
      </div>
    </div>
  );
};

export default ReportsAndAnalytics;
