/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com'],
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Disable Next.js built-in ESLint integration
  },
};

module.exports = nextConfig; 