"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

const SEOFAQSection = ({ title = "Frequently Asked Questions", subtitle, faqs = [], seoContent = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ Schema structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* FAQ Schema */}
        {faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}

        {/* SEO Content Block */}
        {seoContent.length > 0 && (
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="mb-16"
          >
            <div className="prose prose-lg max-w-none">
              {seoContent.map((block, index) => (
                <div key={index} className="mb-8">
                  {block.heading && (
                    <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-4">{block.heading}</h2>
                  )}
                  {block.text && (
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">{block.text}</p>
                  )}
                  {block.list && (
                    <ul className="mt-4 space-y-2">
                      {block.list.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-dark">{title}</h2>
            {subtitle && (
              <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">{subtitle}</p>
            )}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-semibold text-dark text-base lg:text-lg pr-4">{faq.question}</span>
                    <span className={`text-accent text-2xl flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SEOFAQSection;
