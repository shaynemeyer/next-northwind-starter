"use client";

import { ColumnDef } from "@tanstack/react-table";

export type RecentOrder = {
  orderId: number | null;
  orderDate: string | null;
  customerName: string | null;
  shipCountry: string | null;
};

export const columns: ColumnDef<RecentOrder>[] = [
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
    accessorKey: "shipCountry",
    header: "Ship Country",
  },
];
