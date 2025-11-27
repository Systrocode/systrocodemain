"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data';
import { FiCalendar, FiUser, FiArrowRight, FiClock, FiCode, FiTrendingUp } from 'react-icons/fi';

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Define category mappings
  const techCategories = ['Web Development', 'Data Analysis', 'AI & Automation', 'Cybersecurity'];
  const generalCategories = ['Digital Marketing', 'Hindu Astrology'];
  
  // Main categories for filtering
  const categories = ['All', 'Tech Blogs', 'General Blogs'];
  
  // Filter posts based on selected category
  const getFilteredPosts = () => {
    switch (selectedCategory) {
      case 'Tech Blogs':
        return blogPosts.filter(post => techCategories.includes(post.category));
      case 'General Blogs':
        return blogPosts.filter(post => generalCategories.includes(post.category));
      default:
        return blogPosts;
    }
  };
  
  const filteredPosts = getFilteredPosts();

  return (
    <section className='section py-16' role="main">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">Latest Blog Posts</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-8">
            Discover expert insights, tutorials, and industry trends to help your business grow
          </p>
          
          {/* Blog Statistics */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-blue-600 mb-1">
                <FiCode />
                <span>{blogPosts.filter(post => techCategories.includes(post.category)).length}</span>
              </div>
              <p className="text-sm text-gray-600">Tech Blogs</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-green-600 mb-1">
                <FiTrendingUp />
                <span>{blogPosts.filter(post => generalCategories.includes(post.category)).length}</span>
              </div>
              <p className="text-sm text-gray-600">General Blogs</p>
            </div>
          </div>
        </header>

        {/* Category Filter */}
        <nav className="flex flex-wrap justify-center gap-4 mb-12" role="navigation" aria-label="Blog categories">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
                aria-pressed={isActive}
                type="button"
              >
                {category === 'Tech Blogs' && <FiCode size={18} />}
                {category === 'General Blogs' && <FiTrendingUp size={18} />}
                <span>{category}</span>
                {isActive && (
                  <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                    {getFilteredPosts().length}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Category Section Header */}
        {selectedCategory !== 'All' && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-lg border">
              {selectedCategory === 'Tech Blogs' && <FiCode className="text-blue-600" size={24} />}
              {selectedCategory === 'General Blogs' && <FiTrendingUp className="text-green-600" size={24} />}
              <div>
                <h3 className="text-xl font-bold text-gray-800">{selectedCategory}</h3>
                <p className="text-sm text-gray-600">
                  {selectedCategory === 'Tech Blogs' 
                    ? 'Technical articles about web development, AI, data analysis, and cybersecurity'
                    : 'Marketing insights, business strategies, and industry trends'
                  }
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="feed">
        {filteredPosts.map((post) => (
          <Link 
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block"
            aria-label={`Read more about ${post.title}`}
          >
            <article 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer h-full"
              itemScope 
              itemType="https://schema.org/BlogPosting"
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  itemProp="image"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span 
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium shadow-md"
                    itemProp="articleSection"
                  >
                    {post.category}
                  </span>
                  {/* Category Type Badge */}
                  <span 
                    className={`px-3 py-1 text-xs rounded-full font-bold shadow-md ${
                      techCategories.includes(post.category)
                        ? 'bg-purple-600 text-white'
                        : 'bg-green-600 text-white'
                    }`}
                  >
                    {techCategories.includes(post.category) ? '💻 Tech' : '📈 General'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <header>
                  <h2 
                    className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors"
                    itemProp="headline"
                  >
                    {post.title}
                  </h2>
                </header>
                
                <p 
                  className="text-gray-600 mb-4 line-clamp-3"
                  itemProp="description"
                >
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FiUser size={14} />
                      <span itemProp="author">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiCalendar size={14} />
                      <time 
                        itemProp="datePublished" 
                        dateTime={new Date(post.date).toISOString()}
                      >
                        {post.date}
                      </time>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Indicator */}
                <div className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  Read More 
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hidden metadata for SEO */}
              <div className="sr-only">
                <span itemProp="dateModified">{new Date(post.date).toISOString()}</span>
                <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                  <span itemProp="name">Systrocode</span>
                  <span itemProp="url">https://systrocode.tech</span>
                </div>
                <div itemProp="mainEntityOfPage" itemScope itemType="https://schema.org/WebPage">
                  <span itemProp="url">{`https://systrocode.tech/blog/${post.slug}`}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
        </div>

        {/* No posts message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="mb-4">
              {selectedCategory === 'Tech Blogs' && <FiCode size={48} className="mx-auto text-gray-400 mb-4" />}
              {selectedCategory === 'General Blogs' && <FiTrendingUp size={48} className="mx-auto text-gray-400 mb-4" />}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">No {selectedCategory.toLowerCase()} found</h3>
            <p className="text-gray-600 mb-8 text-center">
              {selectedCategory === 'Tech Blogs' 
                ? 'No technical blog posts are available in this category yet.'
                : 'No general blog posts are available in this category yet.'
              }
            </p>
            <button 
              onClick={() => setSelectedCategory('All')}
              className="btn btn-lg btn-accent"
            >
              View All Posts
            </button>
          </div>
        )}

        {/* Load More Button (for future pagination) */}
        {filteredPosts.length > 6 && (
          <div className="text-center mt-12">
            <button className="btn btn-lg btn-outline">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
