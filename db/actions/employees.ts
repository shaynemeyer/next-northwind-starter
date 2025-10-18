"use server";

import { db } from "@/db";
import { eq } from "drizzle-orm";
import { employees } from "@/drizzle/schema";

export async function getAllEmployees() {
  try {
    const allEmployees = await db.select().from(employees);
    return { success: true, data: allEmployees };
  } catch (error) {
    console.error("Failed to fetch employees:", error);
    return { success: false, error: "Failed to fetch employees" };
  }
}

export async function getEmployeeById(id: number) {
  try {
    const employee = await db
      .select()
      .from(employees)
      .where(eq(employees.employeeId, id))
      .limit(1);

    return { success: true, data: employee[0] || null };
  } catch (error) {
    console.error("Failed to fetch employee:", error);
    return { success: false, error: "Failed to fetch employee" };
  }
}

// TODO: Exercise 2 - Add a new server action: getEmployeeById(id: string)
//
// Requirements:
// 1. Accept an id parameter as a string
// 2. Validate and convert the id to a number
// 3. Fetch the employee by ID from the database
// 4. Fetch all orders for this employee (include customer names)
// 5. Return format: { success: boolean, data?: { employee, orders }, error?: string }
// 6. Handle these error cases:
//    - Invalid ID (not a number)
//    - Employee not found
//    - Database errors
//
// Hints:
// - Use parseInt() to convert string to number
// - Use isNaN() to check if the conversion worked
// - Use db.query.employees.findFirst() to get the employee
// - Use db.select().from(orders).leftJoin(customers, ...) for orders with customer names
// - Use eq() from drizzle-orm for WHERE clauses
//
// Example structure:
// export async function getEmployeeById(id: string) {
//   try {
//     // Your implementation here
//   } catch (error) {
//     console.error('Failed to fetch employee:', error)
//     return { success: false, error: 'Failed to fetch employee details' }
//   }
// }
