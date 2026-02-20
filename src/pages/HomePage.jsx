import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhyUse from '../components/WhyUse';
import WhySendai from '../components/WhySendai';
import Sustainability from '../components/Sustainability';
import HowItWorks from '../components/HowItWorks';
import Guarantee from '../components/Guarantee';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <div className="font-sans text-slate-900 bg-white">
            <Header />
            <Hero />
            <WhyUse />
            <WhySendai />
            <Sustainability />
            <HowItWorks />
            <Guarantee />
            <Footer />
        </div>
    );
}

export default HomePage;
