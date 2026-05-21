import { notFound } from 'next/navigation';
import Header from '@/components/Header.js';
import Footer from '@/components/Footer.js';
import { NavbarMT } from '@/components/NavbarMT';
import BlogPost from '@/components/BlogPost';
import Cta from '@/components/Cta.js';
import Breadcrumb from '@/components/Breadcrumb';
import { blogPosts } from '@/data';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - Systrocode',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} - Systrocode`,
    description: post.excerpt,
    keywords: post.tags?.join(', ') || 'web development, digital marketing, technology',
    authors: [{ name: post.author || "Systrocode" }],
    creator: "Systrocode",
    publisher: "Systrocode",
    robots: "index, follow",
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://systrocode.tech/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      siteName: 'Systrocode',
      images: [
        {
          url: `https://systrocode.tech${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author || "Systrocode"],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: '@systrocode',
      images: [`https://systrocode.tech${post.image}`],
    },
    alternates: {
      canonical: `https://systrocode.tech/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  // Generate JSON-LD structured data for better SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://systrocode.tech${post.image}`,
    author: {
      '@type': 'Organization',
      name: post.author || 'Systrocode',
      url: 'https://systrocode.tech'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Systrocode',
      url: 'https://systrocode.tech',
      logo: {
        '@type': 'ImageObject',
        url: 'https://systrocode.tech/assets/img/header/logo.webp'
      }
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://systrocode.tech/blog/${post.slug}`
    },
    keywords: post.tags?.join(', '),
    articleSection: post.category,
    wordCount: post.content?.split(' ').length || 0,
  };

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className='overflow-hidden w-full'>
        <NavbarMT/>
        <Breadcrumb items={breadcrumbItems} />
        <BlogPost slug={slug} />
        <Cta />
        <Footer />
      </div>
    </>
  );
}
