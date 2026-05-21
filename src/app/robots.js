export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/blogs/'],
        disallow: [
          '/wp-admin/',
          '/career/',
          '/search/',
          '*?s=',
          '*?p=',
          '/*?utm_',
          '*/feed',
          '*/rss',
          '*/embed',
          '/blog/category/*',
          '/blog/tag/*',
          '/thank-you/',
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
