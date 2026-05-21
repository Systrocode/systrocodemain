'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

export default function EducationPage() {
  const services = [
    {
      title: 'LMS Development',
      description: 'Build comprehensive learning management systems with course creation tools, progress tracking, certifications, and multi-tenant architecture for institutions.',
      features: ['Course Builder', 'Progress Tracking', 'Certification Engine', 'Multi-Tenant Support']
    },
    {
      title: 'Virtual Classrooms',
      description: 'Create interactive virtual classroom platforms with live video, screen sharing, breakout rooms, and collaborative whiteboard tools for engaging remote learning.',
      features: ['Live Video Streaming', 'Interactive Whiteboard', 'Breakout Rooms', 'Screen Sharing']
    },
    {
      title: 'Gamified Learning',
      description: 'Design gamification systems that boost student engagement through points, badges, leaderboards, and adaptive learning paths that respond to individual progress.',
      features: ['Points & Badges', 'Leaderboards', 'Adaptive Paths', 'Achievement Systems']
    },
    {
      title: 'Assessment Tools',
      description: 'Develop intelligent assessment platforms with auto-grading, plagiarism detection, question banks, and AI-powered feedback for efficient evaluation.',
      features: ['Auto-Grading', 'Plagiarism Detection', 'Question Banks', 'AI Feedback']
    },
    {
      title: 'Content Management',
      description: 'Build robust content management systems for educational materials including video hosting, document management, SCORM compliance, and content versioning.',
      features: ['Video Hosting', 'SCORM Compliance', 'Content Versioning', 'Multi-Format Support']
    },
    {
      title: 'Student Analytics',
      description: 'Implement advanced analytics dashboards that track student performance, engagement patterns, at-risk indicators, and learning outcome metrics.',
      features: ['Performance Dashboards', 'Engagement Metrics', 'At-Risk Alerts', 'Outcome Tracking']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-dark overflow-hidden w-full">
      <NavbarMT />
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark">EdTech <span className="text-accent">App Development</span></h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We build innovative educational technology solutions that make learning accessible, engaging, and effective. From learning management systems and virtual classrooms to gamified learning experiences and AI-powered assessment tools, our EdTech solutions help institutions, educators, and learners achieve better outcomes through technology-driven education.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">1M+</p>
                <p className="text-gray-600">Students Served</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">200+</p>
                <p className="text-gray-600">Courses Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">95%</p>
                <p className="text-gray-600">Completion Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">50+</p>
                <p className="text-gray-600">EdTech Apps Built</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our EdTech Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive educational technology solutions that transform how institutions teach and students learn in the digital age.</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our EdTech Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A learner-centered approach to building educational technology that drives engagement and outcomes.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Learning Design', desc: 'Collaborate with educators to define learning objectives, pedagogical approaches, and engagement strategies.' },
              { step: '02', title: 'UX Research', desc: 'Conduct user research with students and teachers to design intuitive, accessible learning interfaces.' },
              { step: '03', title: 'Iterative Development', desc: 'Build and test with real learners, incorporating feedback to optimize engagement and comprehension.' },
              { step: '04', title: 'Launch & Measure', desc: 'Deploy with analytics tracking, gather learning outcome data, and continuously improve the experience.' },
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
            <h2 className="text-4xl font-bold text-white mb-4">Transform Education with Technology</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Partner with us to build EdTech solutions that engage learners, empower educators, and deliver measurable learning outcomes.</p>
            <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100 btn-lg">Contact Us</Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
