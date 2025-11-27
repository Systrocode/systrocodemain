"use client";

import { animatePageIn } from "@/utils/animations.ts";
import { useEffect } from "react";

export default function Template({ children }) {
  useEffect(() => {
    // Delay animation to ensure DOM is fully ready
    const timer = setTimeout(() => {
      animatePageIn();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return(
    <div>
      <div id="banner-1" className="min-h-screen bg-black z-10 fixed top-0 left-0 w-1/4"></div>
      <div id="banner-2" className="min-h-screen bg-black z-10 fixed top-0 left-1/4 w-1/4"></div>
      <div id="banner-3" className="min-h-screen bg-black z-10 fixed top-0 left-2/4 w-1/4"></div>
      <div id="banner-4" className="min-h-screen bg-black z-10 fixed top-0 left-3/4 w-1/4"></div>
      {children}
    </div>
  )
}