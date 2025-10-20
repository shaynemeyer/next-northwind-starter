# Post-Workshop Challenges

Continue practicing Claude Code with these additional challenges. Each builds on what you learned in the workshop.

---

## Challenge 1: Order Details Page (Intermediate)

**Time Estimate:** 45-60 minutes

### Goal
Create a detailed order view showing all products in an order with calculated totals.

### Requirements

1. **Dynamic Route:** Create `app/orders/[id]/page.tsx`

2. **Order Information Card:**
   - Order ID and date
   - Customer name (with link to customer)
   - Employee name
   - Ship to address
   - Shipper information

3. **Order Items Table:**
   - Product name
   - Unit price
   - Quantity
   - Discount
   - Line total (calculated)

4. **Order Summary:**
   - Subtotal
   - Total discount amount
   - Order total

5. **Server Action:**
   Create `getOrderById()` that includes all related data

### Claude Code Prompts to Try

```bash
"Create an order details page at app/orders/[id]/page.tsx that shows order information, order items in a table, and order totals. Include server action to fetch order with all related data."

"Add calculations for line totals, subtotal, and order total. Handle discount percentages correctly."
```

### Bonus Points
- Add "Back to Orders" navigation
- Show order status (shipped/pending)
- Format currency properly
- Add print-friendly CSS

---

## Challenge 2: Customer Order History (Intermediate)

**Time Estimate:** 45-60 minutes

### Goal
Add a customer details page showing all orders for that customer.

### Requirements

1. **Dynamic Route:** Create `app/customers/[id]/page.tsx`

2. **Customer Information:**
   - Name, contact person
   - Full address
   - Contact details

3. **Order History Table:**
   - Order ID (clickable to order details)
   - Order date
   - Total amount
   - Status

4. **Statistics Cards:**
   - Total orders
   - Total spent
   - Average order value

### Claude Code Prompts to Try

```bash
"Create a customer details page showing customer info and their complete order history with totals"

"Add statistics cards showing total orders, total spent, and average order value for this customer"
```

### Bonus Points
- Filter orders by date range
- Show customer's favorite products
- Add pagination for large order lists
- Export order history to CSV

---

## Challenge 3: Product Inventory Management (Advanced)

**Time Estimate:** 1-2 hours

### Goal
Add functionality to manage product inventory with low stock alerts.

### Requirements

1. **Low Stock Dashboard Widget:**
   - Show products with low stock on main dashboard
   - Configurable threshold (e.g., < 10 units)

2. **Product Details Page:**
   - Current stock level
   - Reorder level indicator
   - Stock history (if you add tracking)

3. **Update Stock Form:**
   - Modal/dialog to adjust stock
   - Add/subtract inventory
   - Reason field (received shipment, returned, etc.)

4. **Stock Alerts:**
   - Visual indicator on products page for low stock
   - Color coding (red: critical, yellow: low, green: ok)

### Claude Code Prompts to Try

```bash
"Add a low stock products section to the dashboard showing products below 10 units"

"Create a product details page with stock management. Add a form to update stock levels with reason tracking."

"Add visual indicators to the products table showing stock status with color coding"
```

### Bonus Points
- Track stock history in separate table
- Generate stock reports
- Email alerts for low stock
- Bulk stock update

---

## Challenge 4: Advanced Filtering & Sorting (Intermediate)

**Time Estimate:** 1 hour

### Goal
Add comprehensive filtering and sorting to the products page.

### Requirements

1. **Filter Panel:**
   - Category dropdown
   - Supplier dropdown
   - Price range slider
   - In stock checkbox

2. **Multi-Column Sort:**
   - Click headers to sort
   - Secondary sort option
   - Sort direction indicator

3. **URL State:**
   - Persist filters in URL search params
   - Shareable filtered views
   - Clear filters button

4. **Results Summary:**
   - Show count of filtered results
   - Display active filters as chips/badges

### Claude Code Prompts to Try

```bash
"Add a comprehensive filter panel to the products page with category, supplier, price range, and stock status filters"

"Persist all filters in URL search params and add a clear filters button"

"Add filter chips/badges showing active filters with remove functionality"
```

