/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dev1.maxvanwijnen.nl'],
  }
}

module.exports = nextConfig