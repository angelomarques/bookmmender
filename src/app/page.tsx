import { api, HydrateClient } from "@/trpc/server";
import Chat from "./chat";

export default async function Page() {
  const hello = await api.post.hello({ text: "from Ângelo" });

  const prompt = await api.post.getLatest();

  return (
    <HydrateClient>
      {hello.greeting}
      {prompt?.content}
      <Chat />
    </HydrateClient>
  );
}
