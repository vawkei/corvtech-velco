// import classes from "./AdminRoutes.module.scss";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import LevySchedules from "../levySchedules/LevySchedules";
import ReportsAndAnalytics from "../reportsAndAnalytics/ReportsAndAnalytics";
import LgaDetail from "../reportsAndAnalytics/lgaDetail/LgaDetail";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/levy-schedules" element={<LevySchedules />} />
      <Route path="/reports-analytics" element={<ReportsAndAnalytics />} />
      <Route
        path="/reports-analytics/lga-details/:id"
        element={<LgaDetail />}
      />
    </Routes>
  );
};

export default AdminRoutes;
