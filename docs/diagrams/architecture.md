# Application Architecture

This diagram shows the overall architecture of the Next.js Northwind Starter application.

```mermaid
graph TB
    subgraph Client["Client Layer"]
        Browser["Browser"]
        RSC["React Server Components"]
        RCC["React Client Components"]
    end

    subgraph Server["Next.js Server (App Router)"]
        Pages["Page Components<br/>(app/*/page.tsx)"]
        ServerActions["Server Actions<br/>(db/actions/*.ts)"]
        Layout["Layout & Navigation<br/>(app/layout.tsx)"]
    end

    subgraph UI["UI Components"]
        Shadcn["shadcn/ui Components<br/>(components/ui/*)"]
        DataTable["DataTable Component<br/>(TanStack Table)"]
        Columns["Column Definitions<br/>(app/*/columns.tsx)"]
    end

    subgraph Data["Data Layer"]
        Drizzle["Drizzle ORM<br/>(db/index.ts)"]
        Schema["Schema & Relations<br/>(drizzle/*.ts)"]
        SQLite["SQLite Database<br/>(northwind.db)"]
    end

    Browser --> RSC
    Browser --> RCC
    RSC --> Pages
    Pages --> ServerActions
    Pages --> DataTable
    DataTable --> Columns
    DataTable -.uses.-> Shadcn
    RCC --> Shadcn

    ServerActions --> Drizzle
    Drizzle --> Schema
    Schema --> SQLite

    Layout --> Pages

    style Client fill:#e1f5ff
    style Server fill:#fff4e1
    style UI fill:#f0e1ff
    style Data fill:#e1ffe1
```

## Key Components

### Client Layer
- **Browser**: User interface running in the web browser
- **React Server Components**: Pages rendered on the server
- **React Client Components**: Interactive components (DataTable, UI components)

### Server Layer
- **Page Components**: Async server components that fetch and display data
- **Server Actions**: Type-safe data fetching functions marked with 'use server'
- **Layout & Navigation**: Root layout with sidebar navigation

### UI Components
- **shadcn/ui Components**: Reusable UI primitives (Button, Input, Table, Card, etc.)
- **DataTable Component**: Generic table with sorting, filtering, and pagination
- **Column Definitions**: Type-safe column configurations for TanStack Table

### Data Layer
- **Drizzle ORM**: Type-safe database client
- **Schema & Relations**: Database table definitions and relationships
- **SQLite Database**: Local file-based database (northwind.db)

## Technology Stack

- **Framework**: Next.js 15 with React 19 (App Router)
- **Database**: SQLite via better-sqlite3
- **ORM**: Drizzle ORM
- **UI**: shadcn/ui + Tailwind CSS 4
- **Tables**: TanStack Table (React Table v8)
