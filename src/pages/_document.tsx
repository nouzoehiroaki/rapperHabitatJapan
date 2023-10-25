import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta name="description" content="ラッパーやDJなど国内のHIPHOPアーティストが経営する店舗を日本の地図上で可視化しました。これを見ることにより具体的な場所や、関連する情報を知ることができます。" />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta property="og:site_name" content="Japanese HIPHOP Artists Map" />
        <meta property="og:url" content="https://artist-map.kgetheshadowmen.com/" />
        <meta property="og:type" content="website or article" />
        <meta property="og:title" content="Japanese HIPHOP Artists Map" />
        <meta property="og:description" content="ラッパーやDJなど国内のHIPHOPアーティストが経営する店舗を日本の地図上で可視化しました。これを見ることにより具体的な場所や、関連する情報を知ることができます。" />
        <meta property="og:image" content="/og.png" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image:src" content="/og.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
