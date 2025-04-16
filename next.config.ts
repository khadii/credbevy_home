import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add your image domains here if you're using external images
    domains: [],
    
    // Set minimum cache TTL (in seconds)
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    
    // Enable device sizes optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Enable image formats optimization
    formats: ['image/webp'],
    
    // Disable dangerouslyAllowSVG if you don't need SVG optimization
    dangerouslyAllowSVG: false,
    
    // Content Security Policy header for images
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  
  // Experimental features (at root level, not inside images)
  experimental: {
    turbo: {
      resolveAlias: {
        // Add any aliases you're using for image paths
      }
    }
  },
  
  // Enable production browser source maps for debugging
  productionBrowserSourceMaps: true,
  
  // Configure headers for cache control
  async headers() {
    return [
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Enable React strict mode
  reactStrictMode: true,
};

export default nextConfig;