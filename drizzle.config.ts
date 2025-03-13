import { defineConfig } from "drizzle-kit";

import { env } from "@/env";

export default defineConfig({
  dialect: "postgresql", // 'mysql' | 'sqlite' | 'turso'
  schema: "./src/server/db/schema.ts",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["bookmmender_*"],
});
