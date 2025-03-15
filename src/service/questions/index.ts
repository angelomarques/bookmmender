import { QuestionType } from "./types";

export const questions: QuestionType[] = [
  {
    property: "genre",
    title: "What Genre Sparks Your Curiosity?",
    description:
      "Explore the world of books by selecting the genres that captivate you the most. Whether you're into thrilling mysteries, heartwarming romances, or epic fantasies",
    options: [
      {
        label: "Mystery & Thriller",
        value: "Mystery & Thriller",
      },
      {
        label: "Romance",
        value: "Romance",
      },
      {
        label: "Science Fiction & Fantasy",
        value: "Science Fiction & Fantasy",
      },
      {
        label: "Historical Fiction",
        value: "Historical Fiction",
      },
      {
        label: "Non-Fiction & Biographies",
        value: "Non-Fiction & Biographies",
      },
    ],
  },
  {
    property: "mood",
    title: "What’s Your Current Mood?",
    description:
      "Books have the power to match your emotions. Whether you're feeling adventurous, reflective, or in need of a good laugh",
    options: [
      {
        label: "Adventurous & Excited",
        value: "Adventurous & Excited",
      },
      {
        label: "Reflective & Thoughtful",
        value: "Reflective & Thoughtful",
      },
      {
        label: "Happy & Lighthearted",
        value: "Happy & Lighthearted",
      },
      {
        label: "Melancholic & Emotional",
        value: "Melancholic & Emotional",
      },
      {
        label: "Curious & Inquisitive",
        value: "Curious & Inquisitive",
      },
    ],
  },
  {
    property: "agePeriod",
    title: "Travel Through Time: Which Era Fascinates You?",
    description:
      "Do you love stories set in the past, present, or future? Choose the time period that intrigues you the most",
    options: [
      {
        label: "Ancient History (Before 500 AD)",
        value: "Ancient History (Before 500 AD)",
      },
      {
        label: "Medieval & Renaissance (500–1700)",
        value: "Medieval & Renaissance (500–1700)",
      },
      {
        label: "19th Century (1800s)",
        value: "19th Century (1800s)",
      },
      {
        label: "20th Century (1900s)",
        value: "20th Century (1900s)",
      },
      {
        label: "Futuristic & Dystopian",
        value: "Futuristic & Dystopian",
      },
    ],
  },
  {
    property: "bookLength",
    title: "How Much Time Do You Want to Invest?",
    description:
      "Whether you're looking for a quick read or an epic saga, let us know how long you want your next book to be",
    options: [
      {
        label: "Short & Sweet (Under 200 pages)",
        value: "Short & Sweet (Under 200 pages)",
      },
      {
        label: "Moderate Read (200–400 pages)",
        value: "Moderate Read (200–400 pages)",
      },
      {
        label: "Long & Engaging (400–600 pages)",
        value: "Long & Engaging (400–600 pages)",
      },
      {
        label: "Epic Journey (600–800 pages)",
        value: "Epic Journey (600–800 pages)",
      },
      {
        label: "Marathon Read (800+ pages)",
        value: "Marathon Read (800+ pages)",
      },
    ],
  },
] as const;
