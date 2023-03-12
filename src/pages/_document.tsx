import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="dark" lang="en">
      <Head>
        <meta name="description" content="tips to Software engineer" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=swap"
        />
      </Head>
      <body className="transition transform duration-700 ease-in-out dark:bg-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
