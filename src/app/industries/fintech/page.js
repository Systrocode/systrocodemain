'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

export default function FintechPage() {
  const services = [
    {
      title: 'Digital Banking',
      description: 'Build modern neobank and digital banking platforms with account management, fund transfers, and real-time transaction processing capabilities.',
      features: ['Account Management', 'Fund Transfers', 'Card Management', 'KYC/AML Integration']
    },
    {
      title: 'Payment Gateways',
      description: 'Develop secure payment processing infrastructure supporting multiple payment methods, currencies, and real-time settlement with fraud prevention.',
      features: ['Multi-Currency Support', 'Real-time Settlement', 'Tokenization', 'Recurring Payments']
    },
    {
      title: 'Investment Platforms',
      description: 'Create robo-advisory and investment management platforms with portfolio tracking, automated trading, and comprehensive market analytics.',
      features: ['Robo-Advisory', 'Portfolio Management', 'Market Data Integration', 'Automated Trading']
    },
    {
      title: 'Lending Solutions',
      description: 'Build digital lending platforms with automated credit scoring, loan origination, underwriting workflows, and collection management systems.',
      features: ['Credit Scoring AI', 'Loan Origination', 'Automated Underwriting', 'Collection Management']
    },
    {
      title: 'Blockchain Integration',
      description: 'Implement blockchain-based solutions for decentralized finance, smart contracts, tokenization, and transparent transaction ledgers.',
      features: ['Smart Contracts', 'DeFi Protocols', 'Asset Tokenization', 'Cross-Chain Bridges']
    },
    {
      title: 'Regulatory Compliance',
      description: 'Ensure your fintech applications meet all regulatory requirements with built-in compliance frameworks, reporting, and audit trail systems.',
      features: ['PCI-DSS Compliance', 'SOX Reporting', 'GDPR Data Protection', 'Automated Audit Trails']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-dark overflow-hidden w-full">
      <NavbarMT />
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark">Fintech <span className="text-accent">App Development</span></h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We build secure, scalable financial applications that power the future of banking and payments. From digital banking platforms and payment gateways to investment tools and blockchain solutions, our fintech development services combine enterprise-grade security with innovative user experiences to help financial institutions and startups disrupt traditional finance.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">$2B+</p>
                <p className="text-gray-600">Transactions Processed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">PCI-DSS</p>
                <p className="text-gray-600">Fully Compliant</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">100+</p>
                <p className="text-gray-600">Fintech Apps Built</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">99.99%</p>
                <p className="text-gray-600">Uptime Guaranteed</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our Fintech Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive financial technology solutions built with bank-grade security, regulatory compliance, and seamless user experiences.</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our Fintech Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A security-first development methodology designed for the unique demands of financial services.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Regulatory Mapping', desc: 'Identify applicable regulations (PCI-DSS, SOX, GDPR) and design compliance architecture from the start.' },
              { step: '02', title: 'Security Architecture', desc: 'Design multi-layered security with encryption, tokenization, and zero-trust access controls.' },
              { step: '03', title: 'Agile Development', desc: 'Build iteratively with continuous security testing, code reviews, and penetration testing.' },
              { step: '04', title: 'Compliance Audit & Launch', desc: 'Complete third-party security audits, obtain certifications, and deploy with monitoring.' },
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
            <h2 className="text-4xl font-bold text-white mb-4">Build the Future of Finance</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Partner with our fintech experts to create secure, compliant, and innovative financial applications that disrupt traditional banking.</p>
            <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100 btn-lg">Contact Us</Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
