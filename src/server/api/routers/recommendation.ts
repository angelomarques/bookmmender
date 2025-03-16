import { env } from "@/env";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getBook } from "@/service/library";
import {
  QuestionsSchema,
  QuestionsSchemaType,
} from "@/service/questions/schema";
import { RecommendationsSchema } from "@/service/recommendations/schema";
import { google } from "@ai-sdk/google";
import { TRPCError } from "@trpc/server";
import { generateObject } from "ai";

export const recommendationsRouter = createTRPCRouter({
  create: publicProcedure
    .input(QuestionsSchema)
    .mutation(async ({ ctx, input }) => {
      const promptData = await ctx.db.query.prompts.findFirst({
        where: (prompts, { eq }) =>
          eq(prompts.id, Number(env.BOOK_RECOMMENDER_PROMPT)),
      });

      if (!promptData)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "An unexpected error occurred, please try again later.",
          cause: "prompt data not found",
        });

      const prompt = promptData.content;

      Object.entries(input).forEach(([key, value]) => {
        const property = key as keyof QuestionsSchemaType;
        const propertyReplacer = `{{${property}}}`;

        if (!value.length) {
          prompt.replace(propertyReplacer, "---");
          return;
        }

        prompt.replace(propertyReplacer, value.join(", ") + ";");
      });

      const response = await generateObject({
        prompt,
        model: google("gemini-2.0-flash-001"),
        schema: RecommendationsSchema,
      });

      const books = response.object.data;

      // TODO: implement it
      // const covers = await Promise.all(
      //   books.map((item) => getBook(item.title, item.author))
      // );

      return response;
    }),
});
