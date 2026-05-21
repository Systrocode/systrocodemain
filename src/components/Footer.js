"use client";
import { copyright, footer } from '@/data';
import React, { useEffect } from 'react';
import Copyright from './Copyright';
import Image from 'next/image';
import Link from 'next/link';
import { animateFooter } from '@/utils/animations';


const Footer = () => {
  const { about, services, digitalMarketing, industries } = footer;
  const { social } = copyright;

  useEffect(() => {
    animateFooter();
  }, []);

  return (
    <footer className='pt-[80px] pb-[60px] footer-section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between gap-x-5 gap-y-10'>
          {/* About */}
          <div className="footer-item">
            <div className='text-xl font-bold mb-4 text-black'>Company</div>
            <ul className='flex flex-col gap-y-3'>
              {about.map((item, index) => (
                <li key={index}>
                  <Link className='text-gray-600 hover:text-accent transition text-sm' href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-item">
            <div className='text-xl font-bold mb-4 text-black'>Development & AI</div>
            <ul className='flex flex-col gap-y-3'>
              {services.map((item, index) => (
                <li key={index}>
                  <Link className='text-gray-600 hover:text-accent transition text-sm' href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Marketing */}
          <div className="footer-item">
            <div className='text-xl font-bold mb-4 text-black'>Digital Marketing</div>
            <ul className='flex flex-col gap-y-3'>
              {digitalMarketing.map((item, index) => (
                <li key={index}>
                  <Link className='text-gray-600 hover:text-accent transition text-sm' href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="footer-item">
            <div className='text-xl font-bold mb-4 text-black'>Industries</div>
            <ul className='flex flex-col gap-y-3'>
              {industries.map((item, index) => (
                <li key={index}>
                  <Link className='text-gray-600 hover:text-accent transition text-sm' href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className='mt-10 mb-5 border-1 border-black footer-divider' />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
