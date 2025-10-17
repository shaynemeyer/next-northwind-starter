import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from '../drizzle/schema';

// Create SQLite database connection
const sqlite = new Database('northwind.db');

// Create Drizzle instance with the connection
export const db = drizzle(sqlite, { schema });
