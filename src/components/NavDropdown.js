"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const NavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const digitalMarketingServices = [
    { name: 'Digital Marketing Overview', href: '/digital-marketing' },
    { name: 'Search Engine Optimization', href: '/seo' },
    { name: 'Google Ads Management', href: '/google-ads-management' },
    { name: 'Google Ads Management', href: '/google-ads-management' },
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
    <nav>
      <ul className='flex gap-x-10'>
        <li>
          <Link href='/services' className='hover:text-accent transition'>Services</Link>
        </li>
        <li className="relative group">
          <button
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={(e) => {
              // Don't close if moving to dropdown
              const relatedTarget = e.relatedTarget;
              if (!relatedTarget || !relatedTarget.closest('.dropdown-menu')) {
                setTimeout(() => setIsOpen(false), 100);
              }
            }}
            className='flex items-center gap-1 hover:text-accent transition'
          >
            Digital Marketing
            <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Dropdown Menu */}
          <div 
            className={`dropdown-menu absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl transition-all duration-300 z-[9999] ${
              isOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
            }`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="py-3 max-h-96 overflow-y-auto">
              {digitalMarketingServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent transition-colors border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </li>
        <li>
          <Link href='/blog' className='hover:text-accent transition'>Blog</Link>
        </li>
        <li>
          <Link href='/about' className='hover:text-accent transition'>About us</Link>
        </li>
        <li>
          <Link href='/contact' className='hover:text-accent transition'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavDropdown;
