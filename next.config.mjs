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
        source: '/_next/:path*',
        headers: [
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
