import { KEY_USER_LOCAL_STORAGE, paths } from "@/constants";
import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

type TProtectedRouteProps = {
  element: ReactElement;
  hasAccess?: boolean;
  isProtected?: boolean;
  noAccessRedirect?: string;
};

export const ProtectedRoute = (props: TProtectedRouteProps) => {
  const { element, hasAccess, isProtected, noAccessRedirect } = props;

  if (!isProtected) return element;

  const isAuthenticated = localStorage.getItem(KEY_USER_LOCAL_STORAGE) !== null;

  if (!isAuthenticated) {
    return <Navigate to={paths.auth} />;
  }

  if (!hasAccess) {
    return <Navigate to={noAccessRedirect || paths.auth} replace />;
  }

  return element;
};
