import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import bg from "../assets/imagens/bus.png"
import ScheduleForm from "../components/ScheduleForm";

const Schedule = () => {
  return (
    <>
        <div className="flex flex-col min-h-screen">
        <Navbar />

        <div>
          <ScheduleForm/>
        </div>
        
        <Footer />
      </div>
      
    </>
  );
};

export default Schedule;
