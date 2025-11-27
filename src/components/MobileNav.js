"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const MobileNav = () => {
  const [isDigitalMarketingOpen, setIsDigitalMarketingOpen] = useState(false);

  const digitalMarketingServices = [
    { name: 'Digital Marketing Overview', href: '/digital-marketing' },
    { name: 'Search Engine Optimization', href: '/seo' },
    { name: 'Google Ads Management', href: '/google-ads-management' },
    { name: 'Ads Management', href: '/google-ads-management' },
    { name: 'Social Media Marketing', href: '/social-media-marketing' },
    { name: 'Email Marketing', href: '/email-marketing' },
    { name: 'Content Marketing', href: '/content-marketing' },
    { name: 'PPC Advertising', href: '/ppc-advertising' },
    { name: 'Influencer Marketing', href: '/influencer-marketing' },
    { name: 'Marketing Analytics', href: '/marketing-analytics' },
    { name: 'Conversion Rate Optimization', href: '/conversion-rate-optimization' },
    { name: 'Marketing Automation', href: '/marketing-automation' }
  ];

  return (
    <div className='bg-accent/95 w-full h-full overflow-y-auto'>
      <ul className='h-full flex flex-col justify-start pt-20 items-center gap-y-6'>
        <li>
          <Link href='/services' className='link text-white text-xl'>Services</Link>
        </li>
        
        <li className="w-full px-8">
          <button
            onClick={() => setIsDigitalMarketingOpen(!isDigitalMarketingOpen)}
            className='flex items-center justify-center gap-2 text-white text-xl w-full'
          >
            Digital Marketing
            <ChevronDownIcon className={`w-5 h-5 transition-transform ${isDigitalMarketingOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Mobile Dropdown */}
          {isDigitalMarketingOpen && (
            <div className="mt-4 space-y-3">
              {digitalMarketingServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="block text-white/80 text-sm text-center hover:text-white transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}
        </li>
        
        <li>
          <Link href='/about' className='link text-white text-xl'>About us</Link>
        </li>
        <li>
          <Link href='/contact' className='link text-white text-xl'>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
