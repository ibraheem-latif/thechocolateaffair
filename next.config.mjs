/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'behold.pictures' },
      { protocol: 'https', hostname: '*.behold.pictures' },
      { protocol: 'https', hostname: '*.cdninstagram.com' },
    ],
  },
};

export default nextConfig;
