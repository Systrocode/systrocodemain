export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/blog/'],
        disallow: [
          '/admin/',
          '/admin-dashboard/',
          '/admin-login/',
          '/api/',
          '/search/',
          '*?s=',
          '*?p=',
          '/*?utm_',
          '*/feed',
          '*/rss',
          '/blog/category/*',
          '/blog/tag/*',
          '/test-api/',
          '/test-images/',
        ],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'GoogleOther',
        allow: '/',
      },
      {
        userAgent: 'GoogleOther-Image',
        allow: '/',
      },
      {
        userAgent: 'Gemini',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended-Gemini',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'ChatGPTBot',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'Applebot',
        allow: '/',
      },
    ],
    sitemap: 'https://systrocode.tech/sitemap.xml',
  };
}
