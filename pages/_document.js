import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>    
      <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;800"
            rel="stylesheet"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}