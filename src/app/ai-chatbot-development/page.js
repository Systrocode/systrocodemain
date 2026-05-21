'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

export default function AIChatbotDevelopmentPage() {
  const services = [
    {
      title: 'Custom Chatbots',
      description: 'Build tailored AI chatbots trained on your business data that understand your products, services, and customer needs for accurate, contextual responses.',
      features: ['Custom Knowledge Base', 'Brand Voice Training', 'Multi-Turn Conversations', 'Fallback Handling']
    },
    {
      title: 'NLP Integration',
      description: 'Implement advanced natural language processing capabilities that enable chatbots to understand intent, extract entities, and handle complex queries naturally.',
      features: ['Intent Recognition', 'Entity Extraction', 'Sentiment Detection', 'Context Management']
    },
    {
      title: 'Multi-Channel Bots',
      description: 'Deploy chatbots across websites, mobile apps, WhatsApp, Slack, Microsoft Teams, and social media platforms with unified conversation management.',
      features: ['Website Widget', 'WhatsApp Business', 'Slack & Teams', 'Social Media Integration']
    },
    {
      title: 'Voice Assistants',
      description: 'Develop voice-enabled AI assistants with speech recognition, natural language understanding, and text-to-speech for hands-free customer interactions.',
      features: ['Speech Recognition', 'Voice Synthesis', 'Wake Word Detection', 'Multi-Language Support']
    },
    {
      title: 'Conversational AI',
      description: 'Create sophisticated conversational AI systems that handle complex workflows, make recommendations, and guide users through multi-step processes.',
      features: ['Workflow Automation', 'Product Recommendations', 'Guided Processes', 'Dynamic Responses']
    },
    {
      title: 'Bot Analytics',
      description: 'Implement comprehensive analytics dashboards that track chatbot performance, user satisfaction, conversation flows, and identify improvement opportunities.',
      features: ['Conversation Analytics', 'User Satisfaction Scores', 'Drop-off Analysis', 'Performance Metrics']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-dark overflow-hidden w-full">
      <NavbarMT />
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark">AI Chatbot <span className="text-accent">Development</span></h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We build intelligent AI chatbots that transform customer support, drive sales, and boost engagement. Our chatbot solutions leverage advanced NLP, large language models, and conversational AI to deliver human-like interactions across every channel. From simple FAQ bots to complex multi-step workflow assistants, we create chatbots that understand context, learn from interactions, and deliver measurable business results.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">80%</p>
                <p className="text-gray-600">Query Resolution</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-gray-600">Availability</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">60%</p>
                <p className="text-gray-600">Cost Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">5x</p>
                <p className="text-gray-600">Faster Response</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our AI Chatbot Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">End-to-end chatbot development services from strategy and design to deployment and continuous optimization across all channels.</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our Chatbot Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A proven methodology for building chatbots that deliver real business value from day one.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Conversation Design', desc: 'Map user intents, design conversation flows, and define personality and tone for your chatbot.' },
              { step: '02', title: 'AI Model Training', desc: 'Train NLP models on your data, fine-tune language understanding, and build knowledge bases.' },
              { step: '03', title: 'Integration & Testing', desc: 'Connect to your systems, deploy across channels, and test with real user scenarios.' },
              { step: '04', title: 'Launch & Optimize', desc: 'Go live with monitoring, analyze conversations, and continuously improve accuracy and coverage.' },
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
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Automate Customer Interactions?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Let us build an AI chatbot that handles customer queries 24/7, reduces support costs, and delivers exceptional experiences at scale.</p>
            <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100 btn-lg">Contact Us</Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
