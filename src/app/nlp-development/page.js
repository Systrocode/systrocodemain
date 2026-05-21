'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

export default function NLPDevelopmentPage() {
  const services = [
    {
      title: 'Text Classification',
      description: 'Build intelligent text classification systems that automatically categorize documents, emails, support tickets, and content into predefined or dynamic categories.',
      features: ['Document Categorization', 'Spam Detection', 'Topic Modeling', 'Intent Classification']
    },
    {
      title: 'Sentiment Analysis',
      description: 'Develop sentiment analysis solutions that detect emotions, opinions, and attitudes in customer reviews, social media posts, and survey responses at scale.',
      features: ['Opinion Mining', 'Emotion Detection', 'Aspect-Based Analysis', 'Brand Monitoring']
    },
    {
      title: 'Named Entity Recognition',
      description: 'Create NER systems that extract people, organizations, locations, dates, and custom entities from unstructured text for data enrichment and knowledge extraction.',
      features: ['Custom Entity Types', 'Relationship Extraction', 'Knowledge Graphs', 'Data Enrichment']
    },
    {
      title: 'Language Translation',
      description: 'Build neural machine translation systems with domain-specific terminology handling, context-aware translations, and quality estimation for global communication.',
      features: ['Neural Translation', 'Domain Terminology', 'Context-Aware Output', 'Quality Scoring']
    },
    {
      title: 'Document Summarization',
      description: 'Develop extractive and abstractive summarization systems that condense long documents, reports, and articles into concise, informative summaries.',
      features: ['Extractive Summaries', 'Abstractive Generation', 'Multi-Document Summary', 'Key Point Extraction']
    },
    {
      title: 'Speech-to-Text',
      description: 'Implement accurate speech recognition systems with speaker diarization, noise handling, and real-time transcription for meetings, calls, and media content.',
      features: ['Real-time Transcription', 'Speaker Diarization', 'Noise Reduction', 'Custom Vocabulary']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-dark overflow-hidden w-full">
      <NavbarMT />
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark">NLP Development <span className="text-accent">Services</span></h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We build advanced natural language processing solutions that help businesses understand, analyze, and generate human language at scale. From text classification and sentiment analysis to named entity recognition and machine translation, our NLP services transform unstructured text data into actionable insights, automate language-intensive workflows, and enable intelligent communication across languages and channels.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">95%</p>
                <p className="text-gray-600">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">20+</p>
                <p className="text-gray-600">Languages Supported</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">100M+</p>
                <p className="text-gray-600">Documents Processed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">Real-time</p>
                <p className="text-gray-600">Processing Speed</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our NLP Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive natural language processing solutions that unlock the value hidden in your text data and enable intelligent language understanding.</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our NLP Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A data-driven approach to building NLP solutions that deliver accurate, reliable results in production environments.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Data Assessment', desc: 'Analyze your text data, define linguistic requirements, and establish annotation guidelines for model training.' },
              { step: '02', title: 'Model Development', desc: 'Select and train NLP models using state-of-the-art architectures optimized for your specific language tasks.' },
              { step: '03', title: 'Evaluation & Tuning', desc: 'Rigorously evaluate model performance with domain-specific test sets and fine-tune for production accuracy.' },
              { step: '04', title: 'Integration & Scale', desc: 'Deploy NLP pipelines with real-time processing, batch capabilities, and monitoring for continuous improvement.' },
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
            <h2 className="text-4xl font-bold text-white mb-4">Unlock Insights from Your Text Data</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Partner with our NLP experts to build language understanding solutions that automate analysis, extract insights, and enable intelligent communication.</p>
            <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100 btn-lg">Contact Us</Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
