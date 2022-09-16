import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href='https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' rel='stylesheet' />
        <link href='https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@1.5.1/dist/dsfr.min.css' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}