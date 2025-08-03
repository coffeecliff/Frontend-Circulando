import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import bg from "../assets/imagens/bus.png"
import ScheduleHero from "../components/scheduleHero";

const Schedule = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Background aplicado aqui */}
        <div
          className="flex-1 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <ScheduleHero />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Schedule;
