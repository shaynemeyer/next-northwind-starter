# Workshop Troubleshooting Guide

Common issues and their solutions for the Claude Code workshop.

---

## Claude Code Issues

### Issue: "Command not found: claude-code"

**Symptoms:**
```bash
claude-code: command not found
```

**Solutions:**

1. **Install Claude Code globally:**
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```

2. **Check npm global path:**
   ```bash
   npm config get prefix
   ```
   Ensure this directory is in your PATH.

3. **Use npx as alternative:**
   ```bash
   npx @anthropic-ai/claude-code "your prompt here"
   ```

4. **Verify installation:**
   ```bash
   which claude  # macOS/Linux
   where claude  # Windows
   ```

---

### Issue: "API key not found" or "Authentication failed"

**Symptoms:**
```
Error: ANTHROPIC_API_KEY environment variable is not set
```

**Solutions:**

1. **Set environment variable for current session:**
   ```bash
   # macOS/Linux
   export ANTHROPIC_API_KEY='your-api-key-here'
   
   # Windows CMD
   set ANTHROPIC_API_KEY=your-api-key-here
   
   # Windows PowerShell
   $env:ANTHROPIC_API_KEY='your-api-key-here'
   ```

2. **Make it permanent:**
   
   **macOS/Linux:**
   ```bash
   echo 'export ANTHROPIC_API_KEY="your-key"' >> ~/.zshrc
   source ~/.zshrc
   ```
   
   **Windows:**
   - System Properties → Environment Variables
   - Add new user variable
   - Name: `ANTHROPIC_API_KEY`
   - Value: Your API key

3. **Verify it's set:**
   ```bash
   echo $ANTHROPIC_API_KEY  # macOS/Linux
   echo %ANTHROPIC_API_KEY%  # Windows CMD
   ```

4. **Check API key validity:**
   - Go to https://console.anthropic.com/
   - Verify your API key is active
   - Generate a new one if needed

---

### Issue: AWS Bedrock "Access Denied"

**Symptoms:**
```
AccessDeniedException: User is not authorized to perform: bedrock:InvokeModel
```

**Solutions:**

1. **Check IAM permissions:**
   ```bash
   aws sts get-caller-identity
   ```
   Verify you're using the correct AWS account/role.

2. **Add required IAM policy:**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "bedrock:InvokeModel",
           "bedrock:InvokeModelWithResponseStream"
         ],
         "Resource": "arn:aws:bedrock:*::foundation-model/anthropic.claude-*"
       }
     ]
   }
   ```

3. **Enable model access in Bedrock:**
   - AWS Console → Bedrock → Model access
   - Request access to Claude models
   - Wait for approval (usually instant)

4. **Check region:**
   ```bash
   aws configure get region
   ```
   Ensure Claude is available in your region (us-east-1, us-west-2, etc.)

5. **Test AWS credentials:**
   ```bash
   aws bedrock list-foundation-models --region us-east-1
   ```

---

### Issue: Claude Code is slow or hanging

**Symptoms:**
- Commands take a very long time
- No response for several minutes
- Timeout errors

**Solutions:**

1. **Check network connection:**
   ```bash
   ping anthropic.com  # or your Bedrock endpoint
   ```

2. **Simplify your prompt:**
   - Break complex requests into smaller steps
   - Be more specific to reduce processing time

3. **Check API rate limits:**
   - Anthropic API: Check your usage tier
   - AWS Bedrock: Check throttling limits

4. **Restart and try again:**
   ```bash
   # Sometimes a fresh start helps
   claude "your prompt"
   ```

5. **Check file size:**
   - Very large codebases can slow down Claude Code
   - Consider using `.claudeignore` to exclude unnecessary files

---

## Project Setup Issues

### Issue: "Cannot find module" errors

**Symptoms:**
```
Error: Cannot find module '@/components/ui/button'
Error: Module not found: Can't resolve 'drizzle-orm'
```

**Solutions:**

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Clear and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Check package.json:**
   - Ensure all required packages are listed
   - Run `npm install` after adding new packages

4. **Verify TypeScript paths:**
   Check `tsconfig.json` has:
   ```json
   {
     "compilerOptions": {
       "paths": {
         "@/*": ["./*"]
       }
     }
   }
   ```

