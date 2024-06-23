/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui'],
  typescript: {
    ignoreBuildErrors: true,
    // just for cms build
  },
  images: {
    domains: ['a.storyblok.com'],
  },
};

export default nextConfig;
