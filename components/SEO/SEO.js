import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SEO({ 
  title = 'Fotograaf in Hillegom | Max van Wijnen Fotografie',
  description = 'Professionele fotografie voor particulieren en bedrijven. Portretten, fashion, bedrijfsfotografie en meer. Ervaren fotograaf in Hillegom en omgeving.',
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://www.maxvanwijnen.nl/img/og-default.jpg',
  structuredData,
  noindex = false,
  nofollow = false
}) {
  const router = useRouter();
  const siteUrl = 'https://www.maxvanwijnen.nl';
  const fullUrl = `${siteUrl}${router.asPath}`;
  
  // Zorg ervoor dat de titel niet te lang is voor zoekmachines
  const seoTitle = title.length > 60 ? `${title.substring(0, 57)}...` : title;
  
  // Zorg ervoor dat de beschrijving de juiste lengte heeft
  const seoDescription = description.length > 160 ? 
    `${description.substring(0, 157)}...` : 
    description;

  return (
    <Head>
      {/* Standaard meta tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={canonicalUrl || fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Max van Wijnen Fotografie" />
      <meta property="og:locale" content="nl_NL" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Voorkom dat zoekmachines de pagina indexeren als er geen content is of als dit expliciet is aangegeven */}
      {(!title && !description) || noindex || nofollow ? (
        <meta 
          name="robots" 
          content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} 
        />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Structured data */}
      {structuredData && (
        Array.isArray(structuredData) ? (
          structuredData.map((data, index) => (
            <script
              key={`structured-data-${index}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            />
          ))
        ) : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )
      )}
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}
