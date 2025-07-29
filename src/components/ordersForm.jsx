import React from "react";
import bg from "../assets/imagens/bg.png"; // Certifique-se de que o caminho está correto
import reciboImg from "../assets/imagens/recibos.png"; // Coloque aqui a imagem central que aparece entre as caixas

const OrdersForm = () =>{
    return(
        <>
            <div
            className="h-[975px] bg-center bg-cover flex items-center justify-center text-gray-800 transform scale-x-100"
            style={{ backgroundImage: `url(${bg})` }}
            >
                
                <div className="flex-1 flex items-center justify-center p-20 m-60 rounded-4xl bg-gray-200 px-4">

            <div className="flex flex-wrap justify-center items-center max-w-7xl w-full">

                {/* Caixa Esquerda */}
                <div className="bg-white bg-opacity-80 border-2 border-gray-300 rounded-[30px] p-6 w-[330px] shadow-md">
                <h2 className="text-xl font-bold mb-4 text-center">Procure Seu Pedido:</h2>
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
                <button className="mt-5 w-full bg-[#007BFF] text-white font-bold py-2 rounded-full hover:bg-blue-800 cursor-pointer">
                    PROCURAR
                </button>
                </div>

                {/* Imagem entre caixas */}
                <div className="hidden md:block">
                <img src={reciboImg} alt="recibos" className="h-72" />
                </div>

                {/* Caixa Direita */}
                <div className="bg-white bg-opacity-80 border-2 border-gray-300 rounded-[30px] p-6 w-[330px] shadow-md">
                <h2 className="text-xl font-bold text-center mb-4">Pedidos já feitos:</h2>
                <div className="border border-gray-400 rounded-[25px] p-4 mb-6 text-center font-semibold text-sm">
                    Ida / Volta / Horário / Forma de pagamento
                </div>

                <h2 className="text-xl font-bold text-center mb-4">Pedidos Pendentes:</h2>
                <div className="border border-gray-400 rounded-[25px] p-4 text-center font-semibold text-sm">
                    Ida / Volta / Horário / Forma de pagamento
                </div>
                </div>

            </div>
            </div>
            </div>
        </>
    )
}

export default OrdersForm;