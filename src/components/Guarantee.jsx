import React from 'react';
import { CheckCircle } from 'lucide-react';

const Guarantee = () => (
    <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 hidden md:block">
                <img
                    src="./imgs/escorametallica3-x.jpeg"
                    alt="Obra segura"
                    className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                />
            </div>

            <div className="order-1 md:order-2 space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Garantia de Operação Segura</h2>

                    {/* Imagem Mobile (Entre H2 e P) */}
                    <div className="block md:hidden mb-6">
                        <img
                            src="./imgs/escorametallica3-x.jpeg"
                            alt="Obra segura"
                            className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                        />
                    </div>

                    <p className="text-slate-600 text-lg">
                        Segurança não é opcional. Trabalhamos com rigor técnico para sua tranquilidade.
                    </p>
                </div>

                <ul className="space-y-4">
                    {[
                        "Equipamentos rigorosamente inspecionados",
                        "Processo de locação sem burocracia",
                        "Atendimento dedicado durante toda a obra"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-brand-red" />
                            <span className="text-lg text-slate-800 font-medium">{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="bg-white p-6 rounded-lg border-l-4 border-brand-red shadow-sm">
                    <p className="text-xl font-bold text-slate-900">Sendai Smart Build</p>
                    <p className="text-slate-600">Eficiência que sustenta sua obra.</p>
                </div>

                <div className="pt-4">
                    <a href="#form" className="group relative overflow-hidden bg-brand-red text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] inline-block">
                        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer-slide z-10" />
                        <span className="relative z-20">Garantir segurança na minha obra</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Guarantee;
