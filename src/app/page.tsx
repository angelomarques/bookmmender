import { HydrateClient } from "@/trpc/server";
import { BooksList } from "./_components/books-list";
import { ErrorDescription } from "./_components/error-description";
import { Questions } from "./_components/questions";
import { AnalyticsPageView } from "@/components/pageview";

export default async function Page() {
  return (
    <HydrateClient>
      <main className="px-5">
        <div className="max-w-6xl mx-auto h-full flex items-center justify-center">
          <Questions />

          <BooksList />

          <ErrorDescription />

          <AnalyticsPageView />
        </div>
      </main>
    </HydrateClient>
  );
}
