"use client";
import { copyright, footer } from '@/data';
import React, { useEffect } from 'react';
import Copyright from './Copyright';
import Image from 'next/image';
import Link from 'next/link';
import { animateFooter } from '@/utils/animations';


const Footer = () => {
  const { logo, links, categories, newsletter, form } = footer;
  const { link1, link2, copyText, social } = copyright;

  useEffect(() => {
    animateFooter();
  }, []);

  return( 
    <footer className='pt-[142px] pb-[60px] footer-section'>
      <div className="container mx-auto">
  <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8'>
          <div className="footer-item">
            {logo && <Image src={logo} width='100' height='100' alt="Systrocode company logo"/>}
            {/* <h1 className='text-sm font-semibold'>Empowering</h1> */}
          </div>
          {/* List 1 */}
          <div className="footer-item">
            <div className='text-2xl uppercase font-medium mb-6'>Links</div>
            <ul className='flex flex-col gap-y-3'>
              {
                links.map((link,index)=>{
                  const { href, name } = link;
                  return( 
                    <li key={index}>
                      <Link className='font-medium hover:text-accent transition' href={href}>{name}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          {/* List 2 */}
          <div className="footer-item">
            <div className='text-2xl uppercase font-medium mb-6'>Categories</div>
            <ul className='flex flex-col gap-y-3'>
              {
                categories.map((link,index)=>{
                  const { href, name } = link;
                  return( 
                    <li key={index}>
                      <Link className='font-medium hover:text-accent transition' href={href}>{name}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          {/* Socials */}
          <div className="footer-item">
            <div className='text-2xl uppercase font-medium mb-6'>Socials</div>
            <ul className='flex gap-x-2 justify-center'>
              {
                social.map((item,index)=>{
                  const { href, icon } = item;
                  return (
                    <li key={index}>
                      <Link href={href}>
                        {icon && <Image src={icon} width='35' height='35' alt="Social media icon"/>}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>  
          </div>
        </div>
        <hr className='mt-10 mb-5 border-1 border-black footer-divider'/>
        <Copyright/>
      </div>
    </footer>
  );
};

export default Footer;
