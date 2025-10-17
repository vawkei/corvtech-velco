// import classes from "./AdminRoutes.module.scss";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import LevySchedules from "../levySchedules/LevySchedules";
import ReportsAndAnalytics from "../reportsAndAnalytics/ReportsAndAnalytics";


const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/levy-schedules" element={<LevySchedules />} />
        <Route path="/reports-analytics" element={<ReportsAndAnalytics/>} />
    </Routes>
  );
};

export default AdminRoutes;
