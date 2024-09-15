import { Icon } from "@iconify/react";
import { TNavigation } from "./types";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

type TNavigationItemProps = {
  navigation: TNavigation;
};

export const NavigationItem = ({ navigation }: TNavigationItemProps) => {
  const { icon, label, path, children } = navigation;
  const hasChildren = children && children?.length > 0;

  return (
    <NavLink
      to={hasChildren ? `${children[0].path}` : path}
      className={({ isActive }) =>
        cn(
          `px-5 items-center font-gilroy-bold text-white-50 ${
            isActive && "text-purple"
          }`
        )
      }
    >
      <div className="flex gap-x-3 items-center">
        {hasChildren && <Icon icon="bi:caret-right-fill" />}
        <Icon icon={icon} className="text-3xl" />
        <span>{label}</span>
      </div>

      {hasChildren && (
        <div className="block  px-8">
          {children.map((nav) => (
            <NavigationItem key={nav.path} navigation={nav} />
          ))}
        </div>
      )}
    </NavLink>
  );
};
