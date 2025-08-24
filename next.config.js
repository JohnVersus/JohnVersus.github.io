/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '/',
    domains: [],
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
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    config.externals.push({
      '@napi-rs/canvas': 'commonjs @napi-rs/canvas',
    });
    return config;
  },
};

module.exports = nextConfig;
