'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

export default function GenerativeAIPage() {
  const services = [
    {
      title: 'Content Generation',
      description: 'Build AI-powered content creation systems that generate marketing copy, blog posts, product descriptions, and social media content at scale with brand consistency.',
      features: ['Marketing Copy', 'Blog & Article Writing', 'Product Descriptions', 'Social Media Content']
    },
    {
      title: 'Image Synthesis',
      description: 'Develop custom image generation solutions using diffusion models and GANs for product visualization, creative assets, and personalized visual content.',
      features: ['Product Visualization', 'Creative Asset Generation', 'Style Transfer', 'Image Enhancement']
    },
    {
      title: 'Code Assistants',
      description: 'Create AI-powered code generation and review tools that accelerate development workflows, suggest improvements, and automate repetitive coding tasks.',
      features: ['Code Generation', 'Code Review Automation', 'Bug Detection', 'Documentation Generation']
    },
    {
      title: 'Document AI',
      description: 'Build intelligent document processing systems that extract, summarize, and generate documents with understanding of structure, context, and compliance requirements.',
      features: ['Document Extraction', 'Auto-Summarization', 'Template Generation', 'Compliance Checking']
    },
    {
      title: 'Custom LLMs',
      description: 'Fine-tune and deploy custom large language models trained on your proprietary data for domain-specific tasks with superior accuracy and relevance.',
      features: ['Domain Fine-tuning', 'Private Data Training', 'Model Optimization', 'Secure Deployment']
    },
    {
      title: 'AI Agents',
      description: 'Develop autonomous AI agents that combine generative capabilities with tool use, reasoning, and memory to handle complex multi-step business workflows.',
      features: ['Autonomous Workflows', 'Tool Integration', 'Reasoning Chains', 'Memory & Context']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-dark overflow-hidden w-full">
      <NavbarMT />
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark">Generative AI <span className="text-accent">Development</span></h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We build cutting-edge generative AI solutions that transform how businesses create content, generate code, produce images, and automate complex workflows. Our team leverages the latest advances in large language models, diffusion models, and multi-modal AI to deliver custom generative solutions that drive productivity, reduce costs, and unlock new creative possibilities for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">10x</p>
                <p className="text-gray-600">Content Speed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">70%</p>
                <p className="text-gray-600">Cost Savings</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">95%</p>
                <p className="text-gray-600">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">50+</p>
                <p className="text-gray-600">AI Models Deployed</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our Generative AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive generative AI development services that harness the power of foundation models for your specific business needs.</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our Generative AI Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A structured approach to building generative AI solutions that are accurate, safe, and aligned with your business goals.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Use Case Discovery', desc: 'Identify high-impact generative AI opportunities and define success metrics for your specific business context.' },
              { step: '02', title: 'Model Selection', desc: 'Evaluate foundation models, determine fine-tuning needs, and design the optimal architecture for your use case.' },
              { step: '03', title: 'Training & Safety', desc: 'Fine-tune models on your data with guardrails, content filtering, and bias mitigation for safe outputs.' },
              { step: '04', title: 'Deploy & Monitor', desc: 'Deploy with scalable infrastructure, implement quality monitoring, and iterate based on user feedback.' },
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
            <h2 className="text-4xl font-bold text-white mb-4">Unlock the Power of Generative AI</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Partner with our AI experts to build generative solutions that automate content creation, accelerate workflows, and drive innovation.</p>
            <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100 btn-lg">Contact Us</Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
