'use client';

import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>; // Render children without ThemeProvider during SSR
  }

  return (
    <ThemeProvider enableSystem={true} defaultTheme="system" attribute="class">
      {children}
    </ThemeProvider>
  );
}
