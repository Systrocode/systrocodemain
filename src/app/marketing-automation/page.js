"use client";
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

export default function MarketingAutomation() {
  const automationServices = [
    {
      title: "Email Automation",
      description: "Automated email sequences that nurture leads and drive conversions throughout the customer journey.",
      features: ["Drip Campaigns", "Welcome Series", "Abandoned Cart Recovery", "Re-engagement Campaigns"]
    },
    {
      title: "Lead Nurturing", 
      description: "Sophisticated workflows that guide prospects through your sales funnel automatically.",
      features: ["Lead Scoring", "Behavioral Triggers", "Content Personalization", "Sales Handoff"]
    },
    {
      title: "Social Media Automation",
      description: "Streamline your social media presence with automated posting and engagement strategies.",
      features: ["Content Scheduling", "Social Listening", "Auto-responses", "Hashtag Optimization"]
    },
    {
      title: "CRM Integration",
      description: "Connect all your marketing tools and data for a unified view of your customer relationships.",
      features: ["Data Synchronization", "Contact Management", "Pipeline Automation", "Activity Tracking"]
    },
    {
      title: "Personalization Engine",
      description: "Deliver personalized experiences at scale based on user behavior and preferences.",
      features: ["Dynamic Content", "Product Recommendations", "Behavioral Targeting", "Custom Journeys"]
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and reporting to measure the success of your automation campaigns.",
      features: ["Performance Metrics", "ROI Tracking", "A/B Testing", "Custom Dashboards"]
    }
  ];

  const automationTypes = [
    {
      type: "Welcome Series",
      description: "Onboard new subscribers with a series of engaging welcome emails",
      conversion: "300% Higher Engagement"
    },
    {
      type: "Abandoned Cart Recovery", 
      description: "Recover lost sales with automated cart abandonment sequences",
      conversion: "35% Recovery Rate"
    },
    {
      type: "Lead Scoring",
      description: "Automatically score and qualify leads based on behavior and engagement",
      conversion: "50% More Qualified Leads"
    },
    {
      type: "Customer Retention",
      description: "Automated campaigns to retain and upsell existing customers",
      conversion: "25% Increase in LTV"
    }
  ];

  const platforms = [
    "HubSpot", "Mailchimp", "ActiveCampaign", "Klaviyo", 
    "Pardot", "Marketo", "ConvertKit", "GetResponse",
    "Drip", "Infusionsoft", "Constant Contact", "Campaign Monitor"
  ];

  const workflowSteps = [
    {
      step: "Trigger",
      description: "Define what actions or behaviors will start the automation",
      examples: ["Form submission", "Website visit", "Email click", "Purchase"]
    },
    {
      step: "Conditions",
      description: "Set rules to segment and personalize the automation flow",
      examples: ["Demographics", "Behavior", "Purchase history", "Engagement level"]
    },
    {
      step: "Actions",
      description: "Specify what happens when conditions are met",
      examples: ["Send email", "Add to list", "Update contact", "Notify sales"]
    },
    {
      step: "Optimization",
      description: "Continuously improve performance with testing and analytics",
      examples: ["A/B testing", "Performance tracking", "ROI analysis", "Refinements"]
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
              Marketing <span className="text-accent">Automation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Scale your marketing efforts with intelligent automation. Our expert team designs and implements 
              sophisticated workflows that nurture leads, increase conversions, and grow your business 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">451%</div>
                <div className="text-gray-400">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">80%</div>
                <div className="text-gray-400">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">10M+</div>
                <div className="text-gray-400">Automated Messages Sent</div>
              </div>
            </div>
            <Link href="/contact" className="btn btn-accent btn-lg">
              Automate My Marketing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Automation Services Section */}
  <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Automation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marketing automation solutions to streamline your marketing and sales processes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
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

      {/* Automation Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Popular Automation Workflows</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven automation strategies that drive results for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationTypes.map((automation, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-accent">{automation.type}</h3>
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                    {automation.conversion}
                  </span>
                </div>
                <p className="text-gray-600">{automation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Steps Section */}
  <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How Automation Workflows Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the four key components of effective marketing automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-4 text-accent">{step.step}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-500 mb-2">Examples:</div>
                  {step.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span>
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Platforms We Work With</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert implementation across all major marketing automation platforms
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
  <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Benefits of Marketing Automation</h2>
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
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-3">Increased Efficiency</h3>
              <p className="text-gray-600">Automate repetitive tasks and focus your team on high-value activities.</p>
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
              <h3 className="text-xl font-bold mb-3">Better Personalization</h3>
              <p className="text-gray-600">Deliver the right message to the right person at the right time, automatically.</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                📈
              </div>
              <h3 className="text-xl font-bold mb-3">Scalable Growth</h3>
              <p className="text-gray-600">Scale your marketing efforts without proportionally increasing your team size.</p>
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
              Ready to Automate Your Marketing Success?
            </h2>
      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free automation strategy session and discover how to scale your marketing with intelligent workflows.
            </p>
    <Link href="/contact" className="btn bg-black text-white hover:bg-gray-800 btn-lg">
              Get Automation Strategy
            </Link>
          </motion.div>
        </div>
      </section>
  <Footer />
    </div>
  );
}
