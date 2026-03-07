/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'behold.pictures' },
      { protocol: 'https', hostname: '*.behold.pictures' },
      { protocol: 'https', hostname: '*.cdninstagram.com' },
    ],
  },
};

export default nextConfig;
