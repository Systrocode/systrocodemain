"use client";
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

export default function MarketingAnalytics() {
  const analyticsServices = [
    {
      title: "Google Analytics Setup",
      description: "Complete GA4 implementation with custom tracking, goals, and conversion optimization.",
      features: ["GA4 Configuration", "Goal Tracking", "E-commerce Tracking", "Custom Dimensions"]
    },
    {
      title: "Marketing Attribution", 
      description: "Multi-touch attribution modeling to understand the complete customer journey.",
      features: ["Attribution Modeling", "Channel Analysis", "Customer Journey", "ROI Attribution"]
    },
    {
      title: "Performance Dashboards",
      description: "Custom dashboards that provide real-time insights into your marketing performance.",
      features: ["Real-time Data", "Custom Metrics", "Automated Reports", "Visual Analytics"]
    },
    {
      title: "Conversion Tracking",
      description: "Comprehensive tracking of all conversions across multiple marketing channels.",
      features: ["Multi-channel Tracking", "Lead Scoring", "Sales Attribution", "Revenue Tracking"]
    },
    {
      title: "Competitor Analysis",
      description: "Monitor competitor performance and identify opportunities in your market.",
      features: ["Competitor Monitoring", "Market Share Analysis", "Keyword Tracking", "Ad Intelligence"]
    },
    {
      title: "Data Visualization",
      description: "Transform complex data into actionable insights with professional visualizations.",
      features: ["Interactive Charts", "Custom Reports", "Data Storytelling", "Executive Summaries"]
    }
  ];

  const reportingFeatures = [
    {
      metric: "Traffic Analytics",
      description: "Website visitors, sessions, pageviews, bounce rate, and user behavior analysis",
      kpi: "Track 50+ Metrics"
    },
    {
      metric: "Conversion Analytics", 
      description: "Goal completions, e-commerce transactions, lead generation, and funnel analysis",
      kpi: "99.9% Accuracy"
    },
    {
      metric: "Campaign Performance",
      description: "ROI, ROAS, cost per acquisition, click-through rates across all marketing channels",
      kpi: "Real-time Updates"
    },
    {
      metric: "Audience Insights",
      description: "Demographics, interests, behavior patterns, and customer segmentation analysis",
      kpi: "360° View"
    }
  ];

  const platforms = [
    "Google Analytics", "Google Ads", "Facebook Ads", "Instagram Insights", 
    "LinkedIn Analytics", "Twitter Analytics", "TikTok Analytics", "Pinterest Analytics",
    "YouTube Analytics", "Google Search Console", "SEMrush", "Ahrefs"
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
              Marketing Analytics & <span className="text-accent">Reporting</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your marketing data into actionable insights. Our comprehensive analytics and 
              reporting services help you understand what&apos;s working and optimize for better results.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">250M+</div>
                <div className="text-gray-400">Data Points Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">85%</div>
                <div className="text-gray-400">Improvement in ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-gray-400">Reports Generated</div>
              </div>
            </div>
            <Link href="/contact" className="btn btn-accent btn-lg">
              Get Analytics Audit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Analytics Services Section */}
  <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Analytics Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analytics solutions to measure, analyze, and optimize your marketing performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => (
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

      {/* Reporting Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Key Metrics We Track</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor the metrics that matter most to your business success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {reportingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-accent">{feature.metric}</h3>
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                    {feature.kpi}
                  </span>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
  <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Platforms We Integrate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect and analyze data from all your marketing channels in one place
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm hover:border-accent transition-colors"
              >
                <div className="text-lg font-semibold text-gray-700">{platform}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Analytics Matter</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                📈
              </div>
              <h3 className="text-xl font-bold mb-3">Data-Driven Decisions</h3>
              <p className="text-gray-600">Make informed marketing decisions based on real data, not guesswork.</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold mb-3">ROI Optimization</h3>
              <p className="text-gray-600">Identify high-performing channels and optimize budget allocation for maximum ROI.</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-3">Better Targeting</h3>
              <p className="text-gray-600">Understand your audience better and create more targeted, effective campaigns.</p>
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
              Ready to Unlock Your Marketing Insights?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Get a comprehensive analytics audit and discover how data can transform your marketing results.
            </p>
    <Link href="/contact" className="btn bg-black text-white hover:bg-gray-800 btn-lg">
              Start Analytics Setup
            </Link>
          </motion.div>
        </div>
      </section>
  <Footer />
    </div>
  );
}
