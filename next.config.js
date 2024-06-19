/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  // Static export configuration
  output: 'export',
  assetPrefix: './',
  trailingSlash: true,
};

module.exports = nextConfig;
