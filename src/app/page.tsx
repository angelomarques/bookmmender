import { HydrateClient } from "@/trpc/server";
import { Recommender } from "./_components/recommender";

export default async function Page() {
  return (
    <HydrateClient>
      <main className="px-5 py-8">
        <Recommender />
      </main>
    </HydrateClient>
  );
}
