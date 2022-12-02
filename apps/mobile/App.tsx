import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'ui'
import { trpc } from './client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import {httpBatchLink} from '@trpc/react-query'
import { Welcome } from './Welcome';

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      // change the ip address to whatever address the Metro server is running on
      // if you're using a Simulator 'localhost' should work fine
      links: [httpBatchLink({ url: 'http://192.168.1.2:5000/trpc' })],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <Welcome />
          <Button />
          <StatusBar style="auto" />
        </View>
     </QueryClientProvider>
    </trpc.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
