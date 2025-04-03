"use client";

import { Button } from "@/components/ui/button";
import { getErrorMessage } from "@/lib/utils";
import { useRecommendationsStore } from "@/store/recommendations";
import { api } from "@/trpc/react";
import { toast } from "sonner";

export function ErrorDescription() {
  const setStatus = useRecommendationsStore((state) => state.setStatus);
  const setQuestions = useRecommendationsStore((state) => state.setQuestions);
  const setBooks = useRecommendationsStore((state) => state.setBooks);
  const setErrorMessage = useRecommendationsStore(
    (state) => state.setErrorMessage
  );
  const questions = useRecommendationsStore((state) => state.questions);
  const errorMessage =
    useRecommendationsStore((state) => state.errorMessage) ??
    "An error ocurred. Please try again later";
  const status = useRecommendationsStore((state) => state.status);
  const isErrorHidden = status !== "failed";

  function resetAnswers() {
    setQuestions(null);
    setStatus("unset");
    setErrorMessage("");
  }

  const { mutateAsync: createRecommendation } =
    api.recommendation.create.useMutation();

  function retry() {
    if (!questions) return toast.error("No questions answered yet");

    toast.promise(() => createRecommendation({ questions }), {
      success: (data) => {
        setStatus("completed");
        setBooks(data);

        return "Recommendation created";
      },
      loading: (() => {
        setStatus("loading");

        return "Loading";
      })(),
      error: (error) => {
        setStatus("failed");
        const errorMessage = getErrorMessage(error);

        setErrorMessage(errorMessage);
        return errorMessage;
      },
    });
  }

  if (isErrorHidden) return null;

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-center text-3xl">Error Occurred</h2>

      <p className="mt-4">{errorMessage}</p>

      <div className="flex gap-4 justify-center mt-5">
        <Button onClick={resetAnswers} variant="secondary">
          Give new Answers
        </Button>

        <Button onClick={retry}>Retry</Button>
      </div>
    </div>
  );
}
