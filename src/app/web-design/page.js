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
import { features, hero, webdesign } from '@/data.js';
import { NavbarMT } from '@/components/NavbarMT';

export default function Home() {

  

  return (
    <div className='overflow-hidden w-full'>
      {/* <Header /> */}
      <NavbarMT/>
      <Hero data={hero.webdesign}/>
      <Brands />
      <Feature1 actual = {webdesign} />
      {/* UI/UX Services Grid */}
      <section className="py-20 bg-grey">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-dark text-center">Our UI/UX & Wireframing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              Design systems and experiences that are beautiful, usable, and conversion-focused
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'UX Research', desc: 'User interviews, personas, and journey maps to align with real needs', features: ['User Interviews', 'Personas', 'Journey Mapping', 'Heuristic Review'] },
              { title: 'Wireframing', desc: 'Low/high-fidelity wireframes that set clear structure and flows', features: ['Low/High Fidelity', 'User Flows', 'IA & Sitemap', 'Content Strategy'] },
              { title: 'UI Design', desc: 'Pixel-perfect visual design with brand-consistent components', features: ['Design Systems', 'Component Libraries', 'Responsive Design', 'Design Tokens'] },
              { title: 'Prototyping', desc: 'Interactive prototypes for stakeholder buy-in and usability tests', features: ['Clickable Prototypes', 'Micro-interactions', 'Animation Specs', 'Dev Handoffs'] },
              { title: 'Usability Testing', desc: 'Validate design decisions and iterate with real user feedback', features: ['Test Plans', 'Moderated/Unmoderated', 'Reporting', 'Insights'] },
              { title: 'Accessibility (a11y)', desc: 'Inclusive design meeting WCAG standards across devices', features: ['WCAG 2.1', 'Keyboard/Screen Reader', 'Color Contrast', 'Docs & Training'] },
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
