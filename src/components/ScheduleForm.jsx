import React from "react";
import bg from "../assets/imagens/bus.png"

const ScheduleForm = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cabeçalho */}
      <div className="bg-blue-900 text-white px-4 py-3 flex justify-between items-center">
        <button className="bg-white text-blue-900 rounded-full px-4 py-1 text-sm font-semibold shadow">
          Voltar
        </button>
        <h1 className="text-lg font-semibold">Busca por Linha <span className="font-bold">N</span></h1>
        <div className="w-10"></div> {/* Espaço reservado ícones à direita */}
      </div>

      {/* Campo de filtro */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Filtrar..."
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>

      {/* Lista de Linhas */}
      <div className="px-4 space-y-3 pb-6">
        {linhasFiltradas.map((linha, index) => (
          <div key={index} className="bg-white rounded shadow p-4 flex justify-between items-center hover:bg-gray-50">
            <div>
              <p className="text-blue-900 font-semibold text-sm">{linha.id} ➜ {linha.destino}</p>
              <p className="text-gray-500 text-xs italic">{linha.rota}</p>
            </div>
            <span className="text-gray-400 text-lg">›</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScheduleForm;