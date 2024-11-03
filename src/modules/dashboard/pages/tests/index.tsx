import { useState } from "react";
import { HeaderTests } from "./header-tests";
import { TestsDataTable } from "./table";
import { TLevel, TTest } from "@/types";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";
import { Icon } from "@iconify/react";
import { testsColumns } from "./columns";
import { TestForm } from "./test-form";
import { useGetTestByLevelId } from "../../../../hooks";

export const Tests = () => {
  const [orderBy, setOrderBy] = useState<string>("recent");
  const [levelSelected, setLevelSelected] = useState<TLevel>();
  const [testSelected, setTestSelected] = useState<TTest>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const { data: tests } = useGetTestByLevelId({ levelId: levelSelected?.id });



  return (
    <>
      <HeaderTests
        levelSelected={levelSelected}
        setLevelSelected={setLevelSelected}
        setOpenDialog={setOpenDialog}
      />
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
        <TestsDataTable
          columns={testsColumns({ setTestSelected })}
          data={tests ?? []}
        />
      </div>

      <Dialog open={openDialog || !!testSelected}>
        <DialogContent
          onClose={() => {
            setTestSelected(undefined);
            setOpenDialog(false);
          }}
          className="max-w-[870px] h-full max-h-[780px] flex flex-col"
        >
          <DialogHeader>
            <DialogTitle className="text-3xl font-gilroy-bold tracking-wide">
              {testSelected?.title}
            </DialogTitle>
          </DialogHeader>

          <TestForm test={testSelected} />
        </DialogContent>
      </Dialog>
    </>
  );
};
