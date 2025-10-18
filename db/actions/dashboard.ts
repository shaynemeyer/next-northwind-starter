"use server";

import { db } from "@/db";
import {
  customers,
  orders,
  products,
  categories,
  orderDetails,
} from "@/drizzle/schema";
import { sql, eq, desc } from "drizzle-orm";

export async function getDashboardMetrics() {
  try {
    const [customerCount] = await db
      .select({ count: sql<number>`count(*)` })
      .from(customers);

    const [orderCount] = await db
      .select({ count: sql<number>`count(*)` })
      .from(orders);

    const [productCount] = await db
      .select({ count: sql<number>`count(*)` })
      .from(products);

    return {
      success: true,
      data: {
        totalCustomers: customerCount.count,
        totalOrders: orderCount.count,
        totalProducts: productCount.count,
      },
    };
  } catch (error) {
    console.error("Failed to fetch dashboard metrics:", error);
    return { success: false, error: "Failed to fetch metrics" };
  }
}

export async function getRecentOrders() {
  try {
    const recentOrders = await db
      .select({
        orderId: orders.orderId,
        orderDate: orders.orderDate,
        customerName: customers.customerName,
        shipCountry: customers.country,
      })
      .from(orders)
      .leftJoin(customers, eq(orders.customerId, customers.customerId))
      .orderBy(desc(orders.orderDate))
      .limit(10);

    return { success: true, data: recentOrders };
  } catch (error) {
    console.error("Failed to fetch recent orders:", error);
    return { success: false, error: "Failed to fetch recent orders" };
  }
}

export async function getRevenueByCategory() {
  try {
    const revenue = await db
      .select({
        category: categories.categoryName,
        revenue: sql<number>`sum(${products.price} * ${orderDetails.quantity})`,
      })
      .from(orderDetails)
      .leftJoin(products, eq(orderDetails.productId, products.productId))
      .leftJoin(categories, eq(products.categoryId, categories.categoryId))
      .groupBy(categories.categoryName)
      .orderBy(
        desc(sql`sum(${products.price} * ${orderDetails.quantity})`)
      );

    return {
      success: true,
      data: revenue.map((r) => ({
        category: r.category || "Unknown",
        revenue: Math.round(r.revenue * 100) / 100,
      })),
    };
  } catch (error) {
    console.error("Failed to fetch revenue by category:", error);
    return { success: false, error: "Failed to fetch revenue data" };
  }
}
