/** @type {import('next').NextConfig} */
const nextConfig = {
  // Do NOT set: output: 'export'
  // If you load external images, add domains here:
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  },
  reactStrictMode: true
}

module.exports = nextConfig
