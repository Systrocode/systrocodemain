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

const Brands = () => {
  const brands = [
    { name: "Microsoft", logo: microsoft },
    { name: "Shopify", logo: shopify },
    { name: "Next.js", logo: nextjs },
    { name: "Python", logo: python },
    { name: "Power BI", logo: powerbi },
    { name: "Figma", logo: figma },
    { name: "WordPress", logo: wordpress },
    { name: "Tableau", logo: tableau },
    { name: "Tailwind CSS", logo: tailwind },
    { name: "Webflow", logo: webflow },
    { name: "MongoDB", logo: mongodb },
    { name: "Zoho", logo: zoho },
  ];

  return (
    <section className='container mx-auto px-4 lg:px-8'>
      <div className="flex flex-col py-16 lg:py-20 items-center justify-between space-y-12">
        <h2 className='title text-center mx-auto'>Our Technology Partners</h2>
        <div className="w-full overflow-hidden">
          <Marquee gradient={true} gradientColor="white" speed={50} pauseOnHover={true}>
            {brands.map((brand, index) => (
              <div
                key={index}
                className="mx-4 lg:mx-12 flex items-center justify-center p-4 lg:p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100 w-[140px] h-[100px] lg:w-[200px] lg:h-[140px]"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={60}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Brands;