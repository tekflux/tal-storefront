/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/sectors/agric_commodities', destination: '/sectors/agricultural-commodities', permanent: true },
      { source: '/sectors/agric_commodities/:path*', destination: '/sectors/agricultural-commodities/:path*', permanent: true },
      { source: '/products/:path*', destination: '/sectors', permanent: true },
      { source: '/about/:path+', destination: '/about', permanent: true },
      { source: '/insights/:path*', destination: '/', permanent: false },
    ]
  },
}

module.exports = nextConfig
