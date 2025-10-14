import classes from "./RightHandSide.module.scss";
import TopRight from "../topRight/TopRight";
import FinancialSummary from "./dashboard/financialSummary/FinancialSummary";

const RightHandSide = () => {
  return (
    <div className={classes.container}>
      {/* <h2>RightHandSide</h2> */}
      <div>
        <TopRight />
      </div>
      <div className={classes["dashboard-section"]}>
        <FinancialSummary />
      </div>
    </div>
  );
};

export default RightHandSide;
