import React from 'react';
import { ShieldCheck, Truck, Package, HardHat } from 'lucide-react';

const WhySendai = () => (
    <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">

            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Por que alugar com a Sendai Smart Build?</h2>
                <p className="text-slate-300 text-lg">
                    Modelo ideal para SPEs e obras com prazo definido. Foco total em eficiência logística.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    {
                        icon: <ShieldCheck />,
                        title: "Previsibilidade",
                        desc: "Preços competitivos e controle total de custos."
                    },
                    {
                        icon: <Truck />,
                        title: "Flexibilidade",
                        desc: "Planos adaptáveis por período e volume de obra."
                    },
                    {
                        icon: <Package />,
                        title: "Disponibilidade",
                        desc: "Estoque pronto para atender pequenas e grandes obras."
                    },
                    {
                        icon: <HardHat />,
                        title: "Suporte Técnico",
                        desc: "Acompanhamento especializado durante todo o ciclo."
                    },
                ].map((item, i) => (
                    <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand-red hover:bg-slate-700 hover:shadow-lg transition-all group">
                        <div className="bg-slate-700 w-14 h-14 rounded-xl flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform group-hover:bg-slate-600">
                            {React.cloneElement(item.icon, { size: 28 })}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <a href="#form" className="group relative overflow-hidden bg-brand-red text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] inline-block">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer-slide z-10" />
                    <span className="relative z-20">Falar com um especialista agora</span>
                </a>
            </div>

        </div>
    </section>
);

export default WhySendai;
