"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import cta from "../assets/img/cta/cta.webp";
import { animateCTA } from '@/utils/animations';


const Cta = () => {

  useEffect(() => {
    animateCTA();
  }, []);

  return (
    <section className='section bg-[#FF7235] bg-[url("../assets/img/cta/bg.svg")] bg-no-repeat bg-cover bg-left-top cta-section'>
      <div className="container mx-auto min-h-[600px] flex justify-center items-center px-8 py-16 lg:px-16 border-4 border-white rounded-3xl text-center lg:text-left">
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="title mb-2 lg:mb-5 text-white cta-title text-center font-bold leading-tight">Start A New Project<br />Today</h2>
            <p className="lead mb-5 lg:mb-10 text-white cta-subtitle text-center font-medium">Unlock Your digital Potential - Schedule a Call with Our IT Experts Today!</p>
            <div className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6 cta-button justify-center lg:justify-start'>
              <button className='btn btn-md lg:btn-lg btn-accent lg:gap-x-4 mx-auto font-semibold text-xl px-8 py-4'>
                Schedule A Free Call
              </button>
            </div>
          </div>
          <div className='flex-1 text-center cta-image'>
            <Image src={cta} className='flex-1 mx-auto' alt="Call to action illustration"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
