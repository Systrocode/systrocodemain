"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';
import Link from 'next/link';
import { header } from '@/data';

// Navigation List Component without AOS animations
function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-normal">
        <Link href="/services" className="flex items-center link text-lg">
          Development
        </Link>
      </li>
      <li className="p-1 font-normal">
        <Link href="/services" className="flex items-center link text-lg">
          Digital Marketing
        </Link>
      </li>
      <li className="p-1 font-normal">
        <Link href="/services" className="flex items-center link text-lg">
          Other Services
        </Link>
      </li>
      <li className="p-1 font-normal">
        <Link href="/blog" className="flex items-center link text-lg">
          Blog
        </Link>
      </li>
    </ul>
  );
}

export function SimpleNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { logo, btnText } = header;

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <div className="lg:top-[1rem] py-6 lg:py-4 fixed w-full transition-all z-10">
      <Navbar className="mx-auto w-full px-8 py-4">
        <div className="flex items-center justify-between text-blue-gray-900 border-none">
          <Link href="/">
            <Image src={logo} alt="Systrocode Logo" width="60" height="60" />
          </Link>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            <Link 
              href="https://wa.me/919672040456" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Contact us via WhatsApp"
            >
              <Button variant="text" size="lg" className="bg-accent text-white link text-lg border-none">
                {btnText}
              </Button>
            </Link>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Link 
              href="https://wa.me/919672040456" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Contact us via WhatsApp"
              className="w-full"
            >
              <Button variant="text" size="lg" className="bg-accent text-white w-full">
                {btnText}
              </Button>
            </Link>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
