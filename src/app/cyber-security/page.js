"use client";
// import components
import Header from '@/components/Header.js';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Hero from '@/components/Hero.js';
import Brands from '@/components/Brands.js';
import Feature1 from '@/components/Feature1.js';
import Feature2 from '@/components/Feature2.js';
import Feature3 from '@/components/Feature3.js';
import Cta from '@/components/Cta.js';
import Footer from '@/components/Footer.js';
import { cyberSec, features, hero } from '@/data.js';
import { NavbarMT } from '@/components/NavbarMT';

export default function Home() {

  

  return (
    <div className='overflow-hidden w-full'>
      {/* <Header /> */}
      <NavbarMT/>
      <Hero data={hero.cybersecurity}/>
      <Brands />
      <Feature1 actual = {cyberSec} />
      {/* Cyber Security Services Grid */}
      <section className="py-20 bg-grey">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-dark">Our Cyber Security Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your business with proactive security across infrastructure, applications, and cloud
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Network Security',
                description: 'Secure your network perimeter and internal traffic with layered defenses.',
                features: ['Next-Gen Firewall', 'IDS/IPS', 'Zero Trust Segmentation', 'VPN & Remote Access'],
              },
              {
                title: 'Endpoint Protection',
                description: 'Advanced EDR/XDR to stop malware, ransomware, and fileless attacks.',
                features: ['EDR/XDR', 'Device Hardening', 'Policy Enforcement', 'Patch Management'],
              },
              {
                title: 'Cloud Security',
                description: 'Secure workloads and data across AWS, Azure, and GCP.',
                features: ['CSPM', 'CIEM', 'Container/K8s Security', 'Secrets Management'],
              },
              {
                title: 'VAPT (Pentesting)',
                description: 'Identify and exploit vulnerabilities before attackers do.',
                features: ['Network Pentest', 'Web/App Pentest', 'API Security Testing', 'Remediation Guidance'],
              },
              {
                title: 'SOC & SIEM',
                description: '24/7 monitoring, detection, and response with expert analysts.',
                features: ['SIEM Tuning', 'Use Case Development', 'Threat Hunting', 'Incident Triage'],
              },
              {
                title: 'Identity & Access (IAM)',
                description: 'Enforce least-privilege and secure access to critical systems.',
                features: ['SSO & MFA', 'RBAC/ABAC', 'Provisioning/Deprovisioning', 'Privileged Access'],
              },
              {
                title: 'Incident Response',
                description: 'Rapid containment, forensics, and recovery when incidents occur.',
                features: ['IR Playbooks', 'Forensic Analysis', 'Containment & Eradication', 'Post-incident Report'],
              },
              {
                title: 'Compliance & Risk',
                description: 'Meet regulatory standards and reduce organizational risk.',
                features: ['ISO 27001', 'SOC 2', 'GDPR', 'Risk Assessments'],
              },
              {
                title: 'Application Security',
                description: 'Shift-left security to build and ship secure software.',
                features: ['SAST/DAST', 'Threat Modeling', 'Secure SDLC', 'Code Reviews'],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent transition-colors shadow-lg"
              >
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
      <Cta/>
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
}
