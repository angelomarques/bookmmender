import { TRPCClientError } from "@trpc/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getErrorMessage(error: unknown) {
  if (error instanceof TRPCClientError) {
    const resetTime = Number(error.message) ? Number(error.message) : null;

    if (resetTime) {
      const date = new Date(resetTime);

      // Format: "March 26, 8:30 PM"
      const formattedDate = date.toLocaleString("en-US", {
        month: "long", // Full month name (e.g., "March")
        day: "numeric", // Day of the month (e.g., "26")
        hour: "numeric", // Hour (12-hour format)
        minute: "2-digit", // Minute (e.g., "05")
        hour12: true, // Use AM/PM
      });

      return `You’ve reached your recommendation limit for now. Try again at ${formattedDate}`;
    }

    return error.message;
  }

  return "An error ocurred. Please try again later";
}
