import React from "react";
import bg from "../assets/imagens/bus.png"


const linhas = [
  {
    nome: "Parque Real.pdf",
    codigo: "220",
    sufixo: "U",
    mensagem: "Nenhum veículo se aproximando próximo a avenida Vicente Simões",
  },
  {
    nome: "Cidade Jardim.pdf",
    codigo: "330",
    sufixo: "U",
    mensagem: "Nenhum veículo se aproximando próximo a avenida Vicente Simões",
  },
  {
    nome: "Morumbi.pdf",
    codigo: "230",
    sufixo: "U",
    mensagem: "Nenhum veículo se aproximando próximo a avenida Vicente Simões",
  },
  {
    nome: "Jardim ypê.pdf",
    codigo: "330",
    sufixo: "U",
    mensagem: "Nenhum veículo se aproximando próximo a avenida Vicente Simões",
  },
  {
    nome: "Pão de Açucar.pdf",
    codigo: "209",
    sufixo: "U",
    mensagem: "Nenhum veículo se aproximando próximo a avenida Vicente Simões",
  },
];



const ScheduleHero = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto mt-20 mb-30 bg-white rounded-xl shadow-lg">
      <div className="bg-[#007BFF] text-white text-center py-4 rounded-t-xl">
        <h2 className="text-lg font-bold">Busca por Linha</h2>
        <p className="text-sm">Linha N</p>
      </div>

      <div className="p-4">
        <input
          type="text"
          placeholder="🔍 Filtrar..."
          className="w-full p-2 border rounded mb-4 text-sm"
        />

        <ul className="divide-y divide-gray-300 cursor-pointer">
          {linhas.map((linha, index) => (
            <li key={index} className="p-4 hover:bg-gray-200 transition">
              <p className="font-bold text-lg text-gray-800">{linha.nome}</p>
              <p className="text-sm text-gray-600">
                Linha: {linha.codigo} sufixo {linha.sufixo}
              </p>
              <p className="text-sm text-gray-500 mt-1">{linha.mensagem}</p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default ScheduleHero;