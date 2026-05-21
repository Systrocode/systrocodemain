"use client";
import React from 'react';
import ClientNavbar from '@/components/ClientNavbar';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Image from 'next/image';
import Link from 'next/link';
import SEOFAQSection from '@/components/SEOFAQSection';
import { pageFAQs } from '@/data/seoFAQs';

import { projects } from '@/data/projects';

const SuccessStories = () => {

    return (
        <div className='overflow-hidden w-full bg-gray-50'>
            <ClientNavbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 bg-white">
                <div className="container mx-auto text-center">
                    <motion.h1
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        animate="show"
                        className="text-4xl lg:text-6xl font-bold mb-6 text-dark"
                    >
                        Our Success Stories
                    </motion.h1>
                    <motion.p
                        variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        animate="show"
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Discover how we've helped businesses across industries transform their digital presence and achieve remarkable growth.
                    </motion.p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 lg:py-24 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Link href={`/our-work/${project.slug}`} key={project.id}>
                                <motion.div
                                    variants={fadeIn('up', 0.1 * index)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: false, amount: 0.2 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group h-full"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="text-white font-semibold text-lg border border-white px-6 py-2 rounded-full">View Details</span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="text-accent font-medium mb-2 text-sm uppercase tracking-wider">{project.category}</div>
                                        <h3 className="text-2xl font-bold mb-3 text-dark group-hover:text-accent transition-colors">{project.title}</h3>
                                        <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <SEOFAQSection
                seoContent={pageFAQs.ourWork.seoContent}
                faqs={pageFAQs.ourWork.faqs}
                subtitle="Questions about our project portfolio and capabilities"
            />
            <Cta />
            <Footer />
        </div>
    );
};

export default SuccessStories;
