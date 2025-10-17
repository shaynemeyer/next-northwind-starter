'use server';

import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { employees } from '@/drizzle/schema';

export async function getAllEmployees() {
  try {
    const allEmployees = await db.select().from(employees);
    return { success: true, data: allEmployees };
  } catch (error) {
    console.error('Failed to fetch employees:', error);
    return { success: false, error: 'Failed to fetch employees' };
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
    console.error('Failed to fetch employee:', error);
    return { success: false, error: 'Failed to fetch employee' };
  }
}
