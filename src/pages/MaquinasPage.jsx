import React from 'react';
import MaquinasHeader from '../components/maquinas/MaquinasHeader';
import MaquinasHero from '../components/maquinas/MaquinasHero';
import Comparison from '../components/maquinas/Comparison';
import MachineLines from '../components/maquinas/MachineLines';
import Productivity from '../components/maquinas/Productivity';
import FlexibleModel from '../components/maquinas/FlexibleModel';
import Plans from '../components/maquinas/Plans';
import SimpleProcess from '../components/maquinas/SimpleProcess';
import FinalCTA from '../components/maquinas/FinalCTA';

function MaquinasPage() {
    return (
        <div className="w-full mx-auto antialiased bg-slate-50 text-deep-slate font-sans selection:bg-brand-red selection:text-white">
            <MaquinasHeader />
            <MaquinasHero />
            <Comparison />
            <MachineLines />
            <Productivity />
            <FlexibleModel />
            <Plans />
            <SimpleProcess />
            <FinalCTA />

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm">© 2026 Sendai Máquinas. Todos os direitos reservados.</p>
                    <div className="mt-4 flex justify-center gap-6 text-xs">
                        <span className="cursor-pointer hover:text-white transition-colors">Termos de Uso</span>
                        <span className="cursor-pointer hover:text-white transition-colors">Política de Privacidade</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default MaquinasPage;
