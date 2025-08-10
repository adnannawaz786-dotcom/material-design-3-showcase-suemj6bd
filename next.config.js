/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Optimize images
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Enable experimental features for better performance
  experimental: {
    scrollRestoration: true,
  },
  
  // Compiler options for better performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Webpack configuration for optimal bundling
  webpack: (config, { dev, isServer }) => {
    // Add path aliases for Material Design 3 components
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': require('path').resolve(__dirname, './src'),
        '@/components': require('path').resolve(__dirname, './src/components'),
        '@/styles': require('path').resolve(__dirname, './src/styles'),
      };
    }
    
    return config;
  },
  
  // Enable static optimization
  trailingSlash: false,
  
  // Material Design 3 specific rewrites (none needed for showcase)
  async rewrites() {
    return [];
  },
  
  // Disable powered by header for cleaner response
  poweredByHeader: false,
  
  // Optimize for production deployment
  generateEtags: false,
  
  // Enable compression
  compress: true,
};

module.exports = nextConfig;