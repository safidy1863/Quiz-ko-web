import { Avatar, AvatarFallback, AvatarImage, Input } from "@/components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { pathsDashboard } from "../../constants";
import { paths } from "@/constants";

export const SearchBarWithUser = () => {
  return (
    <div className="bg-white flex items-center gap-x-3 px-2 py-1 rounded-3xl">
      <div className="flex gap-x-1 items-center bg-gray-2 px-3 rounded-3xl">
        <Icon
          icon="iconamoon:search"
          className="text-purple-opacity text-3xl"
        />
        <Input
          placeholder="Search"
          className="border-none shadow-none p-0 focus-visible:ring-0  placeholder:text-purple-opacity"
        />
      </div>

      <Icon icon="solar:bell-bold" className="text-2xl text-garnet" />
      <Icon icon="tabler:moon-filled" className="text-2xl text-garnet" />

      <Link to={`${paths.dashboard}/${pathsDashboard.profile}`}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
};
