/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/deye-inverter-website-redesign',
  assetPrefix: '/deye-inverter-website-redesign',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
