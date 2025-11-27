'use client';

import { NavbarMT } from './NavbarMT';
import ClientOnly from './ClientOnly';

export default function ClientNavbar() {
  return (
    <ClientOnly fallback={<div className="h-20 bg-white fixed w-full top-0 z-10"></div>}>
      <NavbarMT />
    </ClientOnly>
  );
}
