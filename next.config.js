/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  images: {
    domains: ['dev1.maxvanwijnen.nl'],
  }
}

module.exports = nextConfig