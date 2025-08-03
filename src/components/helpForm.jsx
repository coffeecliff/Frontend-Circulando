import React, { useState } from "react";
import axios from "axios";

const HelpForm = () =>{
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("https://backend-circulando.onrender.com/api/contact", {
            email: formData.email,
            message: formData.message,
        });
        alert("menssagem cadastrada com sucesso!!" + `email: ${formData.email}`)
        window.location.href = "/"
    } catch (error) {
        if (error.response) {
            alert("Erro ao enviar mensagem de contato")
        } else {
            alert("erro ao conectar ao servidor")
        }
    }
  };

    return(
        <>
        
           <div className="min-h-screen bg-gray-100">
        {/* Cabeçalho */}
        <header className="bg-blue-300 text-white py-4 mt-18">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold">Central de Ajuda</h1>
            <p className="mt-2">Encontre respostas para suas dúvidas ou entre em contato com nosso suporte.</p>
          </div>
        </header>
 
        {/* Conteúdo Principal */}
        <main className="container mx-auto p-4">
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-[#007BFF] mb-4">Perguntas Frequentes</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">Como posso cancelar minha passagem?</h3>
                <p>Você pode cancelar sua passagem diretamente no nosso aplicativo ou entrando em contato com nosso suporte.</p>
              </li>
              <li>
                <h3 className="font-semibold">Como alterar os dados do passageiro?</h3>
                <p>Para alterar os dados do passageiro, acesse sua conta e edite as informações necessárias.</p>
              </li>
              <li>
                <h3 className="font-semibold">Como posso obter reembolso?</h3>
                <p>Os reembolsos são processados conforme nossa política de cancelamento. Consulte os detalhes em nossa central de ajuda.</p>
              </li>
            </ul>
          </section>
 
          {/* Formulário de Contato */}
          <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-[#007BFF] mb-4">Entre em Contato</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                <input 
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Digite seu e-mail"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4" 
                  placeholder="Digite sua mensagem..."
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-2 px-4 bg-[#007BFF] text-white font-semibold rounded-lg cursor-pointer shadow-md hover:bg-[#007BFF] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                Enviar Mensagem
              </button>
            </form>
          </section>
        </main>
        
      </div>
        </>
    )
}

export default HelpForm;