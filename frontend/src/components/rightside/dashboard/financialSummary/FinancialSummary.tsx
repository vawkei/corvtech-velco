// https://github.com/vawkei/corvtech-velco.git

import Card from "../../../ui/card/Card";
import classes from "./FinancialSummary.module.scss";
import { FinancialSummaryData } from "./FinancialSummaryData";

const FinancialSummary = () => {
  var nairaSymbol = "\u20A6";

  return (
    <div className={classes.container}>
      <h2>Welcome Back,Admin</h2>

      <div className={classes.cards}>
        {FinancialSummaryData.map((data) => {
          const Icon = data.icon;
          const YesterdayIcon = data?.yesterday?.icon;
          return (
            <Card className={classes["card-container"]} key={data.heading}>
              <h2>{data.heading}</h2>

              <div className={classes["mid-section"]}>
                <p>
                  {nairaSymbol} {data.sum}{" "}
                </p>

                <p>
                  <Icon />
                </p>
              </div>
              <div className={classes["lower-section"]}>
                <p><YesterdayIcon /> {data.yesterday.text}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FinancialSummary;
