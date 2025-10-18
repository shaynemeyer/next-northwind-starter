"use server";

import { db } from "@/db";
import { customers, products, orders, categories } from "@/drizzle/schema";
import { sql, or, like, eq } from "drizzle-orm";

export type SearchResults = {
  customers: Array<{
    id: number;
    name: string | null;
    city: string | null;
    type: "customer";
  }>;
  products: Array<{
    id: number;
    name: string | null;
    category: string | null;
    type: "product";
  }>;
  orders: Array<{
    id: number;
    customerName: string | null;
    orderDate: string | null;
    type: "order";
  }>;
};

export async function globalSearch(query: string): Promise<SearchResults> {
  if (!query || query.trim().length < 2) {
    return {
      customers: [],
      products: [],
      orders: [],
    };
  }

  const searchPattern = `%${query}%`;

  try {
    const [customerResults, productResults, orderResults] = await Promise.all([
      // Search customers
      db
        .select({
          id: customers.customerId,
          name: customers.customerName,
          city: customers.city,
        })
        .from(customers)
        .where(
          or(
            like(customers.customerName, searchPattern),
            like(customers.contactName, searchPattern),
            like(customers.city, searchPattern)
          )
        )
        .limit(5),

      // Search products
      db
        .select({
          id: products.productId,
          name: products.productName,
          category: categories.categoryName,
        })
        .from(products)
        .leftJoin(categories, eq(products.categoryId, categories.categoryId))
        .where(like(products.productName, searchPattern))
        .limit(5),

      // Search orders
      db
        .select({
          id: orders.orderId,
          customerName: customers.customerName,
          orderDate: orders.orderDate,
        })
        .from(orders)
        .leftJoin(customers, eq(orders.customerId, customers.customerId))
        .where(
          or(
            like(sql`cast(${orders.orderId} as text)`, searchPattern),
            like(customers.customerName, searchPattern)
          )
        )
        .limit(5),
    ]);

    return {
      customers: customerResults.map((c) => ({
        ...c,
        type: "customer" as const,
      })),
      products: productResults.map((p) => ({ ...p, type: "product" as const })),
      orders: orderResults.map((o) => ({ ...o, type: "order" as const })),
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
