"use client";
// import components
import Hero from '@/components/Hero.js';
import Overview from '@/components/Overview.js';
import Cta from '@/components/Cta.js';
import Footer from '@/components/Footer.js';
import { hero } from '@/data';
import { NavbarMT } from '@/components/NavbarMT';
import Brands from '@/components/Brands';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Link from 'next/link';
import SEOContentBlock, { StructuredData, SEOTextContent } from '@/components/SEOContentBlock.js';

export default function ServicesClient() {
  const seoContent = SEOTextContent.services;

  return (
    <div className='overflow-hidden w-full'>
      {/* Structured Data for SEO */}
      <StructuredData 
        type="webpage" 
        data={{
          title: "Digital Marketing & Web Development Services - Systrocode",
          description: "Comprehensive digital marketing and web development services",
          url: "https://systrocode.tech/services"
        }} 
      />
      
      {/* Hidden SEO Content for Better Text-to-HTML Ratio */}
      <SEOContentBlock 
        title={seoContent.title}
        description={seoContent.description}
        content={seoContent.content}
      />
      
      {/* <Header /> */}
      <NavbarMT/>
      <Hero data={hero.services}/>
      <Overview />
      <Brands/>
      {/* Tailored Services Directory */}
      <section className="py-20 bg-grey">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-dark">Explore Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete, modern stack of digital, engineering, data, and growth services. Pick a category to learn more.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Web Design', desc: 'UI/UX, wireframes, prototypes', href: '/web-design' },
              { title: 'Web Development', desc: 'Full‑stack websites and web apps', href: '/web-development' },
              { title: 'Software Development', desc: 'Custom software, APIs, integrations', href: '/software-development' },
              { title: 'Mobile Development', desc: 'iOS, Android, cross‑platform', href: '/mobile-development' },
              { title: 'Data Analysis', desc: 'Dashboards, BI, insights', href: '/data-analysis' },
              { title: 'AI Automation', desc: 'Workflows, chatbots, RPA', href: '/ai-automation' },
              { title: 'Cyber Security', desc: 'Protection, audits, compliance', href: '/cyber-security' },
              { title: 'SEO', desc: 'On‑page, technical, content, links', href: '/seo' },
              { title: 'Social Media Marketing', desc: 'Strategy, content, growth', href: '/social-media-marketing' },
              { title: 'PPC Advertising', desc: 'Search, display, retargeting', href: '/ppc-advertising' },
              { title: 'Content Marketing', desc: 'Blogs, assets, distribution', href: '/content-marketing' },
              { title: 'Email Marketing', desc: 'Automation, newsletters, CRM', href: '/email-marketing' },
              { title: 'Influencer Marketing', desc: 'Creators, UGC, campaigns', href: '/influencer-marketing' },
              { title: 'Marketing Analytics', desc: 'Attribution, dashboards', href: '/marketing-analytics' },
              { title: 'Marketing Automation', desc: 'Journeys, lead scoring', href: '/marketing-automation' },
              { title: 'Conversion Rate Optimization', desc: 'A/B tests, UX improvements', href: '/conversion-rate-optimization' },
              { title: 'Google Ads Management', desc: 'Search, PMAX, shopping', href: '/google-ads-management' },
              { title: 'Ads Management', desc: 'Multi-platform advertising campaigns', href: '/google-ads-management' },
            ].map((item, i) => (
              <motion.div
                key={item.href}
                variants={fadeIn('up', 0.05 * i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent transition-colors shadow-lg flex flex-col"
              >
                <h3 className="text-2xl font-bold mb-2 text-accent">{item.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{item.desc}</p>
                <div>
                  <Link href={item.href} className="inline-block px-5 py-2 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition">
                    View service
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
      <Footer />
    </div>
  );
}
