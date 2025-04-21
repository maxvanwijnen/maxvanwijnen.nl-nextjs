const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_API_DOMAIN || 'dev1.maxvanwijnen.nl'],
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
}

module.exports = nextConfig;
