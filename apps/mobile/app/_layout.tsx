import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { Slot } from "expo-router";
import { useState } from "react";
import { trpc } from "../trpc/client";

export default function Root() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [httpBatchLink({ url: "http://192.168.1.21:5000/auth" })],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
