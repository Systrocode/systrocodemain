/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'systrocode.tech',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'systrocode.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128],
    minimumCacheTTL: 86400, // 24 hours cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  // Experimental features to improve hydration
  experimental: {
    optimizePackageImports: ['@material-tailwind/react', 'react-icons', '@formspree/react'],
  },
  // Bundle analyzer and performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // For development environment cross-origin requests
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  // Enable React strict mode for better hydration debugging
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/search-engine-optimization',
        destination: '/seo',
        permanent: true,
      },
      {
        source: '/web-development-dynamic',
        destination: '/web-development',
        permanent: true,
      },
      {
        source: '/hire-developers',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/ai-development',
        destination: '/ai-automation',
        permanent: true,
      },
      {
        source: '/mvp-development',
        destination: '/software-development',
        permanent: true,
      },
      {
        source: '/offshore-development',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/life-at-systrocode',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services/digital-transformation',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/generative-ai',
        destination: '/ai-automation',
        permanent: true,
      },
      {
        source: '/ecommerce-development',
        destination: '/web-development',
        permanent: true,
      },
      {
        source: '/write-for-us',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/partner',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/process',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog/chandra-grahan-2025-sutak-kaal-timing',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
  // swcMinify is now enabled by default in Next.js 15, no need to specify
  webpack: (config) => {
    // Enable importing SVGs as React components when using the `?component` query.
    // Example: import Icon from './icon.svg?component'
    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: /component/, // foo.svg?component -> React component via SVGR
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // Keep viewBox and allow passing className/styles from React
            svgoConfig: { plugins: [{ name: 'removeViewBox', active: false }] },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
  // Turbopack configuration for Next.js 16
  turbopack: {},
};

export default nextConfig;
