import classes from "./CardSummary.module.scss";
import Card from "../../../../ui/card/Card";
import { MonthlyRemittanceData } from "../../monthlyRTracker/MonthlyRemittanceData";

const CardSummary = () => {
  var nairaSymbol = "\u20A6";

  // This is actually not cool. I am meant to fetch the data for SUV/Minibus from the data base. And not map through.

  const desiredObject = MonthlyRemittanceData.filter((data) => data.id === "1");
  console.log(desiredObject);

  return (
    <div>
      {/* <h2>LGA Detail</h2> */}
      {desiredObject.map((data, index) => {
        const IconMain1 = data.totalRevColl?.iconMain;
        const IconMain2 = data.totalRemSent?.iconMain;
        const IconMain3 = data.remittanceRate?.iconMain;

        const IconArrow1 = data?.totalRevColl?.iconArrow;
        const IconArrow2 = data.totalRemSent?.iconArrow;
        const IconArrow3 = data.remittanceRate?.iconArrow;

        return (
          <div key={index} className={classes.container}>
            <div>
              <h2>{data.lga}</h2>
              <p>Revenue & Remittance Performance</p>
              <div className={classes.cards}>
                <Card className={classes.card}>
                  <div className={classes.heading}>
                    <h4>{data.totalRevColl?.title}</h4>
                  </div>

                  <div className={classes["mid-section"]}>
                    <p className={classes.sum}>
                      {nairaSymbol} {data.totalRevColl?.totalRevColl}{" "}
                    </p>
                    <p className={classes["icon-main"]}>
                      {IconMain1 && <IconMain1 size={20} color="#16a34a" />}
                    </p>
                  </div>
                  <div className={classes["lower-section"]}>
                    <p className={classes.icon}>
                      {IconArrow1 && <IconArrow1 size={16} color="#16a34a" />}
                    </p>
                    <p className={classes.value}>
                      {data.totalRevColl?.lastmonth.value}
                    </p>
                    <p className={classes.label}>
                      {data.totalRevColl?.lastmonth.label}
                    </p>
                  </div>
                </Card>

                <Card className={classes.card}>
                  <div className={classes.heading}>
                    <h4>{data.totalRemSent?.title}</h4>
                  </div>

                  <div className={classes["mid-section"]}>
                    <p className={classes.sum}>
                      {nairaSymbol} {data.totalRemSent?.totalRemSent}{" "}
                    </p>
                    <p className={classes["icon-main"]}>
                      {IconMain2 && <IconMain2 size={20} color="#16a34a" />}
                    </p>
                  </div>
                  <div className={classes["lower-section"]}>
                    <p className={classes.icon}>
                      {IconArrow2 && <IconArrow2 size={16} color="#16a34a" />}
                    </p>
                    <p className={classes.value}>
                      {data.totalRemSent?.lastmonth.value}
                    </p>
                    <p className={classes.label}>
                      {data.totalRemSent?.lastmonth.label}
                    </p>
                  </div>
                </Card>

                <Card className={classes.card}>
                  <div className={classes.heading}>
                    <h4>{data.remittanceRate?.title}</h4>
                  </div>

                  <div className={classes["mid-section"]}>
                    <p className={classes.sum}>
                      {nairaSymbol} {data.remittanceRate?.remittanceRate}{" "}
                    </p>
                    <p className={classes["icon-main"]}>
                      {IconMain3 && <IconMain3 size={20} color="#16a34a" />}
                    </p>
                  </div>
                  <div className={classes["lower-section"]}>
                    <p className={classes.icon}>
                      {IconArrow3 && <IconArrow3 size={16} color="#16a34a" />}
                    </p>
                    <p className={classes.value}>
                      {data.remittanceRate?.lastmonth.value}
                    </p>
                    <p className={classes.label}>
                      {data.remittanceRate?.lastmonth.label}
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardSummary;
