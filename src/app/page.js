import Header from '../components/Header.js';
import Hero from '../components/Hero.js';
import Overview from '../components/Overview.js';
import Brands from '../components/Brands.js';
import Feature1 from '../components/Feature1.js';
import Feature2 from '../components/Feature2.js';
import Feature3 from '../components/Feature3.js';
import Product from '../components/Product.js';
import Cta from '../components/Cta.js';
import Footer from '../components/Footer.js';
import OurClients from '../components/OurClients.js';
import TechSolutions from '../components/TechSolutions.js';
import { features, hero } from '@/data.js';
import ClientNavbar from '@/components/ClientNavbar.js';
import SEOContentBlock, { StructuredData, SEOTextContent } from '@/components/SEOContentBlock.js';
import SEOFAQSection from '@/components/SEOFAQSection.js';
import { pageFAQs } from '@/data/seoFAQs';

export const metadata = {
  title: "Systrocode | Leading Digital Marketing & Web Development Company in India",
  description: "Systrocode is India's premier digital agency specializing in custom Next.js development, high-performance UI/UX design, AI-driven automation, and certified SEO services.",
};

export default function Home() {
  const seoContent = SEOTextContent.home;

  return (
    <div className='overflow-hidden w-full'>
      {/* Structured Data for SEO */}
      <StructuredData type="organization" />
      <StructuredData
        type="webpage"
        data={{
          title: "Systrocode - Digital Marketing & Web Development Company",
          description: "Leading digital marketing and web development company in India",
          url: "https://systrocode.tech"
        }}
      />

      {/* Hidden SEO Content for Better Text-to-HTML Ratio */}
      <SEOContentBlock
        title={seoContent.title}
        description={seoContent.description}
        content={seoContent.content}
      />

      {/* <Header /> */}
      <ClientNavbar />
      <Hero data={hero.main} />
      <OurClients />
      <TechSolutions />
      <Overview />
      <Brands />
      <Feature1 actual={features} />
      <Feature2 actual={features} />
      <Feature3 actual={features} />
      <Product />
      <SEOFAQSection
        seoContent={pageFAQs.home.seoContent}
        faqs={pageFAQs.home.faqs}
        subtitle="Common questions about our digital marketing and web development services"
      />
      <Cta />
      <Footer />
    </div>
  );
}
