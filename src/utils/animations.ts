import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, MorphSVGPlugin);
}

// Framer Motion animation variants
export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  }
}


export const animatePageIn = () => {
  // Only run on client side to prevent hydration mismatch
  if (typeof window === 'undefined') return;
  
  // Wait for elements to be available in DOM with longer timeout
  const checkElements = (attempts = 0) => {
    if (attempts > 50) return; // Max 5 second wait
    
    const bannerOne = document.getElementById("banner-1")
    const bannerTwo = document.getElementById("banner-2")
    const bannerThree = document.getElementById("banner-3")
    const bannerFour = document.getElementById("banner-4")

    if(bannerOne && bannerTwo && bannerThree && bannerFour) {
      // Double check all elements are properly rendered
      const allRendered = [bannerOne, bannerTwo, bannerThree, bannerFour].every(el => 
        el.offsetHeight > 0 && el.offsetWidth > 0
      );
      
      if (allRendered) {
        const tl = gsap.timeline();

        tl.set([bannerOne,bannerTwo,bannerThree,bannerFour], {
          yPercent: 0,
        }).to([bannerOne,bannerTwo,bannerThree,bannerFour], {
          yPercent: 100,
          stagger: 0.3,
        });
      } else {
        setTimeout(() => checkElements(attempts + 1), 100);
      }
    } else {
      // Retry after a short delay if elements aren't ready
      setTimeout(() => checkElements(attempts + 1), 100);
    }
  };
  
  // Start checking after a small delay to ensure React has finished rendering
  setTimeout(() => checkElements(), 200);
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  // Only run on client side
  if (typeof window === 'undefined') return;
  
  const checkElements = () => {
    const bannerOne = document.getElementById("banner-1")
    const bannerTwo = document.getElementById("banner-2")
    const bannerThree = document.getElementById("banner-3")
    const bannerFour = document.getElementById("banner-4")

    if(bannerOne && bannerTwo && bannerThree && bannerFour) {
      const tl = gsap.timeline();

      tl.set([bannerOne,bannerTwo,bannerThree,bannerFour], {
        yPercent: -100,
      }).to([bannerOne,bannerTwo,bannerThree,bannerFour], {
        yPercent: 0,
        stagger: 0.3,
        onComplete: ()=>{
          router.push(href);
        }
      })
    } else {
      // If elements aren't available, just navigate normally
      router.push(href);
    }
  };
  
  checkElements();
}

// MotionPath Animation Examples
export const animateAlongPath = (element: string, pathData: string) => {
  if (typeof window === 'undefined') return;
  
  gsap.to(element, {
    duration: 3,
    repeat: -1,
    ease: "none",
    motionPath: {
      path: pathData,
      autoRotate: true,
    }
  });
}

export const scrollTriggeredPath = (element: string, pathData: string) => {
  if (typeof window === 'undefined') return;
  
  gsap.to(element, {
    duration: 1,
    ease: "none",
    motionPath: {
      path: pathData,
      autoRotate: true,
    },
    scrollTrigger: {
      trigger: element,
      start: "top center",
      end: "bottom center",
      scrub: 1
    }
  });
}

// MorphSVG Animation Examples
export const morphShape = (element: string, targetShape: string) => {
  if (typeof window === 'undefined') return;
  
  gsap.to(element, {
    duration: 1.5,
    morphSVG: targetShape,
    ease: "power2.inOut"
  });
}

export const morphOnHover = (element: string, originalShape: string, hoverShape: string) => {
  if (typeof window === 'undefined') return;
  
  const el = document.querySelector(element);
  if (!el) return;
  
  el.addEventListener('mouseenter', () => {
    gsap.to(element, {
      duration: 0.5,
      morphSVG: hoverShape,
      ease: "power2.out"
    });
  });
  
  el.addEventListener('mouseleave', () => {
    gsap.to(element, {
      duration: 0.5,
      morphSVG: originalShape,
      ease: "power2.out"
    });
  });
}

export const morphOnScroll = (element: string, shapes: string[]) => {
  if (typeof window === 'undefined') return;
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top center",
      end: "bottom center",
      scrub: 1
    }
  });
  
  shapes.forEach((shape, index) => {
    if (index === 0) return; // Skip first shape as it's the starting position
    tl.to(element, {
      morphSVG: shape,
      duration: 1,
      ease: "none"
    });
  });
}

