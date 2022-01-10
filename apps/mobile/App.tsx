import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import { Navigation } from './pages';

import { trpc } from './backend/useQuery';
import { QueryClient, QueryClientProvider } from 'react-query'


export default function App() {
  const isLoadingComplete = useCachedResources();

  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: 'http://localhost:2021/trpc',
    }),
  );

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
        </QueryClientProvider>
      </trpc.Provider>
    );
  }
}
