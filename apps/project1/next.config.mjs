/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui'],
  typescript: {
    ignoreBuildErrors: true,
    // just for cms build
  },
};

export default nextConfig;
