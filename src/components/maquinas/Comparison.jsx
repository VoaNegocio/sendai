import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

const Comparison = () => {
    return (
        <section className="py-20 bg-brand-red">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Você ainda <span className="text-deep-slate bg-white px-2 py-1 rounded">compra</span> máquina industrial?</h2>
                    <p className="text-white/90 max-w-2xl mx-auto">
                        Compare os modelos e veja por que a assinatura é a escolha inteligente para sua produção.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-0 border border-white/20 rounded-2xl overflow-hidden bg-white shadow-xl">

                    {/* Traditional Model (Left) */}
                    <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50/50">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-slate-200 rounded-full">
                                <X className="w-6 h-6 text-slate-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-400 uppercase tracking-wide">Modelo Tradicional</h3>
                                <p className="text-sm text-slate-500 font-medium">(Compra)</p>
                            </div>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-500">
                                <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                                <span>Alto investimento inicial</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-500">
                                <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                                <span>Manutenção imprevisível</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-500">
                                <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                                <span>Capital imobilizado</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-500">
                                <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                                <span>Máquina antiga perde produtividade</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-500">
                                <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                                <span>Se quebrar, você espera</span>
                            </li>
                        </ul>
                    </div>

                    {/* Sendai Model (Right) */}
                    <div className="p-8 md:p-12 bg-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-16 -mt-16"></div>

                        <div className="flex items-center gap-3 mb-8 relative z-10">
                            <div className="p-3 bg-green-100 rounded-full">
                                <Check className="w-6 h-6 text-construction-green" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-deep-slate uppercase tracking-wide">Modelo Sendai</h3>
                                <p className="text-sm text-construction-green font-bold">(Assinatura)</p>
                            </div>
                        </div>

                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-start gap-3 text-deep-slate font-medium">
                                <Check className="w-5 h-5 text-construction-green mt-1 shrink-0" />
                                <span>Sem investimento alto</span>
                            </li>
                            <li className="flex items-start gap-3 text-deep-slate font-medium">
                                <Check className="w-5 h-5 text-construction-green mt-1 shrink-0" />
                                <span>Manutenção total inclusa</span>
                            </li>
                            <li className="flex items-start gap-3 text-deep-slate font-medium">
                                <Check className="w-5 h-5 text-construction-green mt-1 shrink-0" />
                                <span>Capital livre para crescer</span>
                            </li>
                            <li className="flex items-start gap-3 text-deep-slate font-medium">
                                <Check className="w-5 h-5 text-construction-green mt-1 shrink-0" />
                                <span>Máquinas modernas de última geração</span>
                            </li>
                            <li className="flex items-start gap-3 text-deep-slate font-medium">
                                <Check className="w-5 h-5 text-construction-green mt-1 shrink-0" />
                                <span>Troca garantida em até 48h</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 text-center">
                    <p className="text-xl font-medium text-white mb-6">
                        Você não precisa possuir a máquina. <br className="hidden md:block" />
                        Precisa manter sua <span className="font-bold border-b-2 border-white">produção rodando.</span>
                    </p>

                    <button className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-red transition-all">
                        Quero entender como funciona
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Comparison;
