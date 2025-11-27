"use client";
// import components
import Header from '@/components/Header.js';
// import Header from '../components/Header.js';
import Hero from '@/components/Hero.js';
import Brands from '@/components/Brands.js';
import Cta from '@/components/Cta.js';
import Footer from '@/components/Footer.js';
import { hero } from '@/data';
import Form from '@/components/Form';
import { NavbarMT } from '@/components/NavbarMT';
// import Card2 from '@/components/Card2.js';

export default function Home() {
  return (
    <>
      <div className='overflow-hidden w-full'>
        {/* <Header /> */}
        <NavbarMT/>
        <Hero data={hero.contact}/>
        <Form/>
        {/* <Overview /> */}
        <Brands/>
        <Cta />
        <Footer />
        {/* <div className='h-[4000px]'></div> */}
      </div>
    </>
  );
}
