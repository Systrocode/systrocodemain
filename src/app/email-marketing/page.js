'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import { NavbarMT } from '@/components/NavbarMT';
import Footer from '@/components/Footer';

const EmailMarketing = () => {
  const emailServices = [
    {
      title: 'Campaign Strategy',
      description: 'Comprehensive email marketing strategy and planning.',
      features: ['Audience Segmentation', 'Campaign Planning', 'A/B Testing Strategy', 'Automation Workflows']
    },
    {
      title: 'Email Design',
      description: 'Beautiful, responsive email templates that convert.',
      features: ['Custom Templates', 'Mobile Optimization', 'Brand Consistency', 'Interactive Elements']
    },
    {
      title: 'List Management',
      description: 'Build and maintain high-quality subscriber lists.',
      features: ['List Building', 'Segmentation', 'Data Hygiene', 'Compliance Management']
    },
    {
      title: 'Automation Setup',
      description: 'Automated email sequences for maximum engagement.',
      features: ['Welcome Series', 'Drip Campaigns', 'Behavioral Triggers', 'Lead Nurturing']
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed tracking and optimization of email campaigns.',
      features: ['Open Rate Tracking', 'Click Analytics', 'Conversion Tracking', 'ROI Reporting']
    },
    {
      title: 'Deliverability Optimization',
      description: 'Ensure your emails reach the inbox, not spam.',
      features: ['Spam Testing', 'Sender Reputation', 'Domain Authentication', 'List Hygiene']
    }
  ];

  const campaignTypes = [
    { type: 'Welcome Series', desc: 'Onboard new subscribers effectively', conversion: '25% higher engagement' },
    { type: 'Newsletter', desc: 'Regular updates and valuable content', conversion: '18% better retention' },
    { type: 'Promotional', desc: 'Product launches and special offers', conversion: '32% higher sales' },
    { type: 'Abandoned Cart', desc: 'Recover lost sales automatically', conversion: '15% cart recovery' },
    { type: 'Re-engagement', desc: 'Win back inactive subscribers', conversion: '12% reactivation rate' },
    { type: 'Post-Purchase', desc: 'Enhance customer experience', conversion: '28% repeat purchases' }
  ];

  const statistics = [
    { number: '4200%', label: 'Average ROI', desc: 'Email marketing delivers exceptional returns' },
    { number: '99%', label: 'Email Users', desc: 'Of people check email daily' },
    { number: '50%', label: 'Purchase Influence', desc: 'Of people buy from marketing emails monthly' },
    { number: '3.9B', label: 'Email Users', desc: 'Worldwide by 2023' }
  ];

  return (
    <div className="overflow-hidden w-full bg-white text-dark">
      <NavbarMT />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Email Marketing
          </motion.h1>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
          >
            Drive revenue and build lasting relationships with strategic email marketing campaigns that deliver personalized experiences and measurable results.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="inline-block px-8 py-4 rounded-lg bg-accent text-white font-semibold hover:bg-accentHover transition-colors">
              Get Started
            </Link>
            <Link href="/services" className="inline-block px-8 py-4 rounded-lg border border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-colors">
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
            Why Email Marketing Works
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
            Our Email Marketing Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emailServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent transition-colors shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-accent">{service.title}</h3>
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

      {/* Campaign Types */}
  <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold text-center mb-16"
          >
            Campaign Types We Master
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaignTypes.map((campaign, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
        className="bg-white p-6 rounded-xl border border-gray-200 shadow"
              >
                <h3 className="text-xl font-bold mb-2">{campaign.type}</h3>
        <p className="text-gray-600 mb-3">{campaign.desc}</p>
        <div className="text-sm font-semibold text-accent">{campaign.conversion}</div>
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
            Our Email Marketing Process
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Strategy & Planning', desc: 'Define goals and audience segments' },
              { step: '02', title: 'List Building', desc: 'Grow your subscriber base organically' },
              { step: '03', title: 'Design & Content', desc: 'Create compelling emails that convert' },
              { step: '04', title: 'Testing & Launch', desc: 'Optimize before sending to your list' },
              { step: '05', title: 'Analyze & Optimize', desc: 'Track performance and improve results' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
                className="text-center"
              >
                <div className="text-3xl font-bold text-gray-600 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
  <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold mb-8"
          >
            Professional Email Marketing Tools
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
    className="text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            We work with industry-leading platforms like Mailchimp, Klaviyo, HubSpot, and ConvertKit to deliver exceptional email marketing results.
          </motion.p>
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
            Ready to Boost Your Email Marketing ROI?
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
    className="text-xl text-gray-600 mb-8"
          >
            Let&apos;s create email campaigns that engage your audience, nurture leads, and drive consistent revenue for your business.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
          >
    <Link href="/contact" className="inline-block px-8 py-4 rounded-lg bg-accent text-white font-semibold hover:bg-accentHover transition-colors">
              Start Your Email Marketing Campaign
            </Link>
          </motion.div>
        </div>
      </section>
  <Footer />
    </div>
  );
};

export default EmailMarketing;
