"use client";
import { product } from '@/data';
import React, { useEffect } from 'react';
import Cards from './Cards';
import { animateServiceCards } from '@/utils/animations';

const Product = () => {

  const { title, subtitle } = product;

  useEffect(() => {
    animateServiceCards();
  }, []);

  return( 
    <section className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col items-center justify-around lg:flex-row mb-10 lg:mb-20'>
          <h2 className='section-title service-title text-center'>{title}</h2>
          <p className='lead lg:max-w-[385px] service-subtitle text-center'>{subtitle}</p>
        </div>
        <div className="service-cards-container">
          <Cards/>
        </div>
      </div>
    </section>
  );
};

export default Product;
