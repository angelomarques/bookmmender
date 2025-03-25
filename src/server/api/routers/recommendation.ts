import { env } from "@/env";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getBook } from "@/service/library";
import { QuestionsSchemaType } from "@/service/questions/schema";
import {
  CreateRecommendationSchema,
  RecommendationsSchema,
} from "@/service/recommendations/schema";
import { BookRecommendationType } from "@/service/recommendations/types";
import { google } from "@ai-sdk/google";
import { TRPCError } from "@trpc/server";
import { generateObject } from "ai";

export const recommendationsRouter = createTRPCRouter({
  create: publicProcedure
    .input(CreateRecommendationSchema)
    .mutation(async ({ ctx, input }): Promise<BookRecommendationType[]> => {
      if ((input?.previousList?.length ?? 0) >= 15)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message:
            "You have reached the maximum number of recommendations for this preference. Cannot load more.",
        });

      let prompt = env.BOOK_RECOMMENDER_PROMPT;

      const questionKeys: (keyof QuestionsSchemaType)[] = [
        "agePeriod",
        "bookLength",
        "genre",
        "mood",
      ];

      const { questions, previousList } = input;

      questionKeys.forEach((key) => {
        const value = questions[key];
        const propertyReplacer = `{{${key}}}`;

        if (!value?.length) {
          prompt = prompt.replace(propertyReplacer, "---");
          return;
        }

        prompt = prompt.replace(propertyReplacer, value.join(", ") + ";");
      });

      const previousBooksListReplacer = "{{previousBooksList}}";
      if (previousList?.length) {
        const previousListPrompt = previousList.reduce(
          (acc, curr) =>
            acc + `- Title: ${curr.title} | Author: ${curr.author} \n`,
          ""
        );

        prompt = prompt.replace(previousBooksListReplacer, previousListPrompt);
      } else {
        prompt = prompt.replace(previousBooksListReplacer, "-");
      }

      const response = await generateObject({
        prompt,
        model: google("gemini-2.0-flash-001"),
        schema: RecommendationsSchema,
      });

      // TODO: review
      ctx.posthog.capture({
        distinctId: ctx.ip,
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
