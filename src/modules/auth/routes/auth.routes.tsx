import { TRoute } from "@/types";
import { pathsAuth } from "../constants";
import { Login } from "../pages";
import { Navigate } from "react-router-dom";

export const AuthRoutes: TRoute[] = [
  {
    path: pathsAuth.login,
    element: <Login />,
  },
  {
    path: "",
    element: <Navigate to={pathsAuth.login} replace />,
  },
];
