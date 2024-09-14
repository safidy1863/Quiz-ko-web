import { TRoute } from "@/types";
import { pathsDashboard } from "../constants";
import { Home } from "../pages";
import { Navigate } from "react-router-dom";

export const DashboardRoutes: TRoute[] = [
  {
    path: pathsDashboard.home,
    element: <Home />,
  },
  {
    path: "",
    element: <Navigate to={pathsDashboard.home} replace />,
  },
];
