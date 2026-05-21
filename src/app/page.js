import Header from '../components/Header.js';
import Hero from '../components/Hero.js';
import Overview from '../components/Overview.js';
import Brands from '../components/Brands.js';
import ServiceShowcase from '../components/ServiceShowcase.js';
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
import SEOTextSection from '@/components/SEOTextSection';
import { seoText } from '@/data/seoText';

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
      <ServiceShowcase />
      <Product />
      <SEOTextSection
        title={seoText.home.title}
        paragraphs={seoText.home.paragraphs}
        lists={seoText.home.lists}
      />
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
