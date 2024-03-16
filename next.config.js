const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_API_DOMAIN || 'dev1.maxvanwijnen.nl'],
  }
}

module.exports = nextConfig;
