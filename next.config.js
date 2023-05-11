/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/odin-shopping-cart',
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

module.exports = nextConfig;
