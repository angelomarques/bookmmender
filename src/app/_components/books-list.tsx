"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardAction, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useRecommendationsStore } from "@/store/recommendations";
import Image from "next/image";

export function BooksList() {
  const status = useRecommendationsStore((state) => state.status);
  const books = useRecommendationsStore((state) => state.books);

  const isListHidden = !["loading", "completed"].includes(status);

  function getSearchUrl(title: string, author: string) {
    const searchQuery = encodeURIComponent(`${title} by ${author}`);
    const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;

    return googleSearchUrl;
  }

  if (isListHidden) return null;

  if (status === "loading") return <BooksListSkeleton />;

  return (
    <div>
      <div className="space-y-4">
        {books.map((item) => (
          <Card key={item.title}>
            <CardContent>
              {item.coverUrl ? (
                <Image
                  width={300}
                  height={200}
                  src={item.coverUrl}
                  alt={`Cover of "${item.title}"`}
                  className="w-full aspect-[1/1.75] rounded-md object-cover"
                />
              ) : (
                "No image"
              )}

              <div className="mt-4">
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
                <h3 className="text-xl font-semibold">Why this book</h3>
                <p className="text-sm">{item.why}</p>
              </div>

              <CardAction className="mt-4">
                <a
                  href={getSearchUrl(item.title, item.author)}
                  target="_blank"
                  className={buttonVariants()}
                >
                  Search on Google
                </a>
              </CardAction>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function BooksListSkeleton() {
  return (
    <div className="space-y-4">
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <Card key={index}>
            <CardContent>
              <Skeleton className="w-full aspect-video rounded-md object-cover" />
              <div className="mt-4">
                <Skeleton className="w-full h-64" />
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
