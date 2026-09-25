import { drizzle } from "drizzle-orm/node-postgres";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@/db/schema";

/**
 * Postgres client (Neon).
 *
 * The connection string is read from `DATABASE_URL` (see .env.example).
 *
 * NOTE — runtime target
 * The production build currently targets Cloudflare Workers, where raw TCP
 * sockets are unavailable, so `pg` cannot open a connection there. Two options:
 *   1. Run this app on a Node host (works as-is).
 *   2. On Workers, swap the driver for the Neon HTTP one:
 *        import { neon } from "@neondatabase/serverless";
 *        import { drizzle } from "drizzle-orm/neon-http";
 *        export const db = drizzle(neon(process.env.DATABASE_URL!), { schema });
 * The schema, migrations and Better Auth adapter stay identical either way.
 */
const connectionString = process.env["DATABASE_URL"];

if (!connectionString) {
  throw new Error(
    "DATABASE_URL is not set. Copy .env.example to .env and paste your Neon connection string.",
  );
}

/** Survive dev hot reloads without opening a new pool on every change. */
const globalForDb = globalThis as unknown as { __ewhPool?: Pool };

export const pool =
  globalForDb.__ewhPool ??
  new Pool({
    connectionString,
    max: 5,
    idleTimeoutMillis: 30_000,
  });

globalForDb.__ewhPool = pool;

export const db: NodePgDatabase<typeof schema> = drizzle(pool, { schema });
