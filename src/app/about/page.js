import Header from '@/components/Header.js';
import Hero from '@/components/Hero.js';
import Overview from '@/components/Overview.js';
import Brands from '@/components/Brands.js';
import Feature1 from '@/components/Feature1.js';
import Feature2 from '@/components/Feature2.js';
import Feature3 from '@/components/Feature3.js';
import Product from '@/components/Product.js';
import Cta from '@/components/Cta.js';
import Footer from '@/components/Footer.js';
import { features, hero } from '@/data';
import { NavbarMT } from '@/components/NavbarMT';
import SEOContentBlock, { StructuredData, SEOTextContent } from '@/components/SEOContentBlock.js';

export const metadata = {
  title: "About Us | Systrocode - Digital Marketing & UI/UX Design Experts",
  description: "Discover the Systrocode story. Meet our certified digital marketing experts, web developers, and designers driving online success for global brands.",
};
// import Card2 from '@/components/Card2.js';

export default function Home() {
  const seoContent = SEOTextContent.about;

  return (
    <div className='overflow-hidden w-full'>
      {/* Structured Data for SEO */}
      <StructuredData 
        type="webpage" 
        data={{
          title: "About Systrocode - Digital Marketing Experts",
          description: "Learn about Systrocode's expert team and mission",
          url: "https://systrocode.tech/about"
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
      <Hero data={hero.about}/>
      <Overview />
      <Brands />
      <Feature1 actual = {features} />
      <Feature2 actual = {features} />
      <Feature3 actual = {features} />
      <Product />
      {/* <Card2/> */}
      <Cta />
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
}
