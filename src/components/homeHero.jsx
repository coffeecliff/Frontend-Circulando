import React from 'react';
import heroImage from '../assets/imagens/homehero.png';

const HomeHero = () => {
    return (
        <section className="relative w-full min-h-screen py-30 px-6 lg:px-20 overflow-hidden">
            {/* Texto sobreposto */}
            <div className="relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-[#007BFF] leading-30 text-center md:text-left absolute 
                top-[40%] left-1/2 md:left-[58%] transform -translate-x-1/2 md:translate-x-0 w-[90%] md:w-[40%] z-0">
                    Conectando você aos seus destinos,<br />
                    com agilidade e conforto.
                </h1>
            </div>

            {/* Imagem absoluta */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-190 -translate-y-1/2 z-20">
                <img
                    src={heroImage}
                    alt="Ônibus moderno"
                    className="w-[600px] sm:w-[800px] md:w-[1000px] lg:w-[1400px] max-w-none object-cover opacity-90"
                />
            </div>
        </section>
    );
};

export default HomeHero;
