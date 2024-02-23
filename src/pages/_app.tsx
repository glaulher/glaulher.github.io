import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Head>
            <title>Blog Post-it - tips software developer</title>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
