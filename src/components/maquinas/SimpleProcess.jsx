import React from 'react';
import { Send, PhoneCall, Truck } from 'lucide-react';

const StepCard = ({ number, icon, title, description }) => (
    <div className="relative flex flex-col items-center text-center group">
        <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-deep-slate mb-6 shadow-sm group-hover:border-brand-red group-hover:text-brand-red transition-colors relative z-10">
            {icon}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-red text-white text-sm font-bold rounded-full flex items-center justify-center border-2 border-white">
                {number}
            </div>
        </div>
        <h3 className="text-xl font-bold text-deep-slate mb-2">{title}</h3>
        <p className="text-slate-500 max-w-xs">{description}</p>
    </div>
);

const SimpleProcess = () => {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-deep-slate mb-4">Simples. Rápido. Sem burocracia.</h2>
                    <p className="text-slate-600">O caminho mais curto para modernizar sua produção.</p>
                </div>

                <div className="relative grid md:grid-cols-3 gap-12">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2rem] left-[16%] right-[16%] h-0.5 bg-slate-200 -z-0"></div>

                    <StepCard
                        number="1"
                        icon={<Send className="w-8 h-8" />}
                        title="Envie sua solicitação"
                        description="Preencha o formulário ou chame no WhatsApp."
                    />

                    <StepCard
                        number="2"
                        icon={<PhoneCall className="w-8 h-8" />}
                        title="Receba atendimento"
                        description="Consultoria técnica para definir a melhor máquina para você."
                    />

                    <StepCard
                        number="3"
                        icon={<Truck className="w-8 h-8" />}
                        title="Agende entrega"
                        description="Montagem rápida em até 48h (dependendo da região)."
                    />

                </div>

            </div>
        </section>
    );
};

export default SimpleProcess;
