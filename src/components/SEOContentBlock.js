// SEO Content Enhancer - Improves text-to-HTML ratio without affecting design
import React from 'react';

const SEOContentBlock = ({ 
  title, 
  description, 
  content = [], 
  className = "sr-only lg:block text-transparent select-none absolute -z-10",
  visible = false 
}) => {
  // If visible is true, show content normally, otherwise hide it for SEO only
  const containerClass = visible 
    ? "w-full p-4 bg-gray-50 rounded-lg my-4" 
    : className;

  return (
    <div className={containerClass} aria-hidden={!visible}>
      {title && (
        <h2 className={visible ? "text-2xl font-bold mb-3 text-gray-800" : "text-sm"}>
          {title}
        </h2>
      )}
      {description && (
        <p className={visible ? "text-gray-600 mb-4 leading-relaxed" : "text-xs"}>
          {description}
        </p>
      )}
      {content.length > 0 && (
        <div className={visible ? "space-y-3" : "text-xs space-y-1"}>
          {content.map((item, index) => (
            <div key={index}>
              {typeof item === 'string' ? (
                <p className={visible ? "text-gray-700" : ""}>{item}</p>
              ) : (
                <div>
                  {item.subtitle && (
                    <h3 className={visible ? "font-semibold text-gray-800 mb-1" : ""}>
                      {item.subtitle}
                    </h3>
                  )}
                  {item.text && (
                    <p className={visible ? "text-gray-600" : ""}>{item.text}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Structured Data Component for SEO
export const StructuredData = ({ type, data }) => {
  let structuredData = {};

  switch (type) {
    case 'organization':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Systrocode",
        "url": "https://systrocode.tech",
        "logo": "https://systrocode.tech/logo.png",
        "description": "Leading digital marketing and web development company in India offering SEO, social media marketing, web design, and AI automation services.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressRegion": "India"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-XXXXXXXXXX",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": [
          "https://facebook.com/systrocode",
          "https://twitter.com/systrocode",
          "https://linkedin.com/company/systrocode",
          "https://instagram.com/systrocode"
        ],
        "knowsAbout": [
          "Digital Marketing",
          "Web Development",
          "SEO Services",
          "Social Media Marketing",
          "Web Design",
          "Mobile App Development",
          "AI Automation"
        ]
      };
      break;

    case 'service':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.name,
        "description": data.description,
        "provider": {
          "@type": "Organization",
          "name": "Systrocode",
          "url": "https://systrocode.tech"
        },
        "areaServed": "India",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": data.url,
          "serviceType": data.type
        }
      };
      break;

    case 'webpage':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": data.title,
        "description": data.description,
        "url": data.url,
        "publisher": {
          "@type": "Organization",
          "name": "Systrocode"
        },
        "mainEntity": {
          "@type": "Organization",
          "name": "Systrocode"
        }
      };
      break;

    default:
      structuredData = data;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// SEO Text Content for different page types
export const SEOTextContent = {
  home: {
    title: "Systrocode - Leading Digital Marketing and Web Development Company in India",
    description: "Systrocode is a premier digital marketing and web development company based in India, specializing in comprehensive online solutions that drive business growth and digital transformation.",
    content: [
      {
        subtitle: "Our Digital Marketing Services",
        text: "We offer complete digital marketing solutions including search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, content marketing, email marketing, and marketing automation. Our data-driven approach ensures maximum return on investment for our clients across various industries."
      },
      {
        subtitle: "Web Development and Design Excellence",
        text: "Our expert development team creates responsive, fast-loading, and SEO-optimized websites using the latest technologies. We specialize in custom web development, e-commerce solutions, mobile app development, and user experience design that converts visitors into customers."
      },
      {
        subtitle: "AI Automation and Technology Solutions",
        text: "Stay ahead of the competition with our artificial intelligence and automation services. We implement chatbots, process automation, machine learning solutions, and intelligent workflows that streamline operations and enhance customer experience."
      },
      {
        subtitle: "Why Choose Systrocode",
        text: "With years of experience in digital marketing and web development, Systrocode has helped hundreds of businesses achieve their online goals. Our team of certified professionals uses industry best practices and cutting-edge technologies to deliver measurable results and exceptional value."
      },
      "We serve clients across India and internationally, providing scalable solutions that grow with your business. From startups to enterprises, we have the expertise and resources to handle projects of any size and complexity.",
      "Our comprehensive approach includes strategy development, implementation, monitoring, and optimization to ensure continuous improvement and long-term success. Contact us today to discuss how we can transform your digital presence and accelerate your business growth."
    ]
  },

  about: {
    title: "About Systrocode - Digital Marketing and Development Experts",
    description: "Learn about Systrocode's journey, mission, and the expert team behind our successful digital marketing and web development services.",
    content: [
      {
        subtitle: "Our Mission and Vision",
        text: "At Systrocode, our mission is to empower businesses with innovative digital solutions that drive growth, enhance online presence, and create meaningful connections with their target audience. We envision a digital landscape where every business, regardless of size, can leverage technology to achieve their goals."
      },
      {
        subtitle: "Expert Team and Expertise",
        text: "Our team consists of certified digital marketing specialists, experienced web developers, UI/UX designers, SEO experts, and AI automation specialists. Each team member brings unique skills and perspectives, ensuring comprehensive solutions for our clients' diverse needs."
      },
      {
        subtitle: "Our Approach and Methodology",
        text: "We follow a systematic approach that begins with understanding your business objectives, target audience, and market dynamics. Our methodology includes thorough research, strategic planning, agile implementation, continuous monitoring, and data-driven optimization to ensure optimal results."
      },
      "Founded with the vision of bridging the gap between technology and business success, Systrocode has evolved into a trusted partner for businesses seeking digital transformation. We pride ourselves on delivering solutions that not only meet but exceed client expectations.",
      "Our commitment to excellence, innovation, and client satisfaction has earned us recognition as a leading digital marketing and web development company in India. We continue to stay updated with the latest industry trends and technologies to provide cutting-edge solutions."
    ]
  },

  services: {
    title: "Comprehensive Digital Marketing and Web Development Services",
    description: "Explore Systrocode's full range of digital marketing and web development services designed to accelerate your business growth and online success.",
    content: [
      {
        subtitle: "Digital Marketing Services Portfolio",
        text: "Our digital marketing services encompass search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, content marketing, email marketing, influencer marketing, marketing automation, conversion rate optimization, and comprehensive marketing analytics."
      },
      {
        subtitle: "Web Development and Design Services",
        text: "We provide end-to-end web development services including custom website development, e-commerce solutions, mobile app development, responsive web design, user interface (UI) and user experience (UX) design, and ongoing website maintenance and support."
      },
      {
        subtitle: "Specialized Technology Solutions",
        text: "Our technology services include artificial intelligence automation, chatbot development, data analysis and business intelligence, cybersecurity solutions, software development, and custom application development tailored to specific business requirements."
      },
      "Each service is designed to work synergistically with others, creating a cohesive digital strategy that maximizes your online presence and business performance. We customize our approach based on your industry, target audience, and specific objectives.",
      "Our service delivery includes comprehensive consultation, strategic planning, implementation, testing, deployment, and ongoing optimization to ensure sustained success and return on investment."
    ]
  }
};

export default SEOContentBlock;
