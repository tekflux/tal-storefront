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
      // Healthcare was replaced by Construction; send old links to the sectors overview.
      { source: '/sectors/healthcare-supplies', destination: '/sectors', permanent: true },
      { source: '/about/:path+', destination: '/about', permanent: true },
    ]
  },
}

module.exports = nextConfig
