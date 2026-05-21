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
import { features, hero, mobileDevelopment } from '@/data.js';
import { NavbarMT } from '@/components/NavbarMT';
import SEOFAQSection from '@/components/SEOFAQSection';
import { pageFAQs } from '@/data/seoFAQs';

export default function MobileDevelopment() {



  return (
    <div className='overflow-hidden w-full'>
      {/* <Header /> */}
      <NavbarMT />
      <Hero data={hero.mobileDevelopment} />
      <Brands />
      <Feature1 actual={mobileDevelopment} />
      {/* Mobile Development Services Grid */}
      <section className="py-20 bg-grey">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-dark">Our Mobile Application Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch performant mobile apps with great UX and maintainability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'iOS & Android Apps', desc: 'Native-feel apps with consistent performance', features: ['React Native', 'Native Modules', 'Offline-first', 'Push Notifications'] },
              { title: 'App UI/UX', desc: 'Mobile design systems and interaction patterns', features: ['Design Systems', 'Animations', 'Accessibility', 'Theming'] },
              { title: 'APIs & Backends', desc: 'Secure, scalable backends for your mobile apps', features: ['Node.js/NestJS', 'Auth & Payments', 'File/Media', 'Analytics'] },
              { title: 'Testing & Release', desc: 'Reliable release pipelines and app health', features: ['Unit/E2E Tests', 'Crash Reporting', 'App Store/Play Console', 'OTA Updates'] },
              { title: 'Integrations', desc: 'Connect to payments, maps, social, and more', features: ['Stripe/PayPal', 'Maps & Location', 'Camera & Media', 'Social SDKs'] },
              { title: 'Maintenance', desc: 'Keep apps up-to-date and optimized over time', features: ['Performance Tuning', 'Dependency Updates', 'Security Patches', 'Feature Roadmap'] },
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
        seoContent={pageFAQs.mobileDevelopment.seoContent}
        faqs={pageFAQs.mobileDevelopment.faqs}
      />
      <Cta />
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
}
