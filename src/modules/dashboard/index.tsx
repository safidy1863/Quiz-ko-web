import { Outlet } from "react-router-dom";
import { DashboardRoutes } from "./routes";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Outlet />
    </div>
  );
};

export { DashboardRoutes, Dashboard };
