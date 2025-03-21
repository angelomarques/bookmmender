"use client";

import { Button } from "@/components/ui/button";
import { useRecommendationsStore } from "@/store/recommendations";

export function ErrorDescription() {
  const setStatus = useRecommendationsStore((state) => state.setStatus);
  const status = useRecommendationsStore((state) => state.status);
  const isErrorHidden = status !== "failed";

  function resetAnswers() {
    setStatus("unset");
  }

  if (isErrorHidden) return null;

  return (
    <div>
      <h3 className="text-center">An Error Occurred. Try again later</h3>

      <div className="flex gap-4 justify-center mt-5">
        <Button onClick={resetAnswers} variant="secondary">
          Give new Answers
        </Button>

        <Button>Retry</Button>
      </div>
    </div>
  );
}
