"use client";
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { NavbarMT } from '@/components/NavbarMT';

export default function ConversionOptimization() {
  const croServices = [
    {
      title: "Landing Page Optimization",
      description: "Optimize your landing pages for maximum conversions with data-driven design improvements.",
      features: ["A/B Testing", "User Experience Design", "Load Speed Optimization", "Mobile Responsiveness"]
    },
    {
      title: "Funnel Analysis", 
      description: "Identify bottlenecks in your conversion funnel and optimize each step of the customer journey.",
      features: ["Funnel Mapping", "Drop-off Analysis", "User Flow Optimization", "Conversion Path Analysis"]
    },
    {
      title: "Form Optimization",
      description: "Improve form completion rates with strategic design and user experience enhancements.",
      features: ["Form Field Optimization", "Multi-step Forms", "Auto-fill Integration", "Error Handling"]
    },
    {
      title: "E-commerce Optimization",
      description: "Increase online sales with optimized product pages, checkout process, and user experience.",
      features: ["Product Page Testing", "Checkout Optimization", "Cart Abandonment", "Payment Flow"]
    },
    {
      title: "User Experience Testing",
      description: "Conduct comprehensive user testing to understand behavior and optimize accordingly.",
      features: ["Heatmap Analysis", "User Session Recording", "Usability Testing", "Eye Tracking"]
    },
    {
      title: "Personalization",
      description: "Create personalized experiences that increase engagement and conversion rates.",
      features: ["Dynamic Content", "Behavioral Triggers", "Audience Segmentation", "Personalized CTAs"]
    }
  ];

  const testingTypes = [
    {
      type: "A/B Testing",
      description: "Compare two versions to determine which performs better",
      improvement: "Up to 400%"
    },
    {
      type: "Multivariate Testing", 
      description: "Test multiple elements simultaneously for optimal combinations",
      improvement: "Up to 300%"
    },
    {
      type: "Split URL Testing",
      description: "Test completely different page designs and layouts",
      improvement: "Up to 250%"
    },
    {
      type: "Mobile Optimization",
      description: "Optimize specifically for mobile user experience",
      improvement: "Up to 500%"
    }
  ];

  const optimizationAreas = [
    {
      area: "Headlines & Copy",
      elements: ["Value Propositions", "Call-to-Action Text", "Benefit Statements", "Social Proof"]
    },
    {
      area: "Design & Layout",
      elements: ["Button Placement", "Color Schemes", "Visual Hierarchy", "White Space"]
    },
    {
      area: "User Experience",
      elements: ["Navigation Flow", "Page Load Speed", "Mobile Experience", "Form Design"]
    },
    {
      area: "Trust & Credibility",
      elements: ["Testimonials", "Security Badges", "Guarantees", "Company Information"]
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
              Conversion Rate <span className="text-accent">Optimization</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Turn more visitors into customers with scientifically proven optimization strategies. 
              Our CRO experts use data-driven testing to maximize your website&apos;s conversion potential.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">187%</div>
                <div className="text-gray-400">Average Conversion Lift</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-gray-400">Statistical Confidence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">1,200+</div>
                <div className="text-gray-400">Tests Completed</div>
              </div>
            </div>
            <Link href="/contact" className="btn btn-accent btn-lg">
              Get CRO Audit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CRO Services Section */}
  <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Conversion Optimization Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive CRO services to maximize your website&apos;s conversion potential
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {croServices.map((service, index) => (
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

      {/* Testing Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Testing Methodologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scientific testing approaches to identify what works best for your audience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testingTypes.map((test, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-accent">{test.type}</h3>
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                    {test.improvement}
                  </span>
                </div>
                <p className="text-gray-600">{test.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
  <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What We Optimize</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every element of your website is a potential conversion opportunity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {optimizationAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
        className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-6 text-accent">{area.area}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {area.elements.map((element, idx) => (
          <div key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                      {element}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our CRO Process</h2>
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
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Research & Analysis</h3>
              <p className="text-gray-400">Comprehensive audit of your current performance and user behavior.</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Hypothesis Development</h3>
              <p className="text-gray-400">Create data-driven hypotheses for what improvements will work best.</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Test Implementation</h3>
              <p className="text-gray-400">Design and launch scientifically valid A/B and multivariate tests.</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Results & Optimization</h3>
              <p className="text-gray-400">Analyze results and implement winning variations for maximum impact.</p>
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
              Ready to Boost Your Conversion Rates?
            </h2>
      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free conversion audit and discover the hidden opportunities on your website.
            </p>
    <Link href="/contact" className="btn bg-black text-white hover:bg-gray-800 btn-lg">
              Start Free CRO Audit
            </Link>
          </motion.div>
        </div>
      </section>
  <Footer />
    </div>
  );
}
