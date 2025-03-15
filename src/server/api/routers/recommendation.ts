import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const recommendationsRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      console.log("input", input);
    }),
});