### Bonus Points
- Save favorite filters
- Export filtered results
- Advanced text search with multiple fields
- Filter by date added

---

## Challenge 5: Sales Analytics Dashboard (Advanced)

**Time Estimate:** 2-3 hours

### Goal
Create a comprehensive analytics dashboard with multiple visualizations.

### Requirements

1. **Time Period Selector:**
   - Last 7 days, 30 days, 90 days, year
   - Custom date range picker

2. **Charts:**
   - Sales over time (line chart)
   - Top products (bar chart)
   - Revenue by category (pie chart)
   - Sales by employee (bar chart)

3. **Key Metrics:**
   - Total revenue
   - Orders count
   - Average order value
   - Growth percentage vs previous period

4. **Top Lists:**
   - Top 5 customers
   - Top 5 products
   - Top performing employees

### Claude Code Prompts to Try

```bash
"Create an analytics dashboard with date range selector and multiple charts showing sales trends, top products, and revenue by category"

"Add server actions to calculate sales metrics for different time periods with comparison to previous period"

"Create a pie chart component showing revenue distribution by category"
```

### Bonus Points
- Export reports as PDF
- Downloadable data as Excel
- Real-time updates
- Forecasting/trends

---

## Challenge 6: User Authentication (Advanced)

**Time Estimate:** 2-3 hours

### Goal
Add user authentication and role-based access control.

### Requirements

1. **Login Page:**
   - Email and password form
   - Session management
   - Remember me option

2. **User Roles:**
   - Admin: Full access
   - Manager: View and edit
   - Employee: View only

3. **Protected Routes:**
   - Redirect to login if not authenticated
   - Check permissions for actions
   - Show/hide UI based on role

4. **User Management:**
   - Admin can create/edit users
   - Assign roles
   - Password reset

### Claude Code Prompts to Try

```bash
"Add NextAuth authentication with credentials provider to this project"

"Create a login page and protect all routes requiring authentication"

"Add role-based access control with admin, manager, and employee roles"
```

### Bonus Points
- OAuth providers (Google, GitHub)
- Two-factor authentication
- Activity logging
- Session timeout

---

## Challenge 7: Advanced Search with Filters (Intermediate)

**Time Estimate:** 1-2 hours

### Goal
Enhance the global search with advanced filtering and faceted search.

### Requirements

1. **Search Enhancements:**
   - Search in more fields
   - Highlight matched text
   - Search history
   - Suggested searches

2. **Faceted Filters:**
   - Filter results by entity type
   - Filter by date range
   - Filter by status

3. **Search Results Page:**
   - Dedicated results page (not just modal)
   - Pagination
   - Sort options
   - Save searches

4. **Performance:**
   - Debouncing
   - Loading states
   - Result caching

### Claude Code Prompts to Try

```bash
"Enhance the global search to include more fields and highlight matched text in results"

"Create a dedicated search results page with pagination and filtering"

"Add search history and suggested searches based on previous queries"
```

### Bonus Points
- Full-text search index
- Fuzzy matching
- Search analytics
- Voice search

---

## Challenge 8: Export & Reporting (Intermediate)

**Time Estimate:** 1-2 hours

### Goal
Add export functionality and customizable reports.

### Requirements

1. **Export Formats:**
   - CSV export for all tables
   - Excel export with formatting
   - PDF reports

2. **Report Builder:**
   - Select data range
   - Choose columns to include
   - Apply filters
   - Save report templates

3. **Scheduled Reports:**
   - Generate reports automatically
   - Email delivery
   - Report archive

### Claude Code Prompts to Try

```bash
"Add CSV export functionality to the customers table with proper formatting"

"Create an Excel export using SheetJS that includes formatting and multiple sheets"

"Build a report configuration interface where users can select columns and filters"
```

### Bonus Points
- Chart exports as images
- Branded PDF templates
- Scheduled email reports
- Data visualization exports

---

## Challenge 9: Bulk Operations (Intermediate)

**Time Estimate:** 1-2 hours

### Goal
Add ability to perform actions on multiple records at once.

### Requirements

