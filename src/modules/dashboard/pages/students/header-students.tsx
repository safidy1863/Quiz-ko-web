import { categories } from "@/api";
import { Button, Input } from "@/components";
import { Icon } from "@iconify/react";
import { useState } from "react";

export const HeaderStudents = () => {
  const [categorySelected, setCategorySelected] = useState<string>(
    categories[0]
  );

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-gilroy-bold text-3xl">Niveau M1</h2>

        <div className="flex gap-x-3">
          <div className="flex gap-x-1 items-center bg-white px-3 rounded-3xl">
            <Icon icon="iconamoon:search" className="text-gray-3 text-xl" />
            <Input
              placeholder="Nom, titre ..."
              className="border-none shadow-none p-0 focus-visible:ring-0  placeholder:text-gray-3 placeholder:text-opacity-75 placeholder:font-gilroy-medium"
            />
          </div>

          <Button className="bg-purple text-white">
            <Icon icon="ic:outline-plus" />
            <span>Add student</span>
          </Button>
        </div>
      </div>

      <div className="flex justify-between mt-3">
        <div className="flex gap-x-3">
          {categories.map((category, index) => (
            <Button
              key={index}
              className={` text-purple-opacity-2 text-opacity-70 bg-white gap-x-2 ${
                category === categorySelected &&
                "bg-purple text-white text-opacity-100"
              }`}
              onClick={() => setCategorySelected(category)}
            >
              <span className="font-gilroy-bold">{category}</span>
              <div className="h-5 w-5 rounded-full bg-white text-purple">
                50
              </div>
            </Button>
          ))}

          <Button className="bg-white text-purple-opacity-2 text-opacity-70">
            <Icon icon="ic:outline-plus" />
            <span>Add Category</span>
          </Button>
        </div>

        <Button className="text-2xl aspect-square p-0 bg-purple text-white bg-opacity-50">
          <Icon icon="hugeicons:filter-horizontal" />
        </Button>
      </div>
    </div>
  );
};
