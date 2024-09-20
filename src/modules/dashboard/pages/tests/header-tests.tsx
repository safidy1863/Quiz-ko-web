import { levels } from "@/api";
import { Button, Input } from "@/components";
import { Icon } from "@iconify/react";
import { useState } from "react";

export const HeaderTests = () => {
  const [levelSelected, setLevelSelected] = useState<string>("");

  return (
    <>
      <div className="flex justify-between">
        <h2 className="font-gilroy-bold text-3xl">Overview</h2>

        <div className="flex gap-x-3">
          <div className="flex gap-x-1 items-center bg-white px-3 rounded-3xl">
            <Icon icon="iconamoon:search" className="text-gray-3 text-xl" />
            <Input
              placeholder="Nom, titre ..."
              className="border-none shadow-none p-0 focus-visible:ring-0  placeholder:text-gray-3 placeholder:text-opacity-75 placeholder:font-gilroy-medium"
            />
          </div>

          <Button className="bg-purple text-white font-gilroy-medium">
            <Icon icon="ic:outline-plus" />
            <span>Add test</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {["", ...levels].map((level) => (
          <Button
            key={level}
            onClick={() => setLevelSelected(level)}
            className={`flex-col items-start h-auto gap-1 bg-white text-black rounded-2xl w-40  ${
              levelSelected === level && "border-2 border-purple"
            }`}
          >
            <span className="font-gilroy-medium text-xs">{level === "" ? "Total test" : `Level ${level}`}</span>
            <span className="font-gilroy-bold text-2xl">05</span>
          </Button>
        ))}
      </div>
    </>
  );
};
