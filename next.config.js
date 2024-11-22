//import type { NextConfig } from 'next';

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.gog-statics.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
