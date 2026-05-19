import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/data';
import { FaCheck, FaArrowLeft, FaClock, FaMobileAlt, FaUsers, FaCode, FaChartLine } from 'react-icons/fa';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = portfolioData[slug];

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} | Systrocode Portfolio`,
        description: project.overview.objective,
    };
}

const PortfolioProject = async ({ params }) => {
    const { slug } = await params;
    const project = portfolioData[slug];

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] bg-gray-900 flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* Placeholder for Banner Image */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 opacity-90" />
                    {/* Uncomment when real banner images are available
             <Image 
               src={project.bannerImage} 
               alt={project.title} 
               fill 
               className="object-cover opacity-40"
               priority
             />
             */}
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium mb-6 uppercase tracking-wider">
                        {project.category}
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">{project.title}</h1>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                        <div className="px-4">
                            <div className="flex items-center justify-center text-blue-600 mb-2">
                                <FaClock className="text-2xl" />
                            </div>
                            <h4 className="text-gray-500 text-sm uppercase tracking-wide font-medium">Timeline</h4>
                            <p className="text-xl font-bold text-gray-900">{project.stats.timeline}</p>
                        </div>
                        <div className="px-4 pt-8 md:pt-0">
                            <div className="flex items-center justify-center text-blue-600 mb-2">
                                <FaMobileAlt className="text-2xl" />
                            </div>
                            <h4 className="text-gray-500 text-sm uppercase tracking-wide font-medium">Screens Delivered</h4>
                            <p className="text-xl font-bold text-gray-900">{project.stats.screens}</p>
                        </div>
                        <div className="px-4 pt-8 md:pt-0">
                            <div className="flex items-center justify-center text-blue-600 mb-2">
                                <FaUsers className="text-2xl" />
                            </div>
                            <h4 className="text-gray-500 text-sm uppercase tracking-wide font-medium">Team Size</h4>
                            <p className="text-xl font-bold text-gray-900">{project.stats.teamSize}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overview Section */}
            <div className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    {/* Client Background */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Client's Background</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{project.overview.clientBackground}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Objective */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">The Objective</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">{project.overview.objective}</p>
                        </div>
                        {/* Solution */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Our Solution</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">{project.overview.solution}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Features Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Key Features</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We implemented a robust set of features to ensure the application met all user needs and business goals.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.features.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                    <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">
                                        {index + 1}
                                    </span>
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed pl-11">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tech Stack Section */}
            <div className="py-20">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Technology Stack</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {project.techStack.map((tech, index) => (
                            <div key={index} className="flex items-center px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-blue-500 transition-colors">
                                <FaCode className="text-blue-500 mr-3" />
                                <span className="font-semibold text-gray-800">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Results Section */}
            <div className="py-20 bg-blue-900 text-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <FaChartLine className="text-5xl text-blue-300 mx-auto mb-6" />
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Result</h2>
                    <p className="text-xl lg:text-2xl leading-relaxed font-light text-blue-100">
                        "{project.result}"
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Your Success Story?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Let's collaborate to turn your vision into a reality with our expert development team.</p>
                    <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        Get Your Free Consultation
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PortfolioProject;
