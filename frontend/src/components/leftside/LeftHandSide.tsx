import classes from "./LeftHandSide.module.scss";
import Card from "../ui/card/Card";
import { RiDashboardFill } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import { SiSimpleanalytics } from "react-icons/si";
import { NavLink } from "react-router-dom";

const LeftHandSide = () => {
  const navDataHandler = (navData:any) => {
    return navData.isActive ? classes.active : "";
  };

  return (
    <Card className={classes.card}>
      <h3>V E L C O</h3>
      <nav className={classes.nav}>
        
        <ul>
        
          <NavLink to={"/admin/home"} className={navDataHandler}>
            <li>
              <RiDashboardFill size={12} /> dashboard
            </li>
          </NavLink>
        
          <NavLink to={"/admin/levy-schedules"} className={navDataHandler}>
            <li>
              <GoGear size={12} /> Levy Schedule
            </li>
          </NavLink>
        
          <NavLink to={"/admin/reports-analytics"} className={navDataHandler}>
            <li>
              <SiSimpleanalytics size={12} /> Reports & Analytics
            </li>
          </NavLink>
        
        </ul>
      </nav>
    </Card>
  );
};

export default LeftHandSide;
