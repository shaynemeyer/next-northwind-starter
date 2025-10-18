# Exercise 4: Global Search (Bonus Challenge)

**Difficulty:** ⭐⭐⭐ Advanced  
**Estimated Time:** 45-60 minutes  
**Branch:** `exercise-4-search`

## Objective

Implement a global search feature that searches across customers, products, and orders simultaneously, with debouncing and a polished UI.

## Background

Search is a critical feature in most applications. This exercise teaches:
- Full-text search across multiple tables
- Debouncing for performance
- Complex UI state management
- Dialog/modal patterns

## Requirements

### Part 1: Server Action

Create `db/actions/search.ts`:

**Function:** `globalSearch(query: string)`

Requirements:
- ✅ Search across 3 entities:
  - **Customers:** name, contact name, city
  - **Products:** product name
  - **Orders:** order ID, customer name
- ✅ Return grouped results:
```typescript
  {
    customers: Array<{id, name, city, type: 'customer'}>,
    products: Array<{id, name, category, type: 'product'}>,
    orders: Array<{id, customerName, orderDate, type: 'order'}>
  }
```
- ✅ Limit to 5 results per category
- ✅ Case-insensitive search
- ✅ Handle minimum query length (2 characters)

### Part 2: Search Component

Create `components/global-search.tsx`:

**Requirements:**
- ✅ Search input in sidebar
- ✅ Clicking opens dialog/modal
- ✅ Live search as user types (with debouncing)
- ✅ Display results grouped by type
- ✅ Clickable results that navigate to appropriate page
- ✅ Show "no results" state
- ✅ Show "type more characters" state
- ✅ Loading indicator during search
- ✅ Client component with proper state management

### Part 3: Integrate into Sidebar

Update `components/app-sidebar.tsx`:

**Requirements:**
- ✅ Add GlobalSearch component above navigation
- ✅ Proper spacing and styling
- ✅ Works in both expanded and collapsed sidebar states

## Getting Started

1. **Check out the branch:**
```bash
   git checkout exercise-4-search
```

2. **Review starter files:**
   - `db/actions/search.ts` - Server action (TODO comments)
   - `components/global-search.tsx` - Search component (starter code)
   - `components/app-sidebar.tsx` - Sidebar (needs GlobalSearch added)

3. **Plan your approach:**
   - Start with the server action
   - Then build the UI
   - Finally add debouncing and polish

## File Structure

```
db/
└── actions/
└── search.ts               ← Search server action
components/
├── global-search.tsx           ← Search component
└── app-sidebar.tsx             ← Add search here
```

## Helpful Resources

