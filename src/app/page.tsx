import { HydrateClient } from "@/trpc/server";
import { Questions } from "./_components/questions";

export default async function Page() {
  // const hello = await api.post.hello({ text: "from Ângelo" });

  // const prompt = await api.post.getLatest();

  return (
    <HydrateClient>
      <main className="px-5 py-8">
        <Questions />
        {/* <BooksList /> */}
      </main>
    </HydrateClient>
  );
}
