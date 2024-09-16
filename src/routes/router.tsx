import { paths } from "@/constants";
import { AuthRoutes } from "@/modules/auth";
import { Dashboard, DashboardRoutes } from "@/modules/dashboard";
import { TRoute } from "@/types";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Navigate,
  Outlet,
} from "react-router-dom";
import { renderRoutes } from "./render-routes";

const ROUTES: TRoute[] = [
  {
    path: paths.auth,
    element: <Outlet />,
    children: AuthRoutes,
  },
  {
    path: paths.dashboard,
    element: <Dashboard />,
    children: DashboardRoutes,
    crumb: <Link to={paths.dashboard}>Dashboard</Link>,
  },
  {
    path: "",
    element: <Navigate to={paths.auth} replace />,
  },
];

export const router = createBrowserRouter(
  createRoutesFromElements(renderRoutes(ROUTES))
);
