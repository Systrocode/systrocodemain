import React from 'react';
import Image from 'next/image';
import theHindu from '../assets/img/awards/the-hindu.webp';
import hindustanTimes from '../assets/img/awards/hindustan-times.webp';
import bloomberg from '../assets/img/awards/bloomberg.webp';

const Awards = () => {
    const awards = [
        {
            company: "The Hindu",
            title: "Top Fintech Software Development Company in USA",
            logo: theHindu,
            logoFont: "serif"
        },
        {
            company: "Hindustan Times",
            title: "Top Fitness App Development Company",
            logo: hindustanTimes,
            logoFont: "serif"
        },
        {
            company: "Bloomberg",
            title: "Top Web and App Development Company",
            logo: bloomberg,
            logoFont: "sans-serif"
        },
        {
            company: "Yourstory",
            title: "Best On demand App Development Company",
            logoText: "YOURSTORY",
            logoFont: "sans-serif"
        },
        {
            company: "Yahoo Finance",
            title: "Top Mobile App Development Company",
            logoText: "yahoo! finance",
            logoFont: "sans-serif"
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24 text-gray-900">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                            Recognized Industry Excellence
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Top rating and review platforms honor SystroCode as a premier software development firm, celebrating our impact in driving clients' digital success.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group h-full hover:-translate-y-1"
                        >
                            <div className="h-16 flex items-center justify-center mb-6 w-full relative">
                                {/* Logo Rendering */}
                                {award.logo ? (
                                    <Image
                                        src={award.logo}
                                        alt={award.company}
                                        className="object-contain max-h-full max-w-[80%] filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                                    />
                                ) : (
                                    <span className={`text-2xl font-bold ${award.logoFont === 'serif' ? 'font-serif' : 'font-sans'} text-gray-800 group-hover:text-accent transition-colors`}>
                                        {award.logoText}
                                    </span>
                                )}
                            </div>
                            <div className="text-gray-600 text-sm leading-relaxed">
                                {award.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
