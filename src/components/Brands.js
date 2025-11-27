import Image from "next/image";
import React from "react";
const nextjs = '/assets/img/overview/brands/nextjs.svg';
const python = '/assets/img/overview/brands/python.svg';
const powerbi = '/assets/img/overview/brands/powerbi.svg';
const figma = '/assets/img/overview/brands/figma.svg';
const wordpress = '/assets/img/overview/brands/wordpress.svg';
const tableau = '/assets/img/overview/brands/tableau.svg';
const shopify = '/assets/img/overview/brands/shopify.svg';
const tailwind = '/assets/img/overview/brands/tailwind.svg';
const webflow = '/assets/img/overview/brands/webflow.svg';
const microsoft = '/assets/img/overview/brands/microsoft.svg';
const mongodb = '/assets/img/overview/brands/mongodb.svg';
const zoho = '/assets/img/overview/brands/zoho.svg';
import Marquee from "react-fast-marquee";

const Brands = () => (
  <section className='container mx-auto px-4 lg:px-8'>
    <div className="flex flex-col py-16 lg:py-20 items-center justify-between space-y-12">
      <h2 className='title text-center mx-auto'>Our Technology Partners</h2>
      <Marquee>
        <Image src={microsoft} alt="Microsoft" width={64} height={64} className="mx-6" />
        <Image src={shopify} alt="Shopify" width={64} height={64} className="mx-6" />
        <Image src={nextjs} alt="Next.js" width={64} height={64} className="mx-6" />
        <Image src={python} alt="Python" width={64} height={64} className="mx-6" />
        <Image src={powerbi} alt="Power BI" width={64} height={64} className="mx-6" />
        <Image src={figma} alt="Figma" width={64} height={64} className="mx-6" />
        <Image src={wordpress} alt="WordPress" width={64} height={64} className="mx-6" />
        <Image src={tableau} alt="Tableau" width={64} height={64} className="mx-6" />
        <Image src={tailwind} alt="Tailwind CSS" width={64} height={64} className="mx-6" />
        <Image src={webflow} alt="Webflow" width={64} height={64} className="mx-6" />
        <Image src={mongodb} alt="MongoDB" width={64} height={64} className="mx-6" />
        <Image src={zoho} alt="Zoho" width={64} height={64} className="mx-6" />
      </Marquee>
    </div>
  </section>
);

export default Brands;