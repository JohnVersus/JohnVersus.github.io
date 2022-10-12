/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/JohnVersus",
  assetPrefix: "/JohnVersus",
};

module.exports = nextConfig;
