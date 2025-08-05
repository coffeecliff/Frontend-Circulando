import React from "react";
import bg from "../assets/imagens/bg.png";
import reciboImg from "../assets/imagens/recibos.png";

const OrdersForm = () => {
  return (
    <>
      <div
        className="min-h-screen bg-center bg-cover flex items-center justify-center text-gray-800"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex-1 flex items-center justify-center p-6 sm:p-10 md:p-20 m-4 sm:m-10 md:m-20 rounded-3xl bg-gray-200 bg-opacity-90 max-w-[1200px] w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
            {/* Caixa Esquerda */}
            <div className="bg-white bg-opacity-80 border-2 border-gray-300 rounded-3xl p-6 shadow-md w-full max-w-xs">
              <h2 className="text-xl font-bold mb-4 text-center">
                Procure Seu Pedido:
              </h2>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="N° do Pedido:  _ _ _ _ _ _ _ _"
                  className="w-full px-4 py-2 rounded-full border border-gray-400"
                />
                <input
                  type="text"
                  placeholder="Telefone: +55 (35) 000000000"
                  className="w-full px-4 py-2 rounded-full border border-gray-400"
                />
                <input
                  type="text"
                  placeholder="CPF:  _ _ _ . _ _ _ . _ _ _ - _ _"
                  className="w-full px-4 py-2 rounded-full border border-gray-400"
                />
              </div>
              <button className="mt-5 w-full bg-[#007BFF] text-white font-bold py-2 rounded-full hover:bg-blue-800 cursor-pointer transition">
                PROCURAR
              </button>
            </div>

           

            {/* Caixa Direita */}
            <div className="bg-white bg-opacity-80 border-2 border-gray-300 rounded-3xl p-6 shadow-md w-full max-w-xs">
              <h2 className="text-xl font-bold text-center mb-4">
                Pedidos já feitos:
              </h2>
              <div className="border border-gray-400 rounded-2xl p-4 mb-6 text-center font-semibold text-sm">
                Ida / Volta / Horário / Forma de pagamento
              </div>

              <h2 className="text-xl font-bold text-center mb-4">
                Pedidos Pendentes:
              </h2>
              <div className="border border-gray-400 rounded-2xl p-4 text-center font-semibold text-sm">
                Ida / Volta / Horário / Forma de pagamento
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersForm;
