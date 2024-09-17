import { useParams } from "react-router-dom";
import { LEVEL_DYNAMIC_PATH } from "../../constants";
import { HeaderStudents } from "./header-students";
import { columns, DataTable } from "./table";
import { useEffect, useState } from "react";
import { getAllStudents } from "@/api";
import { TStudent } from "@/types";
import { graduation } from "@/assets";
import { Button } from "@/components";
import { Icon } from "@iconify/react";

export const Students = () => {
  const { level } = useParams<{ [LEVEL_DYNAMIC_PATH]: string }>();
  const [students, setStudents] = useState<TStudent[]>([]);

  const allStudents = async () => {
    await getAllStudents().then((res) => setStudents(res));
  };

  useEffect(() => {
    allStudents();
  }, []);

  console.log(level);

  return (
    <div className="flex-1 flex flex-col h-full">
      <HeaderStudents />
      <div className="mt-10 flex-1 flex flex-col">
        {students.length === 0 ? (
          <div className="h-full flex-1 flex  flex-col gap-y-5 items-center justify-center">
            <img
              src={graduation}
              alt="No students available"
              className="h-auto -mt-32"
            />
            <span className="text-purple-opacity-2 text-opacity-75 font-gilroy-bold">
              No students available
            </span>
            <Button className="bg-purple text-white font-gilroy-medium">
              <Icon icon="ic:outline-plus" />
              <span>Add student</span>
            </Button>
          </div>
        ) : (
          <DataTable columns={columns} data={students} />
        )}
      </div>
    </div>
  );
};
