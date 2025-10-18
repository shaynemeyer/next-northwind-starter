"use client";

import { ColumnDef } from "@tanstack/react-table";

export type EmployeeOrder = {
  orderId: number | null;
  orderDate: string | null;
  shippedDate: string | null;
  shipCountry: string | null;
  customerName: string | null;
};

export const columns: ColumnDef<EmployeeOrder>[] = [
  {
    accessorKey: "orderId",
    header: "Order ID",
  },
  {
    accessorKey: "customerName",
    header: "Customer",
  },
  {
    accessorKey: "orderDate",
    header: "Order Date",
    cell: ({ row }) => {
      const date = row.getValue("orderDate") as string;
      return date ? new Date(date).toLocaleDateString() : "-";
    },
  },
  {
    accessorKey: "shippedDate",
    header: "Shipped Date",
    cell: ({ row }) => {
      const date = row.getValue("shippedDate") as string;
      return date ? new Date(date).toLocaleDateString() : "Not shipped";
    },
  },
  {
    accessorKey: "shipCountry",
    header: "Ship Country",
  },
];
