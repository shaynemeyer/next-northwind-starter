import { db } from "@/db";
import { employees } from "@/drizzle/schema";

async function getAllEmployees() {
  try {
    const allEmployees = await db.select().from(employees);

    console.log("All Employees:");
    console.log("==============\n");

    allEmployees.forEach((employee) => {
      console.log(
        `${employee.employeeId}: ${employee.firstName} ${employee.lastName}`
      );
      console.log(`   Birth Date: ${employee.birthDate || "N/A"}`);
      console.log(`   Notes: ${employee.notes || "N/A"}`);
      console.log("---");
    });

    console.log(`\nTotal employees: ${allEmployees.length}`);
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
}

getAllEmployees();
