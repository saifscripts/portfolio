import { HashProvider } from '@/contexts/hash.context';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <HashProvider>{children}</HashProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
