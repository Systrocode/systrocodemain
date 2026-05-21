'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

export default function IndustriesPage() {
  const industries = [
    { title: 'Healthcare', description: 'HIPAA-compliant healthcare apps, telemedicine platforms, and patient management systems that transform patient care delivery.', href: '/industries/healthcare', icon: '🏥' },
    { title: 'E-Commerce', description: 'Scalable online stores, marketplaces, and shopping experiences that drive revenue growth and customer engagement.', href: '/industries/ecommerce', icon: '🛒' },
    { title: 'Fintech', description: 'Secure financial applications, payment systems, and banking solutions built with enterprise-grade security.', href: '/industries/fintech', icon: '💳' },
    { title: 'Education', description: 'Learning management systems, e-learning platforms, and educational apps that make knowledge accessible.', href: '/industries/education', icon: '📚' },
    { title: 'Real Estate', description: 'Property portals, virtual tour apps, and real estate CRM systems that modernize property transactions.', href: '/industries/real-estate', icon: '🏠' },
    { title: 'Travel & Hospitality', description: 'Booking platforms, travel planning apps, and hospitality management systems for seamless guest experiences.', href: '/contact', icon: '✈️' },
    { title: 'Logistics & Supply Chain', description: 'Fleet management, route optimization, and warehouse automation solutions for efficient operations.', href: '/contact', icon: '🚚' },
    { title: 'Food & Beverage', description: 'Restaurant ordering systems, delivery platforms, and food tech solutions that streamline F&B operations.', href: '/contact', icon: '🍽️' },
    { title: 'Gaming', description: 'Mobile games, multiplayer platforms, and gaming infrastructure built for performance and engagement.', href: '/contact', icon: '🎮' },
    { title: 'Automotive', description: 'Connected vehicle platforms, dealership management, and automotive IoT solutions driving innovation.', href: '/contact', icon: '🚗' },
  ];

  return (
    <div className="min-h-screen bg-white text-dark overflow-hidden w-full">
      <NavbarMT />
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark">Industries We <span className="text-accent">Serve</span></h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We deliver tailored software solutions across diverse industries, combining deep domain expertise with cutting-edge technology to solve complex business challenges and drive digital transformation for organizations of all sizes.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">10+</p>
                <p className="text-gray-600">Industries Served</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">98%</p>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">15+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
            <Link href="/contact" className="btn btn-accent btn-lg">Discuss Your Project</Link>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-grey">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-dark">Explore Our Industry Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From healthcare to automotive, we bring specialized knowledge and proven methodologies to every sector we serve.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div key={index} variants={fadeIn('up', 0.1 * index)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}>
                <Link href={industry.href} className="block bg-white p-8 rounded-xl border border-gray-200 hover:border-accent transition-colors shadow-lg h-full">
                  <span className="text-4xl mb-4 block">{industry.icon}</span>
                  <h3 className="text-2xl font-bold mb-4 text-accent">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-dark">Our Industry Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A proven methodology that adapts to the unique requirements of each industry we serve.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Domain Research', desc: 'Deep dive into industry regulations, workflows, and user expectations to build a solid foundation.' },
              { step: '02', title: 'Solution Design', desc: 'Architect solutions that address industry-specific challenges while maintaining scalability.' },
              { step: '03', title: 'Agile Development', desc: 'Iterative development with continuous feedback from domain experts and stakeholders.' },
              { step: '04', title: 'Compliance & Launch', desc: 'Ensure regulatory compliance, security standards, and smooth deployment to production.' },
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
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Industry?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Partner with us to build industry-leading software solutions that give you a competitive edge and drive measurable business outcomes.</p>
            <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100 btn-lg">Contact Us</Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
