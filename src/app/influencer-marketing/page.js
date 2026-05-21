'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';
import SEOFAQSection from '@/components/SEOFAQSection';
import { pageFAQs } from '@/data/seoFAQs';

const InfluencerMarketing = () => {
  const influencerServices = [
    {
      title: 'Influencer Discovery',
      description: 'Find the perfect influencers for your brand and campaign goals.',
      features: ['Audience Analysis', 'Engagement Rate Review', 'Brand Alignment Check', 'Authenticity Verification']
    },
    {
      title: 'Campaign Strategy',
      description: 'Develop comprehensive influencer marketing strategies.',
      features: ['Goal Setting', 'Target Audience Definition', 'Content Guidelines', 'KPI Development']
    },
    {
      title: 'Influencer Outreach',
      description: 'Professional outreach and relationship building.',
      features: ['Initial Contact', 'Negotiation Support', 'Contract Management', 'Relationship Building']
    },
    {
      title: 'Content Collaboration',
      description: 'Work with influencers to create authentic, engaging content.',
      features: ['Content Planning', 'Creative Direction', 'Brand Guidelines', 'Approval Process']
    },
    {
      title: 'Campaign Management',
      description: 'End-to-end campaign execution and monitoring.',
      features: ['Timeline Management', 'Content Scheduling', 'Performance Tracking', 'Quality Assurance']
    },
    {
      title: 'Analytics & ROI',
      description: 'Comprehensive performance measurement and reporting.',
      features: ['Engagement Metrics', 'Reach Analysis', 'Conversion Tracking', 'ROI Calculation']
    }
  ];

  const influencerTiers = [
    { 
      tier: 'Nano-Influencers', 
      followers: '1K-10K', 
      engagement: '8-10%',
      strength: 'High trust & authenticity',
      bestFor: 'Niche products, local businesses'
    },
    { 
      tier: 'Micro-Influencers', 
      followers: '10K-100K', 
      engagement: '5-8%',
      strength: 'Strong community connection',
      bestFor: 'Targeted campaigns, emerging brands'
    },
    { 
      tier: 'Mid-Tier Influencers', 
      followers: '100K-1M', 
      engagement: '3-5%',
      strength: 'Good reach & engagement balance',
      bestFor: 'Brand awareness, product launches'
    },
    { 
      tier: 'Macro-Influencers', 
      followers: '1M-10M', 
      engagement: '2-3%',
      strength: 'Massive reach potential',
      bestFor: 'Large campaigns, mainstream brands'
    },
    { 
      tier: 'Celebrity Influencers', 
      followers: '10M+', 
      engagement: '1-2%',
      strength: 'Maximum brand exposure',
      bestFor: 'Major brand campaigns, viral potential'
    }
  ];

  const platforms = [
    { platform: 'Instagram', strength: 'Visual content & lifestyle brands', avgEngagement: '1.22%' },
    { platform: 'TikTok', strength: 'Gen Z audience & viral content', avgEngagement: '5.96%' },
    { platform: 'YouTube', strength: 'Long-form content & education', avgEngagement: '1.63%' },
    { platform: 'Twitter', strength: 'Real-time engagement & news', avgEngagement: '0.048%' },
    { platform: 'LinkedIn', strength: 'B2B marketing & professionals', avgEngagement: '2.05%' },
    { platform: 'Twitch', strength: 'Gaming & live streaming', avgEngagement: '3.8%' }
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
            Influencer Marketing
          </motion.h1>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
          >
            Connect with your target audience through authentic partnerships with influential content creators who align with your brand values and goals.
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

      {/* Why Influencer Marketing */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold text-center mb-16"
          >
            Why Influencer Marketing Works
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { stat: '11x', label: 'Higher ROI', desc: 'Than traditional advertising' },
              { stat: '89%', label: 'Trust Factor', desc: 'Of consumers trust influencer recommendations' },
              { stat: '37%', label: 'Budget Increase', desc: 'Marketers increasing influencer budgets' },
              { stat: '4.87%', label: 'Engagement Rate', desc: 'Average across all platforms' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="text-4xl font-bold mb-2">{item.stat}</div>
                <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
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
            Our Influencer Marketing Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {influencerServices.map((service, index) => (
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

      {/* Influencer Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold text-center mb-16"
          >
            Influencer Tiers We Work With
          </motion.h2>
          <div className="space-y-6">
            {influencerTiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm grid md:grid-cols-5 gap-4 items-center"
              >
                <div>
                  <h3 className="text-xl font-bold">{tier.tier}</h3>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Followers</p>
                  <p className="font-semibold">{tier.followers}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">Avg Engagement</p>
                  <p className="font-semibold text-green-600">{tier.engagement}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Strength</p>
                  <p className="text-sm">{tier.strength}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Best For</p>
                  <p className="text-sm">{tier.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
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
                <p className="text-gray-600 text-sm mb-3">{platform.strength}</p>
                <div className="text-green-600 font-semibold text-sm">
                  Avg Engagement: {platform.avgEngagement}
                </div>
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
            Our Influencer Marketing Process
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              { step: '01', title: 'Strategy', desc: 'Define goals and target audience' },
              { step: '02', title: 'Discovery', desc: 'Find perfect influencer matches' },
              { step: '03', title: 'Outreach', desc: 'Connect and negotiate partnerships' },
              { step: '04', title: 'Content', desc: 'Collaborate on authentic content' },
              { step: '05', title: 'Campaign', desc: 'Execute and monitor performance' },
              { step: '06', title: 'Analysis', desc: 'Measure results and optimize' }
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
            {[
              { type: 'Product Launches', desc: 'Generate buzz for new products', result: '40% increase in awareness' },
              { type: 'Brand Awareness', desc: 'Build recognition and recall', result: '60% reach improvement' },
              { type: 'Event Promotion', desc: 'Drive attendance and engagement', result: '35% more registrations' },
              { type: 'App Downloads', desc: 'Increase mobile app installations', result: '50% higher install rates' },
              { type: 'Lead Generation', desc: 'Capture qualified prospects', result: '25% more leads' },
              { type: 'Sales Campaigns', desc: 'Drive direct purchase conversions', result: '30% sales increase' }
            ].map((campaign, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-2">{campaign.type}</h3>
                <p className="text-gray-600 mb-3 text-sm">{campaign.desc}</p>
                <div className="text-green-600 font-semibold text-sm">{campaign.result}</div>
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
            Ready to Amplify Your Brand?
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            className="text-xl text-gray-600 mb-8"
          >
            Let&apos;s connect your brand with influential creators who can authentically promote your products and drive meaningful engagement with your target audience.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
          >
            <Link href="/contact" className="px-8 py-4 rounded-lg font-semibold bg-accent text-white hover:bg-accentHover transition-colors">
              Start Your Influencer Campaign
            </Link>
          </motion.div>
        </div>
      </section>
      <SEOFAQSection
        seoContent={pageFAQs.influencerMarketing.seoContent}
        faqs={pageFAQs.influencerMarketing.faqs}
      />
      <Footer />
    </div>
  );
};

export default InfluencerMarketing;
