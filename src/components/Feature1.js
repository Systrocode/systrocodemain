// import { features } from '@/data';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { animateFeatureContent } from '@/utils/animations';


const Feature1 = ({actual}) => {
  const { feature1 = {} } = actual || {};
  const { pretitle = '', title = '', subtitle = '', btnLink = '', btnIcon, image } = feature1;

  useEffect(() => {
    animateFeatureContent();
  }, []);

  return( 
    <section className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[40px] gap-y-8 lg:gap-y-0'>
          <div className="flex-1 feature-content text-center lg:text-left">
            <div className='pretitle text-gray-400 mb-4'>{ pretitle }</div>
            <h2 className='title font-bold text-4xl mb-6'>{ title }</h2>
            <p className='lead text-lg text-gray-600 mb-8'>{ subtitle }</p>
            <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all justify-center lg:justify-start'>
              {btnLink} {btnIcon && <Image src={btnIcon} alt="Arrow right icon" width={20} height={20} />}
            </button>
          </div>
          <div className="flex-1 feature-image flex items-center justify-center mt-8 lg:mt-0">
            {image ? (
              <div className="relative w-full max-w-[500px] aspect-[4/3]">
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
              <div className="bg-gray-200 rounded-lg h-64 w-64 flex items-center justify-center">
                <span className="text-gray-500">Feature Image</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feature1;
