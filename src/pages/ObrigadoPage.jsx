import React, { useEffect } from 'react';

const ObrigadoPage = () => {
    // URL do WhatsApp para redirecionamento - Você pode alterar este valor conforme necessário
    const whatsappUrl = "https://wa.me/5511991110374?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Sendai%20Smart%20Build%20e%20preciso%20de%20um%20or%C3%A7amento"; 

    useEffect(() => {
        // Redireciona para o WhatsApp após 3 segundos
        const timer = setTimeout(() => {
            window.location.href = whatsappUrl;
        }, 3000);

        return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
    }, [whatsappUrl]);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center">
                <img 
                    src="/logo/sendai-logo.png" 
                    alt="Sendai Smart Build" 
                    className="h-16 w-auto mx-auto mb-8" 
                />
                
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                    Obrigado pelo cadastro!
                </h1>
                
                <p className="text-xl text-slate-600 mb-8 border-l-4 border-brand-red pl-4 text-left italic">
                    Em breve você será redirecionado ao WhatsApp de atendimento.
                </p>

                <div className="flex justify-center items-center mt-8">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-brand-red"></div>
                </div>
                
                <p className="text-sm text-slate-400 mt-6">
                    Se você não for redirecionado automaticamente,{' '}
                    <a href={whatsappUrl} className="text-brand-red hover:underline font-medium">
                        clique aqui
                    </a>.
                </p>
            </div>
        </div>
    );
};

export default ObrigadoPage;
