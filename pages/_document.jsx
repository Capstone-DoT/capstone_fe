import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json"/>
        <link
            href="images/favicons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
        />
        <link
            href="images/favicons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
        />
        <link rel="apple-touch-icon" href="images/icons/icon-192x192.png"></link>
        <meta name="msapplication-TileColor" content="#FF98BA"></meta>
        <link href="https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo.css" rel="stylesheet"></link>
        </Head>
      <body>
        <Main />
        <NextScript />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </Html>
  )
}
