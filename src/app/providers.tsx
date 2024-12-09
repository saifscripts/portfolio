'use client';

import AuthProvider from '@/contexts/auth.context';
import { HashProvider } from '@/contexts/hash.context';
import { NextUIProvider } from '@nextui-org/system';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';
import { Toaster } from 'sonner';

export interface ProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <Toaster />
            <HashProvider>{children}</HashProvider>
          </NextThemesProvider>
        </AuthProvider>
      </QueryClientProvider>
    </NextUIProvider>
  );
}
