"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardAction, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BookSchemaType } from "@/service/recommendations/schema";
import { useRecommendationsStore } from "@/store/recommendations";
import { api } from "@/trpc/react";
import { TRPCClientError } from "@trpc/client";
import Image from "next/image";
import { usePostHog } from "posthog-js/react";
import { useEffect } from "react";
import { toast } from "sonner";

export function BooksList() {
  const status = useRecommendationsStore((state) => state.status);
  const books = useRecommendationsStore((state) => state.books);
  const posthog = usePostHog();

  const isListHidden = !["loading", "completed"].includes(status);
  const isLoading = status === "loading";

  // TODO: review
  useEffect(() => {
    if (status === "completed")
      posthog.capture("bookmmender_books_list_rendered");
  }, [status, posthog]);

  if (isListHidden) return null;

  return (
    <div className="space-y-4 max-w-4xl mt-4 w-full">
      {books.map((item) => (
        <Card key={item.title}>
          <CardContent className="md:flex gap-5 h-auto">
            {item.coverUrl ? (
              <Image
                width={300}
                height={200}
                src={item.coverUrl}
                alt={`Cover of "${item.title}"`}
                className="w-full md:w-64 aspect-[1/1.75] md:aspect-auto rounded-md object-cover"
              />
            ) : (
              "No image"
            )}

            <div className="flex-1">
              <div className="mt-4 md:mt-0">
                <h2 className="text-3xl font-semibold">{item.title}</h2>
                <p className="text-sm text-slate-300 mt-2">
                  Book by {item.author}
                </p>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-semibold">Synopsis</h3>
                <p className="text-sm">{item.synopsis}</p>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-semibold">Why this book?</h3>
                <p className="text-sm">{item.why}</p>
              </div>

              <CardAction className="mt-4">
                <SearchButton book={item} />
              </CardAction>
            </div>
          </CardContent>
        </Card>
      ))}

      {isLoading ? <BooksListSkeleton /> : <LoadMoreButton />}
    </div>
  );
}

function BooksListSkeleton() {
  return (
    <>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <Card key={index} className="w-full">
            <CardContent>
              <div className="md:flex gap-5 h-auto md:h-80">
                <Skeleton className="w-full md:w-64 aspect-video md:aspect-auto rounded-md object-cover" />
                <div className="mt-4 md:mt-0 flex-1/2">
                  <Skeleton className="w-full h-64 md:h-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
    </>
  );
}

interface SearchButtonProps {
  book: BookSchemaType;
}

function SearchButton({ book }: SearchButtonProps) {
  function getSearchUrl(title: string, author: string) {
    const searchQuery = encodeURIComponent(`${title} by ${author}`);
    const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;

    return googleSearchUrl;
  }

  return (
    <a
      href={getSearchUrl(book.title, book.author)}
      target="_blank"
      className={buttonVariants({
        variant: "secondary",
      })}
    >
      Search on Google
    </a>
  );
}

function LoadMoreButton() {
  const setStatus = useRecommendationsStore((state) => state.setStatus);
  const setBooks = useRecommendationsStore((state) => state.setBooks);
  const questions = useRecommendationsStore((state) => state.questions);
  const previousBooks = useRecommendationsStore((state) => state.books);

  const { mutateAsync: createRecommendation } =
    api.recommendation.create.useMutation();

  function handleLoadMore() {
    if (!questions) return toast.error("There's not questions set");

    toast.promise(
      () =>
        createRecommendation({
          questions,
          previousList: previousBooks.map((item) => ({
            title: item.title,
            author: item.author,
          })),
        }),
      {
        success: (data) => {
          setStatus("completed");
          setBooks([...previousBooks, ...data]);

          return "Recommendation created";
        },
        loading: (() => {
          setStatus("loading");

          return "Loading";
        })(),
        error: (error) => {
          setStatus("completed");

          if (error instanceof TRPCClientError) {
            const resetTime = Number(error.message)
              ? Number(error.message)
              : null;

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
        },
      }
    );
  }

  return (
    <div className="flex justify-center">
      <Button onClick={handleLoadMore}>Load more</Button>
    </div>
  );
}
