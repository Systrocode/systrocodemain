'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import { NavbarMT } from '@/components/NavbarMT';
import Brands from '@/components/Brands';
import Footer from '@/components/Footer';

const SocialMediaMarketing = () => {
  const socialMediaServices = [
    {
      title: 'Social Media Strategy',
      description: 'Comprehensive social media planning and strategy development.',
      features: ['Platform Analysis', 'Content Calendar', 'Audience Research', 'Competitor Analysis']
    },
    {
      title: 'Content Creation',
      description: 'Engaging visual and written content for all social platforms.',
      features: ['Graphic Design', 'Video Content', 'Copywriting', 'Brand Consistency']
    },
    {
      title: 'Community Management',
      description: 'Active engagement and community building across platforms.',
      features: ['Daily Monitoring', 'Response Management', 'Community Growth', 'Crisis Management']
    },
    {
      title: 'Social Media Advertising',
      description: 'Targeted paid advertising campaigns for maximum ROI.',
      features: ['Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'Twitter Ads']
    },
    {
      title: 'Influencer Marketing',
      description: 'Strategic partnerships with relevant influencers in your industry.',
      features: ['Influencer Research', 'Campaign Management', 'Performance Tracking', 'ROI Analysis']
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive performance tracking and detailed reporting.',
      features: ['Performance Metrics', 'Monthly Reports', 'ROI Analysis', 'Strategy Optimization']
    }
  ];

  const platforms = [
    { name: 'Facebook', users: '2.8B+', strength: 'Brand Awareness & Community Building' },
    { name: 'Instagram', users: '2B+', strength: 'Visual Content & Engagement' },
    { name: 'LinkedIn', users: '900M+', strength: 'B2B Marketing & Professional Networking' },
    { name: 'Twitter', users: '450M+', strength: 'Real-time Engagement & News' },
    { name: 'TikTok', users: '1B+', strength: 'Video Content & Gen Z Audience' },
    { name: 'YouTube', users: '2.7B+', strength: 'Long-form Video & Education' }
  ];

  return (
    <div className="min-h-screen bg-white text-dark overflow-hidden w-full">
      <NavbarMT />
      {/* Hero Section */}
      <section className="pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark">
              Social Media <span className="text-accent">Marketing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Build your brand presence, engage your audience, and drive growth across major social platforms with strategic content, paid social, and community management.
            </p>
            <Link href="/contact" className="btn btn-accent btn-lg">
              Get SMM Strategy
            </Link>
          </motion.div>
        </div>
      </section>

      <Brands />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-dark">Our Social Media Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end social media solutions to grow reach, engagement, and revenue
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialMediaServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent transition-colors shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-accent">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
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
      <section className="py-20 bg-grey">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-dark">Platforms We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We tailor strategy and creatives for each platform’s strengths and audience
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-6 rounded-xl text-center border border-gray-200 shadow"
              >
                <h3 className="text-2xl font-bold mb-2 text-accent">{platform.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{platform.users} Active Users</p>
                <p className="text-gray-700 text-sm">{platform.strength}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-dark">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that keeps your brand consistent and your results compounding
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Strategy & Research', desc: 'Analyze your audience and competitors' },
              { step: '02', title: 'Content Planning', desc: 'Create comprehensive content calendar' },
              { step: '03', title: 'Execution & Monitoring', desc: 'Implement campaigns and track performance' },
              { step: '04', title: 'Optimize & Scale', desc: 'Refine strategies for maximum results' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2 text-dark">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Dominate Social Media?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s create a presence that converts followers into customers and builds brand loyalty.
            </p>
            <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100 btn-lg">
              Start Your Social Media Journey
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMediaMarketing;
