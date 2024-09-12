import { ReactNode } from "react";

export type TRoute = {
  path: string;
  exact?: boolean;
  element?: ReactNode;
  hasAccess?: boolean;
  isProtected?: boolean;
  children?: TRoute[];
  noAccessFallback?: string;
};
