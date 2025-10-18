"use server";

import { db } from "@/db";
// TODO: Import necessary schema tables
// You'll need: customers, orders, products, categories, orderDetails
// import { customers, orders, products, categories, orderDetails } from '@/drizzle/schema'

// TODO: Import Drizzle helpers
// You'll need: sql, eq, desc
// import { sql, eq, desc } from 'drizzle-orm'

// TODO: Exercise 3 - Create three server actions for the dashboard

// ============================================================================
// Server Action 1: getDashboardMetrics()
// ============================================================================
// Purpose: Get counts of customers, orders, and products
//
// Return type:
// {
//   success: boolean
//   data?: {
//     totalCustomers: number
//     totalOrders: number
//     totalProducts: number
//   }
//   error?: string
// }
//
// Hints:
// - Use sql<number>`count(*)` to count records
// - Run all three count queries in parallel with Promise.all() for better performance
// - Example count query:
//   const [count] = await db.select({ count: sql<number>`count(*)` }).from(customers)
//
// export async function getDashboardMetrics() {
//   try {
//     // Your implementation here
//   } catch (error) {
//     console.error('Failed to fetch dashboard metrics:', error)
//     return { success: false, error: 'Failed to fetch metrics' }
//   }
// }

// ============================================================================
// Server Action 2: getRecentOrders()
// ============================================================================
// Purpose: Get the 10 most recent orders with customer names
//
// Return type:
// {
//   success: boolean
//   data?: Array<{
//     orderId: number | null
//     orderDate: string | null
//     customerName: string | null
//     shipCountry: string | null
//   }>
//   error?: string
// }
//
// Hints:
// - Use .leftJoin() to include customer names
// - Use .orderBy(desc(orders.orderDate)) to sort by date
// - Use .limit(10) to get only recent orders
//
// export async function getRecentOrders() {
//   try {
//     // Your implementation here
//   } catch (error) {
//     console.error('Failed to fetch recent orders:', error)
//     return { success: false, error: 'Failed to fetch recent orders' }
//   }
// }

// ============================================================================
// Server Action 3: getRevenueByCategory()
// ============================================================================
// Purpose: Calculate total revenue for each product category
//
// Return type:
// {
//   success: boolean
//   data?: Array<{
//     category: string
//     revenue: number
//   }>
//   error?: string
// }
//
// Hints:
// - You need to join THREE tables: orderDetails → products → categories
// - Revenue calculation: SUM(orderDetails.unitPrice * orderDetails.quantity)
// - Use sql helper for the SUM: sql<number>`sum(${orderDetails.unitPrice} * ${orderDetails.quantity})`
// - Use .groupBy(categories.categoryName)
// - Round revenue to 2 decimal places: Math.round(revenue * 100) / 100
//
// Example join structure:
// db.select({ ... })
//   .from(orderDetails)
//   .leftJoin(products, eq(orderDetails.productId, products.productId))
//   .leftJoin(categories, eq(products.categoryId, categories.categoryId))
//   .groupBy(categories.categoryName)
//
// export async function getRevenueByCategory() {
//   try {
//     // Your implementation here
//   } catch (error) {
//     console.error('Failed to fetch revenue by category:', error)
//     return { success: false, error: 'Failed to fetch revenue data' }
//   }
// }
