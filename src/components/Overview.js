"use client";

import React, { useEffect } from 'react';
import { overview } from '@/data';
import Image from 'next/image';
import { animateOverview } from '@/utils/animations';

const Overview = () => {
  const { productImg } = overview || {};

  useEffect(() => {
    animateOverview();
  }, []);

  return (
    <section className='lg:min-h-[712px] bg-[url("../assets/img/overview/bg.svg")] bg-cover bg-left-top pt-[60px] lg:pt-[100px] pb-[40px] lg:pb-[60px] overview-section'>
      <div className="container mx-auto flex justify-around overflow-hidden px-4 lg:px-8">
        {productImg ? (
          <div className="relative w-full max-w-4xl aspect-[16/10]">
            <Image 
              src={productImg}
              alt="Product overview illustration"
              fill
              sizes="(min-width: 1024px) 60vw, 90vw"
              className="object-contain"
              priority
            />
          </div>
        ) : (
          <div className="bg-gray-200 rounded-lg h-64 w-full max-w-md flex items-center justify-center">
            <span className="text-gray-500">Product Overview</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Overview;
