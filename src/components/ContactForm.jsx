import React from 'react';

const ContactForm = () => (
    <section id="form" className="py-20 bg-brand-red">
        <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Receba Orçamento Imediato</h2>
                    <p className="text-slate-600">Preencha os dados abaixo para falar com um consultor.</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" placeholder="Seu nome" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Telefone / WhatsApp</label>
                        <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" placeholder="(00) 00000-0000" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Qtd. Estimada</label>
                            <input type="number" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" placeholder="Ex: 50" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Prazo (meses)</label>
                            <input type="number" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" placeholder="Ex: 3" />
                        </div>
                    </div>

                    <button type="submit" className="w-full group relative overflow-hidden bg-brand-red text-white font-bold py-4 rounded-lg shadow-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]">
                        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer-slide z-10" />
                        <span className="relative z-20">Receber Orçamento Imediato</span>
                    </button>

                    <p className="text-center text-xs text-slate-400 mt-4">
                        Receba retorno técnico rápido com estimativa preliminar para sua obra.
                    </p>
                </form>
            </div>
        </div>
    </section>
);

export default ContactForm;
