import { useEffect } from 'react';
import Aos from 'aos';

export const useAOS = () => {
  useEffect(() => {
    // Ensure AOS only runs on client-side to prevent hydration mismatch
    if (typeof window !== 'undefined') {
      Aos.init({
        duration: 1800,
        offset: 100,
      });
    }
  }, []);
};
