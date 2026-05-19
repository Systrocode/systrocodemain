"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

// Import client logos
// PNGs from src/assets (Module imports)
import jpmorgan from "../assets/img/overview/brands/jpmorgan.png";
import hdfc from "../assets/img/overview/brands/hdfc-bank.png";
import emirates from "../assets/img/overview/brands/emirates.png";
import skoda from "../assets/img/overview/brands/skoda.png";
import hsbc from "../assets/img/overview/brands/hsbc.png";
import tnt from "../assets/img/overview/brands/tnt-sports.png";
import tesla from "../assets/img/overview/brands/tesla.png";
import byjus from "../assets/img/overview/brands/byjus.png";
import airbnb from "../assets/img/overview/brands/airbnb.png";
import au from "../assets/img/overview/brands/au.png";
import binance from "../assets/img/overview/brands/binance.png";
import hilton from "../assets/img/overview/brands/hilton.png";
import myntra from "../assets/img/overview/brands/myntra.png";

// SVGs from public/assets (String paths)
const microsoft = "/assets/img/overview/brands/microsoft.svg";
const mongodb = "/assets/img/overview/brands/mongodb.svg";
const nextjs = "/assets/img/overview/brands/nextjs.svg";
const shopify = "/assets/img/overview/brands/shopify.svg";
const wordpress = "/assets/img/overview/brands/wordpress.svg";
const zoho = "/assets/img/overview/brands/zoho.svg";
const figma = "/assets/img/overview/brands/figma.svg";
const webflow = "/assets/img/overview/brands/webflow.svg";
const python = "/assets/img/overview/brands/python.svg";
const tailwind = "/assets/img/overview/brands/tailwind.svg";

const OurClients = () => {
  // Client data with real logos
  const clients = [
    { name: "Myntra", logo: myntra },
    { name: "Hilton International", logo: hilton },
    { name: "Binance", logo: binance },
    { name: "au", logo: au },
    { name: "Airbnb", logo: airbnb },
    { name: "Byju's", logo: byjus },
    { name: "Tesla", logo: tesla },
    { name: "TNT Sports", logo: tnt },
    { name: "Skoda", logo: skoda },
    { name: "HSBC", logo: hsbc },
    { name: "Emirates Airlines", logo: emirates },
    { name: "HDFC Bank", logo: hdfc },
    { name: "J.P. Morgan", logo: jpmorgan },
  ];

  return (
    <section className='container mx-auto px-4 lg:px-8 bg-gradient-to-b from-white to-gray-50'>
      <div className="flex flex-col py-16 lg:py-20 items-center justify-between space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className='title text-center mx-auto'>
            Our <span className="text-accent">Clients</span>
          </h2>
          <p className='lead text-center max-w-3xl mx-auto'>
            Trusted by leading businesses worldwide to deliver exceptional digital solutions
          </p>
        </div>

        {/* Marquee Slider */}
        <div className="w-full">
          <Marquee gradient={true} gradientColor="white" speed={50} pauseOnHover={true}>
            {clients.map((client, index) => (
              <div
                key={index}
                className="mx-4 lg:mx-12 flex items-center justify-center p-4 lg:p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100 w-[140px] h-[100px] lg:w-[200px] lg:h-[140px]"
              >
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={60}
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-gray-700 mb-1">{client.name}</div>
                    <div className="text-[10px] lg:text-xs text-gray-400">Client Logo</div>
                  </div>
                )}
              </div>
            ))}
          </Marquee>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 w-full max-w-4xl">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">250+</div>
            <div className="text-gray-600 text-sm lg:text-base">Happy Clients</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">500+</div>
            <div className="text-gray-600 text-sm lg:text-base">Projects Completed</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">98%</div>
            <div className="text-gray-600 text-sm lg:text-base">Client Satisfaction</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">10+</div>
            <div className="text-gray-600 text-sm lg:text-base">Countries Served</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href="/our-work"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-accent hover:bg-accent-hover rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Success Stories
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
