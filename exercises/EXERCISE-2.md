# Exercise 2: Create Employee Details Page

**Difficulty:** ⭐⭐ Intermediate  
**Estimated Time:** 30-40 minutes  
**Branch:** `exercise-2-employee-details`

## Objective

Create a dynamic route that displays detailed information about a specific employee, including a list of all orders they've handled.

## Background

In Next.js, you can create dynamic routes using folder names with square brackets (e.g., `[id]`). This exercise will help you practice:
- Creating dynamic routes
- Writing server actions with Drizzle ORM
- Using relational queries
- Handling errors and edge cases

## Requirements

### Part 1: Server Action

Create a new server action in `db/actions/employees.ts`:

**Function:** `getEmployeeById(id: string)`

Requirements:
- ✅ Accept an ID as a string parameter
- ✅ Convert and validate the ID (must be a valid number)
- ✅ Fetch the employee from the database
- ✅ Fetch all orders for this employee (with customer names)
- ✅ Return format: `{ success: boolean, data?, error? }`
- ✅ Handle these cases:
  - Invalid ID (not a number)
  - Employee not found
  - Database errors

### Part 2: Order Columns

Create `app/employees/[id]/columns.tsx`:

**Requirements:**
- ✅ Define TypeScript type for employee orders
- ✅ Create column definitions for TanStack Table
- ✅ Include these columns:
  - Order ID
  - Customer Name
  - Order Date (formatted)
  - Shipped Date (formatted, or "Not shipped")
  - Ship Country
- ✅ Format dates as readable strings

### Part 3: Details Page

Create `app/employees/[id]/page.tsx`:

**Requirements:**
- ✅ Fetch employee and orders using your server action
- ✅ Handle not found case (use Next.js `notFound()`)
- ✅ Display employee information in a Card:
  - Employee name as card title
  - Title/position
  - City and Country
  - Hire date (formatted)
- ✅ Display orders in a DataTable below
- ✅ Add "Back to Employees" button/link
- ✅ Use shadcn/ui components for consistent styling

### Part 4: Add Navigation Link

Update `app/employees/columns.tsx`:

**Requirements:**
- ✅ Add a new "Actions" column
- ✅ Include a "View Details" link that navigates to `/employees/{id}`
- ✅ Style it appropriately

## Getting Started

1. **Check out the exercise branch:**
```bash
   git checkout exercise-2-employee-details
```

2. **Review the starter files:**
   - `app/employees/[id]/page.tsx` - Main page component (TODO comments)
   - `app/employees/[id]/columns.tsx` - Column definitions (empty)
   - `db/actions/employees.ts` - Server actions (add new function)

3. **Understand the database structure:**
   - Look at `drizzle/schema.ts` to see employee and order tables
   - Check `drizzle/relations.ts` to understand relationships

## File Structure

After completion, you should have:

```
app/
└── employees/
├── [id]/
│   ├── page.tsx          ← Employee details page
│   ├── columns.tsx       ← Order table columns
│   └── not-found.tsx     ← Custom 404 page (bonus)
├── page.tsx
└── columns.tsx           ← Add "View Details" link here
db/
└── actions/
└── employees.ts          ← Add getEmployeeById here
```

## Helpful Resources

