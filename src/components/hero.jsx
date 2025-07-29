import React from "react";
import Background from "../assets/imagens/bg.png";

const Hero = (props) => {
    return (
        <>
            <div className="relative overflow-hidden">
                <div
                    className="h-[375px] bg-center bg-cover flex items-center justify-center text-white transform scale-x-105"
                    style={{ backgroundImage: `url(${Background})` }}
                ></div>
            </div>

            
        </>
    );
};

export default Hero;
