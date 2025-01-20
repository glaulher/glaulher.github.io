import Footer from '@/app/_components/Footer';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '@/lib/constants';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
//import cn from 'classnames';
//mport { ThemeSwitcher } from './_components/theme-switcher';

import '@/app/globals.css';
import '@/app/material-symbols.css';
import { Providers } from './providers';
import { WrapperHeader } from '@/app/_components/WrapperHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Next.js Blog Example with ${CMS_NAME}`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={`bg-slate-100
            dark:bg-gray-900
            dark:from-gray-900
            dark:to-gray-800 
            bg-gradient-to-r 
            h-screen 
            ${inter.className}`}
      >
        <Providers>
          <WrapperHeader />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
