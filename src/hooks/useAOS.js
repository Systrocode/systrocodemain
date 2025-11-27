"use client";
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const useAOSWithoutHydration = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && typeof window !== 'undefined') {
      // Delay AOS initialization to prevent hydration mismatch
      const timer = setTimeout(() => {
        Aos.init({
          duration: 1800,
          offset: 100,
        });
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [isClient]);

  return isClient;
};
