import Hero from '@/components/Hero.js';
import Brands from '@/components/Brands.js';
import Cta from '@/components/Cta.js';
import Footer from '@/components/Footer.js';
import { hero } from '@/data';
import Form from '@/components/Form';
import { NavbarMT } from '@/components/NavbarMT';
import SEOFAQSection from '@/components/SEOFAQSection';
import { pageFAQs } from '@/data/seoFAQs';
import SEOTextSection from '@/components/SEOTextSection';
import { seoText } from '@/data/seoText';

export const metadata = {
  title: "Contact Us | Systrocode - Let's Build Your Digital Future",
  description: "Get in touch with India's expert digital marketing and web development agency. Reach out today for free consulting on web dev, SEO, or custom automation.",
};

export default function Page() {
  return (
    <div className='overflow-hidden w-full'>
      <NavbarMT/>
      <Hero data={hero.contact}/>
      <Form/>
      <SEOTextSection
        title={seoText.contact.title}
        paragraphs={seoText.contact.paragraphs}
        lists={seoText.contact.lists}
      />
      <SEOFAQSection
        seoContent={pageFAQs.contact.seoContent}
        faqs={pageFAQs.contact.faqs}
        subtitle="Everything you need to know about working with us"
      />
      <Brands/>
      <Cta />
      <Footer />
    </div>
  );
}
