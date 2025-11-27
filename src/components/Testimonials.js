'use client';

import { testimonials } from '@/data';
import Image from 'next/image';

const Testimonials = () => {
  const { title, clients } = testimonials;

  return (
    <section className='py-12 xl:py-28'>
      <div className='container mx-auto'>
  <h2 className='section-title mb-12 text-center mx-auto'>
          {title}
        </h2>
        {/* Horizontal testimonials grid */}
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 text-center'>
          {clients.map((person, index) => {
            return (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100'
              >
                {/* Avatar & Name */}
                <div className='flex items-center gap-x-4 mb-4'>
                  <Image
                    src={person.image}
                    width={60}
                    height={60}
                    alt={person.name}
                    className='rounded-full object-cover border-2 border-gray-200'
                  />
                  <div className='flex-1'>
                    <div className='text-lg font-semibold text-gray-900'>{person.name}</div>
                    <div className='text-sm text-gray-600'>{person.position}</div>
                  </div>
                </div>
                {/* Message */}
                <div className='text-gray-700 text-sm leading-relaxed line-clamp-4'>
                  &ldquo;{person.message}&rdquo;
                </div>
                {/* Rating stars */}
                <div className='flex items-center mt-4 pt-4 border-t border-gray-100'>
                  <div className='flex space-x-1'>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className='w-4 h-4 text-yellow-400 fill-current' viewBox='0 0 20 20'>
                        <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z'/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
