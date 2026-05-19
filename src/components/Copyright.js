import { copyright } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Copyright component
const Copyright = () => {

  const { copyText, social } = copyright;

  return (
    <div className='text-center' data-aos='fade-up' data-aos-offset='0' data-aos-delay='200'>
      <div className='flex flex-col lg:flex-row lg:justify-between items-center gap-y-4'>
        {/* Copyright Text */}
        <p className='text-sm lg:text-base text-gray-600'>{copyText}</p>

        {/* Social Icons */}
        <ul className='flex gap-x-4'>
          {social.map((item, index) => {
            const { href, icon } = item;
            return (
              <li key={index}>
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  {icon && <Image src={icon} width={24} height={24} alt="Social media icon" className="hover:opacity-80 transition-opacity" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Copyright;
