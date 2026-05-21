import Header from '@/components/Header.js';
import Footer from '@/components/Footer.js';
import { SimpleNavbar } from '@/components/SimpleNavbar';
import BlogHero from '@/components/BlogHero';
import BlogList from '@/components/BlogList';
import Cta from '@/components/Cta.js';
import Breadcrumb from '@/components/Breadcrumb';
import { blogPosts } from '@/data';
import SEOFAQSection from '@/components/SEOFAQSection';
import { pageFAQs } from '@/data/seoFAQs';

export const metadata = {
  title: "Systrocode Blog - Web Development & Digital Marketing Insights",
  description: "Explore practical insights on web development, digital marketing, data analytics, AI automation, and cybersecurity. Get expert tips, how-tos, and industry trends from Systrocode's team of professionals.",
  keywords: "web development blog, digital marketing insights, data analytics tips, AI automation guides, cybersecurity best practices, technology trends, Next.js tutorials, SEO strategies, business automation",
  authors: [{ name: "Systrocode" }],
  creator: "Systrocode",
  publisher: "Systrocode",
  robots: "index, follow",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://systrocode.tech/blog',
    title: 'Systrocode Blog - Expert Tech & Marketing Insights',
    description: 'Explore practical insights on web development, digital marketing, data analytics, and technology. Get expert tips and industry trends to stay ahead.',
    siteName: 'Systrocode',
    images: [
      {
        url: 'https://systrocode.tech/assets/img/blog/blog-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Systrocode Blog - Tech and Marketing Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Systrocode Blog - Expert Tech & Marketing Insights',
    description: 'Explore practical insights on web development, digital marketing, data analytics, and technology trends.',
    creator: '@systrocode',
    images: ['https://systrocode.tech/assets/img/blog/blog-og-image.jpg'],
  },
  alternates: {
    canonical: 'https://systrocode.tech/blog',
  },
};

export default function Blog() {
  // Generate JSON-LD structured data for the blog listing page
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Systrocode Blog',
    description: 'Expert insights on web development, digital marketing, data analytics, AI automation, and cybersecurity',
    url: 'https://systrocode.tech/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Systrocode',
      url: 'https://systrocode.tech',
      logo: {
        '@type': 'ImageObject',
        url: 'https://systrocode.tech/assets/img/header/logo.webp'
      }
    },
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://systrocode.tech/blog/${post.slug}`,
      image: `https://systrocode.tech${post.image}`,
      datePublished: new Date(post.date).toISOString(),
      author: {
        '@type': 'Organization',
        name: post.author || 'Systrocode'
      },
      keywords: post.tags?.join(', '),
      articleSection: post.category
    }))
  };

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className='overflow-hidden w-full'>
        <SimpleNavbar/>
        <Breadcrumb items={breadcrumbItems} />
        <BlogHero />
        <BlogList />
        <SEOFAQSection
          seoContent={pageFAQs.blog.seoContent}
          faqs={pageFAQs.blog.faqs}
        />
        <Cta />
        <Footer />
      </div>
    </>
  );
}
