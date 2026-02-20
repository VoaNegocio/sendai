import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Plans = () => {
    return (
        <section className="py-24 bg-brand-red text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <div className="inline-block p-2 px-4 bg-white/10 text-white font-bold rounded-full mb-6 border border-white/20">
                    Oferta Especial de Lançamento
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Planos a partir de <br />
                    <span className="text-white bg-black/20 px-2 rounded mt-2 inline-block">R$ 199/mês</span>
                </h2>

                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 mb-12 text-white/90 font-medium">
                    <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                        <span>Sem entrada</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                        <span>Sem surpresa</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                        <span>Garantia total</span>
                    </div>
                </div>

                <button className="px-10 py-5 bg-white text-brand-red text-xl font-bold rounded-xl shadow-xl hover:bg-slate-100 hover:scale-105 transition-all duration-300">
                    Solicitar simulação
                </button>

                <p className="mt-4 text-sm text-white/60">
                    *Valor sujeito a análise de crédito e disponibilidade de estoque.
                </p>

            </div>
        </section>
    );
};

export default Plans;
