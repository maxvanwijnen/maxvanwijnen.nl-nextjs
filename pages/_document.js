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
        
        {/* Google Analytics zonder Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D580ZJDHNV"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D580ZJDHNV', { page_path: window.location.pathname });
          `,
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
