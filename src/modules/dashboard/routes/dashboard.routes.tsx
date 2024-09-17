import { TRoute } from "@/types";
import { LEVEL_DYNAMIC_PATH, pathsDashboard } from "../constants";
import { Home, Profile, Results, Settings, Students, Tests } from "../pages";
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
    path: pathsDashboard.profile,
    element: <Profile />,
    crumb: <Link to={pathsDashboard.home}>Profile</Link>,
  },
  {
    path: pathsDashboard.tests,
    element: <Tests />,
    crumb: <Link to={pathsDashboard.home}>Tests</Link>,
  },
  {
    path: pathsDashboard.results,
    element: <Results />,
    crumb: <Link to={pathsDashboard.home}>Results</Link>,
  },
  {
    path: pathsDashboard.settings,
    element: <Settings />,
    crumb: <Link to={pathsDashboard.home}>Settings</Link>,
  },
  {
    path: "",
    element: <Navigate to={pathsDashboard.home} replace />,
  },
];
