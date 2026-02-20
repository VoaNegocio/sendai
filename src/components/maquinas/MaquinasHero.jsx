import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const MaquinasHero = () => {
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left Column: Content */}
                    <div className="mb-12 lg:mb-0">
                        <h1 className="text-4xl lg:text-5xl font-bold text-deep-slate leading-tight mb-6">
                            AUMENTE SUA PRODUÇÃO COM <span className="text-brand-red">MÁQUINAS INDUSTRIAIS</span> POR ASSINATURA
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Sem investimento alto. Sem dor de cabeça com manutenção.
                            Com opção de compra quando você quiser.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <div className="bg-slate-50 border border-slate-200 rounded-lg px-6 py-3">
                                <span className="block text-sm text-slate-500 font-medium">Planos a partir de</span>
                                <span className="block text-2xl font-bold text-deep-slate">R$ 199/mês</span>
                            </div>
                        </div>

                        <button className="inline-flex items-center justify-center px-8 py-4 bg-construction-green text-white font-bold rounded-lg hover:bg-green-700 transition-colors shadow-lg-soft group">
                            Quero falar com um especialista
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                            <img
                                src="/maquinas/imgs/img-hero.png"
                                alt="Máquina Industrial Sendai"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border-l-4 border-brand-red hidden lg:block">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-red-50 rounded-lg">
                                    <CheckCircle className="w-6 h-6 text-brand-red" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-deep-slate">Manutenção Inclusa</p>
                                    <p className="text-xs text-slate-500">Sem custos extras</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MaquinasHero;