1. **Row Selection:**
   - Checkboxes on tables
   - Select all functionality
   - Selected count display

2. **Bulk Actions:**
   - Delete multiple records
   - Update multiple records
   - Export selected
   - Assign category/status

3. **Confirmation:**
   - Preview affected records
   - Undo capability
   - Progress indicator

### Claude Code Prompts to Try

```bash
"Add row selection checkboxes to the DataTable component with select all functionality"

"Create a bulk actions menu that appears when rows are selected"

"Implement bulk delete with confirmation dialog showing affected records"
```

### Bonus Points
- Bulk import from CSV
- Bulk email to customers
- Bulk price updates
- Transaction rollback

---

## Challenge 10: Real-time Features (Advanced)

**Time Estimate:** 2-3 hours

### Goal
Add real-time updates and notifications.

### Requirements

1. **Live Updates:**
   - Orders update in real-time
   - Show online users
   - Real-time stock levels

2. **Notifications:**
   - New order alerts
   - Low stock warnings
   - System notifications

3. **Activity Feed:**
   - Recent actions log
   - User activity tracking
   - Audit trail

### Claude Code Prompts to Try

```bash
"Add real-time order updates using Server-Sent Events or polling"

"Create a notification system with toast notifications for new orders"

"Build an activity feed showing recent actions across the system"
```

### Bonus Points
- WebSocket integration
- Push notifications
- Real-time collaboration
- Live chat support

---

## Mini Challenges (15-30 minutes each)

Quick wins to practice specific skills:

### Mini Challenge 1: Dark Mode
Add dark mode toggle with theme persistence

### Mini Challenge 2: Favorites
Let users favorite products/customers

### Mini Challenge 3: Notes
Add notes/comments to orders

### Mini Challenge 4: Tags
Tag system for products

### Mini Challenge 5: Email Templates
Create email templates for orders

### Mini Challenge 6: Print Invoices
Generate printable invoices

### Mini Challenge 7: Image Upload
Add product images

### Mini Challenge 8: Audit Log
Track all changes

### Mini Challenge 9: Keyboard Shortcuts
Add keyboard navigation

### Mini Challenge 10: Breadcrumbs
Add breadcrumb navigation

---

## Challenge Tips

### Getting Started
1. Read the full challenge requirements
2. Break it down into smaller tasks
3. Start with the data layer (server actions)
4. Then build the UI
5. Test as you go

### Using Claude Code Effectively
- Reference existing patterns
- Be specific about requirements
- Ask for explanations
- Iterate and refine
- Test after each change

### When Stuck
- Review similar existing code
- Check the cheat sheet
- Search documentation
- Take a break
- Ask the community

---

## Sharing Your Solutions

After completing challenges:

1. **Create a branch:**
   ```bash
   git checkout -b challenge-1-order-details
   git add .
   git commit -m "Complete Challenge 1: Order details page"
   git push origin challenge-1-order-details
   ```

2. **Share with team:**
   - Create pull request
   - Share screenshots
   - Document interesting solutions
   - Discuss different approaches

3. **Learn from others:**
   - Review team members' solutions
   - Discuss trade-offs
   - Share tips and tricks

---

## Challenge Progression

### Recommended Order

**Week 1:** Challenges 1-2 (Build core features)
**Week 2:** Challenges 3-4 (Add functionality)
**Week 3:** Challenge 5 (Analytics)
**Week 4:** Challenges 6-7 (Advanced features)
**Week 5:** Challenges 8-10 (Production features)

### Difficulty Ratings

⭐ Easy (30-45 min)
⭐⭐ Intermediate (1-2 hours)
⭐⭐⭐ Advanced (2-3 hours)

---

## Additional Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Drizzle ORM:** https://orm.drizzle.team/
- **shadcn/ui:** https://ui.shadcn.com/
- **Claude Code:** https://docs.claude.com/en/docs/claude-code
- **TanStack Table:** https://tanstack.com/table
- **Recharts:** https://recharts.org/

---

## Community

Share your progress:
- Use hashtag #ClaudeCodeChallenge
- Post screenshots
- Share interesting Claude Code prompts
- Help others with their challenges

Happy coding! 🚀
