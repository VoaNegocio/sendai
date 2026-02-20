import React from 'react';
import { PiggyBank, Percent } from 'lucide-react';

const FlexibleModel = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-deep-slate mb-4">Quer comprar depois? <span className="text-brand-red">Você pode.</span></h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Você começa alugando e decide com segurança. Seu aluguel vira crédito.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* First 3 Months */}
                    <div className="bg-white border border-slate-200 p-8 rounded-2xl relative overflow-hidden group hover:border-brand-red transition-all shadow-md hover:shadow-lg">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <PiggyBank className="w-24 h-24 text-brand-red" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-deep-slate mb-2">Nos 3 primeiros meses:</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-5xl font-bold text-construction-green">100%</span>
                                <span className="text-slate-500">do valor pago</span>
                            </div>
                            <p className="text-slate-600">
                                Todo o valor do aluguel pode ser abatido na compra da máquina.
                            </p>
                        </div>
                    </div>

                    {/* After 3 Months */}
                    <div className="bg-white border border-slate-200 p-8 rounded-2xl relative overflow-hidden group hover:border-brand-red transition-all shadow-md hover:shadow-lg">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Percent className="w-24 h-24 text-brand-red" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-deep-slate mb-2">Após esse período:</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-5xl font-bold text-deep-slate">50%</span>
                                <span className="text-slate-500">do total pago</span>
                            </div>
                            <p className="text-slate-600">
                                Metade do valor acumulado continua servindo como crédito para compra.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default FlexibleModel;
