/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Uncomment this line!
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