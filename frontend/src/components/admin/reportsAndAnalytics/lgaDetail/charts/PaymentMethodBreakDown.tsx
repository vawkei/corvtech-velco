import classes from "./charts.module.scss";
import Card from "../../../../ui/card/Card";

const PaymentMethodBreakDown = () => {
  return (
    <Card className={classes["payment-meth-container"]}>
      <h2>PaymentMethodBreakDown</h2>
      <div className={classes.chart}>
        {/* <Bar
          data={chartData}
          options={options}
          plugins={[insideLabelPlugin, endLabelPlugin]}
        /> */}
      </div>
    </Card>
  );
};

export default PaymentMethodBreakDown;