export const morphSequence = (element: string, shapes: string[], duration: number = 2) => {
  if (typeof window === 'undefined') return;
  
  const tl = gsap.timeline({ repeat: -1, yoyo: true });
  
  shapes.forEach((shape, index) => {
    if (index === 0) return; // Skip first shape as it's the starting position
    tl.to(element, {
      morphSVG: shape,
      duration: duration / shapes.length,
      ease: "power2.inOut"
    });
  });
}

// ===== RECOMMENDED ANIMATIONS FOR SYSTROCODE WEBSITE =====

// 1. Hero Section Animations - Replace AOS for better performance
export const animateHeroContent = () => {
  if (typeof window === 'undefined') return;
  
  const tl = gsap.timeline({ delay: 0.5 });
  
  tl.from(".hero-title", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  })
  .from(".hero-subtitle", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.8")
  .from(".hero-buttons", {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6")
  .from(".hero-image", {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: "back.out(1.7)"
  }, "-=1");
}

// 2. Service Cards Animation - Better than AOS stagger
export const animateServiceCards = () => {
  if (typeof window === 'undefined') return;
  
  gsap.from(".service-card", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".service-cards-container",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
}

// 3. Header Scroll Animation - Modern header behavior
export const headerScrollAnimation = () => {
  if (typeof window === 'undefined') return;
  
  ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: {className: "scrolled", targets: ".header"}
  });
}

// 4. Testimonials Cards Animation
export const animateTestimonials = () => {
  if (typeof window === 'undefined') return;
  
  gsap.from(".testimonial-card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".testimonials-section", 
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
}

// 5. Counter Animation for Statistics
export const animateCounters = () => {
  if (typeof window === 'undefined') return;
  
  gsap.from(".counter", {
    textContent: 0,
    duration: 2,
    ease: "power2.out",
    snap: { textContent: 1 },
    scrollTrigger: {
      trigger: ".counter",
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
}

// 6. Logo Floating Animation
export const floatingLogo = () => {
  if (typeof window === 'undefined') return;
  
  gsap.to(".floating-logo", {
    y: -20,
    duration: 2,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1
  });
}

// 7. Feature Sections Animation (alternating left-right reveal)
export const animateFeatureContent = () => {
  if (typeof window === 'undefined') return;
  
  // Text content slides in from left
  gsap.fromTo('.feature-content', {
    x: -100,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.feature-content',
      start: 'top 85%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  // Images slide in from right
  gsap.fromTo('.feature-image', {
    x: 100,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.feature-image',
      start: 'top 85%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
};

// 8. Call-to-Action Section Animation
export const animateCTA = () => {
  if (typeof window === 'undefined') return;
  
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  timeline
    .fromTo('.cta-title', {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    })
    .fromTo('.cta-subtitle', {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4')  // Start slightly before previous animation ends
    .fromTo('.cta-button', {
      scale: 0.8,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.3')
    .fromTo('.cta-image', {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.6');
};

// 9. Footer Section Animation (staggered fade-up)
export const animateFooter = () => {
  if (typeof window === 'undefined') return;
  
  gsap.fromTo('.footer-item', {
    y: 50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.footer-section',
      start: 'top 90%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animate footer divider
  gsap.fromTo('.footer-divider', {
    scaleX: 0,
    opacity: 0
  }, {
    scaleX: 1,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.footer-divider',
      start: 'top 95%',
      toggleActions: 'play none none reverse'
    }
  });
};

// 10. Overview Section Animation
export const animateOverview = () => {
  if (typeof window === 'undefined') return;
  
  gsap.fromTo('.overview-image', {
    y: 100,
    opacity: 0,
    scale: 0.8
  }, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.overview-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
};

// 11. Privacy Terms Animation
export const animatePrivacyTerms = () => {
  if (typeof window === 'undefined') return;
  
  // Animate section titles
  gsap.fromTo('.privacy-title', {
    y: 30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.privacy-title',
      start: 'top 90%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animate content paragraphs
  gsap.fromTo('.privacy-content', {
    y: 20,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.privacy-content',
      start: 'top 92%',
      toggleActions: 'play none none reverse'
    }
  });
};