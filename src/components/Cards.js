"use client";
import { product } from '@/data';
import React,{ useState }  from 'react';
import ArrowImg from '../assets/img/product/cards/arrow.webp';
import Image from 'next/image';
import AnimatedSvgIcon from './AnimatedSvgIcon';
import Link from 'next/link';

const Cards = () => {
  const [index, setIndex] = useState(1);
  const { cards = [] } = product || {};
  return( 
  <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px] flex-wrap text-center'>
      {cards.map((card,cardIndex)=>{
        const { icon, title = 'Service', subtitle = 'Service description', delay, link = '#', iconComponent, iconKey } = card || {};

        // Use Image component for all icons, with special handling for GIFs
        let iconElement;
        if (icon) {
          // Check if it's a GIF file for unoptimized rendering
          const isGif = (typeof icon === 'string' && icon.endsWith('.gif')) ||
                       (typeof icon === 'object' && icon?.src?.includes('.gif'));
          iconElement = <Image src={icon} width={200} height={201} alt={`${title} service icon`} unoptimized={isGif} />;
        } else if (iconComponent) {
          iconElement = <AnimatedSvgIcon Icon={iconComponent} title={`${title} service icon`} size={200} />;
        } else {
          iconElement = (
            <div className="bg-gray-200 rounded-lg h-48 w-48 flex items-center justify-center">
              <span className="text-gray-500">{title}</span>
            </div>
          );
        }

        return( 
          <div key={cardIndex} className="service-card group" suppressHydrationWarning>
            <Link href={link} className="block">
              <div onClick={()=>setIndex(cardIndex)} className={`${index===cardIndex && 'bg-white shadow-2xl'} w-[300px] h-[450px] lg:w-[350px] flex flex-col items-center justify-center mx-auto px-4 py-3 text-center rounded-[12px] cursor-pointer transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105 hover:-translate-y-2 border-2 relative overflow-hidden`} suppressHydrationWarning>
                <div className="mb-1 transition-transform duration-300 group-hover:scale-105">{iconElement}</div>
                <div className='mb-1 text-lg font-medium transition-colors duration-300 group-hover:text-blue-600'>{ title }</div>
                <p className='mb-1 text-slate-400 text-base transition-colors duration-300 group-hover:text-slate-600'>{ subtitle }</p>
                <div className="opacity-0 scale-75 translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500 ease-out transform">
                  <Image src={ArrowImg} width={40} alt="Navigate to service page" className="hover:scale-110 transition-transform duration-200"/>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  );
};

export default Cards;
