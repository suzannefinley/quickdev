import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.dgresume.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: '*.dgresumes.com',
        port: ''
      }
    ]
  }
};

export default nextConfig;
