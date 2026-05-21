import { blogPosts } from '@/data';
import { projects } from '@/data/projects';

export default function sitemap() {
  // Generate blog post entries dynamically
  const blogEntries = blogPosts.map((post) => ({
    url: `https://systrocode.tech/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  // Generate our-work/case study entries
  const caseStudyEntries = projects.map((project) => ({
    url: `https://systrocode.tech/our-work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  // Portfolio entries
  const portfolioSlugs = [
    'fintech-dashboard',
    'healthcare-connect',
    'ecommerce-pro',
    'real-estate-hub',
    'social-media-analytics',
    'travel-companion',
    'smart-home',
    'lms',
  ];
  const portfolioEntries = portfolioSlugs.map((slug) => ({
    url: `https://systrocode.tech/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  return [
    {
      url: 'https://systrocode.tech',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://systrocode.tech/about',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/services',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/contact',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/our-work',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/web-development',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/web-design',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/mobile-development',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/software-development',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/dating-application-development',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/ai-character-dating-app-development',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/data-analysis',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/ai-automation',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/cyber-security',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/seo',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/social-media-marketing',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/email-marketing',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/content-marketing',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/ppc-advertising',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/influencer-marketing',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/google-ads-management',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/marketing-analytics',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/marketing-automation',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/conversion-rate-optimization',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/digital-marketing',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/facebook-instagram-ads',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://systrocode.tech/policy',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // Dynamically generated entries
    ...blogEntries,
    ...caseStudyEntries,
    ...portfolioEntries,
  ];
}
