import { QuestionsSchemaType } from "@/service/questions/schema";
import { BookRecommendationType } from "@/service/recommendations/types";
import { create } from "zustand";

type StatusType = "unset" | "loading" | "completed" | "failed";

interface RecommendationsState {
  questions: QuestionsSchemaType | null;
  books: BookRecommendationType[];
  setBooks: (newBooks: BookRecommendationType[]) => void;
  status: StatusType;
  setStatus: (newStatus: StatusType) => void;
  setQuestions: (newQuestions: QuestionsSchemaType) => void;
  errorMessage?: string;
  setErrorMessage: (message: string) => void;
}

export const useRecommendationsStore = create<RecommendationsState>()(
  (set) => ({
    questions: null,
    books: [],
    setBooks: (newBooks) => set((state) => ({ ...state, books: newBooks })),
    status: "unset",
    setStatus: (newStatus) => set((state) => ({ ...state, status: newStatus })),
    setQuestions: (newQuestions) =>
      set((state) => ({ ...state, questions: newQuestions })),
    setErrorMessage: (message) =>
      set((state) => ({ ...state, errorMessage: message })),
  })
);
