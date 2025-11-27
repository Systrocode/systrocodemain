"use client";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamically import components that might cause hydration issues
const DynamicNavbarMT = dynamic(() => import('./NavbarMT').then(mod => ({ default: mod.NavbarMT })), {
  ssr: false,
  loading: () => <div suppressHydrationWarning></div>
});

const DynamicCards = dynamic(() => import('./Cards'), {
  ssr: false,
  loading: () => <div suppressHydrationWarning></div>
});

export { DynamicNavbarMT, DynamicCards };
