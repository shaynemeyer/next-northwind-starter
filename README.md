# Claude Code Workshop: Next.js Northwind

A comprehensive workshop repository for learning **Claude Code** through hands-on development with a modern Next.js 15 application. This workshop teaches AI-powered development using the classic Northwind database as a foundation, showcasing best practices for building data-driven applications with React Server Components, SQLite, and Drizzle ORM.

## 🎯 Workshop Overview

This repository contains:
- **Complete Next.js 15 application** with modern React patterns
- **4 progressive exercises** for hands-on learning
- **Workshop materials** including setup guides and troubleshooting
- **Multiple branches** with starter code and solutions
- **Post-workshop challenges** for continued learning

## Features

- **Modern Stack**: Next.js 15 with React 19 and App Router
- **Type-Safe Database**: Drizzle ORM with SQLite
- **Beautiful UI**: shadcn/ui components with Tailwind CSS 4
- **Data Tables**: Interactive tables with sorting, filtering, and pagination using TanStack Table
- **Server Actions**: Type-safe data fetching with React Server Actions
- **Dashboard Layout**: Responsive sidebar navigation with collapsible sections

## 🏋️‍♂️ Workshop Exercises

The workshop includes 4 progressive hands-on exercises designed to teach Claude Code through practical development:

| Exercise | Difficulty | Time | Skills |
|----------|-----------|------|--------|
| [Exercise 1: Loading State](./exercises/EXERCISE-1.md) | ⭐ Easy | 15-20 min | Next.js loading states, shadcn/ui |
| [Exercise 2: Employee Details](./exercises/EXERCISE-2.md) | ⭐⭐ Medium | 30-40 min | Dynamic routes, Drizzle relations, server actions |
| [Exercise 3: Dashboard](./exercises/EXERCISE-3.md) | ⭐⭐⭐ Advanced | 45-60 min | Aggregations, charts, complex queries |
| [Exercise 4: Global Search](./exercises/EXERCISE-4.md) | ⭐⭐⭐ Bonus | 45-60 min | Full-text search, debouncing, UI state |

Each exercise includes:
- Clear step-by-step instructions
- Starter branches with TODO comments
- Solution branches for reference
- Claude Code prompt suggestions
- Common troubleshooting tips

See the [Exercise Overview](./exercises/README.md) for detailed guidance.

## Tech Stack

