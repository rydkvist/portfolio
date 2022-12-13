'use client';

import { SettingsProvider } from '../old/context/SettingsProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>{children}</SettingsProvider>
    </QueryClientProvider>
  );
}
