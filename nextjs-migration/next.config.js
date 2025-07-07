/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['optimax-ai.com'],
  },
  // Preserve the existing URL structure
  async redirects() {
    return [
      // Redirects can be added here if needed
    ];
  },
}

module.exports = nextConfig;