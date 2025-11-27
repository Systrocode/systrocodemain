"use client";
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

export default function AdsManagement() {
  const adServices = [
    {
      title: "Google Search Ads",
      description: "Target customers actively searching for your products or services with strategic keyword campaigns.",
      features: ["Keyword Research", "Ad Copy Creation", "Bid Management", "Landing Page Optimization"]
    },
    {
      title: "Google Display Ads", 
      description: "Reach your audience across millions of websites with visually compelling banner advertisements.",
      features: ["Creative Design", "Audience Targeting", "Remarketing Campaigns", "Performance Tracking"]
    },
    {
      title: "Facebook & Instagram Ads",
      description: "Engage your ideal customers on social media with high-converting ad campaigns that build brand awareness.",
      features: ["Image & Video Ads", "Story Ads", "Carousel Ads", "Lead Generation"]
    },
    {
      title: "Google Shopping Ads",
      description: "Showcase your products directly in Google search results with product images and pricing.",
      features: ["Product Feed Setup", "Merchant Center", "Shopping Campaigns", "Product Optimization"]
    },
    {
      title: "YouTube Ads",
      description: "Engage viewers with video advertisements on YouTube and across Google's video network.",
      features: ["Video Ad Creation", "Audience Targeting", "In-Stream Ads", "Video Performance"]
    },
    {
      title: "Social Media Advertising",
      description: "Comprehensive social media advertising across Facebook, Instagram, and other platforms.",
      features: ["Multi-Platform Campaigns", "Audience Insights", "Creative Testing", "Social Commerce"]
    }
  ];

  const adTypes = [
    {
      type: "Google Search Campaigns",
      description: "Text ads that appear when people search for your products or services",
      roi: "400%+ ROI"
    },
    {
      type: "Google Display Campaigns", 
      description: "Visual ads that reach people on websites and apps they visit",
      roi: "250%+ ROI"
    },
    {
      type: "Facebook & Instagram Campaigns",
      description: "Social media ads that reach 3.2B+ monthly active users",
      roi: "425%+ ROI"
    },
    {
      type: "YouTube Video Campaigns",
      description: "Engaging video ads on YouTube and across the web",
      roi: "300%+ ROI"
    },
    {
      type: "Google Shopping Campaigns",
      description: "Product ads that show your inventory with images and prices",
      roi: "500%+ ROI"
    }
  ];

  const socialAdFormats = [
    {
      title: "Image Ads",
      description: "High-impact single image advertisements that capture attention and drive engagement.",
      platforms: ["Facebook Feed", "Instagram Feed", "Stories", "Reels"]
    },
    {
      title: "Video Ads", 
      description: "Engaging video content that tells your story and showcases your products or services.",
      platforms: ["Facebook Video", "Instagram Reels", "IGTV", "Stories"]
    },
    {
      title: "Carousel Ads",
      description: "Multiple images or videos in a single ad, perfect for showcasing product catalogs.",
      platforms: ["Facebook Carousel", "Instagram Carousel", "Collection Ads"]
    },
    {
      title: "Story Ads",
      description: "Full-screen vertical ads that appear between user stories for maximum impact.",
      platforms: ["Facebook Stories", "Instagram Stories", "Messenger Stories"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavbarMT />
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional <span className="text-accent">Ads Management</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Maximize your ROI with expertly managed advertising campaigns across Google, Facebook, Instagram, and more. 
              Our certified specialists create, optimize, and manage campaigns that drive qualified traffic and conversions.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">$4.5M+</div>
                <div className="text-gray-400">Ad Spend Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">380%</div>
                <div className="text-gray-400">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-gray-400">Successful Campaigns</div>
              </div>
            </div>
            <Link href="/contact" className="btn btn-accent btn-lg">
              Get Free Ads Audit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Ad Services Section */}
  <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Advertising Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive advertising management across Google, Facebook, Instagram, and other key platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
        className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-accent transition-colors"
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

      {/* Campaign Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Campaign Types We Manage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert management across Google Ads, Facebook Ads, Instagram Ads, and other platforms for maximum reach and ROI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {adTypes.map((campaign, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-accent">{campaign.type}</h3>
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                    {campaign.roi}
                  </span>
                </div>
                <p className="text-gray-600">{campaign.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Ad Formats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Social Media Ad Formats</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From single images to immersive experiences, we create compelling ads for every social media format
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialAdFormats.map((format, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-accent transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4 text-accent">{format.title}</h3>
                <p className="text-gray-600 mb-6">{format.description}</p>
                <div className="space-y-2">
                  {format.platforms.map((platform, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-sm">
                      <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                      {platform}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Ads Management?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold mb-3">Data-Driven Optimization</h3>
              <p className="text-gray-600">Continuous testing and optimization based on performance data across all platforms.</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-3">Precision Targeting</h3>
              <p className="text-gray-600">Advanced audience targeting to reach your ideal customers across Google and social platforms.</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold mb-3">Budget Optimization</h3>
              <p className="text-gray-600">Smart budget allocation and bid management to maximize your advertising ROI across all channels.</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                🌐
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Platform Expertise</h3>
              <p className="text-gray-600">Comprehensive management across Google, Facebook, Instagram, and other advertising platforms.</p>
            </motion.div>
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
              Ready to Scale Your Business with Professional Ads Management?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Get a free advertising audit and strategy session. Let us show you how to maximize your ROI across all advertising platforms.
            </p>
            <Link href="/contact" className="btn bg-black text-white hover:bg-gray-800 btn-lg">
              Get Free Advertising Strategy
            </Link>
          </motion.div>
        </div>
      </section>
  <Footer />
    </div>
  );
}
