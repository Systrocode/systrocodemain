"use client";
import React, { useState, useEffect } from 'react';
import { FaTimes, FaCheck, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPlus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
});

const WelcomePopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [captcha, setCaptcha] = useState({ q: "1+10=", a: 11 });
    const [userAnswer, setUserAnswer] = useState("");

    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        return { q: `${num1} + ${num2} =`, a: num1 + num2 };
    };

    useEffect(() => {
        setCaptcha(generateCaptcha());
        // Show popup after a short delay
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (parseInt(userAnswer) !== captcha.a) {
            alert("Incorrect Captcha");
            return;
        }
        // Handle form submission logic here
        alert("Thank you! We will contact you shortly.");
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className={`bg-white rounded-2xl lg:rounded-[60px] shadow-2xl w-full max-w-7xl overflow-hidden relative flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto lg:overflow-visible ${poppins.className}`}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-10 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                        >
                            <FaTimes />
                        </button>

                        {/* Left Side - Info & Trust */}
                        <div className="w-full lg:w-5/12 bg-[#EBF3F9] p-5 lg:p-12 flex flex-col relative">
                            <div className="mb-5">
                                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
                                    Pause! Before You Press <span className="text-red-600">X</span>.
                                </h2>
                            </div>

                            {/* Testimonial Slider */}
                            <div className="relative mb-5 text-center px-4">
                                <button className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-red-400 text-red-500 flex items-center justify-center hover:bg-red-50 transition-colors bg-white">
                                    <span className="text-lg">&lt;</span>
                                </button>

                                <div className="flex flex-col items-center px-6">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md mb-3">
                                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Sean Matson" className="w-full h-full object-cover" />
                                    </div>
                                    <p className="text-gray-800 text-xs italic mb-2 leading-relaxed font-medium">
                                        "Systrocode impressed us with its approach, involving extensive feature redevelopment."
                                    </p>
                                    <h4 className="font-bold text-gray-900 text-sm">Sean Matson</h4>
                                    <p className="text-[10px] text-gray-500">CEO - CardoMax, Healthcare App</p>
                                </div>

                                <button className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-red-400 text-red-500 flex items-center justify-center hover:bg-red-50 transition-colors bg-white">
                                    <span className="text-lg">&gt;</span>
                                </button>
                            </div>

                            {/* Badge */}
                            <div className="flex justify-center mb-5">
                                <div className="bg-white rounded-full px-5 py-1.5 flex items-center gap-3 border border-gray-200 shadow-sm">
                                    <span className="font-bold text-blue-900 text-xs">DESIGNRUSH</span>
                                    <div className="flex text-yellow-400 text-xs">★★★★★</div>
                                    <span className="text-blue-500 text-[10px] font-medium flex items-center gap-1">
                                        <FaCheck className="text-[8px]" /> Verified Review
                                    </span>
                                </div>
                            </div>

                            {/* Info Box */}
                            <div className="bg-white rounded-3xl p-4 lg:p-5 shadow-sm mb-auto">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Freebies */}
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-xs mb-2">Our Experts Provide Free:</h3>
                                        <ul className="space-y-1.5">
                                            {[
                                                "Detailed Project Roadmap",
                                                "Preliminary Cost Estimate",
                                                "Timeline Breakdown",
                                                "Risk Assessment Overview"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] text-gray-700 font-medium leading-tight">
                                                    <FaCheck className="text-red-500 text-[10px] mt-0.5 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Contact */}
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-xs mb-2">Have a Question? Let's Talk!</h3>
                                        <div className="space-y-1 text-xs text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 flex justify-center flex-shrink-0">
                                                    <FaPhoneAlt className="text-blue-500 text-[10px]" />
                                                </div>
                                                <span className="truncate">+91-9672040456</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 flex justify-center flex-shrink-0">
                                                    <FaEnvelope className="text-red-500 text-[10px]" />
                                                </div>
                                                <span className="truncate">sales@systrocode.tech</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <div className="w-4 flex justify-center flex-shrink-0 mt-0.5">
                                                    <FaMapMarkerAlt className="text-green-500 text-[10px]" />
                                                </div>
                                                <span className="leading-tight text-[10px]">A-15 Ashok vihar, Near sector-15, Girdhar marg, Malviya nagar, Jaipur</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Logos Footer */}
                            <div className="mt-4 hidden lg:flex justify-between items-center opacity-50 grayscale px-2">
                                {/* Placeholders for logos */}
                                <span className="font-black text-xl text-gray-800">WFFA</span>
                                <span className="font-bold text-lg text-gray-800 italic">Whirlpool</span>
                                <span className="font-black text-lg text-gray-800">RedBull</span>
                                <span className="font-black text-xl text-gray-800 italic">NIKE</span>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="w-full lg:w-7/12 bg-white p-5 lg:p-12 flex flex-col">
                            <div className="mb-4">
                                <p className="text-gray-700 text-[18px] leading-[24px] mb-1 font-semibold">See What You Could Be Missing!</p>
                                <h2 className="text-xl lg:text-2xl font-black text-gray-900 leading-tight">
                                    We respond promptly, typically within <span className="text-blue-500">30 minutes</span>
                                </h2>
                                <p className="text-[10px] text-red-500 font-medium mt-1">* Mandatory Field</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-3">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Enter Full Name" required className="w-full bg-white border border-gray-300 rounded-xl px-3 py-1.5 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                                    <input type="email" placeholder="Enter Email Address" required className="w-full bg-white border border-gray-300 rounded-xl px-3 py-1.5 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                                    <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden bg-white focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
                                        <div className="flex items-center px-3 bg-white border-r border-gray-200 h-full py-2">
                                            <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-auto mr-1" />
                                            <span className="text-xs text-gray-700 font-medium">+91</span>
                                            <span className="ml-1 text-gray-400 text-[10px]">▼</span>
                                        </div>
                                        <input type="tel" placeholder="Enter Phone Number" className="flex-1 bg-white border-none px-3 py-2 text-sm focus:ring-0 outline-none h-full" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                                    <textarea rows="3" placeholder="Share Project Details / Overview of Your Idea (Help Us Come Back Stronger)" required className="w-full bg-white border border-gray-300 rounded-xl px-3 py-1.5 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"></textarea>
                                </div>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-2">
                                    <button type="button" className="flex items-center text-blue-500 text-sm font-bold hover:underline">
                                        <div className="bg-blue-500 text-white rounded-[4px] p-0.5 mr-2 flex items-center justify-center w-5 h-5">
                                            <FaPlus className="text-[10px]" />
                                        </div>
                                        Add File <span className="text-gray-400 ml-1 font-normal text-xs">| No file chosen</span>
                                    </button>
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" className="rounded text-blue-500 focus:ring-blue-500 w-5 h-5 border-gray-300" />
                                        <span className="text-sm text-gray-700">Protect Under NDA</span>
                                    </label>
                                </div>

                                <div className="mt-2">
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Are you human? <span className="text-red-500">*</span></label>
                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
                                        <div className="bg-blue-100 px-4 py-1.5 rounded-xl border border-blue-200 font-bold text-gray-800 text-sm min-w-[80px] text-center">
                                            {captcha.q}
                                        </div>
                                        <input
                                            type="text"
                                            value={userAnswer}
                                            onChange={(e) => setUserAnswer(e.target.value)}
                                            placeholder="CAPTCHA Result"
                                            className="flex-1 bg-white border border-gray-300 rounded-xl px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500"
                                        />
                                        <button type="submit" className="bg-[#ED1C24] text-white font-bold px-8 py-2 rounded-xl hover:bg-[#C41219] transition-colors shadow-sm text-sm w-full sm:w-auto">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomePopup;
