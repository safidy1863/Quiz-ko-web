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
import { TStudent } from "@/types";
import { Icon } from "@iconify/react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const columns: ColumnDef<TStudent>[] = [
  {
    accessorKey: "number",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex  px-0 gap-x-3"
        >
          <span>N°</span>
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
      return (
        <span className="text-purple-opacity-2 text-opacity-65 font-gilroy-medium">
          {getValue() as string}
        </span>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex  px-0 gap-x-3"
        >
          <span>Name</span>
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
      return (
        <span className="text-black font-gilroy-bold">
          {getValue() as string}
        </span>
      );
    },
  },
  {
    accessorKey: "gender",
    header: "Genre",
    cell: ({ getValue }) => {
      return (
        <span className="text-purple-opacity-2 text-opacity-65 font-gilroy-medium">
          {getValue() as string}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      return (
        <Badge className="bg-green bg-opacity-10 text-green px-5 shadow-none hover:bg-green hover:bg-opacity-20">
          {getValue() as string}
        </Badge>
      );
    },
  },
  {
    accessorKey: "totalScore",
    header: "Total Score",
    cell: ({ getValue }) => {
      return (
        <span className="text-black font-gilroy-medium">
          {getValue() as string}
        </span>
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

export function DataTable<TData, TValue>({
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
