/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/labfox' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/labfox' : '',
};

module.exports = nextConfig;
