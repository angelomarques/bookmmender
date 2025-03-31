"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    posthog.captureException(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-4 text-center justify-center items-center h-screen">
      <h1>Something went wrong!</h1>
      <p>We{"'"}ve logged this error and will look into it.</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
