import { logoColored } from "@/assets";
import { DNavigations } from "../../constants/navigations-data";
import { NavigationItem } from "./navigation-item";
import { levels } from "@/api";

export const Sidebar = () => {
  return (
    <aside
      className={`bg-white fixed top-0 bottom-0  w-sidebar py-5 border-r-[1px]  border-300`}
    >
      <img src={logoColored} alt="logo" className="mx-auto" />

      <nav className="flex flex-col gap-y-5 mt-10">
        {DNavigations(levels).map((navigation) => (
          <NavigationItem key={navigation.path} navigation={navigation} />
        ))}
      </nav>
    </aside>
  );
};
