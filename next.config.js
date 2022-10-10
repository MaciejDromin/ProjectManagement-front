/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    outputStandalone: true
  },
  daisyui: {
    themes: ["dark", "corporate"],
  }
}

module.exports = nextConfig
