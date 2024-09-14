import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components";
import { pathsDashboard } from "../../constants";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1 className="font-gilroy-bold text-5xl">Dashboard</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <NavLink to={pathsDashboard.home}>Home</NavLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Sudents</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
};
