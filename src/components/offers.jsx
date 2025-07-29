import React from "react";
import bg from "../assets/imagens/bus.png"

const OffersForm = () =>{
    return(
        <>
            <div
              className="h-[975px] bg-center bg-cover flex items-center justify-center text-white transform scale-x-100"
              style={{ backgroundImage: `url(${bg})` }}
              >
                <div className="flex-grow flex flex-col items-center justify-center px-4 py-16 gap-10">

                <div className=" bg-gray-600 bg-opacity-60 border border-white rounded-4xl p-16 text-white max-w-6xl text-center md:text-3xl font-bold shadow-lg backdrop-blur-sm">
            Aqui, você compra passagens de ônibus em promoção e aproveita a viagem dos seus sonhos com o Circulando
          </div>
            <div className="bg-white bg-opacity-90 rounded-xl p-6 max-w-md w-full shadow-md text-gray-800">
            <label htmlFor="city" className="block text-sm font-semibold mb-2">
              Selecione sua cidade de origem:
            </label>
            <select
              id="city"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Escolha uma cidade</option>
              <option value="sp">São Paulo</option>
              <option value="rj">Rio de Janeiro</option>
              <option value="bh">Belo Horizonte</option>
              <option value="poa">Porto Alegre</option>
              {/* Adicione mais opções conforme necessário */}
            </select>
          </div>
          </div>
        </div>
        </>
    )
}

export default OffersForm;