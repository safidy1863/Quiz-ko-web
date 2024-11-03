import { Badge, Button } from "@/components";
import { TTest, TTestWithQuestionNumber } from "@/types";
import { Icon } from "@iconify/react";
import { ColumnDef } from "@tanstack/react-table";

type testsColumnsParams = {
  setTestSelected: (value: TTest | undefined) => void;
};

export const testsColumns = ({
  setTestSelected,
}: testsColumnsParams): ColumnDef<TTestWithQuestionNumber>[] => [
  {
    accessorKey: "test.title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex  px-0 gap-x-3"
        >
          <span>Test Name</span>
          <Icon
            icon={
              column.getIsSorted() === "asc"
                ? "ph:arrow-up-light"
                : "ph:arrow-down-light"
            }
            className="text-lg"
          />
        </Button>
      );
    },
    cell: ({ getValue }) => {
      return <span className="font-gilroy-bold">{getValue() as string}</span>;
    },
  },
  {
    accessorKey: "test.duration",
    header: "Duration",
    cell: ({ getValue }) => {
      const duration = getValue() as string;

      return (
        <>
          {duration ? (
            <Badge
              variant="outline"
              className="bg-white  rounded-xl font-gilroy-medium text-xs gap-x-2"
            >
              {duration}
              <Button className="p-0 h-4 w-4 rounded-full bg-gray-5 text-gray-1">
                <Icon icon="material-symbols:close" className="text-xs" />
              </Button>
            </Badge>
          ) : (
            <Button className="p-0 h-auto text-black bg-transparent gap-x-1">
              <Icon
                icon="material-symbols:more-time-rounded"
                className="text-xl"
              />
              <span className="text-xs">Add timer</span>
            </Button>
          )}
        </>
      );
    },
  },
  {
    accessorKey: "assign",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex  px-0 gap-x-3"
        >
          <span>Assign</span>
          <Icon
            icon={
              column.getIsSorted() === "asc"
                ? "ph:arrow-up-light"
                : "ph:arrow-down-light"
            }
            className="text-lg"
          />
        </Button>
      );
    },
    cell: ({ getValue }) => {
      const assigns = getValue() as string[];

      return (
        <>
          {assigns ? (
            <div className="flex gap-x-1 items-center">
              {assigns.map((assign, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-white font-gilroy-medium rounded-xl text-xs gap-x-2"
                >
                  <span className="">Level {assign}</span>
                  <Button className="p-0 h-4 w-4 rounded-full bg-gray-5 text-gray-1">
                    <Icon icon="material-symbols:close" className="text-xs" />
                  </Button>
                </Badge>
              ))}

              <Button className="p-0 h-6 w-6 rounded-full bg-gray-5 text-gray-1">
                <Icon icon="ic:baseline-add" className="text-base" />
              </Button>
            </div>
          ) : (
            <Button className="p-0 h-auto text-black bg-transparent gap-x-1">
              <Icon icon="fluent:people-team-24-regular" className="text-xl" />
              <span className="text-xs">Assign to</span>
            </Button>
          )}
        </>
      );
    },
  },
  {
    accessorKey: "question",
    header: "Question",
    cell: ({ getValue, row }) => {
      const question = getValue() as number;
      const testWithQuestionNumber = row.original;

      return (
        <>
          {question ? (
            <span className="font-gilroy-medium">{question}</span>
          ) : (
            <Button
              onClick={() => setTestSelected(testWithQuestionNumber.test)}
              className="p-0 h-auto text-black bg-transparent gap-x-1"
            >
              <Icon
                icon="fluent:chat-bubbles-question-16-regular"
                className="text-xl"
              />
              <span className="text-xs">Add Questions</span>
            </Button>
          )}
        </>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const test = row.original;

      return (
        <div className="flex gap-x-3 text-2xl">
          <Icon
            icon="mdi:show"
            className="text-purple text-opacity-25 hover:text-opacity-100 cursor-pointer"
          />
          <Icon
            icon="lets-icons:edit-duotone"
            className="text-purple text-opacity-25 hover:text-opacity-100 cursor-pointer"
            // onClick={() => setTestSelected(test)}
          />
          <Icon
            icon="fluent:delete-48-filled"
            className="text-red text-opacity-25 hover:text-opacity-100 cursor-pointer"
          />
        </div>
      );
    },
  },
];
