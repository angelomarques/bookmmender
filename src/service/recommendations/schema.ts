import { z } from "zod";
import { QuestionsSchema } from "../questions/schema";

export const BookSchema = z.object({
  title: z.string(),
  author: z.string(),
  synopsis: z.string(),
  why: z.string(),
});

export const RecommendationsSchema = z.object({
  data: z.array(BookSchema),
});

export const CreateRecommendationSchema = z.object({
  previousList: z
    .array(
      BookSchema.pick({
        title: true,
        author: true,
      })
    )
    .optional(),
  questions: QuestionsSchema,
});

export type RecommendationsSchemaType = z.infer<typeof RecommendationsSchema>;

export type BookSchemaType = z.infer<typeof BookSchema>;

export type CreateRecommendationSchemaType = z.infer<
  typeof CreateRecommendationSchema
>;