- [Next.js Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [Drizzle Relational Queries](https://orm.drizzle.team/docs/rq)
- [shadcn/ui Card](https://ui.shadcn.com/docs/components/card)
- Reference: `app/customers/page.tsx` (similar pattern)

## Step-by-Step Guide

### Step 1: Create the Server Action (10 min)
```typescript
// In db/actions/employees.ts

export async function getEmployeeById(id: string) {
  try {
    // 1. Validate and parse the ID
    // 2. Query employee from database
    // 3. Query orders with customer names
    // 4. Return success with data
  } catch (error) {
    // Handle errors
  }
}
```

**Tips:**
- Use `parseInt()` to convert string to number
- Use `isNaN()` to check if valid number
- Use `.leftJoin()` to include customer names in orders
- Use Drizzle's `eq()` for WHERE clauses

### Step 2: Define Order Columns (5 min)
```typescript
// In app/employees/[id]/columns.tsx

export type EmployeeOrder = {
  // Define the shape of each order
}

export const columns: ColumnDef<EmployeeOrder>[] = [
  // Define your columns
]
```

**Tips:**
- Look at `app/customers/columns.tsx` for patterns
- Use `cell` function to format dates
- Make types match your server action return data

### Step 3: Build the Details Page (15 min)
```typescript
// In app/employees/[id]/page.tsx

export default async function EmployeeDetailsPage({ params }) {
  // 1. Call server action
  // 2. Handle not found
  // 3. Render employee card
  // 4. Render orders table
}
```

**Tips:**
- Import `notFound` from 'next/navigation'
- Use `<Link href="/employees">` for back button
- DataTable component is already available
- Use `<dl>` (definition list) for employee details

### Step 4: Add Navigation Link (5 min)

In the employees table, add a link to view details.

## Testing Your Solution

1. **Start the dev server:**
```bash
   npm run dev
```

2. **Test the happy path:**
   - Go to http://localhost:3000/employees
   - Click "View Details" on any employee
   - Should see employee information
   - Should see their orders in a table
   - Click "Back to Employees"

3. **Test error cases:**
   - Try invalid ID: http://localhost:3000/employees/abc
   - Try non-existent ID: http://localhost:3000/employees/99999
   - Should show appropriate error handling

4. **Check for:**
   - ✅ No console errors
   - ✅ Dates are formatted properly
   - ✅ All data displays correctly
   - ✅ Navigation works smoothly
   - ✅ Responsive on mobile

## Claude Code Prompts to Try

### Prompt 1: Create server action
```bash
claude-code "Add a server action getEmployeeById in db/actions/employees.ts 
that fetches an employee by ID along with their orders. Include customer 
names in the orders. Handle invalid IDs and not found cases. Return in 
{success, data, error} format."
```

### Prompt 2: Build the page
```bash
claude-code "Create the employee details page at app/employees/[id]/page.tsx. 
Show employee info in a Card and orders in a DataTable. Add a back button. 
Handle not found cases with notFound()."
```

### Prompt 3: Add columns
```bash
claude-code "Create order column definitions in app/employees/[id]/columns.tsx 
with columns for order ID, customer name, order date, shipped date, and ship 
country. Format dates nicely."
```

### Prompt 4: Add navigation
```bash
claude-code "Add a 'View Details' link to the employees table in 
app/employees/columns.tsx that navigates to the employee details page."
```

## Success Criteria

You've completed this exercise when:

- ✅ Server action fetches employee with orders
- ✅ Details page displays all required information
- ✅ Orders display in a sortable, searchable table
- ✅ Navigation to/from details page works
- ✅ Error cases are handled gracefully
- ✅ No TypeScript errors
- ✅ Consistent styling with rest of app

## Bonus Challenges

If you finish early:

1. **Add a custom 404 page:** Create `app/employees/[id]/not-found.tsx`
2. **Add loading state:** Create `app/employees/[id]/loading.tsx`
3. **Show statistics:** Display total orders handled by this employee
4. **Add filtering:** Filter orders by date range
5. **Make it pretty:** Add employee photo placeholder or icon

## Common Issues & Solutions

### Issue: "Employee not found" for all IDs
**Solution:** Check that you're converting the ID to a number correctly:
```typescript
const employeeId = parseInt(id)
if (isNaN(employeeId)) {
  return { success: false, error: 'Invalid ID' }
}
```

### Issue: Orders not showing customer names
**Solution:** Make sure you're joining with the customers table:
```typescript
.leftJoin(customers, eq(orders.customerId, customers.customerId))
```

### Issue: TypeScript errors on columns
**Solution:** Make sure your type matches the data shape from your server action

### Issue: notFound() not working
**Solution:** Import from the correct package:
```typescript
import { notFound } from 'next/navigation' // ✅ Correct
// NOT from 'next/router' ❌
```

## Next Steps

After completing:
1. Test thoroughly with different employee IDs
2. Commit your work
3. Move on to Exercise 3!
4. (Optional) Compare with solution branch

## Questions?

Don't hesitate to ask for help! This is a more complex exercise.

Good luck! 🚀
