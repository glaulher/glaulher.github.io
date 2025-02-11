'use client';

import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import Loaded from './_components/Loaded';

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //if (!mounted) {
  //  return <div className="loading-indicator">Carregando...</div>;
  //}

  return mounted ? (
    <ThemeProvider enableSystem={true} defaultTheme="system" attribute="class">
      {children}
    </ThemeProvider>
  ) : (
    <Loaded loading={!mounted} />
  );
}
