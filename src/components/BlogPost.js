"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data';
import { FiCalendar, FiUser, FiArrowLeft, FiClock, FiShare2 } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const BlogPost = ({ slug }) => {
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (!post) {
    return (
      <section className="section py-16">
  <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-center">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8 text-center">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="btn btn-lg btn-accent">
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="section py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back to Blog Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <FiArrowLeft />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <FiUser />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock />
              <span>{post.readTime} read</span>
            </div>
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-4 pb-6 border-b">
            <span className="text-gray-600 flex items-center gap-2">
              <FiShare2 />
              Share:
            </span>
            <div className="flex gap-3">
              <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <FaFacebook size={16} />
              </button>
              <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                <FaTwitter size={16} />
              </button>
              <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                <FaLinkedin size={16} />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-xl text-gray-700 mb-8 font-medium leading-relaxed">
            {post.excerpt}
          </div>
          
          <div 
            className="blog-content text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags */}
        {post.tags && (
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t">
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(() => {
              const sameCategoryPosts = blogPosts.filter(p => p.category === post.category && p.id !== post.id);
              const otherPosts = blogPosts.filter(p => p.id !== post.id && p.category !== post.category);
              const relatedPosts = [...sameCategoryPosts, ...otherPosts].slice(0, 3);
              return relatedPosts.map(relatedPost => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ));
            })()}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
