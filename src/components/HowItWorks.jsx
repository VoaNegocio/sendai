import React from 'react';

const HowItWorks = () => (
    <section className="py-20 bg-white text-slate-600">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-slate-900">Como Funciona</h2>

            <div className="grid md:grid-cols-3 gap-8 relative">
                {[
                    { step: "1", title: "Solicite seu orçamento", desc: "Em menos de 1 minuto" },
                    { step: "2", title: "Receba contato rápido", desc: "Consultor especializado" },
                    { step: "3", title: "Agende a entrega", desc: "Equipamentos na obra" },
                ].map((item, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white shadow-lg">
                            {item.step}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                    </div>
                ))}
                {/* Linha conectora (Desktop) */}
                <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-slate-200 -z-0 transform translate-y-1/2"></div>
            </div>

            <p className="mt-12 text-lg font-bold text-brand-red uppercase tracking-widest mb-8">
                Simples. Técnico. Sem burocracia.
            </p>

            <a href="#form" className="group relative overflow-hidden bg-brand-red text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] inline-block">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer-slide z-10" />
                <span className="relative z-20">Solicitar meu orçamento gratuito</span>
            </a>
        </div>
    </section>
);

export default HowItWorks;
