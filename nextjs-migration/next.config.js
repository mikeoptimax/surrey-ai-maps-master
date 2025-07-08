/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporarily removing static export to test dynamic rendering
  // output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['optimax-ai.com'],
    unoptimized: true  // Required for static export
  },
  // Preserve the existing URL structure
  async redirects() {
    return [
      // Redirects can be added here if needed
    ];
  },
}

module.exports = nextConfig;