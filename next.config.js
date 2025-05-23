const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      process.env.NEXT_PUBLIC_API_DOMAIN || 'dev1.maxvanwijnen.nl',
      'www.maxvanwijnen.nl',
      'maxvanwijnen.nl',
      'localhost'
    ],
    unoptimized: true, // Gebruik dit om beeldoptimalisatie over te slaan voor alle afbeeldingen
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/insights/script.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/fotoshoot/kinderen',
        destination: '/fotoshoot',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig;
