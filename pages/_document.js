import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        {/* Google Fonts fallback, indien lokale fonts niet werken */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap" rel="stylesheet" />
        
        {/* Self-hosted Plausible Analytics */}
        <script defer data-domain="maxvanwijnen.nl" src="https://analytics.maxvanwijnen.nl/js/script.js"></script>
        
        {/* Google Analytics - Wordt geladen via Script component in _app.js */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
