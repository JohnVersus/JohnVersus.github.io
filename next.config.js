/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   loader: 'akamai',
  //   path: '/',
  //   domains: [],
  // },
  // basePath: '/Profile',
  // assetPrefix: '/Profile',
  experimental: { appDir: true },
};

module.exports = nextConfig;
