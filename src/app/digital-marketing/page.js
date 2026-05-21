'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

const DigitalMarketing = () => {
  const digitalMarketingServices = [
    {
      title: 'Social Media Marketing',
      link: '/social-media-marketing',
      description: 'Build your brand presence and engage your audience across all major social media platforms.',
      features: ['Content Strategy', 'Community Management', 'Social Advertising', 'Analytics & Reporting'],
      results: 'Increase brand awareness by 150% and engagement by 300%'
    },
    {
      title: 'Email Marketing',
      link: '/email-marketing',
      description: 'Drive revenue with strategic email campaigns that deliver personalized experiences.',
      features: ['Campaign Strategy', 'Automation Setup', 'List Management', 'Performance Analytics'],
      results: 'Generate 4200% ROI with targeted email campaigns'
    },
    {
      title: 'Content Marketing',
      link: '/content-marketing',
      description: 'Create valuable content that attracts customers, builds trust, and drives action.',
      features: ['Content Strategy', 'Blog Writing', 'Video Content', 'Content Distribution'],
      results: 'Generate 3x more leads with quality content marketing'
    },
    {
      title: 'PPC Advertising',
      link: '/ppc-advertising',
      description: 'Drive immediate results with strategic pay-per-click advertising campaigns.',
      features: ['Google Ads', 'Social Media Ads', 'Landing Page Optimization', 'Campaign Management'],
      results: 'Achieve 200% average ROI on paid advertising campaigns'
    },
    {
      title: 'Influencer Marketing',
      link: '/influencer-marketing',
      description: 'Connect with your audience through authentic partnerships with content creators.',
      features: ['Influencer Discovery', 'Campaign Strategy', 'Content Collaboration', 'Performance Tracking'],
      results: 'Gain 11x higher ROI than traditional advertising'
    },
    {
      title: 'SEO & Search Marketing',
      link: '/seo',
      description: 'Improve your search rankings and drive organic traffic to your website.',
      features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building'],
      results: 'Increase organic traffic by 400% and search rankings'
    }
  ];

  const benefits = [
    {
      title: 'Increased Brand Awareness',
      description: 'Reach millions of potential customers across multiple digital channels',
      icon: '🎯'
    },
    {
      title: 'Higher ROI',
      description: 'Digital marketing delivers measurable results with better return on investment',
      icon: '📈'
    },
    {
      title: 'Targeted Audience',
      description: 'Reach exactly the right people at the right time with precise targeting',
      icon: '🎪'
    },
    {
      title: 'Real-Time Analytics',
      description: 'Track performance and optimize campaigns in real-time for better results',
      icon: '📊'
    },
    {
      title: 'Cost-Effective',
      description: 'More affordable than traditional marketing with better tracking capabilities',
      icon: '💰'
    },
    {
      title: 'Global Reach',
      description: 'Expand your business reach beyond geographical boundaries',
      icon: '🌍'
    }
  ];

  const statistics = [
    { number: '4.8B', label: 'People Online', desc: 'Worldwide internet users to reach' },
    { number: '54%', label: 'Research Online', desc: 'Of consumers research products online first' },
    { number: '2.5x', label: 'Higher Growth', desc: 'Companies using digital marketing grow faster' },
    { number: '80%', label: 'Mobile Usage', desc: 'Of internet time is spent on mobile devices' }
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
            Digital Marketing Services
          </motion.h1>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
          >
            Transform your business with comprehensive digital marketing strategies that drive growth, increase brand awareness, and deliver measurable results across all digital channels.
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

      {/* Statistics Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold text-center mb-16"
          >
            Digital Marketing by the Numbers
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.desc}</p>
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
            Our Digital Marketing Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalMarketingServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-green-600 text-sm font-semibold mb-4">
                  {service.results}
                </div>
                <Link 
                  href={service.link}
                  className="inline-block px-6 py-2 rounded-lg font-semibold bg-accent text-white hover:bg-accentHover transition-colors"
                >
                  Explore {service.title}
                </Link>
              </motion.div>
            ))}
          </div>
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
            Why Choose Digital Marketing?
          </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
        className="bg-white p-6 rounded-xl text-center border border-gray-200 shadow-sm"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
        <p className="text-gray-600">{benefit.description}</p>
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
            Our Digital Marketing Process
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Discovery & Research', desc: 'Understand your business, audience, and competition' },
              { step: '02', title: 'Strategy Development', desc: 'Create comprehensive digital marketing roadmap' },
              { step: '03', title: 'Implementation', desc: 'Execute campaigns across chosen channels' },
              { step: '04', title: 'Monitoring & Optimization', desc: 'Track performance and optimize for better results' },
              { step: '05', title: 'Reporting & Scaling', desc: 'Analyze results and scale successful campaigns' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
                className="text-center"
              >
                <div className="text-3xl font-bold text-gray-400 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold mb-8"
          >
            Industries We Serve
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            className="text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            We&apos;ve helped businesses across various industries achieve their digital marketing goals with tailored strategies and proven results.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              'E-commerce', 'Healthcare', 'Technology', 'Real Estate',
              'Education', 'Finance', 'Food & Beverage', 'Professional Services'
            ].map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <p className="font-semibold">{industry}</p>
              </div>
            ))}
          </motion.div>
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
            Ready to Dominate Digital Marketing?
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            className="text-xl text-gray-600 mb-8"
          >
            Let&apos;s create a comprehensive digital marketing strategy that drives growth, increases brand awareness, and delivers measurable results for your business.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
    <Link href="/contact" className="px-8 py-4 rounded-lg font-semibold bg-accent text-white hover:bg-accentHover transition-colors">
              Start Your Digital Marketing Journey
            </Link>
    <Link href="/social-media-marketing" className="border border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors">
              Explore Social Media Marketing
            </Link>
          </motion.div>
        </div>
      </section>
  <Footer />
    </div>
  );
};

export default DigitalMarketing;
