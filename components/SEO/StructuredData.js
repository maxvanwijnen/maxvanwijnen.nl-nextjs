import Head from 'next/head';
import { useRouter } from 'next/router';

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Max van Wijnen Fotografie",
  "url": "https://www.maxvanwijnen.nl",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.maxvanwijnen.nl/zoeken?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Max van Wijnen Fotografie",
  "url": "https://www.maxvanwijnen.nl",
  "logo": "https://www.maxvanwijnen.nl/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+31612345678",
    "contactType": "customer service",
    "email": "info@maxvanwijnen.nl",
    "availableLanguage": ["Dutch", "English"]
  },
  "sameAs": [
    "https://www.instagram.com/maxvanwijnenfotografie/",
    "https://www.linkedin.com/in/maxvanwijnen/"
  ]
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Max van Wijnen Fotografie",
  "image": "https://www.maxvanwijnen.nl/img/og-default.jpg",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Guido Gezellelaan 110",
    "addressLocality": "Hillegom",
    "addressRegion": "Zuid-Holland",
    "postalCode": "2182WD",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "52.2928",
    "longitude": "4.5897"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "telephone": "+31628812008",
  "sameAs": [
    "https://www.instagram.com/maxvanwijnenfotografie/",
  ]
};

export default function StructuredData({ data }) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
}
