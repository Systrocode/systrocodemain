"use client";
// import components
import Header from '@/components/Header.js';
import Hero from '@/components/Hero.js';
import Brands from '@/components/Brands.js';
import Feature1 from '@/components/Feature1.js';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Cta from '@/components/Cta.js';
import Footer from '@/components/Footer.js';
import { features, hero, softwareDevelopment } from '@/data.js';
import { NavbarMT } from '@/components/NavbarMT';
import SEOFAQSection from '@/components/SEOFAQSection';
import { pageFAQs } from '@/data/seoFAQs';

export default function SoftwareDevelopment() {

  

  return (
    <div className='overflow-hidden w-full'>
      {/* <Header /> */}
      <NavbarMT/>
      <Hero data={hero.softwareDevelopment}/>
      <Brands />
      <Feature1 actual = {softwareDevelopment} />
      {/* Software Development Services Grid */}
      <section className="py-20 bg-grey">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-dark text-center">Our Software Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              Build reliable, scalable software tailored to your business goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Custom Web Apps', desc: 'Full-stack apps with modern frameworks and robust APIs', features: ['React/Next.js', 'Node.js/NestJS', 'REST/GraphQL', 'CI/CD'] },
              { title: 'Mobile Apps', desc: 'iOS/Android apps with seamless UX and performance', features: ['React Native', 'Expo', 'Native Modules', 'App Store/Play Release'] },
              { title: 'SaaS/Microservices', desc: 'Cloud-native architectures built to scale', features: ['Docker/Kubernetes', 'Event-driven', 'Multi-tenancy', 'Observability'] },
              { title: 'Integrations & APIs', desc: 'Secure integrations with third-party services', features: ['OAuth2/SAML', 'Webhooks', 'API Gateways', 'Rate Limiting'] },
              { title: 'Quality & Testing', desc: 'Automated tests and QA to ensure reliability', features: ['Unit/E2E Tests', 'Performance Tests', 'Static Analysis', 'Load Testing'] },
              { title: 'Maintenance & DevOps', desc: 'Monitoring, updates, and cost-optimized infra', features: ['AWS/Azure/GCP', 'Terraform', 'Autoscaling', 'Cost Optimization'] },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn('up', 0.1 * i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent transition-colors shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-accent">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <SEOFAQSection
        seoContent={pageFAQs.softwareDevelopment.seoContent}
        faqs={pageFAQs.softwareDevelopment.faqs}
      />
      <Cta/>
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
}
