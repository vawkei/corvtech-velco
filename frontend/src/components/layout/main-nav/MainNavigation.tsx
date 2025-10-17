import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.scss";

const MainNavigation = () => {
  return (
    <div className={classes["main-navigation"]}>
      <header>
        <NavLink to={"/"}>
          <h1>V E L C O</h1>
        </NavLink>
      </header>

      <nav>
        <ul>
          <NavLink to={"/admin/home"}>
            <li>Admin</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
