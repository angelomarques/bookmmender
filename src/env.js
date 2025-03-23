import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    BOOK_RECOMMENDER_PROMPT_ID: z.string(),
    BOOK_RECOMMENDER_PROMPT: z.string(),
    LIBRARY_API_URL: z.string().url(),
    LIBRARY_API_USER_AGENT: z.string(),
    LIBRARY_API_BOOK_COVER_HOST_URL: z.string().url(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_POSTHOG_KEY: z.string(),
    NEXT_PUBLIC_POSTHOG_HOST: z.string().url(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    BOOK_RECOMMENDER_PROMPT: process.env.BOOK_RECOMMENDER_PROMPT,
    BOOK_RECOMMENDER_PROMPT_ID: process.env.BOOK_RECOMMENDER_PROMPT_ID,
    LIBRARY_API_URL: process.env.LIBRARY_API_URL,
    LIBRARY_API_USER_AGENT: process.env.LIBRARY_API_USER_AGENT,
    LIBRARY_API_BOOK_COVER_HOST_URL:
      process.env.LIBRARY_API_BOOK_COVER_HOST_URL,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
