'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

const ContentMarketing = () => {
  const contentServices = [
    {
      title: 'Content Strategy',
      description: 'Comprehensive content planning aligned with business goals.',
      features: ['Content Audit', 'Competitor Analysis', 'Editorial Calendar', 'Brand Voice Development']
    },
    {
      title: 'Blog Writing',
      description: 'SEO-optimized blog posts that drive traffic and engagement.',
      features: ['Keyword Research', 'Long-form Articles', 'Guest Posting', 'Content Series']
    },
    {
      title: 'Video Content',
      description: 'Engaging video content for multiple platforms.',
      features: ['Explainer Videos', 'Product Demos', 'Social Videos', 'Video SEO']
    },
    {
      title: 'Social Media Content',
      description: 'Platform-specific content that builds communities.',
      features: ['Post Creation', 'Story Content', 'Live Streaming', 'User-Generated Content']
    },
    {
      title: 'Infographics & Visual Content',
      description: 'Compelling visual content that simplifies complex ideas.',
      features: ['Data Visualization', 'Custom Graphics', 'Interactive Content', 'Brand Templates']
    },
    {
      title: 'Content Distribution',
      description: 'Strategic content promotion across multiple channels.',
      features: ['Multi-Channel Publishing', 'Influencer Outreach', 'Content Syndication', 'Paid Promotion']
    }
  ];

  const contentTypes = [
    { type: 'Blog Posts', impact: '67% more leads', description: 'SEO-optimized articles that drive organic traffic' },
    { type: 'Video Content', impact: '1200% more shares', description: 'Engaging videos that boost engagement' },
    { type: 'Infographics', impact: '30x more likely to be read', description: 'Visual content that simplifies complex data' },
    { type: 'Case Studies', impact: '73% influence purchase decisions', description: 'Proof of concept and success stories' },
    { type: 'Whitepapers', impact: '79% share contact info', description: 'In-depth research and industry insights' },
    { type: 'Podcasts', impact: '320% faster growth', description: 'Audio content for on-the-go consumption' }
  ];

  const benefits = [
    { title: 'Increased Brand Awareness', desc: 'Quality content puts your brand in front of the right audience' },
    { title: 'Better Search Rankings', desc: 'SEO-optimized content improves your visibility in search results' },
    { title: 'Lead Generation', desc: 'Valuable content attracts and converts prospects into leads' },
    { title: 'Customer Education', desc: 'Educational content builds trust and positions you as an expert' },
    { title: 'Cost-Effective Marketing', desc: 'Content marketing costs 62% less than traditional marketing' },
    { title: 'Long-term Results', desc: 'Quality content continues to drive results long after publication' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavbarMT />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
          >
            Content Marketing
          </motion.h1>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
          >
            Create valuable, engaging content that attracts your ideal customers, builds trust, and drives profitable customer action across all digital channels.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="px-8 py-4 rounded-lg font-semibold bg-accent text-white hover:bg-accentHover transition-colors">
              Get Started
            </Link>
            <Link href="/services" className="border border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors">
              All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold text-center mb-16"
          >
            Why Content Marketing Matters
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold text-center mb-16"
          >
            Our Content Marketing Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold text-center mb-16"
          >
            Content Types That Drive Results
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((content, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-2">{content.type}</h3>
                <div className="text-green-600 font-semibold mb-3">{content.impact}</div>
                <p className="text-gray-600 text-sm">{content.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold text-center mb-16"
          >
            Our Content Marketing Process
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              { step: '01', title: 'Strategy', desc: 'Define goals and target audience' },
              { step: '02', title: 'Research', desc: 'Analyze competitors and keywords' },
              { step: '03', title: 'Planning', desc: 'Create editorial calendar' },
              { step: '04', title: 'Creation', desc: 'Produce high-quality content' },
              { step: '05', title: 'Distribution', desc: 'Publish across channels' },
              { step: '06', title: 'Optimization', desc: 'Analyze and improve performance' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
                className="text-center"
              >
                <div className="text-2xl font-bold text-gray-400 mb-3">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold text-center mb-16"
          >
            Content Marketing Statistics
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '3x', label: 'More Leads', desc: 'Content marketing generates 3x more leads than paid search' },
              { number: '62%', label: 'Cost Reduction', desc: 'Content marketing costs 62% less than traditional marketing' },
              { number: '6x', label: 'Higher Conversion', desc: 'Content marketing has 6x higher conversion rates' },
              { number: '97%', label: 'B2B Marketers', desc: 'Use content marketing as part of their strategy' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold mb-6"
          >
            Ready to Transform Your Content Strategy?
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            className="text-xl text-gray-600 mb-8"
          >
            Let&apos;s create content that not only engages your audience but also drives measurable business results and long-term growth.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
          >
            <Link href="/contact" className="px-8 py-4 rounded-lg font-semibold bg-accent text-white hover:bg-accentHover transition-colors">
              Start Your Content Marketing Journey
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContentMarketing;
