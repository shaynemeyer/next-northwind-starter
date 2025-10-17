import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

// Create the connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
// Create the drizzle instance
export const db = drizzle(pool);
