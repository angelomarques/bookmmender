import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      console.log("input", input);
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const prompt = await ctx.db.query.prompts.findFirst({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });

    return prompt ?? null;
  }),
});
