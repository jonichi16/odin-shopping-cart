/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    images: true,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

module.exports = nextConfig;
