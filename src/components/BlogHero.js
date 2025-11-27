"use client";
import React, { useEffect } from 'react';
import { animateHeroContent } from '@/utils/animations';

const BlogHero = () => {
  useEffect(() => {
    animateHeroContent();
  }, []);

  return (
    <section className='min-h-[600px] py-4 bg-gradient-to-br from-blue-50 to-indigo-100'>
      <div className="container mx-auto min-h-[600px] flex justify-center items-center">
  <div className="flex flex-col items-center justify-center text-center mt-14 lg:mt-2">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 lg:mb-8 hero-title text-center gradient-text-fix" 
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #9333ea 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
              Systrocode Blog
            </h1>
            <p className="text-lg lg:text-xl mb-6 lg:mb-8 hero-subtitle text-gray-600 max-w-2xl mx-auto text-center leading-relaxed">
              Explore practical insights on web development, digital marketing, data analytics, and technology. 
              Get expert tips, how‑tos, and industry trends to stay ahead.
            </p>
            <div className='flex items-center justify-center gap-x-4 hero-buttons'>
              <span className='px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'>
                🚀 Tech Insights
              </span>
              <span className='px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium'>
                💡 Expert Tips
              </span>
              <span className='px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium'>
                📈 Industry Trends
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
