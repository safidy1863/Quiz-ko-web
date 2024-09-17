import { TRoute } from "@/types";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import { ReactElement } from "react";

export const renderRoutes = (routes: TRoute[]) =>
  routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      element={
        <ProtectedRoute
          element={route.element as ReactElement}
          noAccessRedirect={route.noAccessFallback}
          hasAccess={route.hasAccess}
          isProtected={route.isProtected}
        />
      }
      handle={{
        crumb: () => route.crumb,
      }}
    >
      {route.children &&
        route.children.length > 0 &&
        renderRoutes(route.children)}
    </Route>
  ));
