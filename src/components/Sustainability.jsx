import React from 'react';
import { Recycle } from 'lucide-react';

const Sustainability = () => (
    <section className="py-24 bg-brand-red overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Esquerda: Texto */}
                <div className="max-w-xl">
                    <span className="text-sm font-bold tracking-widest text-red-200 uppercase mb-4 block">
                        Eficiência com Responsabilidade
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Sustentabilidade que gera economia real na obra
                    </h2>

                    {/* Imagem Mobile (Entre H2 e P) */}
                    <div className="block lg:hidden relative mb-8">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/imgs/escorametallica2-x.jpeg"
                                alt="Sustentabilidade na Construção"
                                className="w-full h-full object-cover min-h-[300px]"
                            />
                        </div>

                        {/* Badge 1: Ícone Reciclagem (Superior Direito) */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center z-10">
                            <Recycle className="w-8 h-8 text-brand-red" />
                        </div>

                        {/* Badge 2: Card Branco (Inferior Esquerdo) */}
                        <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl max-w-[200px] z-10">
                            <p className="text-brand-red font-bold text-sm leading-snug">
                                Mais eficiência no escoramento da sua obra
                            </p>
                        </div>
                    </div>
                    <p className="text-lg text-white/90 leading-relaxed mb-8">
                        O uso de escoras metálicas <span className="font-semibold text-white">reduz o consumo de madeira</span>,
                        aumenta a eficiência do escoramento e prolonga a vida útil dos materiais — trazendo impacto ambiental menor e resultados melhores na obra.
                    </p>

                    <a href="#form" className="group relative overflow-hidden bg-white text-brand-red font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] inline-block">
                        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-red-100/50 to-transparent -translate-x-full animate-shimmer-slide z-10" />
                        <span className="relative z-20">Quero uma obra sustentável e econômica</span>
                    </a>
                </div>

                {/* Direita: Imagem com Overlay (Desktop) */}
                <div className="hidden lg:block relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/imgs/escorametallica2-x.jpeg"
                            alt="Sustentabilidade na Construção"
                            className="w-full h-full object-cover min-h-[400px]"
                        />
                    </div>

                    {/* Badge 1: Ícone Reciclagem (Superior Direito) */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center z-10">
                        <Recycle className="w-10 h-10 text-brand-red" />
                    </div>

                    {/* Badge 2: Card Branco (Inferior Esquerdo) */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs z-10">
                        <p className="text-brand-red font-bold text-lg leading-snug">
                            Mais eficiência no escoramento da sua obra
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default Sustainability;
