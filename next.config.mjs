/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      },
      {
        protocol: 'https',
        hostname: 'images.pexelsusercontent.com'
      }
    ]
  },
  allowedDevOrigins: ['bd1872a0a586f1.lhr.life']
};

export default nextConfig;
