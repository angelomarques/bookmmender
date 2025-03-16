import { z } from "zod";

export const QuestionsSchema = z.object({
  genre: z.array(z.string()),
  mood: z.array(z.string()),
  agePeriod: z.array(z.string()),
  bookLength: z.array(z.string()),
});

export type QuestionsSchemaType = z.infer<typeof QuestionsSchema>;
