/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, '/assets/scss')],
  },
  images: {
    domains: [],
  },
  experimental: { 
    esmExternals: true 
  },
}

module.exports = nextConfig