- [SQL LIKE in Drizzle](https://orm.drizzle.team/docs/select#filtering)
- [React useTransition](https://react.dev/reference/react/useTransition)
- [shadcn/ui Dialog](https://ui.shadcn.com/docs/components/dialog)
- [Debouncing in React](https://www.freecodecamp.org/news/debouncing-explained/)

## Step-by-Step Guide

### Step 1: Create Search Server Action (20 min)
```typescript
// db/actions/search.ts

export async function globalSearch(query: string) {
  // Validate query length
  if (query.length < 2) {
    return { customers: [], products: [], orders: [] }
  }
  
  const searchPattern = `%${query}%`
  
  // Search customers
  const customers = await db
    .select({ ... })
    .from(customers)
    .where(or(
      like(customers.customerName, searchPattern),
      like(customers.contactName, searchPattern),
      like(customers.city, searchPattern)
    ))
    .limit(5)
  
  // Similar for products and orders
  
  return { customers, products, orders }
}
```

**Tips:**
- Use `or()` and `like()` from Drizzle
- Pattern `%query%` searches for substring
- For orders, you'll need to JOIN with customers
- Use `Promise.all()` to run searches in parallel

### Step 2: Build Search Component (25 min)
```typescript
// components/global-search.tsx
"use client"

export function GlobalSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(...)
  const [isPending, startTransition] = useTransition()
  
  // Debounced search effect
  useEffect(() => {
    if (!query.trim()) {
      setResults({ customers: [], products: [], orders: [] })
      return
    }
    
    const timer = setTimeout(() => {
      startTransition(async () => {
        const searchResults = await globalSearch(query)
        setResults(searchResults)
      })
    }, 300) // 300ms debounce
    
    return () => clearTimeout(timer)
  }, [query])
  
  // Render dialog with results
}
```

**Component Structure:**
1. Sidebar search input (opens dialog)
2. Dialog with:
   - Search input (autofocus)
   - Loading indicator
   - Results grouped by type
   - "No results" message
   - "Type more" message

### Step 3: Add Debouncing (10 min)

The code above includes debouncing with `setTimeout`. Key points:
- Wait 300ms after user stops typing
- Clear previous timeout on new keystroke
- Use `useTransition` for loading state

### Step 4: Handle Navigation (5 min)
```typescript
const router = useRouter()

const handleResultClick = (type: string, id: number) => {
  setOpen(false)
  setQuery("")
  
  switch (type) {
    case 'customer':
      router.push(`/customers`)
      break
    case 'product':
      router.push(`/products`)
      break
    case 'order':
      router.push(`/orders`)
      break
  }
}
```

## Testing Your Solution

1. **Start dev server:**
```bash
   npm run dev
```

2. **Test basic search:**
   - Click search input in sidebar
   - Dialog should open
   - Type "al" (short query)
   - Should see "Type at least 2 characters"
   - Type "alf" (valid query)
   - Should see results after ~300ms

3. **Test results:**
   - Results should be grouped by type
   - Each group should show up to 5 results
   - Customer results should show name and city
   - Product results should show name and category
   - Order results should show order # and customer

4. **Test interactions:**
   - Click on a result
   - Should navigate to appropriate page
   - Dialog should close
   - Search should reset

5. **Test edge cases:**
   - Empty search (no results shown)
   - No matches (show "no results" message)
   - Very long search query
   - Special characters

6. **Test performance:**
   - Type quickly - shouldn't lag
   - Debouncing should prevent excessive API calls
   - Loading indicator should show during search

## Claude Code Prompts to Try

### Prompt 1: Create search server action
```bash
claude-code "Create a globalSearch server action in db/actions/search.ts 
that searches across customers, products, and orders tables. Use SQL LIKE 
for substring matching. Return results grouped by type with max 5 per 
category. Handle case-insensitive search."
```

### Prompt 2: Build search component
```bash
claude-code "Create a global search component in components/global-search.tsx 
with a dialog that shows search results grouped by type. Include debouncing 
with 300ms delay. Show loading state during search. Handle navigation when 
clicking results."
```

### Prompt 3: Add to sidebar
```bash
claude-code "Add the GlobalSearch component to the app sidebar in 
components/app-sidebar.tsx. Place it above the navigation sections with 
proper spacing."
```

### Prompt 4: Improve search logic
```bash
claude-code "Improve the search to handle special characters and optimize 
performance. Add better error handling and edge case coverage."
```

## Success Criteria

- ✅ Search input appears in sidebar
- ✅ Dialog opens when clicked
- ✅ Search works across all three entity types
- ✅ Results are grouped and limited properly
- ✅ Debouncing prevents excessive searches
- ✅ Loading indicator shows during search
- ✅ Navigation works when clicking results
- ✅ No results message shows appropriately
- ✅ No console errors or warnings

## Bonus Challenges

1. **Keyboard navigation:** Arrow keys to navigate results, Enter to select
2. **Search history:** Remember recent searches
3. **Highlight matches:** Bold the matched text in results
4. **Result count:** Show "3 customers, 2 products, 1 order"
5. **Advanced filters:** Filter by entity type
6. **Search suggestions:** Show popular searches
7. **Fuzzy matching:** Handle typos and similar words
8. **Search analytics:** Track what users search for

## Common Issues & Solutions

### Issue: Search triggers on every keystroke
**Solution:** Check your debouncing logic:
```typescript
useEffect(() => {
  const timer = setTimeout(() => {
    // Search here
  }, 300)
  
  return () => clearTimeout(timer) // Clean up!
}, [query])
```

### Issue: Dialog doesn't close after navigation
**Solution:** Make sure to call `setOpen(false)` in your click handler

### Issue: No results for valid searches
**Solution:** Check your LIKE pattern:
```typescript
like(customers.customerName, `%${query}%`) // Must have % wildcards
```

### Issue: Case-sensitive search
**Solution:** Use lowercase comparison:
```typescript
like(sql`lower(${customers.customerName})`, `%${query.toLowerCase()}%`)
```

### Issue: Search is too slow
**Solution:** 
- Make sure you're using `.limit(5)`
- Run the three searches in parallel with `Promise.all()`
- Consider adding database indexes

### Issue: TypeScript errors on results state
**Solution:** Define your types clearly:
```typescript
type SearchResults = {
  customers: Array<{id: number, name: string, city: string | null}>
  products: Array<{id: number, name: string, category: string | null}>
  orders: Array<{id: number, customerName: string | null, orderDate: string | null}>
}

const [results, setResults] = useState<SearchResults>({
  customers: [],
  products: [],
  orders: []
})
```

## Understanding Debouncing

**Without debouncing:**

```
User types: "a" "l" "f" "r" "e" "d"
API calls:   ↓   ↓   ↓   ↓   ↓   ↓
6 API calls!
```

**With 300ms debouncing:**

```
User types: "a" "l" "f" "r" "e" "d"
Timer:      [wait...] [wait...] [GO!]
API calls:                       ↓
1 API call!
```

The timer resets with each keystroke. Only when the user pauses for 300ms does the search actually fire.

## SQL LIKE Pattern Examples
```typescript
// Exact match (don't do this)
like(field, query) // Matches only exactly "query"

// Starts with
like(field, `${query}%`) // Matches "query*"

// Ends with  
like(field, `%${query}`) // Matches "*query"

// Contains (best for search)
like(field, `%${query}%`) // Matches "*query*"
```

## Performance Tips

1. **Parallel queries:**
```typescript
   const [customers, products, orders] = await Promise.all([
     searchCustomers(query),
     searchProducts(query),
     searchOrders(query)
   ])
```

2. **Early return for short queries:**
```typescript
   if (query.length < 2) {
     return { customers: [], products: [], orders: [] }
   }
```

3. **Limit results:**
```typescript
   .limit(5) // Don't fetch more than needed
```

4. **Use indexes** (advanced):
   Add database indexes on frequently searched columns

## UI/UX Tips

1. **Autofocus:** Search input should focus when dialog opens
2. **Clear on close:** Reset query when dialog closes
3. **Loading state:** Show spinner while searching
4. **Empty states:** Different messages for "no query" vs "no results"
5. **Keyboard shortcuts:** ESC to close, / to open (optional)
6. **Accessibility:** Proper ARIA labels and keyboard navigation

## Alternative Approaches

If you finish and want to try different patterns:

### Approach 1: Command Palette Style
- Single list of results (not grouped)
- Keyboard-first navigation
- More compact

### Approach 2: Instant Results
- Show results inline (no dialog)
- Dropdown below search input
- Simpler but less flexible

### Approach 3: Dedicated Search Page
- Navigate to `/search?q=query`
- Full-page results
- More space for filters and sorting

## Next Steps

After completing:
1. Test thoroughly with different search terms
2. Ask a teammate to try breaking it
3. Commit your work
4. Compare with solution branch
5. Consider the bonus challenges

## Congratulations! 🎉

If you've completed all 4 exercises, you now have:
- ✅ Loading states
- ✅ Dynamic routes
- ✅ Complex dashboards
- ✅ Global search

You're well on your way to mastering Claude Code and modern Next.js development!

## Questions?

This is a challenging exercise - be proud if you complete it!

Good luck! 🚀
