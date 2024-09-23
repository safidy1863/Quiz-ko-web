import { KEY_TOKEN_LOCAL_STORAGE, paths } from "@/constants";
import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

type TProtectedRouteProps = {
  element: ReactElement;
  redirectAuth?: boolean;
  hasAccess?: boolean;
  isProtected?: boolean;
  noAccessRedirect?: string;
};

export const ProtectedRoute = (props: TProtectedRouteProps) => {
  const {
    element,
    redirectAuth,
    hasAccess = true,
    isProtected,
    noAccessRedirect,
  } = props;

  const isAuthenticated =
    localStorage.getItem(KEY_TOKEN_LOCAL_STORAGE) !== null;

  if (isAuthenticated && redirectAuth) {
    return <Navigate to={paths.dashboard} />;
  }

  if (!isProtected) return element;

  if (!isAuthenticated) {
    return <Navigate to={paths.auth} />;
  }

  if (!hasAccess) {
    return <Navigate to={noAccessRedirect || paths.auth} replace />;
  }

  return element;
};
