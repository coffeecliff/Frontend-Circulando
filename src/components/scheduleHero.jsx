import React from "react";
import bg from "../assets/imagens/bus.png"


const linhas = [
  { codigo: "N101-11", destino: "TERM. PQ. D. PEDRO II", origem: "TERM. LAPA" },
  { codigo: "N101-11", destino: "TERM. LAPA", origem: "TERM. PQ. D. PEDRO II" },
  { codigo: "N102-11", destino: "TERM. PQ. D. PEDRO II", origem: "TERM. LAPA" },
  { codigo: "N102-11", destino: "TERM. LAPA", origem: "TERM. PQ. D. PEDRO II" },
  { codigo: "N103-11", destino: "TERM. PIRITUBA", origem: "TERM. LAPA" },
  { codigo: "N103-11", destino: "TERM. LAPA", origem: "TERM. PIRITUBA" },
  { codigo: "N104-11", destino: "TERM. LAPA", origem: "TERM. PIRITUBA" },
  { codigo: "N104-11", destino: "TERM. PIRITUBA", origem: "TERM. LAPA" },
  { codigo: "N105-11", destino: "TERM. CACHOEIRINHA", origem: "TERM. LAPA" },
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

        <ul className="space-y-3">
          {linhas.map((linha, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-3 bg-gray-100 rounded hover:bg-gray-200 transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🚌</span>
                <div>
                  <p className="font-semibold text-gray-800">
                    {linha.codigo} ➜ {linha.destino}
                  </p>
                  <p className="text-xs text-gray-500">
                    {linha.origem} / {linha.destino}
                  </p>
                </div>
              </div>
              <span className="text-gray-400 text-xl">›</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ScheduleHero;