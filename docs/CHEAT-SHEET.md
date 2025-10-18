# Claude Code Cheat Sheet
## Next.js 15 + Drizzle ORM + shadcn/ui Patterns

Quick reference for common Claude Code prompts when working with the Northwind starter.

---

## General Tips

### Writing Effective Prompts
✅ **DO:**
- Be specific about what you want
- Mention the pattern you want to follow ("following the existing pattern from...")
- Specify all files that need changes
- Include requirements and edge cases

❌ **DON'T:**
- Be too vague ("make it better")
- Skip important context
- Forget to mention error handling
- Assume Claude knows your preferences

### Example: Vague vs Specific
❌ Vague: "Add a new page"
✅ Specific: "Create a new suppliers page at app/suppliers/page.tsx following the existing pattern from the customers page. Include server actions, columns, and data table with search functionality."

---

## Common Patterns & Prompts

### 1. Creating a New Entity Page

**Pattern:** Create complete CRUD interface for an entity

```bash
claude-code "Create a new [entity] page following the existing pattern:
1. Add server action in db/actions/[entity].ts to fetch all [entities]
2. Create app/[entity]/columns.tsx with columns for [list columns]
3. Create app/[entity]/page.tsx using DataTable component
4. Add navigation item in lib/constants/navItems.ts
Include proper error handling and TypeScript types."
```

**Example:**
```bash
claude-code "Create a new suppliers page following the existing pattern:
1. Add server action in db/actions/suppliers.ts to fetch all suppliers
2. Create app/suppliers/columns.tsx with columns for supplier name, contact name, city, and country
3. Create app/suppliers/page.tsx using DataTable component
4. Add navigation item in lib/constants/navItems.ts
Include proper error handling and TypeScript types."
```

---

### 2. Adding Server Actions

**Pattern:** Create type-safe server actions for data fetching

```bash
claude-code "Add a server action in db/actions/[entity].ts called get[Entity]ById that:
1. Accepts an id parameter
2. Fetches [entity] from database using Drizzle
3. Includes [related entities] using Drizzle relations
4. Returns {success: boolean, data?, error?} format
5. Handles invalid ID and not found cases
Include proper error logging."
```

**Example:**
```bash
claude-code "Add a server action in db/actions/products.ts called getProductById that:
1. Accepts an id parameter
2. Fetches product from database using Drizzle
3. Includes category and supplier using Drizzle relations
4. Returns {success: boolean, data?, error?} format
5. Handles invalid ID and not found cases
Include proper error logging."
```

---

### 3. Creating Dynamic Routes

**Pattern:** Create detail page for a single entity

```bash
claude-code "Create a dynamic route at app/[entity]/[id]/page.tsx that:
1. Fetches [entity] by ID using the server action
2. Displays [entity] details in a Card component
3. Shows related [entities] in a DataTable below
4. Includes a 'Back to [Entities]' link
5. Handles not found case with a not-found.tsx page
Use shadcn/ui components for styling."
```

**Example:**
```bash
claude-code "Create a dynamic route at app/products/[id]/page.tsx that:
1. Fetches product by ID using the server action
2. Displays product details (name, price, category, supplier) in a Card component
3. Shows related order details in a DataTable below
4. Includes a 'Back to Products' link
5. Handles not found case with a not-found.tsx page
Use shadcn/ui components for styling."
```

---

### 4. Adding Table Columns

**Pattern:** Define columns for TanStack Table

```bash
claude-code "Create column definitions in app/[entity]/columns.tsx for [entity] with:
1. Columns for: [list columns]
2. Format [column] as [format] (e.g., date, currency)
3. Add a sortable header for [column]
4. Include an actions column with [action] link
Make sure to export the proper TypeScript type."
```

**Example:**
```bash
claude-code "Create column definitions in app/orders/columns.tsx for orders with:
1. Columns for: order ID, customer name, order date, shipped date, ship country
2. Format dates as localized date strings
3. Add sortable headers for all columns
4. Include an actions column with 'View Details' link
Make sure to export the proper TypeScript type."
```

---

### 5. Adding Filtering

**Pattern:** Add filtering to existing pages

```bash
claude-code "Add [filter type] filtering to the [entity] page:
1. Update the server action to accept optional [filter] parameter
2. Modify the Drizzle query to filter by [condition]
3. Add a [UI element] to the page for selecting the filter
4. Persist the filter in URL search params
5. Update the DataTable to use the filtered data"
```

**Example:**
```bash
claude-code "Add category filtering to the products page:
1. Update the server action to accept optional categoryId parameter
2. Modify the Drizzle query to filter by category
3. Add a Select dropdown to the page for choosing category
4. Persist the filter in URL search params
5. Update the DataTable to use the filtered data"
```

---

### 6. Creating Forms

**Pattern:** Add forms with validation using shadcn/ui

