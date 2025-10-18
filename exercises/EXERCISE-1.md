# Exercise 1: Add Loading State to Customers Page

**Difficulty:** ⭐ Easy  
**Estimated Time:** 15-20 minutes  
**Branch:** `exercise-1-loading-state`

## Objective

Create a loading skeleton for the customers page that displays while data is being fetched from the server.

## Background

In Next.js 13+, you can create a `loading.tsx` file in any route folder to automatically show a loading UI while the page is loading. This provides better user experience by showing a skeleton instead of a blank page.

## Requirements

Complete the `app/customers/loading.tsx` file with the following:

1. ✅ Import and use the `Skeleton` component from shadcn/ui
2. ✅ Create a skeleton layout that matches the customers table structure
3. ✅ Include skeletons for:
   - Search bar at the top
   - Table headers
   - 8-10 table rows
4. ✅ Use the `Card` component to wrap content (matching the page layout)
5. ✅ Make it responsive and visually consistent with the actual page

## Getting Started

1. **Check out the exercise branch:**
```bash
   git checkout exercise-1-loading-state
```

2. **Open the starter file:**
   - File location: `app/customers/loading.tsx`
   - This file has TODO comments to guide you

3. **Reference the actual page:**
   - Look at `app/customers/page.tsx` to understand the layout
   - Your skeleton should mirror this structure

## Helpful Resources

- [shadcn/ui Skeleton Component](https://ui.shadcn.com/docs/components/skeleton)
- [Next.js Loading UI](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)
- Reference file: `app/customers/page.tsx`

## Testing Your Solution

1. **Add artificial delay to simulate slow loading:**
   
   At the top of `app/customers/page.tsx`, add this line:
```tsx
   export default async function CustomersPage() {
     // Add this line to test loading state
     await new Promise(resolve => setTimeout(resolve, 2000))
     
     // ... rest of the code
```

2. **Start the dev server:**
```bash
   npm run dev
```

3. **Navigate to customers page:**
   - Go to http://localhost:3000/customers
   - You should see your loading skeleton for 2 seconds
   - Then the actual data loads

4. **Check these things:**
   - ✅ Skeleton appears immediately
   - ✅ Layout matches the actual page
   - ✅ No layout shift when data loads
   - ✅ Looks professional and polished

## Example Structure

Your loading skeleton should have this general structure:
```tsx
<div className="flex flex-1 flex-col gap-4 p-4">
  <Card>
    <CardHeader>
      {/* Title skeleton */}
    </CardHeader>
    <CardContent>
      {/* Search bar skeleton */}
      {/* Table skeleton */}
    </CardContent>
  </Card>
</div>
```

## Claude Code Prompts to Try

If you get stuck, try these prompts with Claude Code:

### Prompt 1: Complete the file
```bash
claude-code "Complete the loading skeleton in app/customers/loading.tsx. 
It should match the layout of app/customers/page.tsx with skeleton 
components for the search bar and table rows."
```

### Prompt 2: Improve the skeleton
```bash
claude-code "Improve the loading skeleton to better match the actual 
customers table layout. Add proper spacing and make it look more realistic."
```

### Prompt 3: Add more detail
```bash
claude-code "Add more detailed skeleton elements to match the exact column 
layout of the customers table."
```

## Success Criteria

You've completed this exercise when:

- ✅ Loading skeleton displays when navigating to /customers
- ✅ Skeleton matches the layout of the actual customers page
- ✅ No console errors
- ✅ Smooth transition from skeleton to actual data
- ✅ Code is clean and well-organized

## Bonus Challenges

If you finish early, try these:

1. **Make it more realistic:** Add subtle animation or pulsing effect
2. **Add variety:** Make some skeleton elements slightly different widths
3. **Apply to other pages:** Create loading skeletons for employees and products pages

## Common Issues & Solutions

### Issue: Skeleton doesn't appear
**Solution:** Make sure the file is named exactly `loading.tsx` (not `Loading.tsx` or `loading.ts`)

### Issue: Layout doesn't match
**Solution:** Compare your skeleton's className values to the actual page's layout

### Issue: Import errors
**Solution:** Make sure you're importing from the correct paths:
```tsx
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
```

## Next Steps

After completing this exercise:
1. Remove the artificial delay from `page.tsx`
2. Commit your work: `git add . && git commit -m "Complete Exercise 1"`
3. Move on to Exercise 2!
4. (Optional) Compare with solution: `git checkout solution-1-loading-state`

## Questions?

- Raise your hand for help
- Check the troubleshooting guide
- Ask in the workshop chat

Good luck! 🚀
