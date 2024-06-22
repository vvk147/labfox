/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/labfox' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/labfox' : '',
};

module.exports = nextConfig;
