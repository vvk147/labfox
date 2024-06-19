/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
  assetPrefix: process.env.NODE_ENV === 'production' ? '/labfox/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/labfox' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
