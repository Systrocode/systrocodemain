import React from 'react';

const TechSolutions = () => {
    const services = [
        {
            title: "AI Development",
            description: "We optimize processes, decision-making, efficiency, and business growth through intelligent AI solutions that we create.",
            link: "#"
        },
        {
            title: "Generative AI",
            description: "Generative AI models that seamlessly enhance user engagement through the creation of content, automation of workflows, and boosting productivity.",
            link: "#"
        },
        {
            title: "Blockchain Development",
            description: "Offer blockchain development solutions, such as DApps and smart contracts, that run on existing blockchain platforms.",
            link: "#"
        },
        {
            title: "Chatbot Development",
            description: "We build intelligent chatbots that provide instant support and enhance customer interaction 24/7.",
            link: "#"
        }
    ];

    return (
        <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 lg:py-24 text-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column */}
                    <div className="flex flex-col justify-between">
                        <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-12 text-white">
                            Revolutionizing Solutions with Cutting-Edge Technology — Faster, Smarter, and Beyond Industry Standards!
                        </h2>

                        {/* CTA Card */}
                        <div className="bg-[#111] p-8 rounded-2xl relative overflow-hidden mt-auto border border-gray-800">
                            {/* Gradient Effect */}
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/50 to-transparent pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6">
                                    {/* Paper plane icon */}
                                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Fuel your digital-first idea</h3>
                                <p className="text-gray-400 mb-6">With 1600+ transformation experts</p>
                                <button className="bg-[#d93a74] text-white px-8 py-3 rounded-full font-medium hover:bg-[#b02e5d] transition-colors">
                                    Innovate with us
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Services List */}
                    <div className="flex flex-col gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="group bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 flex items-center justify-between cursor-pointer">
                                <div className="max-w-md">
                                    <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0 ml-4">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechSolutions;
