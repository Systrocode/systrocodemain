"use client";
// import components
import Header from '@/components/Header.js';
import Hero from '@/components/Hero.js';
import Brands from '@/components/Brands.js';
import Feature1 from '@/components/Feature1.js';
import Feature2 from '@/components/Feature2.js';
import Feature3 from '@/components/Feature3.js';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Cta from '@/components/Cta.js';
import Footer from '@/components/Footer.js';
import { aiauto, features, hero } from '@/data.js';
import { NavbarMT } from '@/components/NavbarMT';

export default function Home() {

  

  return (
    <div className='overflow-hidden w-full'>
      {/* <Header /> */}
      <NavbarMT/>
      <Hero data={hero.ai}/>
      <Brands />
      <Feature1 actual = {aiauto} />
      {/* AI Automation Services Grid */}
      <section className="py-20 bg-grey">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-dark">Our AI Automation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automate workflows and decisions with AI that scales with your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Process Automation', desc: 'Automate repetitive tasks and approvals', features: ['RPA', 'Workflow Engines', 'Form Automation', 'Doc Processing'] },
              { title: 'AI Assistants', desc: 'Chatbots and copilots that help teams move faster', features: ['LLMs', 'Retrieval (RAG)', 'Multi-channel Chat', 'Analytics'] },
              { title: 'Predictive Models', desc: 'Forecast demand, churn, and risk using ML', features: ['Time Series', 'Propensity Models', 'Anomaly Detection', 'Optimization'] },
              { title: 'Marketing Automation', desc: 'Personalize journeys and optimize campaigns', features: ['Segmentation', 'Scoring', 'Journey Builder', 'Attribution'] },
              { title: 'Data Pipelines', desc: 'Reliable data flows for ML/AI systems', features: ['ETL/ELT', 'Vector Stores', 'Feature Stores', 'Monitoring'] },
              { title: 'MLOps & Governance', desc: 'Ship models reliably with controls and visibility', features: ['Model Registry', 'CI/CD for ML', 'Drift Monitoring', 'Cost Control'] },
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
      <Cta/>
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
}
