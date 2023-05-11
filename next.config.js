/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/odin-shopping-cart',
  assetPrefix: '/odin-shopping-cart',
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
