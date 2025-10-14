import classes from "./LeftHandSide.module.scss";
import Card from "../ui/card/Card";
import { RiDashboardFill } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import { SiSimpleanalytics } from "react-icons/si";

const LeftHandSide = () => {
  return (
    <Card className={classes.card}>
      <h3>Velco</h3>
      <div className={classes.nav}>
        <ul>
          <li>
            <RiDashboardFill size={12} /> dashboard
          </li>
          <li>
            <GoGear size={12} /> Levy Schedule
          </li>
          <li>
            <SiSimpleanalytics size={12} /> Reports & Analytics
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default LeftHandSide;
