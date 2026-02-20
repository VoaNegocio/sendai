import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const MachineCard = ({ title, colspan = "col-span-1" }) => (
    <div className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-slate-100 ${colspan} min-h-[300px] flex items-end p-6 hover:shadow-xl transition-all cursor-pointer`}>
        <div className="absolute inset-0 bg-slate-200 group-hover:bg-slate-300 transition-colors">
            {/* Placeholder Image */}
            <div className="w-full h-full flex items-center justify-center text-slate-400">
                <span className="text-4xl">⚙️</span>
            </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="relative z-10 w-full">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <div className="flex items-center text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                Ver especificações <ArrowUpRight className="w-4 h-4 ml-1" />
            </div>
        </div>
    </div>
);

const MachineLines = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-deep-slate mb-4">Linha completa para diferentes etapas da produção</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Equipamentos industriais modernos, prontos para alta performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Main Hero Card */}
                    <MachineCard title="SÉRIE COSTURA RETA" colspan="md:col-span-2 md:row-span-2 !min-h-[624px]" />

                    <MachineCard title="SÉRIE OVERLOCK" />
                    <MachineCard title="SÉRIE INTERLOCK" />

                    <MachineCard title="SÉRIE GALONEIRA" />
                    <MachineCard title="SÉRIE AUTOMAÇÃO" colspan="md:col-span-2" />
                </div>

                <div className="mt-12 text-center">
                    <button className="px-8 py-4 bg-deep-slate text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
                        Solicitar modelo ideal para minha produção
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MachineLines;
