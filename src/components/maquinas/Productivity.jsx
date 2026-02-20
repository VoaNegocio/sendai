import React from 'react';
import { Zap, Clock, MessageSquare } from 'lucide-react';

const Productivity = () => {
    return (
        <section className="py-20 bg-brand-red">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Mais produtividade. Menos interrupção.</h2>
                    <p className="text-xl text-white/90">Quem já usa Sendai sabe:</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl border border-white/20 shadow-lg text-center hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-green-100 text-construction-green rounded-full flex items-center justify-center mx-auto mb-4">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-deep-slate mb-2">Atendimento Rápido</h3>
                        <p className="text-slate-500 text-sm">Suporte ágil via WhatsApp sempre que precisar.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-white/20 shadow-lg text-center hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-deep-slate mb-2">Manutenção Inclusa</h3>
                        <p className="text-slate-500 text-sm">Sem custos extras e sem surpresas no orçamento.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-white/20 shadow-lg text-center hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-orange-100 text-safety-orange rounded-full flex items-center justify-center mx-auto mb-4">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-deep-slate mb-2">+40% Eficiência</h3>
                        <p className="text-slate-500 text-sm">Aumento real de produtividade com máquinas novas.</p>
                    </div>
                </div>

                <div className="mt-12 p-8 bg-black/20 rounded-2xl text-center backdrop-blur-sm border border-white/10">
                    <p className="text-white text-lg font-medium">
                        "Produção parada é prejuízo. Máquina moderna é investimento inteligente."
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Productivity;
