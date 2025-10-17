# Next.js Northwind Starter

A modern Next.js 15 application demonstrating a full-stack implementation of the classic Northwind database. This starter showcases best practices for building data-driven applications with React Server Components, SQLite, and Drizzle ORM.

## Features

- **Modern Stack**: Next.js 15 with React 19 and App Router
- **Type-Safe Database**: Drizzle ORM with SQLite
- **Beautiful UI**: shadcn/ui components with Tailwind CSS 4
- **Data Tables**: Interactive tables with sorting, filtering, and pagination using TanStack Table
- **Server Actions**: Type-safe data fetching with React Server Actions
- **Dashboard Layout**: Responsive sidebar navigation with collapsible sections

## Tech Stack

- **Framework**: [Next.js 15.5.5](https://nextjs.org/) with React 19
- **Database**: SQLite via [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) with Drizzle Kit for migrations
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) built on Radix UI primitives
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Data Tables**: [TanStack Table](https://tanstack.com/table) (React Table v8)
- **Icons**: [Lucide React](https://lucide.dev/)
- **TypeScript**: Strict mode enabled

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd next-northwind-starter
```

2. Install dependencies:
```bash
npm install
```

3. Initialize the database:
```bash
# Generate and apply migrations
npx drizzle-kit generate
npx drizzle-kit migrate

# Or seed with sample data (if you have a seed script)
npm run db:seed
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Database Commands

- `npx drizzle-kit generate` - Generate migrations from schema changes
- `npx drizzle-kit migrate` - Apply migrations to database
- `npx drizzle-kit push` - Push schema changes directly (development only)
- `npx drizzle-kit studio` - Launch Drizzle Studio to view/edit data

## Documentation

- [Architecture Diagram](./docs/diagrams/architecture.md) - Overall application architecture
- [Data Flow Diagram](./docs/diagrams/data-flow.md) - How data flows through the application
- [Database Schema](./docs/diagrams/database-schema.md) - Entity relationship diagram

## Project Structure

```
.
├── app/                      # Next.js app router pages
│   ├── customers/           # Customer listing page
│   │   ├── page.tsx        # Server component
│   │   └── columns.tsx     # Table column definitions
│   ├── employees/          # Employee listing page
│   └── products/           # Product listing page
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── data-table.tsx # Generic data table component
│   │   ├── table.tsx      # Table primitives
│   │   ├── card.tsx       # Card component
│   │   └── ...
│   ├── app-sidebar.tsx    # Main sidebar navigation
│   ├── nav-catalog.tsx    # Catalog navigation section
│   └── nav-management.tsx # Management navigation section
├── db/
│   ├── index.ts           # Database connection (exports `db`)
│   └── actions/           # Server actions for data fetching
│       ├── customers.ts
│       └── employees.ts
├── drizzle/
│   ├── schema.ts          # Database schema definitions
│   ├── relations.ts       # Relational mappings
│   └── meta/              # Migration metadata
├── lib/
│   ├── constants/
│   │   └── navItems.ts   # Navigation configuration
│   └── utils.ts          # Utility functions
├── docs/
│   └── diagrams/         # Architecture and database diagrams
├── drizzle.config.ts     # Drizzle Kit configuration
└── northwind.db          # SQLite database file
```

## Architecture Patterns

### Server Actions for Data Fetching

All database queries use React Server Actions in `db/actions/`:

```typescript
'use server'

import { db } from '@/db'
import { customers } from '@/drizzle/schema'

export async function getAllCustomers() {
  try {
    const data = await db.select().from(customers)
    return { success: true, data }
  } catch (error) {
    return { success: false, error: 'Failed to fetch customers' }
  }
}
```

### Data Table Pattern

Pages use a consistent pattern for displaying data:

1. Define columns in `columns.tsx`:
```typescript
import { ColumnDef } from "@tanstack/react-table"

export type Customer = {
  customerId: number | null
  customerName: string | null
  // ...
}

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  // ...
]
```

2. Use in page component:
```typescript
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./columns"
import { getAllCustomers } from "@/db/actions/customers"

export default async function CustomersPage() {
  const result = await getAllCustomers()

  return (
    <DataTable
      columns={columns}
      data={result.data}
      searchKey="customerName"
      searchPlaceholder="Search customers..."
    />
  )
}
```

## Database Schema

The Northwind database includes these main entities:

- **Products** → Categories, Suppliers
- **Orders** → Customers, Employees, Shippers, OrderDetails
- **OrderDetails** → Orders, Products
- **Customers** - Customer information
- **Employees** - Employee records
- **Suppliers** - Supplier details
- **Shippers** - Shipping company info
- **Categories** - Product categories

Relations are defined in `drizzle/relations.ts` and can be used with Drizzle's relational query API.

## Adding New Features

### Adding a New Entity Page

1. Create server actions in `db/actions/{entity}.ts`
2. Create column definitions in `app/{entity}/columns.tsx`
3. Create page component in `app/{entity}/page.tsx`
4. Add navigation item to `lib/constants/navItems.ts`

See [CLAUDE.md](./CLAUDE.md) for detailed development guidelines.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
