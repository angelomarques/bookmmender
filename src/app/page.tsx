import { api, HydrateClient } from "@/trpc/server";
import Chat from "./chat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Page() {
  // const hello = await api.post.hello({ text: "from Ângelo" });

  // const prompt = await api.post.getLatest();

  return (
    <HydrateClient>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account</TabsContent>
        <TabsContent value="password">Password</TabsContent>
      </Tabs>
    </HydrateClient>
  );
}
