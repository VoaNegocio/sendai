import React from 'react';

const MaquinasHeader = () => (
    <header className="relative bg-brand-red border-b border-red-700 shadow-sm z-50">
        {/* Navbar / Logo Area */}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo Inverted for Red Background */}
            <img src="/sendai-logo-horizontal-semfundo.png" alt="Sendai Máquinas" className="h-10 md:h-12 w-auto brightness-0 invert" />

            {/* CTA Button */}
            <div className="hidden md:flex">
                <a
                    href="#form"
                    className="group relative overflow-hidden bg-white text-brand-red font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                >
                    {/* Shimmer Effect */}
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-red-100/50 to-transparent -translate-x-full animate-shimmer-slide z-10" />

                    <span className="relative z-20">Falar com Especialista</span>
                </a>
            </div>
        </div>
    </header>
);

export default MaquinasHeader;