- **Framework**: [Next.js 15.5.5](https://nextjs.org/) with React 19
- **Database**: SQLite via [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) with Drizzle Kit for migrations
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) built on Radix UI primitives
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Data Tables**: [TanStack Table](https://tanstack.com/table) (React Table v8)
- **Icons**: [Lucide React](https://lucide.dev/)
- **TypeScript**: Strict mode enabled

## 🚀 Getting Started (Workshop Participants)

### Prerequisites

- **Node.js 20+** and npm/pnpm
- **Claude Code CLI** - Install from [claude.ai/code](https://claude.ai/code)
- **Git** for branch switching during exercises
- **VS Code** (recommended) or your preferred editor

### Workshop Setup

1. **Clone the workshop repository:**
```bash
git clone <workshop-repo-url>
cd next-northwind-starter
```

2. **Install dependencies:**
```bash
npm install
```

3. **Initialize the database:**
```bash
# The database comes pre-populated, but if needed:
npx drizzle-kit generate
npx drizzle-kit migrate
```

4. **Verify setup works:**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) - you should see the Northwind dashboard.

5. **Test Claude Code integration:**
```bash
claude --version
```

### For Self-Paced Learning

If you're not in a live workshop:

1. Start with the [Setup Guide](./docs/SETUP.md)
2. Review the [Workshop Agenda](./workshop/AGENDA.md) 
3. Begin with [Exercise 1](./exercises/EXERCISE-1.md)
4. Use the [Troubleshooting Guide](./docs/TROUBLESHOOTING.md) if needed

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
├── 📱 app/                      # Next.js App Router pages
│   ├── customers/              # Customer management
│   │   ├── page.tsx           # Server component
│   │   └── columns.tsx        # Table column definitions
│   ├── employees/             # Employee listing
│   ├── products/              # Product catalog
│   ├── categories/            # Category management
│   ├── suppliers/             # Supplier management  
│   ├── shippers/              # Shipper management
│   └── territories/           # Territory management
├── 🧩 components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── data-table.tsx    # Generic data table
│   │   ├── skeleton.tsx      # Loading skeletons
│   │   └── ...               # Button, Card, Input, etc.
│   ├── app-sidebar.tsx       # Main navigation sidebar
│   ├── nav-catalog.tsx       # Product catalog nav
│   └── nav-management.tsx    # Management nav
├── 🗄️ db/
│   ├── index.ts              # Database connection (exports `db`)
│   └── actions/              # Server Actions
│       ├── customers.ts      # Customer queries
│       └── employees.ts      # Employee queries
├── 📊 drizzle/
│   ├── schema.ts             # Database table definitions
│   ├── relations.ts          # Table relationships
│   └── meta/                 # Migration metadata
├── 📚 exercises/              # Workshop exercises
│   ├── README.md             # Exercise overview & instructions
│   ├── EXERCISE-1.md         # Loading states exercise
│   ├── EXERCISE-2.md         # Employee details exercise
│   ├── EXERCISE-3.md         # Dashboard exercise
│   └── EXERCISE-4.md         # Global search exercise
├── 🎓 workshop/               # Workshop materials
│   ├── AGENDA.md             # Workshop schedule
│   ├── DEMO-SCRIPTS.md       # Facilitator demo scripts
│   ├── MASTER-CHECKLIST.md   # Workshop checklist
│   └── PARTICIPANT-HANDOUT.md # Quick reference
├── 📖 docs/                   # Documentation
│   ├── SETUP.md              # Environment setup
│   ├── TROUBLESHOOTING.md    # Common issues
│   ├── CHEAT-SHEET.md        # Claude Code quick reference
│   ├── POST-WORKSHOP-CHALLENGES.md # Extra practice
│   └── diagrams/             # Architecture diagrams
├── 🛠️ lib/
│   ├── constants/navItems.ts # Navigation configuration
│   └── utils.ts              # Utility functions  
├── 🗃️ scripts/               # Database scripts
│   └── create.sql            # Database creation script
├── drizzle.config.ts         # Drizzle Kit configuration
├── northwind.db              # SQLite database file
└── CLAUDE.md                 # AI assistant guidance
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

## 📚 Workshop Resources

### For Participants
- 📋 [Setup Guide](./docs/SETUP.md) - Complete environment setup instructions
- 🆘 [Troubleshooting](./docs/TROUBLESHOOTING.md) - Common issues and solutions  
- 📄 [Cheat Sheet](./docs/CHEAT-SHEET.md) - Claude Code commands and shortcuts
- 🏆 [Post-Workshop Challenges](./docs/POST-WORKSHOP-CHALLENGES.md) - 10 additional practice projects

### For Facilitators
- 📅 [Workshop Agenda](./workshop/AGENDA.md) - Complete 3-hour workshop timeline
- 🎬 [Demo Scripts](./workshop/DEMO-SCRIPTS.md) - Live demo instructions
- ✅ [Master Checklist](./workshop/MASTER-CHECKLIST.md) - Pre-workshop preparation
- 📖 [Participant Handout](./workshop/PARTICIPANT-HANDOUT.md) - Quick reference guide

### Documentation & Diagrams
- 🏗️ [Architecture Overview](./docs/diagrams/architecture.md) - System architecture
- 🔄 [Data Flow](./docs/diagrams/data-flow.md) - Request/response patterns  
- 🗄️ [Database Schema](./docs/diagrams/database-schema.md) - Northwind ERD

### External Resources
- 🤖 [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- ⚡ [Next.js 15 Docs](https://nextjs.org/docs)
- 🗃️ [Drizzle ORM](https://orm.drizzle.team/)
- 🎨 [shadcn/ui](https://ui.shadcn.com/)

## 🤝 Contributing

This is a workshop repository! Contributions welcome:
- 🐛 **Bug fixes** - Improve exercise instructions or fix setup issues
- 📝 **Documentation** - Better explanations or additional examples  
- 🆕 **New exercises** - Additional Claude Code learning scenarios
- 🎯 **Improvements** - Better prompts or teaching techniques

Please feel free to submit a Pull Request or open an issue.

## 📄 License

MIT License - Feel free to use this workshop content for educational purposes.
