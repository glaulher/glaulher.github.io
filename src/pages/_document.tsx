import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="dark" lang="en">
      <Head>
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=optional"
        />
      </Head>
      <body className="dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
