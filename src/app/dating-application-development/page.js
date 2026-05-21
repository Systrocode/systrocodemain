"use client";
// import components
import Header from '@/components/Header.js';
import Hero from '@/components/Hero.js';
import Brands from '@/components/Brands.js';
import Feature1 from '@/components/Feature1.js';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Cta from '@/components/Cta.js';
import Footer from '@/components/Footer.js';
import { features, hero, datingAppDevelopment } from '@/data.js';
import { NavbarMT } from '@/components/NavbarMT';
import SEOFAQSection from '@/components/SEOFAQSection';
import { pageFAQs } from '@/data/seoFAQs';

export default function DatingAppDevelopment() {

    return (
        <div className='overflow-hidden w-full'>
            {/* <Header /> */}
            <NavbarMT />
            <Hero data={hero.datingAppDevelopment} />
            <Brands />
            <Feature1 actual={datingAppDevelopment} />
            {/* Dating App Development Services Grid */}
            <section className="py-20 bg-grey">
                <div className="container mx-auto px-4">
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-dark">Our Dating App Development Company Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Create engaging platforms that foster meaningful connections with our expert solutions
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Matching Algorithms', desc: 'Smart AI-driven matching logic to connect compatible users', features: ['AI Matching', 'Compatibility Scores', 'Preference Filtering', 'Behavioral Analysis'] },
                            { title: 'Real-Time Communication', desc: 'Seamless chat, voice, and video calling features', features: ['Instant Messaging', 'Video Calls', 'Voice Notes', 'Media Sharing'] },
                            { title: 'User Verification', desc: 'Ensure safety with robust identity verification systems', features: ['Photo Verification', 'Social Login', 'Background Checks', 'Anti-Spam'] },
                            { title: 'Geolocation Features', desc: 'Location-based discovery to find matches nearby', features: ['GPS Tracking', 'Distance Filters', 'Map View', 'Travel Mode'] },
                            { title: 'Monetization Models', desc: 'Diverse revenue streams to maximize profitability', features: ['Subscriptions', 'In-App Purchases', 'Freemium', 'Ad Integration'] },
                            { title: 'Admin Dashboard', desc: 'Comprehensive control over users and app performance', features: ['User Management', 'Analytics', 'Content Moderation', 'Report Handling'] },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn('up', 0.1 * i)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.3 }}
                                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-accent transition-colors shadow-lg"
                            >
                                <h3 className="text-2xl font-bold mb-4 text-accent">{item.title}</h3>
                                <p className="text-gray-600 mb-6">{item.desc}</p>
                                <ul className="space-y-2">
                                    {item.features.map((f, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <SEOFAQSection
                seoContent={pageFAQs.datingAppDevelopment.seoContent}
                faqs={pageFAQs.datingAppDevelopment.faqs}
                subtitle="Common questions about dating app development"
            />
            <Cta />
            <Footer />
        </div>
    );
}
