import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import HomeHero from "../components/homeHero";

const Home = () =>{
    return(
        <>
            <div className="flex flex-col min-h-screen">
            <Navbar />
                <div>
                   <Hero />
                   <HomeHero/>
                </div>
   
            </div>
            
            <Footer />
            {/* Cauã e Renan - Home, Login e Cadastro
                Flávia - Ajuda
                Anne - Pedidos
                João - Oferta
                Maju - Explorar */}
        </>
    )
}



export default Home;