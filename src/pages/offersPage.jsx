import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import bg from "../assets/imagens/bus.png"
import OffersForm from "../components/offers";

const OffersPage = () => {
  return (
    <>
        <div className="flex flex-col min-h-screen">
        <Navbar />

        <div>
          <OffersForm/>
        </div>
        
        <Footer />
      </div>
      
    </>
  );
};

export default OffersPage;
