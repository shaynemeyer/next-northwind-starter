import { db } from "./db/drizzle";
import { employees } from "./drizzle/schema";

async function getAllEmployees() {
  try {
    const allEmployees = await db.select().from(employees);

    console.log("All Employees:");
    console.log("==============\n");

    allEmployees.forEach((employee) => {
      console.log(
        `${employee.employeeId}: ${employee.firstName} ${employee.lastName}`
      );
      console.log(`   Title: ${employee.title || "N/A"}`);
      console.log(`   City: ${employee.city || "N/A"}`);
      console.log(`   Phone: ${employee.homePhone || "N/A"}`);
      console.log("---");
    });

    console.log(`\nTotal employees: ${allEmployees.length}`);
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
}

getAllEmployees();
