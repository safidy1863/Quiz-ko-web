import { paths } from "@/constants";
import { AuthRoutes } from "@/modules/auth";
import { Dashboard, DashboardRoutes } from "@/modules/dashboard";
import { TRoute } from "@/types";
import { Navigate, Outlet } from "react-router-dom";

export const ROUTES: TRoute[] = [
  {
    path: paths.auth,
    element: <Outlet />,
    children: AuthRoutes,
  },
  {
    path : paths.dashboard,
    element : <Dashboard />,
    children : DashboardRoutes
  },
  {
    path: "",
    element: <Navigate to={paths.auth} replace />,
  },
];
