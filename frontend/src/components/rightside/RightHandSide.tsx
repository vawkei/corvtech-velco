import classes from "./RightHandSide.module.scss";
import TopRight from "./topRight/TopRight";
import FinancialSummary from "./dashboard/financialSummary/FinancialSummary";
import AnalyticsFilter from "./dashboard/analyticsSummary/AnalyticsFilter";
import RevenueTrend from "./dashboard/charts/revenueTrend/RevenueTrend";

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
      </div>
    </div>
  );
};

export default RightHandSide;
