import classes from "./Dashboard.module.scss";
import FinancialSummary from "./financialSummary/FinancialSummary";
import AnalyticsFilter from "./analyticsSummary/AnalyticsFilter";
import RevenueTrend from "./charts/revenueTrend/RevenueTrend";
import VehicleCategoryPerformance from "./charts/vehicleCategory/VehicleCategory";
import RemittanceCompliance from "./charts/remittance/RemittanceChart";
import RecentTransaction from "./recentTransaction/RecentTransaction";

const Dashboard = () => {
  return (
    <div className={classes.container}>
      {/* <h2>RightHandSide</h2> */}
      
      <div className={classes["dashboard-section"]}>
        <div className={classes["financial-summary-parent"]}>
          <FinancialSummary />
        </div>

        <div className={classes["analytics-filter-parent"]}>
          <AnalyticsFilter />
        </div>

        <div className={classes["revenue-trend-parent"]}>
          <RevenueTrend />
        </div>

        <div className={classes["vehicle-and-remittance"]}>
          <div className={classes.vehicle}>
            <VehicleCategoryPerformance />
          </div>
          <div className={classes.remittance}>
            <RemittanceCompliance />
          </div>
        </div>
        <div className={classes["recent-transactions"]}>
          <RecentTransaction />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;