'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

const PPCAdvertising = () => {
  const ppcServices = [
    {
      title: 'Google Ads Management',
      description: 'Expert Google Ads campaigns that maximize ROI.',
      features: ['Search Campaigns', 'Display Advertising', 'Shopping Campaigns', 'YouTube Ads']
    },
    {
      title: 'Social Media Advertising',
      description: 'Targeted social media ad campaigns across platforms.',
      features: ['Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'Twitter Ads']
    },
    {
      title: 'Landing Page Optimization',
      description: 'High-converting landing pages for your campaigns.',
      features: ['A/B Testing', 'Conversion Optimization', 'Mobile Optimization', 'Performance Tracking']
    },
    {
      title: 'Campaign Strategy',
      description: 'Comprehensive PPC strategy and planning.',
      features: ['Keyword Research', 'Competitor Analysis', 'Budget Planning', 'Audience Targeting']
    },
    {
      title: 'Ad Creative Development',
      description: 'Compelling ad creatives that drive clicks and conversions.',
      features: ['Ad Copywriting', 'Visual Design', 'Video Ads', 'A/B Testing']
    },
    {
      title: 'Analytics & Reporting',
      description: 'Detailed performance tracking and optimization.',
      features: ['Conversion Tracking', 'ROI Analysis', 'Performance Reports', 'Campaign Optimization']
    }
  ];

  const platforms = [
    { 
      platform: 'Google Ads', 
      reach: '8.5B searches/day', 
      strength: 'High-intent search traffic',
      avgROI: '800%'
    },
    { 
      platform: 'Facebook Ads', 
      reach: '2.8B users', 
      strength: 'Precise demographic targeting',
      avgROI: '400%'
    },
    { 
      platform: 'LinkedIn Ads', 
      reach: '900M professionals', 
      strength: 'B2B lead generation',
      avgROI: '600%'
    },
    { 
      platform: 'Instagram Ads', 
      reach: '2B users', 
      strength: 'Visual content engagement',
      avgROI: '500%'
    },
    { 
      platform: 'YouTube Ads', 
      reach: '2.7B users', 
      strength: 'Video marketing reach',
      avgROI: '650%'
    },
    { 
      platform: 'Microsoft Ads', 
      reach: '1.4B searches/month', 
      strength: 'Lower competition costs',
      avgROI: '750%'
    }
  ];

  const campaignTypes = [
    { type: 'Search Campaigns', desc: 'Capture high-intent users actively searching', conversion: '3-5% average CVR' },
    { type: 'Display Campaigns', desc: 'Build brand awareness across the web', conversion: '0.5-1% average CVR' },
    { type: 'Shopping Campaigns', desc: 'Showcase products with rich visuals', conversion: '1-2% average CVR' },
    { type: 'Video Campaigns', desc: 'Engage audiences with compelling video content', conversion: '2-4% average CVR' },
    { type: 'App Campaigns', desc: 'Drive app installs and in-app actions', conversion: '5-10% install rate' },
    { type: 'Smart Campaigns', desc: 'Automated campaigns for small businesses', conversion: '2-3% average CVR' }
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
            PPC Advertising
          </motion.h1>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
          >
            Drive immediate results with strategic pay-per-click advertising campaigns that target your ideal customers and maximize return on ad spend.
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

      {/* Why PPC Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold text-center mb-16"
          >
            Why Choose PPC Advertising?
          </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { title: 'Immediate Results', desc: 'Start driving traffic and leads within hours of launch' },
              { title: 'Precise Targeting', desc: 'Reach exactly the right audience at the right time' },
              { title: 'Measurable ROI', desc: 'Track every click, conversion, and dollar spent' },
              { title: 'Budget Control', desc: 'Set daily budgets and adjust spending in real-time' }
            ].map((benefit, index) => (
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
            Our PPC Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ppcServices.map((service, index) => (
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

      {/* Platforms Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold text-center mb-16"
          >
            Platforms We Master
          </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
        className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-2">{platform.platform}</h3>
        <p className="text-gray-500 text-sm mb-2">{platform.reach}</p>
        <p className="text-gray-600 text-sm mb-3">{platform.strength}</p>
        <div className="text-green-600 font-semibold">Average ROI: {platform.avgROI}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold text-center mb-16"
          >
            Campaign Types We Execute
          </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaignTypes.map((campaign, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
        className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-2">{campaign.type}</h3>
        <p className="text-gray-600 mb-3 text-sm">{campaign.desc}</p>
        <div className="text-green-600 font-semibold text-sm">{campaign.conversion}</div>
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
            Our PPC Process
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Strategy & Research', desc: 'Analyze market and competition' },
              { step: '02', title: 'Campaign Setup', desc: 'Build optimized ad campaigns' },
              { step: '03', title: 'Launch & Monitor', desc: 'Go live and track performance' },
              { step: '04', title: 'Optimize & Scale', desc: 'Improve and expand successful campaigns' },
              { step: '05', title: 'Report & Refine', desc: 'Analyze results and plan next steps' }
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

      {/* Statistics Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold mb-16"
          >
            PPC Advertising Results
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '200%', label: 'Average ROI', desc: 'Businesses earn $2 for every $1 spent on Google Ads' },
              { number: '65%', label: 'Click Intent', desc: 'Of users click on ads when ready to buy' },
              { number: '50%', label: 'Brand Awareness', desc: 'Increase in brand awareness with display ads' },
              { number: '80%', label: 'Businesses Use PPC', desc: 'Of businesses use pay-per-click advertising' }
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
            Ready to Drive Immediate Results?
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            className="text-xl text-gray-600 mb-8"
          >
            Let&apos;s create PPC campaigns that deliver qualified leads, increase sales, and maximize your return on advertising investment.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
          >
            <Link href="/contact" className="px-8 py-4 rounded-lg font-semibold bg-accent text-white hover:bg-accentHover transition-colors">
              Launch Your PPC Campaigns
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PPCAdvertising;
