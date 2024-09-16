import { useParams } from "react-router-dom";
import { LEVEL_DYNAMIC_PATH } from "../../constants";
import { HeaderStudents } from "./header-students";
import { columns, DataTable, Payment } from "./table";
import { useEffect, useState } from "react";
import { getAllStudents } from "@/api";

export const Students = () => {
  const { level } = useParams<{ [LEVEL_DYNAMIC_PATH]: string }>();
  const [students, setStudents] = useState<Payment[]>([]);

  const allStudents = async () => {
    await getAllStudents().then((res) => setStudents(res));
  };

  useEffect(() => {
    allStudents();
  }, []);

  console.log(level);
  

  return (
    <div>
      <HeaderStudents />
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={students} />
      </div>
    </div>
  );
};