```bash
claude-code "Create a form for [creating/updating] [entity]:
1. Use shadcn/ui Form, Input, Button, and Dialog components
2. Add Zod schema for validation with fields: [list fields]
3. Create server action to handle [create/update] with validation
4. Show success/error toast notifications
5. Reset form and close dialog on success
Include all necessary imports and TypeScript types."
```

**Example:**
```bash
claude-code "Create a form for creating products:
1. Use shadcn/ui Form, Input, Button, and Dialog components
2. Add Zod schema for validation with fields: product name, unit price, category ID, supplier ID
3. Create server action to handle product creation with validation
4. Show success/error toast notifications
5. Reset form and close dialog on success
Include all necessary imports and TypeScript types."
```

---

### 7. Adding Charts/Visualizations

**Pattern:** Create data visualizations with Recharts

```bash
claude-code "Create a chart component that shows [metric] by [dimension]:
1. Create a server action to fetch and aggregate the data
2. Create a component at components/[name]-chart.tsx using Recharts
3. Use [chart type] from Recharts (BarChart, LineChart, PieChart, etc.)
4. Wrap in shadcn Card component
5. Format axes and tooltips appropriately
Include proper TypeScript types for the data."
```

**Example:**
```bash
claude-code "Create a chart component that shows order count by month:
1. Create a server action to fetch and aggregate order data by month
2. Create a component at components/orders-by-month-chart.tsx using Recharts
3. Use LineChart from Recharts
4. Wrap in shadcn Card component
5. Format date axis and add tooltips
Include proper TypeScript types for the data."
```

---

### 8. Adding Search Functionality

**Pattern:** Implement search across fields

```bash
claude-code "Add search functionality to [entity]:
1. Update server action to accept a search query parameter
2. Modify Drizzle query to use LIKE for searching [fields]
3. Update the page to pass search query to server action
4. The DataTable component already handles search UI
Ensure case-insensitive search."
```

**Example:**
```bash
claude-code "Add search functionality to products:
1. Update server action to accept a search query parameter
2. Modify Drizzle query to use LIKE for searching product name and category name
3. Update the page to pass search query to server action
4. The DataTable component already handles search UI
Ensure case-insensitive search."
```

---

### 9. Adding Loading States

**Pattern:** Create loading skeletons

```bash
claude-code "Create a loading skeleton for [entity] page:
1. Create app/[entity]/loading.tsx
2. Use shadcn Skeleton component
3. Match the layout of the actual [entity] page
4. Include skeleton for: [list components]
Use proper spacing and layout matching the page."
```

**Example:**
```bash
claude-code "Create a loading skeleton for products page:
1. Create app/products/loading.tsx
2. Use shadcn Skeleton component
3. Match the layout of the actual products page
4. Include skeleton for: search bar, table headers, 10 table rows
Use proper spacing and layout matching the page."
```

---

### 10. Database Queries with Relations

**Pattern:** Fetch data with related entities

```bash
claude-code "Update the [entity] query to include related data:
1. Modify the query in db/actions/[entity].ts
2. Use Drizzle's relational query API or joins
3. Include [related entities]
4. Return the data in a flat structure for the DataTable
Ensure proper TypeScript types for the joined data."
```

**Example:**
```bash
claude-code "Update the orders query to include related data:
1. Modify the query in db/actions/orders.ts
2. Use Drizzle's relational query API or joins
3. Include customer name, employee name, and shipper company name
4. Return the data in a flat structure for the DataTable
Ensure proper TypeScript types for the joined data."
```

---

### 11. Adding Aggregations

**Pattern:** Calculate metrics and aggregations

```bash
claude-code "Create a server action that calculates [metric]:
1. Add function in db/actions/[entity].ts
2. Use Drizzle's sql helper for aggregation
3. Group by [field] if needed
4. Return array of {[field]: value, [metric]: number}
Include error handling."
```

**Example:**
```bash
claude-code "Create a server action that calculates total revenue by supplier:
1. Add function in db/actions/suppliers.ts
2. Use Drizzle's sql helper for SUM aggregation
3. Join orderDetails, products, and suppliers tables
4. Group by supplier name
5. Return array of {supplierName: string, revenue: number}
Include error handling."
```

---

### 12. Adding Mutations (Create/Update/Delete)

**Pattern:** Add data modification actions

```bash
claude-code "Add a server action to [create/update/delete] [entity]:
1. Create [action]Entity function in db/actions/[entity].ts
2. Accept [parameters] as input
3. Validate input using Zod schema
4. Perform [operation] using Drizzle
5. Return {success: boolean, data?, error?}
Include proper error handling and logging."
```

**Example:**
```bash
claude-code "Add a server action to create a product:
1. Create createProduct function in db/actions/products.ts
2. Accept productData as input
3. Validate input using Zod schema (name, price, categoryId, supplierId)
4. Insert into products table using Drizzle
5. Return {success: boolean, data?, error?}
Include proper error handling and logging."
```

---

