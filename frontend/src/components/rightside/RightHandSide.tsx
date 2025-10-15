import classes from "./RightHandSide.module.scss";
import TopRight from "./topRight/TopRight";
import FinancialSummary from "./dashboard/financialSummary/FinancialSummary";
import AnalyticsFilter from "./dashboard/analyticsSummary/AnalyticsFilter";
import RevenueTrend from "./dashboard/charts/revenueTrend/RevenueTrend";
import VehicleCategoryPerformance from "./dashboard/charts/vehicleCategory/VehicleCategory";
import RemittanceCompliance from "./dashboard/charts/remittance/RemittanceChart";
import RecentTransaction from "./dashboard/recentTransaction/RecentTransaction";

const RightHandSide = () => {
  return (
    <div className={classes.container}>
      {/* <h2>RightHandSide</h2> */}
      <div>
        <TopRight />
      </div>
      <div className={classes["dashboard-section"]}>
        <div>
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

export default RightHandSide;
