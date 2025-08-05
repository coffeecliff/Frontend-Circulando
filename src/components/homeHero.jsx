import React from 'react';
import heroImage from '../assets/imagens/homehero.png';

const HomeHero = () => {
    return (
<section className="relative w-full min-h-screen py-20 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
  {/* Imagem */}
  <div className="flex justify-center items-center z-0">
    <img
      src={heroImage}
      alt="Ônibus moderno"
      className="
        w-[90vw]
        sm:w-full
        md:w-[900px]
        lg:w-[1200px]
        xl:w-[1400px]
        max-w-none
        object-contain
        opacity-90
      "
    />
  </div>

  {/* Texto para telas pequenas (mobile-first) */}
  <div className="block md:hidden mt-6 text-center">
    <h1 className="text-[#007BFF] font-extrabold text-2xl sm:text-3xl">
      Conectando você aos seus destinos,<br />
      com agilidade e conforto.
    </h1>
  </div>

  {/* Texto sobreposto para telas médias e grandes */}
  <div className="hidden md:block absolute z-10 top-1/2 left-[75%] transform -translate-x-[40%] -translate-y-1/2 w-[90%] md:w-[40%] text-[#007BFF] text-left">
    <h1 className="font-extrabold leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
      Conectando você aos seus destinos,<br />
      com agilidade e conforto.
    </h1>
  </div>
</section>
    );
};

export default HomeHero;
