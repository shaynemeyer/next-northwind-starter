import { eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { employees, orders, customers } from "@/drizzle/schema";

export async function getAllEmployees() {
  try {
    const allEmployees = await db.select().from(employees);
    return { success: true, data: allEmployees };
  } catch (error) {
    console.error("Failed to fetch employees:", error);
    return { success: false, error: "Failed to fetch employees" };
  }
}

export async function getEmployeeById(id: string) {
  try {
    const employeeId = parseInt(id);

    if (isNaN(employeeId)) {
      return { success: false, error: "Invalid employee ID" };
    }

    // Fetch employee
    const employee = await db.query.employees.findFirst({
      where: eq(employees.employeeId, employeeId),
    });

    if (!employee) {
      return { success: false, error: "Employee not found" };
    }

    // Fetch employee's orders with customer info
    const employeeOrders = await db
      .select({
        orderId: orders.orderId,
        orderDate: orders.orderDate,
        shippedDate: sql<string | null>`NULL`.as("shippedDate"),
        shipCountry: sql<string | null>`NULL`.as("shipCountry"),
        customerName: customers.customerName,
      })
      .from(orders)
      .leftJoin(customers, eq(orders.customerId, customers.customerId))
      .where(eq(orders.employeeId, employeeId))
      .orderBy(orders.orderDate);

    return {
      success: true,
      data: {
        employee,
        orders: employeeOrders,
      },
    };
  } catch (error) {
    console.error("Failed to fetch employee:", error);
    return { success: false, error: "Failed to fetch employee details" };
  }
}
