import { HydrateClient } from "@/trpc/server";
import { Questions } from "./_components/questions";

export default async function Page() {
  return (
    <HydrateClient>
      <main className="px-5 py-8">
        <Questions />
        {/* <BooksList /> */}
      </main>
    </HydrateClient>
  );
}
