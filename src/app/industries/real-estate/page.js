'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

export default function RealEstatePage() {
  const services = [
    {
      title: 'Property Listings',
      description: 'Build feature-rich property listing platforms with advanced search filters, high-quality image galleries, and detailed property information pages.',
      features: ['Advanced Search Filters', 'Image Galleries', 'Neighborhood Data', 'Saved Searches & Alerts']
    },
    {
      title: 'Virtual Tours',
      description: 'Create immersive 3D virtual tour experiences that allow buyers to explore properties remotely with 360-degree views and interactive floor plans.',
      features: ['3D Walkthroughs', '360° Photography', 'Interactive Floor Plans', 'AR Staging']
    },
    {
      title: 'CRM Integration',
      description: 'Develop real estate CRM systems that manage leads, automate follow-ups, track deal pipelines, and provide agents with actionable insights.',
      features: ['Lead Management', 'Automated Follow-ups', 'Deal Pipeline', 'Agent Performance Tracking']
    },
    {
      title: 'Mortgage Calculators',
      description: 'Build intelligent mortgage and affordability calculators that help buyers understand financing options and connect with lending partners.',
      features: ['Payment Estimators', 'Affordability Analysis', 'Rate Comparisons', 'Pre-Qualification Tools']
    },
    {
      title: 'Agent Portals',
      description: 'Create comprehensive agent portals with listing management, client communication tools, commission tracking, and marketing automation features.',
      features: ['Listing Management', 'Client Communication', 'Commission Tracking', 'Marketing Tools']
    },
    {
      title: 'Map Integration',
      description: 'Implement advanced mapping features with property boundaries, nearby amenities, school districts, commute times, and market heat maps.',
      features: ['Interactive Maps', 'Amenity Proximity', 'School Districts', 'Market Heat Maps']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-dark overflow-hidden w-full">
      <NavbarMT />
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark">Real Estate <span className="text-accent">App Development</span></h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We build modern real estate technology solutions that transform property transactions. From property listing portals and virtual tour applications to real estate CRM systems and agent management platforms, our PropTech solutions help real estate companies, brokerages, and property managers streamline operations, attract more buyers, and close deals faster.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">10K+</p>
                <p className="text-gray-600">Properties Listed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">60%</p>
                <p className="text-gray-600">Faster Sales</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">3x</p>
                <p className="text-gray-600">More Leads</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">40+</p>
                <p className="text-gray-600">Real Estate Apps</p>
              </div>
            </div>
            <Link href="/contact" className="btn btn-accent btn-lg">Get Started</Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-grey">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-dark">Our Real Estate Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive PropTech solutions that modernize every aspect of real estate operations from listing to closing.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn('up', 0.1 * index)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent transition-colors shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-accent">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-dark">Our Real Estate Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A market-driven approach to building PropTech solutions that deliver results for agents, buyers, and sellers.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Market Research', desc: 'Analyze local market dynamics, user behavior, and competitor platforms to define your competitive advantage.' },
              { step: '02', title: 'UX Design', desc: 'Design property search experiences that are intuitive, fast, and optimized for both desktop and mobile users.' },
              { step: '03', title: 'Platform Development', desc: 'Build scalable platforms with MLS integration, mapping APIs, and real-time property data synchronization.' },
              { step: '04', title: 'Launch & Growth', desc: 'Deploy with SEO optimization, lead capture systems, and analytics to drive traffic and conversions.' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn('up', 0.1 * i)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2 text-dark">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}>
            <h2 className="text-4xl font-bold text-white mb-4">Modernize Your Real Estate Business</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Partner with us to build PropTech solutions that attract more buyers, empower agents, and accelerate property transactions.</p>
            <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100 btn-lg">Contact Us</Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
