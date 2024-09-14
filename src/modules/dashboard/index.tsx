import { Outlet } from "react-router-dom";
import { DashboardRoutes } from "./routes";
import { Header, Sidebar } from "./contents";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <main
        className={`ml-sidebar min-h-screen flex flex-col p-5 bg-default-white`}
      >
        <Header />
        <div className="flex-1 mt-5">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export { DashboardRoutes, Dashboard };
