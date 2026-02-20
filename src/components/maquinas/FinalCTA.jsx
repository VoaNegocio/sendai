import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="py-24 bg-brand-red relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 skew-x-12 transform origin-top-right"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Pare de imobilizar capital.<br />
                    <span className="text-white border-b-4 border-white inline-block pb-1">Comece a produzir mais.</span>
                </h2>

                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    Assine sua máquina industrial com manutenção total inclusa e foque no que importa: o crescimento do seu negócio.
                </p>

                <button className="inline-flex items-center justify-center px-10 py-5 bg-white text-brand-red text-xl font-bold rounded-xl hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-2xl group">
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Quero falar com um especialista agora
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform text-brand-red" />
                </button>

                <p className="mt-6 text-white/70 text-sm">
                    Atendimento humanizado via WhatsApp. Sem robôs.
                </p>
            </div>
        </section>
    );
};

export default FinalCTA;
