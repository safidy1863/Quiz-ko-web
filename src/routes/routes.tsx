import { paths } from "@/constants";
import { AuthRoutes } from "@/modules/auth";
import { TRoute } from "@/types";
import { Navigate, Outlet } from "react-router-dom";

export const ROUTES: TRoute[] = [
  {
    path: paths.auth,
    element: <Outlet />,
    children: AuthRoutes,
  },
  {
    path: "",
    element: <Navigate to={paths.auth} replace />,
  },
];
