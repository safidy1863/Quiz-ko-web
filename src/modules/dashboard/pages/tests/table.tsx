import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Badge,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";
import { useState } from "react";
import { TTest } from "@/types";
import { Icon } from "@iconify/react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const testsColumns: ColumnDef<TTest>[] = [
  {
    accessorKey: "name",
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
    accessorKey: "duration",
    header: "Duration",
    cell: ({ getValue }) => {
      const duration = getValue() as string;

      return (
        <>
          {!!duration ? (
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
          {!!assigns ? (
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
    cell: ({ getValue }) => {
      const question = getValue() as number;

      return (
        <>
          {!!question ? (
            <span className="font-gilroy-medium">{question}</span>
          ) : (
            <Button className="p-0 h-auto text-black bg-transparent gap-x-1">
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
    cell: () => {
      // const student = row.original;

      return (
        <div className="flex gap-x-3 text-2xl">
          <Icon
            icon="mdi:show"
            className="text-purple text-opacity-25 hover:text-opacity-100 cursor-pointer"
          />
          <Icon
            icon="lets-icons:edit-duotone"
            className="text-purple text-opacity-25 hover:text-opacity-100 cursor-pointer"
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

export function TestsDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className="rounded-md">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="text-gray-4 font-gilroy-bold"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className=" h-16"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
