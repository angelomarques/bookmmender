import { BookRecommendationType } from "@/service/recommendations/types";
import { create } from "zustand";

type StatusType = "unset" | "loading" | "completed" | "failed";

interface RecommendationsState {
  books: BookRecommendationType[];
  setBooks: (newBooks: BookRecommendationType[]) => void;
  status: StatusType;
  setStatus: (newStatus: StatusType) => void;
}

export const useRecommendationsStore = create<RecommendationsState>()(
  (set) => ({
    books: [],
    setBooks: (newBooks) => set((state) => ({ ...state, books: newBooks })),
    status: "unset",
    setStatus: (newStatus) => set((state) => ({ ...state, status: newStatus })),
  })
);
