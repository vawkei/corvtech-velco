import classes from "./LgaDetail.module.scss";
// import { useParams } from "react-router-dom";
import CardSummary from "./card-summary/CardSummary";
import RevCollectionTrend from "./charts/RevCollectionTrend";
import PaymentMethodBreakDown from "./charts/PaymentMethodBreakDown";

const LgaDetail = () => {
  //   const { id } = useParams();

  return (
    <div className={classes.container}>
      <div>
        <CardSummary />
      </div>

      <div className={classes.charts}>
        <div className={classes["rev-col-container"]}>
          <RevCollectionTrend />
        </div>
        <div className={classes["payment-meth-container"]}>
          <PaymentMethodBreakDown />
        </div>
      </div>
    </div>
  );
};

export default LgaDetail;
