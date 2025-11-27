"use client";
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

export default function FacebookInstagramAds() {
  const adFormats = [
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
    },
    {
      title: "Collection Ads",
      description: "Showcase multiple products with an immersive, full-screen mobile experience.",
      platforms: ["Facebook Collection", "Instagram Collection", "Instant Experience"]
    },
    {
      title: "Lead Generation",
      description: "Capture customer information directly within Facebook and Instagram platforms.",
      platforms: ["Facebook Lead Forms", "Instagram Lead Ads", "Messenger Ads"]
    }
  ];

  const targetingOptions = [
    {
      category: "Demographic Targeting",
      options: ["Age & Gender", "Location", "Language", "Education", "Relationship Status"]
    },
    {
      category: "Interest Targeting", 
      options: ["Business & Industry", "Entertainment", "Family & Relationships", "Fitness & Wellness", "Food & Drink"]
    },
    {
      category: "Behavioral Targeting",
      options: ["Purchase Behavior", "Digital Activities", "Mobile Device Usage", "Travel Patterns"]
    },
    {
      category: "Custom Audiences",
      options: ["Website Visitors", "Customer Lists", "App Users", "Engagement Audiences"]
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
              Facebook & Instagram <span className="text-accent">Advertising</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Reach your ideal customers on the world&apos;s largest social platforms. Our expert team creates 
              and manages high-converting Facebook and Instagram ad campaigns that drive results.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">3.2B+</div>
                <div className="text-gray-400">Monthly Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">425%</div>
                <div className="text-gray-400">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">89%</div>
                <div className="text-gray-400">Reach Accuracy</div>
              </div>
            </div>
            <Link href="/contact" className="btn btn-accent btn-lg">
              Start Your Campaign
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Ad Formats Section */}
  <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Ad Formats We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From single images to immersive experiences, we create compelling ads for every format
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adFormats.map((format, index) => (
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

      {/* Targeting Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Precision Targeting Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach your exact audience with Facebook&apos;s powerful targeting capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {targetingOptions.map((targeting, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-6 text-accent">{targeting.category}</h3>
                <div className="grid grid-cols-1 gap-3">
                  {targeting.options.map((option, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                      {option}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
  <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Campaign Objectives We Optimize For</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                👁️
              </div>
              <h3 className="text-xl font-bold mb-3">Brand Awareness</h3>
              <p className="text-gray-600">Increase brand recognition and reach new audiences who are likely to be interested in your business.</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-3">Lead Generation</h3>
              <p className="text-gray-600">Capture high-quality leads directly through Facebook and Instagram lead forms.</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                🛒
              </div>
              <h3 className="text-xl font-bold mb-3">Conversions</h3>
              <p className="text-gray-600">Drive sales, sign-ups, and other valuable actions on your website or app.</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                🚗
              </div>
              <h3 className="text-xl font-bold mb-3">Traffic</h3>
              <p className="text-gray-600">Drive qualified traffic to your website, blog, or specific landing pages.</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                💬
              </div>
              <h3 className="text-xl font-bold mb-3">Engagement</h3>
              <p className="text-gray-600">Increase likes, comments, shares, and overall engagement with your content.</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                📱
              </div>
              <h3 className="text-xl font-bold mb-3">App Promotion</h3>
              <p className="text-gray-600">Increase app installs and drive engagement within your mobile application.</p>
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
              Ready to Dominate Social Media Advertising?
            </h2>
      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s create high-converting Facebook and Instagram ad campaigns that grow your business and maximize ROI.
            </p>
    <Link href="/contact" className="btn bg-black text-white hover:bg-gray-800 btn-lg">
              Launch Your Campaign
            </Link>
          </motion.div>
        </div>
      </section>
  <Footer />
    </div>
  );
}
