import { features } from '@/data';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { animateFeatureContent } from '@/utils/animations';


const Feature2 = ({actual}) => {
  const { feature2 = {} } = actual || {};
  const { pretitle = '', title = '', subtitle = '', btnLink = '', btnIcon, image } = feature2;

  useEffect(() => {
    animateFeatureContent();
  }, []);

  return( 
    <section className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[40px]'>
          <div className="flex-1 feature-image">
            {image ? (
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={image}
                  alt={title + " feature illustration"}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className='rounded-lg object-contain object-center'
                  unoptimized={
                    (typeof image === 'string' && image.endsWith('.gif')) ||
                    (typeof image === 'object' && image?.src?.includes('.gif'))
                  }
                />
              </div>
            ) : (
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-500">Feature Image</span>
              </div>
            )}
          </div>
          <div className="flex-1 feature-content">
            <div className='pretitle'>{ pretitle }</div>
            <h2 className='title'>{ title }</h2>
            <p className='lead'>{ subtitle }</p>
            <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all'>
              {btnLink} {btnIcon && <Image src={btnIcon} alt="Arrow right icon" width={20} height={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
