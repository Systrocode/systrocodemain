'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

export default function LLMDevelopmentPage() {
  const services = [
    {
      title: 'Model Fine-tuning',
      description: 'Fine-tune large language models on your proprietary data to achieve superior performance on domain-specific tasks while maintaining general capabilities.',
      features: ['Domain Adaptation', 'Instruction Tuning', 'RLHF Training', 'Parameter-Efficient Methods']
    },
    {
      title: 'RAG Systems',
      description: 'Build Retrieval-Augmented Generation systems that ground LLM responses in your knowledge base, reducing hallucinations and ensuring factual accuracy.',
      features: ['Vector Database Setup', 'Document Chunking', 'Hybrid Search', 'Citation Generation']
    },
    {
      title: 'Prompt Engineering',
      description: 'Design and optimize prompt strategies that maximize LLM performance for your use cases with systematic testing, evaluation, and version management.',
      features: ['Prompt Optimization', 'Chain-of-Thought Design', 'Few-Shot Templates', 'A/B Testing Framework']
    },
    {
      title: 'Model Deployment',
      description: 'Deploy LLMs at scale with optimized inference infrastructure, load balancing, caching strategies, and cost-efficient GPU utilization.',
      features: ['GPU Optimization', 'Model Quantization', 'Auto-Scaling', 'Edge Deployment']
    },
    {
      title: 'Custom Training',
      description: 'Train custom language models from scratch or continue pre-training on domain-specific corpora for specialized applications requiring unique capabilities.',
      features: ['Pre-training Pipelines', 'Data Curation', 'Distributed Training', 'Evaluation Benchmarks']
    },
    {
      title: 'Enterprise Integration',
      description: 'Integrate LLM capabilities into existing enterprise systems with secure APIs, access controls, usage monitoring, and compliance frameworks.',
      features: ['Secure API Gateway', 'Role-Based Access', 'Usage Analytics', 'Data Privacy Controls']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-dark overflow-hidden w-full">
      <NavbarMT />
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark">LLM Development <span className="text-accent">Services</span></h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We specialize in fine-tuning and deploying large language models for enterprise use cases. Whether you need a custom GPT model trained on your data, a RAG system grounded in your knowledge base, or optimized LLM infrastructure for production workloads, our team brings deep expertise in model training, prompt engineering, and scalable deployment to help you harness the full potential of language AI.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">40%</p>
                <p className="text-gray-600">Better Accuracy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">3x</p>
                <p className="text-gray-600">Faster Inference</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">100+</p>
                <p className="text-gray-600">Enterprise Deployments</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">GPT/Claude</p>
                <p className="text-gray-600">Llama Expertise</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our LLM Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">End-to-end large language model services from fine-tuning and RAG implementation to production deployment and enterprise integration.</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our LLM Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A systematic approach to building production-ready LLM solutions that deliver consistent, accurate results.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Requirements & Data', desc: 'Define use cases, gather training data, establish evaluation criteria, and select the optimal base model.' },
              { step: '02', title: 'Fine-tuning & RAG', desc: 'Train models on your data, build retrieval pipelines, and optimize prompts for maximum accuracy.' },
              { step: '03', title: 'Evaluation & Safety', desc: 'Benchmark against baselines, test edge cases, implement guardrails, and validate with domain experts.' },
              { step: '04', title: 'Deploy & Scale', desc: 'Production deployment with monitoring, auto-scaling, cost optimization, and continuous improvement loops.' },
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
            <h2 className="text-4xl font-bold text-white mb-4">Deploy Enterprise-Grade LLM Solutions</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Partner with our LLM experts to fine-tune, deploy, and scale language models that transform your business operations.</p>
            <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100 btn-lg">Contact Us</Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
