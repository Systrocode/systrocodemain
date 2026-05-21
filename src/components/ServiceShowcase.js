"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'High-performance websites and web applications built with Next.js, React, and Node.js. Server-side rendered, SEO-optimized, and blazing fast.',
    features: ['Next.js & React', 'E-Commerce Platforms', 'Custom Web Apps', 'API Development'],
    link: '/web-development',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Native-quality iOS and Android apps from a single codebase. Cross-platform development that saves time without compromising quality.',
    features: ['React Native', 'iOS & Android', 'App Store Launch', 'Push Notifications'],
    link: '/mobile-development',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: '🤖',
    title: 'AI & Automation',
    description: 'Intelligent solutions that automate workflows, enhance decision-making, and create personalized experiences at scale.',
    features: ['AI Chatbots', 'Process Automation', 'Predictive Analytics', 'Custom LLMs'],
    link: '/ai-automation',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: '📈',
    title: 'SEO & Digital Marketing',
    description: 'Data-driven marketing strategies that increase organic traffic, improve search rankings, and drive qualified leads to your business.',
    features: ['Technical SEO', 'Content Strategy', 'PPC Campaigns', 'Social Media'],
    link: '/seo',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Research-backed design that converts visitors into customers. Beautiful interfaces built on user behavior data and accessibility standards.',
    features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
    link: '/web-design',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: '🔒',
    title: 'Cyber Security',
    description: 'Protect your digital assets with comprehensive security audits, penetration testing, and compliance consulting for modern threats.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Monitoring'],
    link: '/cyber-security',
    color: 'from-slate-600 to-gray-800',
  },
];

const ServiceShowcase = () => {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">What We Do</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-4">Services Built for Growth</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end digital solutions that help businesses launch, scale, and dominate their market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.1 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              <Link href={service.link} className="block h-full">
                <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-colors">
            View All Services
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