### 13. Error Handling & Validation

**Pattern:** Add robust error handling

```bash
claude-code "Improve error handling in [file]:
1. Add try-catch blocks around database operations
2. Log errors with context using console.error
3. Return user-friendly error messages
4. Handle specific error cases: [list cases]
5. Add input validation where needed"
```

**Example:**
```bash
claude-code "Improve error handling in db/actions/customers.ts:
1. Add try-catch blocks around database operations
2. Log errors with context using console.error
3. Return user-friendly error messages
4. Handle specific error cases: invalid ID, customer not found, database connection errors
5. Add input validation for ID parameters"
```

---

### 14. Adding Tests

**Pattern:** Add unit tests for server actions

```bash
claude-code "Add unit tests for [entity] server actions:
1. Set up Vitest if not already configured
2. Create tests in db/actions/[entity].test.ts
3. Test successful cases for all functions
4. Test error cases: [list error cases]
5. Mock database calls appropriately
Include necessary setup and teardown."
```

**Example:**
```bash
claude-code "Add unit tests for customer server actions:
1. Set up Vitest if not already configured
2. Create tests in db/actions/customers.test.ts
3. Test successful cases for getAllCustomers and getCustomerById
4. Test error cases: invalid ID, customer not found, database errors
5. Mock database calls appropriately
Include necessary setup and teardown."
```

---

### 15. Refactoring

**Pattern:** Improve existing code

```bash
claude-code "Refactor [component/file] to:
1. [Improvement 1]
2. [Improvement 2]
3. Extract [repeated code] into [utility/component]
4. Improve TypeScript types
5. Add comments for complex logic
Maintain existing functionality."
```

**Example:**
```bash
claude-code "Refactor app/customers/page.tsx to:
1. Extract table configuration into a separate constant
2. Move data fetching logic into a separate function
3. Add error boundary for better error handling
4. Improve TypeScript types for component props
5. Add JSDoc comments
Maintain existing functionality."
```

---

## Debugging with Claude Code

### Finding Bugs

```bash
claude-code "Debug the issue in [file] where [description of problem]:
1. Analyze the code to find the root cause
2. Explain what's wrong
3. Provide a fix
4. Add tests to prevent regression"
```

### Understanding Errors

```bash
claude-code "I'm getting this error: [paste error message]
Please:
1. Explain what's causing the error
2. Show me where in the code it's happening
3. Provide a fix
4. Suggest how to prevent similar errors"
```

### Performance Issues

```bash
claude-code "The [page/component] is loading slowly. Please:
1. Analyze potential performance bottlenecks
2. Check database queries for N+1 problems
3. Suggest optimizations
4. Implement the most impactful improvements"
```

---

## Project-Specific Prompts

### Northwind Database Specific

```bash
# Explore relationships
claude-code "Show me all the relationships between [entity1] and [entity2] in the Northwind database schema"

# Complex queries
claude-code "Create a query that finds the top 10 customers by total order value"

# Reports
claude-code "Create a server action that generates a sales report showing total revenue by product category for a given date range"
```

---

## Tips for Success

1. **Start broad, then refine:** Begin with a general prompt, then ask Claude Code to make specific improvements
2. **Reference existing patterns:** Always mention "following the existing pattern from..." when creating new features
3. **Be explicit about requirements:** List all requirements, even if they seem obvious
4. **Ask for explanations:** Add "explain your changes" to understand what Claude Code did
5. **Iterate:** Don't expect perfection on the first try - refine the results
6. **Test frequently:** Ask Claude Code to run tests or check for errors after changes

---

## Common Mistakes to Avoid

❌ "Add a page" - Too vague
✅ "Add a suppliers page following the customers page pattern with these specific columns..."

❌ "Fix the bug" - No context
✅ "Fix the bug in db/actions/orders.ts where orders aren't filtering by date correctly"

❌ "Make it better" - Subjective
✅ "Refactor this component to use React hooks instead of class components and add proper TypeScript types"

❌ "Add error handling" - Unclear scope
✅ "Add try-catch blocks and user-friendly error messages to all server actions in db/actions/products.ts"

---

## Quick Command Reference

```bash
# Explain code
claude-code "Explain how [feature] works in this codebase"

# Add feature
claude-code "Add [feature] following the existing pattern"

# Fix bug
claude-code "Fix the bug where [description]"

# Refactor
claude-code "Refactor [file] to improve [aspect]"

# Add tests
claude-code "Add tests for [functionality]"

# Optimize
claude-code "Optimize [code/query] for better performance"

# Update
claude-code "Update [feature] to also [new requirement]"
```

---

## Workshop-Specific Tips

- Use these prompts as starting points, not rigid templates
- Experiment with variations to see what works best
- Share successful prompts with your team
- Document prompts that work well for your specific patterns
- Build a team-specific cheat sheet over time

Remember: Claude Code works best when you're specific, provide context, and reference existing patterns!
