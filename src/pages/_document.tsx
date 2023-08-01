import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Khoj is a Google Search Clone that utilises Google's API to display required search results."
        />
        <meta property="og:title" content="Khoj - A Google Search Clone" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://khojj.vercel.app" />
        <meta property="og:image" content="https://heimmerlabs.com/logo.png" />
        <meta
          property="og:description"
          content="Khoj is a Google Search Clone that utilises Google's API to display required search results."
        />
        <meta name="theme-color" content="#A855F7" />

        {/* <!-- This makes the og:image larger --> */}
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
