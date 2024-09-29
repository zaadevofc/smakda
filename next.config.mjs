/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  i18n: {
    localeDetection: false,
    locales: ['id'],
    defaultLocale: 'id',
  },
  experimental: {
    swcMinify: true,
  },
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 999999,
    remotePatterns: [
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'lh3.googleusercontent.com' },
      { hostname: 'cdn.discordapp.com' },
      { hostname: 'ucarecdn.com' },
      { hostname: 'aceternity.com' },
      { hostname: 'smkn2sukoharjo.sch.id' },
    ],
  },
};

export default nextConfig;