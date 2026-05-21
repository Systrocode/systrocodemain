"use client";

import { useState, useEffect } from 'react';
import { hero as heroData, webdevelopment as webDevData } from '@/data.js';
import Hero from '@/components/Hero.js';
import Brands from '@/components/Brands.js';
import Feature1 from '@/components/Feature1.js';
import Feature2 from '@/components/Feature2.js';
import Feature3 from '@/components/Feature3.js';
import Cta from '@/components/Cta.js';
import Footer from '@/components/Footer.js';
import { NavbarMT } from '@/components/NavbarMT';
import { getService } from '@/lib/api';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import SEOFAQSection from '@/components/SEOFAQSection';
import { pageFAQs } from '@/data/seoFAQs';

export default function WebDevelopmentPage() {
  // Seed with static fallback so page renders immediately
  const [serviceData, setServiceData] = useState({
    hero: heroData.webd,
    features: [
      {
        title: webDevData.feature1.title,
        description: webDevData.feature1.subtitle,
        image: webDevData.feature1.image,
      },
      {
        title: webDevData.feature2.title,
        description: webDevData.feature2.subtitle,
        image: webDevData.feature2.image,
      },
      {
        title: webDevData.feature3.title,
        description: webDevData.feature3.subtitle,
        image: webDevData.feature3.image,
      },
    ],
  });
  const [error, setError] = useState(null);

  const fetchServiceData = async () => {
    try {
      const response = await getService('web-development');
      if (response.success) {
        // Only update features; keep local hero intact
        setServiceData(prev => ({ ...prev, features: response.data.features || prev.features }));
      } else {
        throw new Error('Failed to fetch service data');
      }
    } catch (err) {
      console.error('Error fetching service data:', err);
      setError(err.message);
  }
  };

  // Fetch on mount
  useEffect(() => {
    fetchServiceData();
  }, []);

  if (error && !serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
  <div className="text-center max-w-md">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Service Temporarily Unavailable</h2>
            <p className="text-gray-600 mb-4 text-center">We&apos;re experiencing technical difficulties. Please try again later.</p>
          <button onClick={fetchServiceData} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">Try Again</button>
        </div>
      </div>
    );
  }

  // Prefer locally written content; only merge valid API objects
  const localFeatures = [
    {
      title: webDevData.feature1.title,
      subtitle: webDevData.feature1.subtitle,
      image: webDevData.feature1.image,
    },
    {
      title: webDevData.feature2.title,
      subtitle: webDevData.feature2.subtitle,
      image: webDevData.feature2.image,
    },
    {
      title: webDevData.feature3.title,
      subtitle: webDevData.feature3.subtitle,
      image: webDevData.feature3.image,
    },
  ];

  const arr = Array.isArray(serviceData?.features) ? serviceData.features : [];
  const mergeFeature = (idx) => {
    const base = localFeatures[idx];
    const item = arr[idx];
    if (!item || typeof item === 'string') {
      // Keep original written content
      return base;
    }
    return {
      title: item.title || base.title,
      subtitle: item.description || item.subtitle || base.subtitle,
      image: item.image || base.image,
    };
  };

  const transformedFeatures = {
    feature1: mergeFeature(0),
    feature2: mergeFeature(1),
    feature3: mergeFeature(2),
  };

  return (
    <div className='overflow-hidden w-full'>
      <NavbarMT />
      <Hero data={serviceData?.hero} />
      <Brands />
  {transformedFeatures && (
        <>
          <Feature1 actual={transformedFeatures} />
          <Feature2 actual={transformedFeatures} />
          <Feature3 actual={transformedFeatures} />
        </>
      )}
      {/* Web Development Services Grid */}
      <section className="py-20 bg-grey">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-dark">Our Web Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast, scalable websites and apps built with modern best practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'E-commerce Websites', desc: 'High-converting stores with secure checkout and integrations', features: ['Shopify/WooCommerce', 'Payment Gateways', 'Inventory & Orders', 'Analytics & SEO'] },
              { title: 'Custom WordPress', desc: 'Custom themes, plugins, and CMS setups for flexibility', features: ['Theme Development', 'Plugin Development', 'Headless WP', 'Speed Optimization'] },
              { title: 'Full-Stack Apps', desc: 'MERN/Next.js apps with robust APIs and SSR/SSG', features: ['Next.js/React', 'Node.js/Express', 'REST/GraphQL', 'Auth & RBAC'] },
              { title: 'Performance & SEO', desc: 'Improve Core Web Vitals and search visibility', features: ['CWV Optimization', 'Lazy Loading', 'Image Optimization', 'Semantic HTML'] },
              { title: 'Maintenance & Support', desc: 'Ongoing updates, backups, and security hardening', features: ['Uptime Monitoring', 'Backup & Restore', 'Patching', 'Issue Resolution'] },
              { title: 'Integrations & APIs', desc: 'Connect your site with CRMs, ERPs, and third-party tools', features: ['REST/GraphQL', 'Webhook Flows', 'OAuth2/SAML', 'Custom Connectors'] },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn('up', 0.1 * i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent transition-colors shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-accent">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <SEOFAQSection
        seoContent={pageFAQs.webDevelopment.seoContent}
        faqs={pageFAQs.webDevelopment.faqs}
      />
      <Cta />
      <Footer />
    </div>
  );
}
