import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compress: true,
  /** Helps Lighthouse "Best practices" (large first-party source maps) in production builds. */
  productionBrowserSourceMaps: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
}

export default nextConfig
