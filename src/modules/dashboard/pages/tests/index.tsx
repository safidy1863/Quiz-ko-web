import { useEffect, useState } from "react";
import { HeaderTests } from "./header-tests";
import { testsColumns, TestsDataTable } from "./table";
import { TTest } from "@/types";
import { getAllTests } from "@/api";
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";
import { Icon } from "@iconify/react";

export const Tests = () => {
  const [orderBy, setOrderBy] = useState<string>("recent");
  const [tests, setTests] = useState<TTest[]>([]);

  const allStudents = async () => {
    await getAllTests().then((res) => setTests(res));
  };

  useEffect(() => {
    allStudents();
  }, []);

  return (
    <>
      <HeaderTests />
      <div className="mt-5 bg-white p-5 rounded-md">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h2 className="font-gilroy-bold text-xl">Total tests</h2>
            <p>Manage your tests</p>
          </div>

          <div className="flex gap-x-3 items-center">
            <Select
              value={orderBy}
              onValueChange={(value) => setOrderBy(value)}
            >
              <SelectTrigger className="w-40 border-none bg-gray-2 text-purple focus:ring-0">
                <SelectValue placeholder="Order by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Récents</SelectItem>
                <SelectItem value="date">Date</SelectItem>
              </SelectContent>
            </Select>

            <Button className="text-2xl aspect-square p-0 bg-purple text-white bg-opacity-50">
              <Icon icon="hugeicons:filter-horizontal" />
            </Button>
          </div>
        </div>
        <TestsDataTable columns={testsColumns} data={tests} />
      </div>
    </>
  );
};
