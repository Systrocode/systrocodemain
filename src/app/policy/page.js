"use client";
// import components
import Header from '@/components/Header.js';
import Cta from '@/components/Cta.js';
import Footer from '@/components/Footer.js';
import PrivacyHero from '@/components/PrivacyHero';
import PrivacyTerms from '@/components/PrivacyTerms';
import { NavbarMT } from '@/components/NavbarMT';
// import Card2 from '@/components/Card2.js';

export default function Home() {  
  return (
    <>
      <div className='overflow-hidden w-full'>
        {/* <Header /> */}
        <NavbarMT/>
        <PrivacyHero/>
        <PrivacyTerms/>
        <Cta />
        <Footer />
        {/* <div className='h-[4000px]'></div> */}
      </div>
    </>
  );
}
