import { z } from "zod";

export const BookSchema = z.object({
  title: z.string(),
  author: z.string(),
  synopsis: z.string(),
  why: z.string(),
});

export const RecommendationsSchema = z.object({
  data: z.array(BookSchema),
});

export type RecommendationsSchemaType = z.infer<typeof RecommendationsSchema>;

export type BookSchemaType = z.infer<typeof BookSchema>;
