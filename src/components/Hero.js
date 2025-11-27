import { HiOutlineChevronDown } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { animateHeroContent } from '@/utils/animations';

const Hero = ({ data = {} }) => {

  const { title = '', subtitle = '', btnText = 'Get Quote', side = '— SystroCode', image } = data;

  useEffect(() => {
    animateHeroContent();
  }, []);

  return (
    <section className='py-12 lg:py-24'>
      <div className="container mx-auto flex justify-center items-center px-4 lg:px-8">
        <div className="flex flex-col lg:gap-x-[30px] gap-y-12 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left w-full">
          {/* text */}
          <div className="flex-1 max-w-xl lg:max-w-none">
            <h1 className="title mb-8 lg:mb-10 hero-title break-words whitespace-pre-line" style={{ wordBreak: 'break-word', lineHeight: '1.2' }}>{title}</h1>
            <p className="lead mb-8 lg:mb-12 hero-subtitle text-lg lg:text-xl">{subtitle}</p>
            <div className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-4 lg:gap-x-8 hero-buttons'>
              <Link href='https://wa.me/919672040456'>
                <button
                  className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4'
                  aria-label="Request project via WhatsApp"
                >
                  {btnText}
                  <HiOutlineChevronDown aria-hidden="true" />
                </button>
              </Link>
              <span className='text-light lg:lead lg:mb-0 text-sm lg:text-base'>{side}</span>
            </div>
          </div>
          {/* image */}
          <div className='flex-1 text-center hero-image mt-8 lg:mt-0'>
            {image ? (
              <div className="relative w-full max-w-lg lg:max-w-xl mx-auto aspect-[16/10]">
                <Image
                  src={typeof image === 'string' ? image : image}
                  alt="Systrocode hero illustration"
                  fill
                  sizes="(min-width: 1024px) 45vw, 85vw"
                  className='object-contain'
                  priority
                  unoptimized={
                    (typeof image === 'string' && image.endsWith('.gif')) ||
                    (typeof image === 'object' && image?.src?.includes('.gif'))
                  }
                />
              </div>
            ) : (
              <div className="flex-1 bg-gray-200 rounded-lg flex items-center justify-center h-64">
                <span className="text-gray-500">Image Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
