"use client";

import { ColumnDef } from "@tanstack/react-table";

export type EmployeeOrder = {
  orderId: number | null
  orderDate: string | null
  customerName: string | null
}

// TODO: Create column definitions for the orders table
// Suggested columns:
// 1. Order ID
// 2. Customer Name
// 3. Order Date (formatted nicely)
// 4. Shipped Date (formatted, or show "Not shipped" if null)
// 5. Ship Country
//
// Hints:
// - Use accessorKey to specify which field to display
// - Use cell function to format dates: ({ row }) => { ... }
// - Format dates with: new Date(date).toLocaleDateString()
//
// Example column:
// {
//   accessorKey: "orderId",
//   header: "Order ID",
// },

export const columns: ColumnDef<EmployeeOrder>[] = [
  {
    accessorKey: "orderId",
    header: "Order ID",
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  {
    accessorKey: "orderDate",
    header: "Order Date",
    cell: ({ row }) => {
      const date = row.getValue("orderDate") as string
      return date ? new Date(date).toLocaleDateString() : "N/A"
    },
  },
];

// TODO: Exercise 2 - Add an "Actions" column with a "View Details" link
//
// Add this column to the existing columns array:
// {
//   id: "actions",
//   header: "Actions",
//   cell: ({ row }) => {
//     const employee = row.original
//     return (
//       // TODO: Add a Link component that navigates to /employees/{employeeId}
//       // Style it appropriately (text-blue-600, hover:underline, etc.)
//     )
//   },
// }