---

### Issue: Database errors or missing tables

**Symptoms:**
```
SqliteError: no such table: customers
Error: SQLITE_ERROR: no such table
```

**Solutions:**

1. **Generate and run migrations:**
   ```bash
   npx drizzle-kit generate
   npx drizzle-kit migrate
   ```

2. **Delete and recreate database:**
   ```bash
   rm northwind.db
   npx drizzle-kit generate
   npx drizzle-kit migrate
   ```

3. **Check schema file:**
   - Ensure `drizzle/schema.ts` exists
   - Verify table definitions are correct

4. **Verify database file:**
   ```bash
   ls -la northwind.db  # Should exist and have size > 0
   ```

5. **Use Drizzle Studio to inspect:**
   ```bash
   npx drizzle-kit studio
   ```
   Open http://localhost:4983 to view tables

---

### Issue: "Port 3000 already in use"

**Symptoms:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solutions:**

1. **Kill process on port 3000:**
   
   **macOS/Linux:**
   ```bash
   lsof -ti:3000 | xargs kill -9
   ```
   
   **Windows:**
   ```bash
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

2. **Use a different port:**
   ```bash
   PORT=3001 npm run dev
   ```

3. **Check for other Next.js instances:**
   ```bash
   ps aux | grep next  # macOS/Linux
   tasklist | findstr node  # Windows
   ```

---

### Issue: TypeScript errors in editor

**Symptoms:**
- Red squiggly lines everywhere
- "Cannot find name" errors
- Import statements showing errors

**Solutions:**

1. **Restart TypeScript server:**
   - VS Code: `Cmd/Ctrl + Shift + P` → "TypeScript: Restart TS Server"

2. **Ensure dependencies installed:**
   ```bash
   npm install
   ```

3. **Check tsconfig.json:**
   Verify it includes:
   ```json
   {
     "compilerOptions": {
       "strict": true,
       "jsx": "preserve",
       "paths": {
         "@/*": ["./*"]
       }
     },
     "include": ["**/*.ts", "**/*.tsx"],
     "exclude": ["node_modules"]
   }
   ```

4. **Reload VS Code window:**
   `Cmd/Ctrl + Shift + P` → "Developer: Reload Window"

5. **Check for conflicting TypeScript versions:**
   ```bash
   npm list typescript
   ```

---

### Issue: shadcn/ui components not found

**Symptoms:**
```
Cannot find module '@/components/ui/button'
```

**Solutions:**

1. **Install shadcn/ui components:**
   ```bash
   npx shadcn@latest add button
   npx shadcn@latest add card
   npx shadcn@latest add table
   # etc.
   ```

2. **Check components/ui directory:**
   ```bash
   ls components/ui/
   ```
   Should contain the component files.

3. **Verify components.json:**
   Ensure configuration is correct for your project structure.

4. **Reinstall specific component:**
   ```bash
   npx shadcn@latest add button --overwrite
   ```

---

### Issue: Tailwind styles not applying

**Symptoms:**
- Components render but have no styling
- Classes like `flex`, `p-4` don't work

**Solutions:**

1. **Check tailwind.config.ts:**
   Verify content paths include all files:
   ```typescript
   export default {
     content: [
       "./app/**/*.{js,ts,jsx,tsx,mdx}",
       "./components/**/*.{js,ts,jsx,tsx,mdx}",
     ],
   }
   ```

2. **Restart dev server:**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

3. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

4. **Check globals.css is imported:**
   In `app/layout.tsx`:
   ```tsx
   import "@/app/globals.css"
   ```

---

## Runtime Errors

### Issue: "notFound is not a function"

**Symptoms:**
```
TypeError: notFound is not a function
```

**Solutions:**

1. **Import from next/navigation:**
   ```tsx
   import { notFound } from 'next/navigation'
   ```

2. **Not from next/router:**
   ```tsx
   // ❌ Wrong
   import { notFound } from 'next/router'
   
   // ✅ Correct
   import { notFound } from 'next/navigation'
   ```

---

### Issue: "Hydration failed" errors

**Symptoms:**
```
Error: Hydration failed because the initial UI does not match what was rendered on the server
```

**Solutions:**

1. **Check for client-side only code in server components:**
   - Don't use `useState`, `useEffect` in server components
   - Add `"use client"` directive when needed

2. **Ensure consistent rendering:**
   - Don't use `Date.now()` or `Math.random()` directly
   - Use same data on server and client

3. **Check for invalid HTML nesting:**
   - No `<div>` inside `<p>`
   - No block elements inside `<a>`

4. **Clear browser cache and reload:**
   - Hard refresh: `Cmd/Ctrl + Shift + R`

---

### Issue: Server actions not working

**Symptoms:**
- Functions don't execute
- No data returned
- Silent failures

**Solutions:**

1. **Add 'use server' directive:**
   ```typescript
   'use server'
   
   export async function myAction() {
     // ...
   }
   ```

2. **Check return value:**
   Server actions must return serializable data:
   ```typescript
   // ❌ Wrong - returns undefined
   export async function myAction() {
     await db.insert(...)
   }
   
   // ✅ Correct
   export async function myAction() {
     await db.insert(...)
     return { success: true }
   }
   ```

3. **Check for errors in console:**
   - Open browser DevTools
   - Check Console and Network tabs

4. **Add error handling:**
   ```typescript
   try {
     // action code
   } catch (error) {
     console.error('Action error:', error)
     return { success: false, error: error.message }
   }
   ```

---

### Issue: Drizzle queries not working

**Symptoms:**
- Empty results
- SQL errors
- Type errors

**Solutions:**

1. **Check import paths:**
   ```typescript
   import { db } from '@/db'
   import { customers } from '@/drizzle/schema'
   ```

2. **Verify table names match schema:**
   ```typescript
   // In schema.ts
   export const customers = sqliteTable('customers', { ... })
   
   // In actions
   db.select().from(customers)  // Use exported const
   ```

3. **Check for typos in column names:**
   ```typescript
   // ❌ Wrong
   where: eq(customers.customrId, id)
   
   // ✅ Correct
   where: eq(customers.customerId, id)
   ```

4. **Use Drizzle Studio to verify data:**
   ```bash
   npx drizzle-kit studio
   ```

---

## Exercise-Specific Issues

### Exercise 1: Loading State

**Issue: Loading state not showing**

**Solutions:**

1. **Verify file location:**
   ```
   app/customers/loading.tsx  ✅ Correct
   app/loading.tsx  ❌ Wrong (global loading)
   ```

2. **Test with artificial delay:**
   ```tsx
   // In page.tsx
   await new Promise(resolve => setTimeout(resolve, 2000))
   ```

3. **Clear browser cache:**
   Hard refresh the page.

---

### Exercise 2: Employee Details

**Issue: "Employee not found" for all IDs**

**Solutions:**

1. **Check parameter type:**
   ```tsx
   // ❌ Wrong - params.id is string
   const employee = await db.query.employees.findFirst({
     where: eq(employees.employeeId, params.id)
   })
   
   // ✅ Correct - convert to number
   const employeeId = parseInt(params.id)
   const employee = await db.query.employees.findFirst({
     where: eq(employees.employeeId, employeeId)
   })
   ```

2. **Check database has data:**
   ```bash
   npx drizzle-kit studio
   ```
   Verify employees table has records.

3. **Add logging:**
   ```typescript
   console.log('Looking for employee:', params.id)
   console.log('Found:', employee)
   ```

---

### Exercise 3: Dashboard

**Issue: Chart not rendering**

**Solutions:**

1. **Install recharts:**
   ```bash
   npm install recharts
   ```

2. **Add "use client" to chart component:**
   ```tsx
   "use client"
   
   import { BarChart, Bar } from "recharts"
   ```

3. **Check data format:**
   ```typescript
   // Recharts expects array of objects
   const data = [
     { category: 'Beverages', revenue: 5000 },
     { category: 'Condiments', revenue: 3000 }
   ]
   ```

4. **Verify ChartContainer is imported:**
   ```tsx
   import { ChartContainer } from "@/components/ui/chart"
   ```

---

### Exercise 4: Search

**Issue: Search returns no results**

**Solutions:**

1. **Check LIKE syntax:**
   ```typescript
   // ✅ Correct
   where: like(customers.customerName, `%${query}%`)
   
   // ❌ Wrong
   where: like(customers.customerName, query)
   ```

2. **Case sensitivity:**
   SQLite LIKE is case-insensitive by default, but verify:
   ```typescript
   where: like(sql`lower(${customers.customerName})`, `%${query.toLowerCase()}%`)
   ```

3. **Check minimum query length:**
   ```typescript
   if (query.length < 2) {
     return { customers: [], products: [], orders: [] }
   }
   ```

4. **Add logging:**
   ```typescript
   console.log('Searching for:', query)
   console.log('Found customers:', results.length)
   ```

---

## Performance Issues

### Issue: Page loads slowly

**Solutions:**

1. **Check for N+1 queries:**
   Use joins or relational queries instead of multiple queries:
   ```typescript
   // ❌ N+1 problem
   const orders = await db.select().from(orders)
   for (const order of orders) {
     const customer = await db.select().from(customers).where(...)
   }
   
   // ✅ Better - single query with join
   const ordersWithCustomers = await db
     .select()
     .from(orders)
     .leftJoin(customers, eq(orders.customerId, customers.customerId))
   ```

2. **Add limits to queries:**
   ```typescript
   .limit(100)  // Don't fetch all records
   ```

3. **Use pagination:**
   ```typescript
   .limit(pageSize)
   .offset(page * pageSize)
   ```

4. **Check database indexes:**
   Add indexes for frequently queried columns.

---

## Getting Help During Workshop

### Before Asking for Help

1. **Check the error message carefully**
   - Read the full error
   - Note the file and line number
   - Check for typos

2. **Check this troubleshooting guide**
   - Search for keywords from your error

3. **Check the browser console**
   - Open DevTools (F12)
   - Look in Console and Network tabs

4. **Try the obvious fixes first**
   - Restart dev server
   - Clear cache
   - Reinstall dependencies

### When Asking for Help

**Provide this information:**

1. **What you're trying to do:**
   "I'm working on Exercise 2, trying to create the employee details page"

2. **What's happening:**
   "The page loads but shows 'Employee not found' for all IDs"

3. **Error messages:**
   Paste the exact error from console or terminal

4. **What you've tried:**
   "I've checked the database and employees exist. I've restarted the server."

5. **Code snippet:**
   Share the relevant code (not the entire file)

### Workshop Resources

- **Facilitator:** Raise hand or use Zoom reaction
- **Chat:** Post in workshop chat with `@help` tag
- **Pair programming:** Ask neighbor for help
- **Documentation:** Check the cheat sheet and exercise instructions

---

## Emergency Fixes

### Nuclear Option: Complete Reset

If everything is broken and you want to start fresh:

```bash
# 1. Save your work (if any)
git add .
git commit -m "Save work in progress"

