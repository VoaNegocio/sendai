import React from 'react';

const Footer = () => (
    <footer className="bg-brand-red text-white py-12 border-t border-red-700">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
            <div className="md:col-span-1">
                <img src="/logo/sendai-logo.png" alt="Sendai Smart Build" className="h-16 w-auto mb-4 mx-auto md:mx-0 opacity-90 grayscale hover:grayscale-0 transition" />
                <p className="text-white/80 text-sm">Eficiência que sustenta sua obra com segurança e economia.</p>
            </div>






        </div>

        <div className="container mx-auto px-4 pt-8 border-t border-red-700 text-center">
            <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Sendai Smart Build. Todos os direitos reservados.</p>
        </div>
    </footer>
);

export default Footer;
