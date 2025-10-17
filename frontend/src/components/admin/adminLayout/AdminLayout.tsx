import LeftHandSide from "../../leftside/LeftHandSide";
import AdminRoutes from "../adminRoutes/AdminRoutes";
import TopRight from "../topRight/TopRight";
import classes from "./AdminLayout.module.scss";

const AdminLayout = () => {
  return (
    <div className={classes.container}>
      <div className={classes["left-hand-container"]}>
        <LeftHandSide />
      </div>
      <div className={classes["right-hand-container"]}>
        <div>
          <TopRight />
        </div>
        <AdminRoutes />
      </div>
    </div>
  );
};

export default AdminLayout;