# 2. Clean everything
rm -rf node_modules package-lock.json .next northwind.db

# 3. Reinstall
npm install

# 4. Reset database
npx drizzle-kit generate
npx drizzle-kit migrate

# 5. Restart dev server
npm run dev
```

### Switch to Solution Branch

If stuck and running out of time:

```bash
# Save your attempt
git add .
git commit -m "My attempt at exercise 2"

# Switch to solution
git fetch origin
git checkout solution-2-employee-details

# Study the solution
npm install
npm run dev
```

---

## Prevention Tips

### Good Practices to Avoid Issues

1. **Save frequently:**
   ```bash
   git add .
   git commit -m "Working state"
   ```

2. **Test after each change:**
   Don't make multiple changes before testing

3. **Read error messages:**
   They usually tell you exactly what's wrong

4. **Use TypeScript:**
   It catches many errors before runtime

5. **Follow existing patterns:**
   Copy-paste-modify working code

6. **Keep dev server running:**
   Watch for build errors in real-time

7. **Use console.log:**
   Add logging to understand what's happening
   ```typescript
   console.log('Data:', data)
   console.log('Query:', query)
   ```

---

## Still Stuck?

If none of these solutions work:

1. **Take a break** - Come back with fresh eyes
2. **Explain the problem to someone else** - Rubber duck debugging
3. **Search the error** - Google or ChatGPT the exact error message
4. **Check documentation** - Next.js, Drizzle, shadcn/ui docs
5. **Ask for help** - Don't stay stuck for more than 10 minutes

Remember: Getting stuck is part of learning! Every developer encounters these issues.
