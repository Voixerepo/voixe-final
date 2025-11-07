/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: { unoptimized: true }, // avoids remote image config issues
  eslint: { ignoreDuringBuilds: true }, // do not fail the build on lint issues
  typescript: { ignoreBuildErrors: true } // do not fail the build on TS type issues
};
module.exports = nextConfig;
