/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'robohash.org',
      'xsgames.co',
    ],
  },
};

module.exports = nextConfig;
