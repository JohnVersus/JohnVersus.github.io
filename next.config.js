/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '/',
    domains: ['webapi.johnversus.dev', 'i.ibb.co'],
    // formats: ['image/avif', 'image/webp', 'image/jpg'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'webapi.johnversus.dev',
    //     port: '',
    //     pathname: '/api/generateGithubSocial/**',
    //   },
    // ],
  },
  // basePath: '/Profile',
  // assetPrefix: '/Profile',
  experimental: { appDir: true },
};

module.exports = nextConfig;
