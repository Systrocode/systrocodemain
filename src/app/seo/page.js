"use client";
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Link from 'next/link';
import { NavbarMT } from '@/components/NavbarMT';
import Footer from '@/components/Footer';
import Brands from '@/components/Brands';

export default function SEO() {
  const seoServices = [
    {
      title: "Technical SEO",
      description: "Website optimization, speed enhancement, and technical fixes for better search engine crawling.",
      features: ["Site Speed Optimization", "Mobile Responsiveness", "Schema Markup", "XML Sitemaps"]
    },
    {
      title: "On-Page SEO", 
      description: "Content optimization, keyword research, and meta tag optimization for individual pages.",
      features: ["Keyword Research", "Meta Optimization", "Content Optimization", "Internal Linking"]
    },
    {
      title: "Off-Page SEO",
      description: "Link building, brand mentions, and external authority building strategies.",
      features: ["Quality Backlinks", "Brand Mentions", "Social Signals", "Directory Submissions"]
    },
    {
      title: "Local SEO",
      description: "Location-based optimization for businesses targeting local customers and markets.",
      features: ["Google My Business", "Local Citations", "Local Keywords", "Review Management"]
    },
    {
      title: "E-commerce SEO",
      description: "Product page optimization, category structure, and conversion-focused SEO strategies.",
      features: ["Product Optimization", "Category Structure", "Shopping Feed", "Conversion Tracking"]
    },
    {
      title: "SEO Analytics",
      description: "Performance tracking, ranking monitoring, and comprehensive SEO reporting.",
      features: ["Rank Tracking", "Traffic Analysis", "Conversion Metrics", "Competitor Analysis"]
    }
  ];

  const seoProcess = [
    {
      step: "1",
      title: "SEO Audit",
      description: "Comprehensive analysis of your website's current SEO performance and opportunities."
    },
    {
      step: "2", 
      title: "Strategy Development",
      description: "Custom SEO strategy based on your business goals and target audience."
    },
    {
      step: "3",
      title: "Implementation",
      description: "Technical improvements, content optimization, and link building execution."
    },
    {
      step: "4",
      title: "Monitoring & Reporting",
      description: "Continuous tracking, analysis, and monthly performance reports."
    }
  ];

  // SMM services content
  const smmServices = [
    {
      title: "Content Strategy",
      description: "Platform-specific content planning that aligns with brand voice and campaign goals.",
      features: ["Content Calendar", "Brand Tone & Messaging", "Creative Briefs", "Trends & Hooks"],
    },
    {
      title: "Account Management",
      description: "Daily publishing, moderation, and profile optimization across key channels.",
      features: ["Post Scheduling", "Profile Optimization", "Community Replies", "Hashtag Strategy"],
    },
    {
      title: "Paid Social Ads",
      description: "Full-funnel social campaigns for reach, engagement, leads, and sales.",
      features: ["Campaign Setup", "Audience Targeting", "A/B Creative Tests", "ROAS Optimization"],
    },
    {
      title: "Community & Influencers",
      description: "Grow brand advocacy with community building and creator partnerships.",
      features: ["Community Building", "Influencer Sourcing", "UGC Collaborations", "Contracting & Briefing"],
    },
    {
      title: "Analytics & Reporting",
      description: "Measure outcomes that matter: engagement, traffic, CPA, and LTV.",
      features: ["KPI Dashboards", "Attribution Setup", "Insights & Learnings", "Monthly Reporting"],
    },
    {
      title: "Creative Production",
      description: "Thumb-stopping creatives tailored for each platform and objective.",
      features: ["Short-form Video", "Motion Graphics", "Ad Variations", "Copy & Hooks"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-dark overflow-hidden w-full">
      <NavbarMT />
      {/* Hero Section */}
  <section className="pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark">
              Search Engine <span className="text-accent">Optimization</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Increase your website&apos;s visibility and organic traffic with our proven SEO strategies. 
              We help businesses rank higher on Google and drive qualified leads through search engines.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">300%+</div>
                <div className="text-gray-500">Average Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">90%</div>
                <div className="text-gray-500">First Page Rankings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">150+</div>
                <div className="text-gray-500">Successful SEO Campaigns</div>
              </div>
            </div>
            <Link href="/contact" className="btn btn-accent btn-lg">
              Get SEO Analysis
            </Link>
          </motion.div>
        </div>
      </section>

  <Brands />

  {/* SEO Services Section */}
      <section className="py-20 bg-grey">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-dark">Our SEO Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO solutions to improve your search rankings and drive organic growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent transition-colors shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-accent">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SMM Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-dark">Social Media Marketing (SMM)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expand your reach and build engaged communities with strategic content, paid social, and creator partnerships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smmServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent transition-colors shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-accent">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/social-media-marketing" className="btn btn-accent btn-lg">
              Explore SMM Packages
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-dark">Our SEO Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to search engine optimization that delivers consistent results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free SEO audit and discover how we can help your business rank higher and drive more organic traffic.
            </p>
            <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100 btn-lg">
              Get Free SEO Audit
            </Link>
          </motion.div>
        </div>
  </section>
  <Footer />
    </div>
  );
}
