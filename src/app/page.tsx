// app/page.tsx

import { api, HydrateClient } from "@/trpc/server";
import Chat from "./chat";

export default async function Page() {
  const hello = await api.post.hello({ text: "from Ângelo" });

  return (
    <HydrateClient>
      {hello.greeting}
      <Chat />
    </HydrateClient>
  );
}
