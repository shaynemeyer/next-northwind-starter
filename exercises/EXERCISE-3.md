# Exercise 3: Create Dashboard with Statistics

**Difficulty:** ⭐⭐⭐ Advanced  
**Estimated Time:** 45-60 minutes  
**Branch:** `exercise-3-dashboard`

## Objective

Build a comprehensive dashboard homepage with key metrics, a revenue chart, and recent orders table.

## Background

Dashboards are a common requirement in business applications. This exercise combines multiple skills:
- Complex database queries with aggregations
- Multiple parallel server actions
- Data visualization with charts
- Layout composition with multiple components

## Requirements

### Part 1: Server Actions

Create three server actions in `db/actions/dashboard.ts`:

#### 1. `getDashboardMetrics()`
Returns:
```typescript
{
  success: boolean
  data?: {
    totalCustomers: number
    totalOrders: number
    totalProducts: number
  }
  error?: string
}
```

#### 2. `getRecentOrders()`
Returns the 10 most recent orders with customer names:
```typescript
{
  success: boolean
  data?: Array<{
    orderId: number
    orderDate: string
    customerName: string
    shipCountry: string
  }>
  error?: string
}
```

#### 3. `getRevenueByCategory()`
Calculates total revenue for each product category:
```typescript
{
  success: boolean
  data?: Array<{
    category: string
    revenue: number
  }>
  error?: string
}
```

**Revenue Calculation:**

```
Revenue = SUM(orderDetails.unitPrice * orderDetails.quantity)
Grouped by category
```

### Part 2: Dashboard Page

Create/update `app/page.tsx`:

**Layout:**

```
┌─────────────────────────────────────┐
│  Dashboard Title                    │
├─────────────────────────────────────┤
│  [Customers] [Orders]  [Products]   │  ← Metric Cards
├─────────────────────────────────────┤
│         Revenue Chart               │
├─────────────────────────────────────┤
│       Recent Orders Table           │
└─────────────────────────────────────┘
```

**Requirements:**
- ✅ Three metric cards showing counts
- ✅ Icons for each metric (Users, ShoppingCart, Package from lucide-react)
- ✅ Revenue by category bar chart
- ✅ Recent orders table with search
- ✅ Responsive grid layout
- ✅ Loading states handled
- ✅ Error states handled

### Part 3: Revenue Chart Component

Create `components/revenue-chart.tsx`:

**Requirements:**
- ✅ Use Recharts BarChart
- ✅ Wrap in shadcn/ui Card
- ✅ Format Y-axis as currency
- ✅ Show tooltips with formatted values
- ✅ Proper TypeScript types
- ✅ Must be a client component ("use client")

### Part 4: Recent Orders Columns

Create `app/columns.tsx` (at app root level):

**Requirements:**
- ✅ Columns for: Order ID, Customer, Date, Ship Country
- ✅ Format dates properly
- ✅ Type-safe column definitions

## Getting Started

1. **Check out the branch:**
```bash
   git checkout exercise-3-dashboard
```

2. **Install Recharts (if not already):**
```bash
   npm install recharts
```

3. **Review starter files:**
   - `app/page.tsx` - Dashboard page (TODO comments)
   - `db/actions/dashboard.ts` - Server actions (empty)
   - `components/revenue-chart.tsx` - Chart component (starter code)
   - `app/columns.tsx` - Columns for recent orders (empty)

4. **Understand the data:**
   - Study the database schema
   - Understand table relationships
   - Plan your SQL aggregations

## File Structure

```
app/
├── page.tsx                    ← Dashboard page
└── columns.tsx                 ← Recent orders columns
components/
└── revenue-chart.tsx           ← Bar chart component
db/
└── actions/
└── dashboard.ts            ← All dashboard queries
```

## Helpful Resources

