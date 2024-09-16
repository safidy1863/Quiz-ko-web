import { Menu } from "./menu";
import { SearchBarWithUser } from "./search-bar-with-user";

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="">
        <h1 className="font-gilroy-bold text-5xl">Dashboard</h1>
        <Menu />
      </div>
      <SearchBarWithUser />
    </header>
  );
};
