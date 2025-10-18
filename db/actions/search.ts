"use server";

import { db } from "@/db";
// TODO: Import necessary schema tables
// import { customers, products, orders, categories } from '@/drizzle/schema'

// TODO: Import Drizzle helpers
// import { sql, or, like, eq } from 'drizzle-orm'

// TODO: Define the SearchResults type
// export type SearchResults = {
//   customers: Array<{
//     id: number
//     name: string
//     city: string | null
//     type: 'customer'
//   }>
//   products: Array<{
//     id: number
//     name: string
//     category: string | null
//     type: 'product'
//   }>
//   orders: Array<{
//     id: number
//     customerName: string | null
//     orderDate: string | null
//     type: 'order'
//   }>
// }

// ============================================================================
// Server Action: globalSearch(query: string)
// ============================================================================
// Purpose: Search across customers, products, and orders
//
// Requirements:
// 1. Return empty results if query is less than 2 characters
// 2. Search customers by: name, contact name, city
// 3. Search products by: product name
// 4. Search orders by: order ID (as text) and customer name
// 5. Limit each category to 5 results
// 6. Use case-insensitive search (SQL LIKE with % wildcards)
//
// Hints:
// - Pattern for LIKE: `%${query}%`
// - Use or() to combine multiple conditions
// - Use Promise.all() to run searches in parallel
// - For orders, you need to JOIN with customers table
// - Cast order ID to text for searching: sql`cast(${orders.orderId} as text)`
//
// Example search structure:
// const searchPattern = `%${query}%`
// const customers = await db
//   .select({ ... })
//   .from(customers)
//   .where(or(
//     like(customers.customerName, searchPattern),
//     like(customers.contactName, searchPattern),
//     like(customers.city, searchPattern)
//   ))
//   .limit(5)

// TODO: Remove this temporary type when SearchResults is properly implemented  
interface TempSearchResults {
  customers: { id: number; name: string }[];
  products: { id: number; name: string }[];
  orders: { id: number; customerName: string }[];
}

// TODO: Uncomment SearchResults type definition above and update return type
export async function globalSearch(query: string): Promise<TempSearchResults> {
  // TODO: Validate query length
  if (!query || query.trim().length < 2) {
    return {
      customers: [],
      products: [],
      orders: [],
    };
  }

  const searchPattern = `%${query}%`;

  try {
    // TODO: Implement search logic for all three entity types
    // Run searches in parallel with Promise.all()

    // TODO: Return results with type annotations
    return {
      customers: [], // Replace with actual results
      products: [], // Replace with actual results
      orders: [], // Replace with actual results
    };
  } catch (error) {
    console.error("Search error:", error);
    return {
      customers: [],
      products: [],
      orders: [],
    };
  }
}
