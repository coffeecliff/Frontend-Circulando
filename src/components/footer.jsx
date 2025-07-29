import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return(
        <>
<footer class="bg-[#e6e6e6] text-black py-10">
    <div class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
     
     
      <div>
        <h2 class="text-2xl font-bold mb-2">Circulando</h2>
        <p class="text-sm">Conectando você aos seus destinos com conforto e segurança.</p>
      </div>
 
     
      <div>
        <h3 class="font-semibold mb-3">Institucional</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Sobre Nós</a></li>
          <li><a href="#" class="hover:underline">Trabalhe Conosco</a></li>
          <li><a href="#" class="hover:underline">Termos de Uso</a></li>
          <li><a href="#" class="hover:underline">Política de Privacidade</a></li>
        </ul>
      </div>
 
     
      <div>
        <h3 class="font-semibold mb-3">Atendimento</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Fale Conosco</a></li>
          <li><a href="#" class="hover:underline">Central de Ajuda</a></li>
          <li>Email: contato@circulando.com</li>
          <li>Tel: (11) 4002-8922</li>
        </ul>
      </div>
 
     
      <div>
        <h3 class="font-semibold mb-3">Redes Sociais</h3>
        <div class="flex space-x-4 mb-4">
          <a href="#" class="text-white text-xl hover:text-gray-300"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-white text-xl hover:text-gray-300"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white text-xl hover:text-gray-300"><i class="fab fa-x-twitter"></i></a>
        </div>
        <h3 class="font-semibold mb-2">Baixe o App</h3>
        <div class="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
          <a href="#"><img class="w-32" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" /></a>
          <a href="#"><img class="w-32" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" /></a>
        </div>
      </div>
    </div>
 
 
    <div class="text-center text-sm mt-10 border-t border-white/20 pt-4">
      &copy; 2025 Circulando. Todos os direitos reservados.
    </div>
  </footer> 
    
        </>
    )

}

export default Footer;