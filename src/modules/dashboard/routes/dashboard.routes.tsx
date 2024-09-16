import { TRoute } from "@/types";
import { LEVEL_DYNAMIC_PATH, pathsDashboard } from "../constants";
import { Home, Students } from "../pages";
import { Link, Navigate } from "react-router-dom";

export const DashboardRoutes: TRoute[] = [
  {
    path: pathsDashboard.home,
    element: <Home />,
    crumb: <Link to={pathsDashboard.home}>Home</Link>,
  },
  {
    path: `${pathsDashboard.students}/:${LEVEL_DYNAMIC_PATH}`,
    element: <Students />,
    crumb: <Link to={pathsDashboard.home}>Students</Link>,
  },
  {
    path: "",
    element: <Navigate to={pathsDashboard.home} replace />,
  },
];
