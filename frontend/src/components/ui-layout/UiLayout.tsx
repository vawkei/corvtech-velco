import classes from "./UiLayout.module.scss";
import LeftHandSide from "../leftside/LeftHandSide";
import RightHandSide from "../rightside/RightHandSide";

const UiLayout = () => {
  return (
    <div className={classes.container}>
      <div className={classes["left-hand-container"]}>
        <LeftHandSide />
      </div>
      <div className={classes["right-hand-container"]}>
        <RightHandSide />
      </div>
    </div>
  );
};

export default UiLayout;
