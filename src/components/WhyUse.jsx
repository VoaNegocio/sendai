import React from 'react';
import { CheckCircle, TrendingUp, Clock } from 'lucide-react';

const WhyUse = () => (
    <section className="py-20 bg-brand-red">
        <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-white">Por que usar Escoras Metálicas?</h2>

            <div className="grid md:grid-cols-1 gap-6 text-left max-w-2xl mx-auto">
                {[
                    "Regulagem precisa que agiliza a execução e reduz retrabalhos",
                    "Alta resistência e estabilidade, atendendo normas técnicas",
                    "Substituem a madeira, reduzindo impactos ambientais",
                    "Padronização do escoramento, melhorando produtividade",
                    "Zero desperdício, zero descarte, zero risco de empenamento"
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-red-700/30 transition-colors">
                        <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <span className="text-lg text-white font-medium">{item}</span>
                    </div>
                ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-red-500 pt-8">
                <div>
                    <TrendingUp className="w-10 h-10 text-white mx-auto mb-3" />
                    <p className="font-bold text-white">Mais controle no ciclo de lajes</p>
                </div>
                <div>
                    <Clock className="w-10 h-10 text-white mx-auto mb-3" />
                    <p className="font-bold text-white">Mais previsibilidade no cronograma</p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <a href="#form" className="group relative overflow-hidden bg-white text-brand-red font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] inline-block">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-red-100/50 to-transparent -translate-x-full animate-shimmer-slide z-10" />
                    <span className="relative z-20">Quero economizar na minha obra</span>
                </a>
            </div>
        </div>
    </section>
);

export default WhyUse;

