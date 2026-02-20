import React from 'react';

const Footer = () => (
    <footer className="bg-brand-red text-white py-12 border-t border-red-700">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
            <div className="md:col-span-1">
                <img src="/logo/sendai-logo.png" alt="Sendai Smart Build" className="h-16 w-auto mb-4 mx-auto md:mx-0 opacity-90 grayscale hover:grayscale-0 transition" />
                <p className="text-white/80 text-sm">Eficiência que sustenta sua obra com segurança e economia.</p>
            </div>

            <div>
                <h4 className="text-white font-bold mb-4">Contato</h4>
                <ul className="space-y-2 text-sm text-white/90">
                    <li>comercial@sendaismart.com.br</li>
                    <li>(00) 99999-9999</li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-4">Endereço</h4>
                <p className="text-sm text-white/90">
                    Rodovia SP-340, Km 123<br />
                    Campinas - SP
                </p>
            </div>

            <div>
                <h4 className="text-white font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-white/90">
                    <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                </ul>
            </div>
        </div>

        <div className="container mx-auto px-4 pt-8 border-t border-red-700 text-center">
            <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Sendai Smart Build. Todos os direitos reservados.</p>
        </div>
    </footer>
);

export default Footer;
