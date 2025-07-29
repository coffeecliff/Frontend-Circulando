import React, { useState } from "react";
import bg from "../assets/imagens/bus.png"





const Explore = () =>{

    const [tripType, setTripType] = useState("oneWay");
 
    const handleTripChange = (type) => {
        setTripType(type);
    };
    
    const buscar = () => {
        alert("Busca realizada com sucesso!");
    };

    return(
        <>
        <div
              className="h-[800px] bg-center bg-cover flex items-center justify-center text-gray-800 transform scale-x-100"
              style={{ backgroundImage: `url(${bg})` }}
              >


<div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
  {/* Top Bar */}
  <div className="bg-gray-100 text-gray-800 py-6 rounded-3xl px-4 w-full max-w-4xl shadow-lg">
    {/* Trip Type Toggle */}
    <div className="flex justify-center gap-6 mb-4">
      <label
        className={`cursor-pointer px-5 py-2 rounded-full font-semibold transition ${
          tripType === "oneWay" ? "bg-[#007BFF] text-white" : "bg-white text-black"
        }`}
      >
        <input
          type="radio"
          name="tripType"
          value="oneWay"
          className="hidden"
          checked={tripType === "oneWay"}
          onChange={() => handleTripChange("oneWay")}
        />
        somente ida
      </label>

      <label
        className={`cursor-pointer px-5 py-2 rounded-full font-semibold transition ${
          tripType === "roundTrip" ? "bg-[#007BFF] text-white" : "bg-white text-black"
        }`}
      >
        <input
          type="radio"
          name="tripType"
          value="roundTrip"
          className="hidden"
          checked={tripType === "roundTrip"}
          onChange={() => handleTripChange("roundTrip")}
        />
        ida e volta
      </label>
    </div>

    {/* Form Fields */}
    <div className="flex flex-wrap justify-center items-center gap-3">
      <input
        type="text"
        placeholder="Origem"
        className="px-4 py-2 rounded-full border w-40"
      />
      <input
        type="text"
        placeholder="Destino"
        className="px-4 py-2 rounded-full border w-40"
      />
      <input type="date" className="px-4 py-2 rounded-full border w-36" />
      {tripType === "roundTrip" && (
        <input type="date" className="px-4 py-2 rounded-full border w-36" />
      )}
      <button
        className="bg-[#007BFF] text-white px-6 py-2 rounded-full font-bold hover:bg-blue-800 cursor-pointer transition duration-300"
        onClick={buscar}
      >
        Buscar
      </button>
    </div>
  </div>

  {/* Destinos Section */}
  <div className="mt-12 w-full max-w-2xl bg-[#007BFF] bg-opacity-80 p-8 rounded-4xl shadow-lg">
    <h2 className="text-2xl font-bold mb-4 text-gray-50">Destinos de Ônibus</h2>
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Qual destino você procura?"
        className="px-5 py-2 border rounded-full w-80 italic bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
      />
    </div>
  </div>
</div>
</div>

                <div>
                    <section className="container mx-auto px-4 py-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Explore nossas ofertas
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {[
                                { from: "São Paulo", to: "Rio de Janeiro", price: "R$89,90" },
                                { from: "Curitiba", to: "Florianópolis", price: "R$69,90" },
                                { from: "Belo Horizonte", to: "Vitória", price: "R$99,90" },
                                { from: "Porto Alegre", to: "Caxias do Sul", price: "R$59,90" },
                                { from: "Salvador", to: "Aracaju", price: "R$79,90" },
                            ].map((trip, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow p-4 flex flex-col"
                                >
                                    <div className="text-gray-800 font-semibold mb-1">
                                        {trip.from} → {trip.to}
                                    </div>
                                    <div className="text-blue-600 font-bold text-lg">{trip.price}</div>
                                    <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 transition duration-300">
                                        Conferir
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
        
        </>
    )
}

export default Explore;