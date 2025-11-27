"use client";
import {useState,useEffect} from 'react';
import { header } from '@/data';
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';
import MobileNav from './MobileNav';
import NavDropdown from './NavDropdown';
import Link from 'next/link';
import Image from 'next/image';
import { headerScrollAnimation } from '@/utils/animations';

const Header = () => {

  const [mobileNav, setMobileNav] = useState(false);
  const { logo,btnText } = header;
  const [isActive, setIsActive] = useState(false);

  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
    
    // Initialize GSAP header scroll animation
    headerScrollAnimation();
  }, []);
  

  return( 
    <header className={`${isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[60px]'} py-6 lg:py-4 fixed w-full transition-all z-10 header`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="Systrocode Logo" width='60' height='60' className="floating-logo"></Image>
        </Link>
        <div className="hidden lg:flex header-nav">
          <NavDropdown/>
        </div>
        <Link href='https://wa.me/919672040456' className='btn btn-sm btn-outline hidden lg:flex header-button'>{btnText}</Link>
        <button className='lg:hidden header-mobile-toggle' onClick={ () => setMobileNav(!mobileNav) }>
          {mobileNav ? (
            <HiOutlineX className='text-3xl text-accent'/>
          ) : (
            <HiMenuAlt4 className='text-3xl text-accent'/>
          ) }
        </button>
        <div className={`${ mobileNav ? 'left-0' : '-left-full' } fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}>
          <MobileNav/>
        </div>
      </div>
    </header>);
};

export default Header;
