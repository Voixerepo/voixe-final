/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add external hosts if you hotlink photos later
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }]
  }
}
module.exports = nextConfig
