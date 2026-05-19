import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMicrosoft } from 'react-icons/fa';

const TopBar = () => {
    return (
        <div className="bg-black text-white py-2 hidden lg:block">
            <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center text-sm font-medium">
                {/* Left Side: Contact Info */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-pointer">
                        <FaPhoneAlt className="h-3 w-3" />
                        <span>6350220215 (Sales)</span>
                    </div>
                    <span className="text-gray-600">|</span>
                    <div className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-pointer">
                        <span>9251645283 (HR)</span>
                    </div>
                    <div className="text-[#3EC1F3] hidden xl:block">
                        We answer our phones!
                    </div>
                </div>

                {/* Right Side: Social & CTA */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                        <a href="https://wa.me/919672040456" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] p-1.5 rounded-full hover:scale-110 transition-transform">
                            <FaWhatsapp className="h-3 w-3 text-white" />
                        </a>
                        <span className="text-gray-600">|</span>
                        <a href="#" className="bg-[#5B5FC7] p-1.5 rounded-full hover:scale-110 transition-transform">
                            <FaMicrosoft className="h-3 w-3 text-white" />
                        </a>
                        <span className="text-gray-600">|</span>
                        <a href="mailto:contact@systrocode.com" className="bg-[#EA4335] p-1.5 rounded-full hover:scale-110 transition-transform">
                            <FaEnvelope className="h-3 w-3 text-white" />
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="hidden xl:inline">Unlock Your Growth with <span className="text-[#3EC1F3]">AI</span>:</span>
                        <a href="/ai-automation" className="text-white underline hover:text-[#3EC1F3] transition-colors">Watch Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
