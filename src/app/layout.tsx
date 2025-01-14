import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './material-symbols.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog Post-it - tips software developer',
  description: 'tips to Software engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-100
      dark:bg-gray-900
      dark:from-gray-900
      dark:to-gray-800 
      bg-gradient-to-r 
      h-screen 
      ${inter.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
