/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icons8.com',
        pathname: '/carbon-copy/**'
      },
    ],
  },

}

module.exports = nextConfig