'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

export default function AIAgentDevelopmentPage() {
  const services = [
    {
      title: 'Task Automation Agents',
      description: 'Build AI agents that autonomously handle repetitive business tasks including data entry, report generation, email processing, and document management.',
      features: ['Data Processing', 'Report Generation', 'Email Automation', 'Document Handling']
    },
    {
      title: 'Workflow Orchestration',
      description: 'Create intelligent workflow orchestration agents that coordinate complex multi-step business processes, manage dependencies, and handle exceptions gracefully.',
      features: ['Process Coordination', 'Dependency Management', 'Error Recovery', 'Parallel Execution']
    },
    {
      title: 'Multi-Agent Systems',
      description: 'Design collaborative multi-agent architectures where specialized agents work together, share context, and solve complex problems through coordinated reasoning.',
      features: ['Agent Collaboration', 'Shared Memory', 'Role Specialization', 'Consensus Mechanisms']
    },
    {
      title: 'Tool-Using Agents',
      description: 'Develop agents that interact with external tools, APIs, databases, and services to gather information, take actions, and complete tasks in the real world.',
      features: ['API Integration', 'Database Queries', 'Web Browsing', 'Code Execution']
    },
    {
      title: 'Memory Systems',
      description: 'Implement sophisticated memory architectures that give agents short-term working memory, long-term knowledge retention, and episodic recall capabilities.',
      features: ['Working Memory', 'Long-term Storage', 'Episodic Recall', 'Knowledge Graphs']
    },
    {
      title: 'Agent Monitoring',
      description: 'Build comprehensive monitoring and observability systems that track agent behavior, performance metrics, cost efficiency, and safety compliance in production.',
      features: ['Behavior Tracking', 'Performance Metrics', 'Cost Monitoring', 'Safety Guardrails']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-dark overflow-hidden w-full">
      <NavbarMT />
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark">AI Agent <span className="text-accent">Development</span></h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We build autonomous AI agents that handle complex tasks, orchestrate workflows, and make intelligent decisions on behalf of your organization. Our AI agents combine large language models with tool use, memory systems, and reasoning capabilities to operate independently, learn from experience, and deliver consistent results across business operations without constant human oversight.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">80%</p>
                <p className="text-gray-600">Task Automation</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">5x</p>
                <p className="text-gray-600">Productivity Gain</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-gray-600">Operation</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">30+</p>
                <p className="text-gray-600">Agent Deployments</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our AI Agent Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive AI agent development services from single-task automation to complex multi-agent systems that transform business operations.</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our AI Agent Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A safety-first approach to building autonomous agents that are reliable, controllable, and aligned with your business objectives.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Task Analysis', desc: 'Map workflows, identify automation opportunities, and define agent capabilities, boundaries, and success criteria.' },
              { step: '02', title: 'Architecture Design', desc: 'Design agent architecture with appropriate reasoning, memory, tool access, and safety guardrails.' },
              { step: '03', title: 'Build & Test', desc: 'Develop agents iteratively with extensive testing in sandboxed environments before production deployment.' },
              { step: '04', title: 'Deploy & Monitor', desc: 'Launch with human-in-the-loop oversight, performance monitoring, and continuous capability expansion.' },
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
            <h2 className="text-4xl font-bold text-white mb-4">Automate Your Business with AI Agents</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Partner with us to build autonomous AI agents that handle complex tasks, reduce operational costs, and scale your team's capabilities.</p>
            <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100 btn-lg">Contact Us</Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
