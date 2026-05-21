'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

export default function HealthcarePage() {
  const services = [
    {
      title: 'Telemedicine Apps',
      description: 'Build secure video consultation platforms that connect patients with healthcare providers remotely, reducing wait times and improving access to care.',
      features: ['HD Video Consultations', 'Appointment Scheduling', 'E-Prescriptions', 'Secure Messaging']
    },
    {
      title: 'Patient Portals',
      description: 'Create intuitive patient-facing portals that empower individuals to manage their health records, appointments, and communications in one place.',
      features: ['Health Record Access', 'Lab Results Viewing', 'Appointment Management', 'Billing & Payments']
    },
    {
      title: 'EHR Integration',
      description: 'Seamlessly integrate with existing Electronic Health Record systems using HL7 FHIR standards for interoperable and efficient data exchange.',
      features: ['HL7 FHIR Compliance', 'Data Migration', 'API Development', 'Legacy System Integration']
    },
    {
      title: 'Health Monitoring',
      description: 'Develop IoT-enabled remote patient monitoring solutions that track vital signs in real-time and alert caregivers to potential health issues.',
      features: ['Wearable Integration', 'Real-time Alerts', 'Vital Signs Tracking', 'Predictive Analytics']
    },
    {
      title: 'Medical Billing',
      description: 'Automate complex medical billing workflows with intelligent claim processing, insurance verification, and revenue cycle management tools.',
      features: ['Claims Processing', 'Insurance Verification', 'Revenue Cycle Management', 'Coding Automation']
    },
    {
      title: 'Clinical Decision Support',
      description: 'Leverage AI-powered clinical decision support systems that assist healthcare professionals in making evidence-based treatment decisions.',
      features: ['AI Diagnostics', 'Drug Interaction Checks', 'Treatment Recommendations', 'Evidence-Based Alerts']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-dark overflow-hidden w-full">
      <NavbarMT />
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark">Healthcare <span className="text-accent">App Development</span></h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We build HIPAA-compliant healthcare applications that transform patient care delivery. From telemedicine platforms and patient portals to EHR integrations and clinical decision support systems, our solutions help healthcare organizations improve outcomes, reduce costs, and enhance the patient experience while maintaining the highest standards of data security and regulatory compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">10M+</p>
                <p className="text-gray-600">Patients Served</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">99.9%</p>
                <p className="text-gray-600">Uptime Guaranteed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">HIPAA</p>
                <p className="text-gray-600">Fully Compliant</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">50+</p>
                <p className="text-gray-600">Healthcare Apps</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our Healthcare Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive healthcare technology solutions designed to meet the unique challenges of modern healthcare delivery and patient engagement.</p>
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
            <h2 className="text-4xl font-bold mb-4 text-dark">Our Healthcare Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A rigorous development methodology built for healthcare compliance and patient safety.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Compliance Planning', desc: 'Map HIPAA requirements, identify PHI touchpoints, and design security architecture from day one.' },
              { step: '02', title: 'Clinical Workflow Analysis', desc: 'Study existing clinical workflows to design solutions that integrate seamlessly with care delivery.' },
              { step: '03', title: 'Secure Development', desc: 'Build with encryption, access controls, audit trails, and penetration testing at every stage.' },
              { step: '04', title: 'Validation & Deployment', desc: 'Rigorous testing with healthcare professionals, compliance audits, and phased rollout.' },
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
            <h2 className="text-4xl font-bold text-white mb-4">Build Your Healthcare Solution Today</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Partner with our healthcare technology experts to create compliant, secure, and patient-centric applications that transform care delivery.</p>
            <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100 btn-lg">Contact Us</Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
