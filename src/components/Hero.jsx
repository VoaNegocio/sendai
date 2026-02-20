import React from 'react';

const Hero = () => (
    <section className="relative bg-slate-50 overflow-hidden pb-12 lg:pb-24">
        <div className="container mx-auto px-4 py-8 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Esquerda: Copy */}
            <div className="space-y-6 z-10">
                <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                    Aluguel de <span className="text-brand-red">Escoras Metálicas Reguláveis</span> para Obras Civis
                </h1>

                {/* Imagem Mobile (Entre H1 e P) */}
                <div className="block lg:hidden relative h-64 w-full bg-slate-200 rounded-2xl overflow-hidden shadow-lg my-6">
                    <img
                        src="/imgs/escorametallica-hero.jpg"
                        alt="Escoras Metálicas em Obra"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                <p className="text-xl text-slate-600 max-w-lg">
                    Mais segurança, economia e sustentabilidade na sua obra — com orçamento imediato.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <div className="bg-red-50 text-brand-red px-4 py-2 rounded-lg font-semibold border border-red-100 inline-block w-fit">
                        Locação a partir de R$ 13/mês*
                    </div>
                </div>

                {/* Contact Form Embedded in Hero */}
                <div id="form" className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mt-8 max-w-lg">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-slate-900 mb-1">Receba Orçamento Imediato</h2>
                        <p className="text-slate-600 text-sm">Preencha os dados abaixo para falar com um consultor.</p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" placeholder="Nome Completo" />
                        </div>

                        <div>
                            <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" placeholder="Telefone / WhatsApp" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input type="number" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" placeholder="Qtd. Estimada" />
                            </div>
                            <div>
                                <input type="number" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" placeholder="Prazo (meses)" />
                            </div>
                        </div>

                        <button type="submit" className="w-full group relative overflow-hidden bg-brand-red text-white font-bold py-4 rounded-lg shadow-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]">
                            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer-slide z-10" />
                            <span className="relative z-20">Receber Orçamento Imediato</span>
                        </button>
                    </form>
                </div>
            </div>

            {/* Direita: Imagem (Desktop) */}
            <div className="hidden lg:block relative h-full min-h-[300px] lg:min-h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                    src="/imgs/escorametallica-hero.jpg"
                    alt="Escoras Metálicas em Obra"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
        </div>
    </section>
);

export default Hero;
