import { z } from "zod";

export const RecommendationsSchema = z.object({
  data: z.array(
    z.object({
      title: z.string(),
      author: z.string(),
      synopsis: z.string(),
      why: z.string(),
    })
  ),
});

export type RecommendationsSchemaType = z.infer<typeof RecommendationsSchema>;