- [Drizzle Aggregations](https://orm.drizzle.team/docs/select#aggregations)
- [Recharts Bar Chart](https://recharts.org/en-US/api/BarChart)
- [shadcn/ui Chart](https://ui.shadcn.com/docs/components/chart)
- [Lucide Icons](https://lucide.dev/)

## Step-by-Step Guide

### Step 1: Create Metrics Server Action (10 min)
```typescript
// db/actions/dashboard.ts

export async function getDashboardMetrics() {
  try {
    // Count customers
    const [customerCount] = await db
      .select({ count: sql<number>`count(*)` })
      .from(customers)
    
    // Similar for orders and products
    
    return { success: true, data: { ... } }
  } catch (error) {
    // Error handling
  }
}
```

**Tips:**
- Use `sql` helper from Drizzle for COUNT
- Run queries in parallel with `Promise.all` for better performance
- Handle errors gracefully

### Step 2: Create Recent Orders Action (10 min)
```typescript
export async function getRecentOrders() {
  // Join orders with customers
  // Order by date descending
  // Limit to 10
}
```

**Tips:**
- Use `.leftJoin()` for customer names
- Use `.orderBy(desc(...))` for sorting
- Use `.limit(10)` to get recent ones

### Step 3: Create Revenue Action (15 min)

This is the most complex query:
```typescript
export async function getRevenueByCategory() {
  // Join: orderDetails → products → categories
  // Aggregate: SUM(price * quantity)
  // Group by: category name
}
```

**Tips:**
- You need to join 3 tables
- Use `sql` helper for the SUM calculation
- Use `.groupBy()` for aggregation
- Round the revenue to 2 decimal places

### Step 4: Build Dashboard Page (15 min)
```typescript
// app/page.tsx

export default async function DashboardPage() {
  // Fetch all data in parallel
  const [metrics, orders, revenue] = await Promise.all([...])
  
  return (
    <div>
      {/* Metric cards */}
      {/* Revenue chart */}
      {/* Recent orders table */}
    </div>
  )
}
```

**Layout Tips:**
- Use `grid grid-cols-1 md:grid-cols-3` for metric cards
- Use `gap-4` for spacing
- Keep consistent padding: `p-4`

### Step 5: Create Revenue Chart (10 min)
```typescript
// components/revenue-chart.tsx
"use client"

export function RevenueChart({ data }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            {/* Configure chart */}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

## Testing Your Solution

1. **Start dev server:**
```bash
   npm run dev
```

2. **Navigate to dashboard:**
   - Go to http://localhost:3000
   - Should see all sections loading

3. **Verify metrics:**
   - Numbers should match database counts
   - Use Drizzle Studio to verify: `npx drizzle-kit studio`

4. **Check chart:**
   - Should show bars for each category
   - Hover should show tooltip with exact values
   - Values should be formatted as currency

5. **Check recent orders:**
   - Should show 10 orders
   - Most recent first
   - Customer names should display
   - Search should work

6. **Test responsiveness:**
   - Resize browser window
   - Cards should stack on mobile
   - Chart should adapt

## Claude Code Prompts to Try

### Prompt 1: Create all server actions
```bash
claude-code "Create three server actions in db/actions/dashboard.ts:
1. getDashboardMetrics() - return counts of customers, orders, products
2. getRecentOrders() - return 10 most recent orders with customer names
3. getRevenueByCategory() - calculate total revenue by category from order details

Include proper error handling and TypeScript types."
```

### Prompt 2: Build dashboard page
```bash
claude-code "Create a dashboard page at app/page.tsx with:
- Three metric cards showing counts with icons
- Revenue chart by category
- Recent orders table
Fetch all data in parallel and handle loading/error states."
```

### Prompt 3: Create chart component
```bash
claude-code "Create a revenue chart component at components/revenue-chart.tsx 
using Recharts BarChart. Show revenue by category with formatted currency 
values. Wrap in shadcn Card component."
```

### Prompt 4: Debug revenue calculation
```bash
claude-code "Debug the revenue calculation in getRevenueByCategory(). 
It should SUM(unitPrice * quantity) from orderDetails, grouped by category name."
```

## Success Criteria

- ✅ All three metrics display correctly
- ✅ Revenue chart shows data for all categories
- ✅ Chart is interactive (tooltips work)
- ✅ Recent orders table displays 10 orders
- ✅ Dates are formatted nicely
- ✅ No console errors
- ✅ Responsive layout works
- ✅ Performance is good (parallel queries)

## Bonus Challenges

1. **Add date range filter:** Let users select date range for revenue
2. **Add trend indicators:** Show if metrics are up/down vs last period
3. **Add more charts:** Pie chart for category distribution
4. **Add export:** Download dashboard data as CSV
5. **Add refresh button:** Manually refresh dashboard data
6. **Top customers widget:** Show top 5 customers by revenue

## Common Issues & Solutions

### Issue: Revenue values are wrong
**Solution:** Check your JOIN logic and SUM calculation:
```typescript
sql`sum(${orderDetails.unitPrice} * ${orderDetails.quantity})`
```

### Issue: Chart not rendering
**Solution:** 
- Did you add `"use client"` to chart component?
- Is recharts installed?
- Check browser console for errors

### Issue: Dates showing as ISO strings
**Solution:** Format them in your columns:
```typescript
cell: ({ row }) => new Date(row.getValue("date")).toLocaleDateString()
```

### Issue: Metric cards not in a row
**Solution:** Use grid layout:
```typescript
<div className="grid gap-4 md:grid-cols-3">
```

## Database Query Help

### Counting Records
```typescript
const [count] = await db
  .select({ count: sql<number>`count(*)` })
  .from(table)
```

### Multiple Joins
```typescript
await db
  .select({ ... })
  .from(orderDetails)
  .leftJoin(products, eq(orderDetails.productId, products.productId))
  .leftJoin(categories, eq(products.categoryId, categories.categoryId))
```

### Aggregation with GROUP BY
```typescript
await db
  .select({
    category: categories.categoryName,
    total: sql<number>`sum(${orderDetails.unitPrice} * ${orderDetails.quantity})`
  })
  .from(orderDetails)
  // ... joins ...
  .groupBy(categories.categoryName)
```

## Next Steps

After completing:
1. Take a screenshot of your dashboard!
2. Commit your work
3. Try the bonus challenges
4. Move on to Exercise 4 (if time permits)
5. Compare with solution branch

## Questions?

This is a complex exercise - don't hesitate to ask for help!

Good luck! 🚀

