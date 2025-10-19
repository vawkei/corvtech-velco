import classes from "./ReportSummary.module.scss";
import Card from "../../../ui/card/Card";
import { ReportAndAnalyticsData } from "./ReportsData";

const ReportAndAnalyticsSummary = () => {
  var nairaSymbol = "\u20A6";

  return (
    <div className={classes.container}>
      <div className={classes.cards}>
        {ReportAndAnalyticsData.map((data) => {
          const Icon = data.icon;
          const LastMonthIcon = data.lastmonth.icon;
          // const colorIcon =data.lastmonth.iconColor
          const { value, label,  } = data.lastmonth;

          return (
            <Card className={classes["card"]} key={data.heading}>
              <h2>{data.heading}</h2>

              <div className={classes["mid-section"]}>
                <p className={classes.sum}>
                  {nairaSymbol} {data.sum}{" "}
                </p>

                <p className={classes.icon}>
                  <Icon color={data.color} size={20} />
                </p>
              </div>
              <div className={classes["lower-section"]}>
                <p className={classes.stutusLine}>
                  {/* <span className={`${classes.value} ${classes[valueColor]}`}> */}
                  <span
                    className={
                      data.lastmonth.label === "fulfilled"
                        ? classes.fulfilled
                        : data.lastmonth.label === ""
                        ? classes.error
                        : `${classes.value} ${
                            classes[data.lastmonth.valueColor]
                          }`
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.2rem",
                      }}
                    >
                      <LastMonthIcon
                        size={data.lastmonth.iconSize}
                        color={data.lastmonth.iconColor}
                        className={classes.statusIcon}
                      />
                      {value}
                      {/* labe(neutral) */}
                      {label ? (
                        // <span className={classes.label}>{label}</span>
                        <span
                          className={
                            (data.lastmonth.label === "fulfilled"
                              ? classes.fulfilled
                              : classes.label)
                          }
                        >
                          {label}
                        </span>
                      ) : null}
                    </div>
                  </span>
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ReportAndAnalyticsSummary;
