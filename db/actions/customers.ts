'use server';

import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { customers } from '@/drizzle/schema';

export async function getAllCustomers() {
  try {
    const allCustomers = await db.select().from(customers);
    return { success: true, data: allCustomers };
  } catch (error) {
    console.error('Failed to fetch customers:', error);
    return { success: false, error: 'Failed to fetch customers' };
  }
}

export async function getCustomerById(id: number) {
  try {
    const customer = await db
      .select()
      .from(customers)
      .where(eq(customers.customerId, id))
      .limit(1);

    return { success: true, data: customer[0] || null };
  } catch (error) {
    console.error('Failed to fetch customer:', error);
    return { success: false, error: 'Failed to fetch customer' };
  }
}
