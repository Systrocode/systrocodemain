"use client";
import React from 'react';
import ClientNavbar from '@/components/ClientNavbar';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import SEOFAQSection from '@/components/SEOFAQSection';
import { pageFAQs } from '@/data/seoFAQs';

import Link from 'next/link';

export default function ProjectDetails({ params }) {
    const { slug } = React.use(params);
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return notFound();
    }

    const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 3);

    return (
        <div className='overflow-hidden w-full bg-white'>
            <ClientNavbar />

            {/* Magazine Style Hero */}
            <section className="pt-24 pb-12 lg:pt-32 lg:pb-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    {/* Header: Title & Category */}
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        animate="show"
                        className="text-center mb-8"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                            {project.category}
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold text-dark">
                            {project.title}
                        </h1>
                    </motion.div>

                    {/* Split Content: Image Left, Text Right */}
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        {/* Image Column */}
                        <motion.div
                            variants={fadeIn('right', 0.4)}
                            initial="hidden"
                            animate="show"
                            className="relative h-[300px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg bg-white"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-contain p-4"
                            />
                        </motion.div>

                        {/* Description Column */}
                        <motion.div
                            variants={fadeIn('left', 0.4)}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col pt-2"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-dark">Project Overview</h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.slice(0, 3).map((tag, idx) => (
                                    <span key={idx} className="bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {/* Sidebar / Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-dark">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-accent/5 p-6 rounded-xl border border-accent/10">
                                <h3 className="text-xl font-bold mb-4 text-dark">Key Results</h3>
                                <ul className="space-y-3">
                                    {project.results.map((result, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-accent mr-2 mt-1">✓</span>
                                            <span className="text-gray-700 text-sm">{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-4 text-dark">The Challenge</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {project.challenge}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-4 text-dark">Our Solution</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {project.solution}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold mb-12 text-center text-dark">How We Did It</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "We started by analyzing the client's requirements and existing infrastructure." },
                            { step: "02", title: "Strategy", desc: "Our team devised a comprehensive roadmap and selected the best tech stack." },
                            { step: "03", title: "Development", desc: "We built the solution using agile methodologies with regular client updates." },
                            { step: "04", title: "Launch", desc: "After rigorous testing, we deployed the solution and provided post-launch support." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="text-4xl font-bold text-accent/20 mb-4">{item.step}</div>
                                <h3 className="text-xl font-bold mb-2 text-dark">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Projects */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold mb-12 text-dark">More Success Stories</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedProjects.map((p) => (
                            <Link href={`/our-work/${p.slug}`} key={p.id} className="group">
                                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={p.image}
                                            alt={p.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-accent text-xs font-bold uppercase mb-2">{p.category}</div>
                                        <h3 className="text-xl font-bold text-dark group-hover:text-accent transition-colors">{p.title}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <SEOFAQSection
                seoContent={pageFAQs.ourWork.seoContent}
                faqs={pageFAQs.ourWork.faqs}
                subtitle="Questions about our project work and capabilities"
            />
            <Cta />
            <Footer />
        </div>
    );
}
