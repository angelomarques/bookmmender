import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST() {
  // TODO: Implement with stream Object
  const response = await generateObject({
    model: google("gemini-2.0-flash-001"),
    prompt: "Write a vegetarian lasagna recipe for 4 people.",
    schema: z.object({
      text: z.string(),
      title: z.string(),
      ingredients: z.array(z.string()),
    }),
  });

  return NextResponse.json(response.response);
}
