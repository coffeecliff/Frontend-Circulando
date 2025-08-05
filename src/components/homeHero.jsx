import React from 'react';
import heroImage from '../assets/imagens/homehero.png';

const HomeHero = () => {
    return (
        <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
            {/* Texto sobreposto */}
            <div className="relative z-10">
                <h1
                className="
                    absolute
                    top-[400%]          /* Mais para baixo */
                    left-1/2
                    md:left-[100%]
                    transform
                    -translate-x-1/2
                    md:-translate-x-[95%]
                    text-center
                    md:text-left
                    text-[#007BFF]
                    font-extrabold
                    leading-tight
                    w-[90%]
                    md:w-[40%]
                    text-2xl
                    sm:text-3xl
                    md:text-5xl
                    lg:text-6xl
                    xl:text-7xl
                    pointer-events-none
                "
                >
                    Conectando você aos seus destinos,<br />
                    com agilidade e conforto.
                </h1>
            </div>

            {/* Imagem absoluta */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                <img
                    src={heroImage}
                    alt="Ônibus moderno"
                    className="
                        w-[90vw]
                        sm:w-[100vw]
                        md:w-[900px]
                        lg:w-[1200px]
                        xl:w-[1400px]
                        max-w-none
                        object-contain
                        opacity-90
                    "
                />
            </div>
        </section>
    );
};

export default HomeHero;
