import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import HelpForm from "../components/helpForm";

const HelpPage = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen">
        <Navbar/>
            <HelpForm/>
        <Footer/>
        </div>
      </>
    );
  };
 
  export default HelpPage;