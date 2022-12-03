/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    API_KEY: process.env.API_KEY,
    CX: process.env.CX
  }
}

module.exports = nextConfig
