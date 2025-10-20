import classes from "./LgaDetail.module.scss";
// import { useParams } from "react-router-dom";
import { MonthlyRemittanceData } from "../monthlyRTracker/MonthlyRemittanceData";
import Card from "../../../ui/card/Card";

const LgaDetail = () => {
//   const { id } = useParams();
  var nairaSymbol = "\u20A6";

  // This is actually not cool. I am meant to fetch the data for SUV/Minibus from the data base. And not map through.

  const desiredObject = MonthlyRemittanceData.filter((data) => data.id === "1");
  console.log(desiredObject);

  return (
    <div>
      {/* <h2>LGA Detail</h2> */}
      {desiredObject.map((data, index) => {
        const Icon = data?.totalRevColl?.icon;
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

                    <p className={classes.icon}>{/* <Icon  /> */}</p>
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

                    <p className={classes.icon}>{/* <Icon  /> */}</p>
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

                    <p className={classes.icon}>{/* <Icon  /> */}</p>
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

export default LgaDetail;
