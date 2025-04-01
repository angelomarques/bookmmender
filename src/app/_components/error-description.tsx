"use client";

import { Button } from "@/components/ui/button";
import { useRecommendationsStore } from "@/store/recommendations";

export function ErrorDescription() {
  const setStatus = useRecommendationsStore((state) => state.setStatus);
  const errorMessage =
    useRecommendationsStore((state) => state.errorMessage) ??
    "An error ocurred. Please try again later";
  const status = useRecommendationsStore((state) => state.status);
  const isErrorHidden = status !== "failed";

  function resetAnswers() {
    setStatus("unset");
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

        <Button>Retry</Button>
      </div>
    </div>
  );
}
