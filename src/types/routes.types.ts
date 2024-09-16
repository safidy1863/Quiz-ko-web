import { ReactNode } from "react";

export type TRoute = {
  path: string;
  crumb?: ReactNode;
  exact?: boolean;
  element?: ReactNode;
  hasAccess?: boolean;
  isProtected?: boolean;
  children?: TRoute[];
  noAccessFallback?: string;
};
