import { env } from "@/env";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getBook } from "@/service/library";
import {
  QuestionsSchema,
  QuestionsSchemaType,
} from "@/service/questions/schema";
import { RecommendationsSchema } from "@/service/recommendations/schema";
import { BookRecommendationType } from "@/service/recommendations/types";
import { google } from "@ai-sdk/google";
import { TRPCError } from "@trpc/server";
import { generateObject } from "ai";

export const recommendationsRouter = createTRPCRouter({
  create: publicProcedure
    .input(QuestionsSchema)
    .mutation(async ({ ctx, input }): Promise<BookRecommendationType[]> => {
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

      let prompt = promptData.content;

      Object.entries(input).forEach(([key, value]) => {
        const property = key as keyof QuestionsSchemaType;
        const propertyReplacer = `{{${property}}}`;

        if (!value.length) {
          prompt = prompt.replace(propertyReplacer, "---");
          return;
        }

        prompt = prompt.replace(propertyReplacer, value.join(", ") + ";");
      });

      const response = await generateObject({
        prompt,
        model: google("gemini-2.0-flash-001"),
        schema: RecommendationsSchema,
      });

      // TODO: review
      ctx.posthog.capture({
        // TODO: get some kind of user id
        distinctId: "test",
        event: "bookmmender_recommendation_object_created",
        properties: {
          response,
        },
      });

      const books = response.object.data;

      const covers = await Promise.all(
        books.map((item) => getBook(item.title, item.author))
      );

      const res: BookRecommendationType[] = books.map((item, index) => ({
        ...item,
        ...covers.at(index),
      }));

      return res;
    }),
});
