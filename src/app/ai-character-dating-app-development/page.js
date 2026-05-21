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
import { features, hero, aiCharacterDatingAppDevelopment } from '@/data.js';
import { NavbarMT } from '@/components/NavbarMT';
import SEOFAQSection from '@/components/SEOFAQSection';
import { pageFAQs } from '@/data/seoFAQs';

export default function AICharacterDatingAppDevelopment() {

    return (
        <div className='overflow-hidden w-full'>
            {/* <Header /> */}
            <NavbarMT />
            <Hero data={hero.aiCharacterDatingAppDevelopment} />
            <Brands />
            <Feature1 actual={aiCharacterDatingAppDevelopment} />
            {/* AI Character Dating App Development Services Grid */}
            <section className="py-20 bg-grey">
                <div className="container mx-auto px-4">
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-dark">Our AI Character Dating Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Build the next generation of virtual companionship with our cutting-edge AI technologies
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Custom Personality Engine', desc: 'Create unique AI characters with distinct traits, backstories, and evolving behaviors', features: ['Trait Customization', 'Backstory Generator', 'Memory Systems', 'Emotional Intelligence'] },
                            { title: 'Immersive Voice Interaction', desc: 'Enable realistic voice conversations with ultra-low latency and emotional tone', features: ['Text-to-Speech', 'Speech-to-Text', 'Voice Cloning', 'Emotional Prosody'] },
                            { title: 'Dynamic Roleplay Scenarios', desc: 'Facilitate engaging roleplay experiences with context-aware AI storytelling', features: ['Scenario Builder', 'Context Retention', 'Adaptive Narratives', 'Multi-turn Logic'] },
                            { title: 'Visual Avatar Generation', desc: 'Generate high-quality 2D/3D avatars that react and emote in real-time', features: ['3D Modeling', 'Live2D Integration', 'Real-time Rendering', 'Expression Mapping'] },
                            { title: 'Privacy & Safety', desc: 'Ensure user privacy and safe interactions with advanced moderation tools', features: ['End-to-End Encryption', 'Content Filtering', 'Age Verification', 'Data Anonymization'] },
                            { title: 'Monetization & Economy', desc: 'Implement sustainable revenue models with virtual goods and subscriptions', features: ['Subscription Tiers', 'Virtual Currency', 'Gifting System', 'Premium Characters'] },
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
                seoContent={pageFAQs.aiCharacterDating.seoContent}
                faqs={pageFAQs.aiCharacterDating.faqs}
                subtitle="Common questions about AI character dating app development"
            />
            <Cta />
            <Footer />
        </div>
    );
}
