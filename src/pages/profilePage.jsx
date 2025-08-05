import Footer from "../components/footer";
import Navbar from "../components/navbar";

import React, { useState } from "react";

const Profile = () => {
  // Dados fixos (pode vir da API ou contexto)
  const [profile, setProfile] = useState({
    nome: "João Silva",
    email: "joao.silva@email.com",
    senha: "minhaSenhaSecreta", // Vamos mostrar censurado
    telefone: "+55 (35) 99999-9999",
    residencia: "",
    documento: "",
    preferencias: "",
  });

  // Função para atualizar campos editáveis
  function handleChange(e) {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  // Mostra senha censurada (ex: 8 asteriscos)
  const senhaCensurada = "•".repeat(profile.senha.length);

  return (
    <>
    <div className="flex flex-col min-h-screen">
            <Navbar />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Meu Perfil
        </h1>

        {/* Dados fixos */}
        <div className="mb-6 space-y-3">
          <div>
            <label className="block font-semibold text-gray-700">Nome</label>
            <p className="mt-1 text-gray-900">{profile.nome}</p>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Email</label>
            <p className="mt-1 text-gray-900">{profile.email}</p>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Senha</label>
            <p className="mt-1 text-gray-900 tracking-widest">{senhaCensurada}</p>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Telefone</label>
            <p className="mt-1 text-gray-900">{profile.telefone}</p>
          </div>
        </div>

        {/* Inputs editáveis */}
        <form className="space-y-5" onSubmit={e => e.preventDefault()}>
          <div>
            <label htmlFor="residencia" className="block font-semibold text-gray-700 mb-1">
              Endereço residencial
            </label>
            <input
              type="text"
              id="residencia"
              name="residencia"
              value={profile.residencia}
              onChange={handleChange}
              placeholder="Rua, número, bairro, cidade"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="documento" className="block font-semibold text-gray-700 mb-1">
              Documento (CPF ou RG)
            </label>
            <input
              type="text"
              id="documento"
              name="documento"
              value={profile.documento}
              onChange={handleChange}
              placeholder="000.000.000-00"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="preferencias" className="block font-semibold text-gray-700 mb-1">
              Preferências de viagem
            </label>
            <textarea
              id="preferencias"
              name="preferencias"
              value={profile.preferencias}
              onChange={handleChange}
              placeholder="Ex: Assento na janela, passagem só ida, etc."
              rows={3}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-full hover:bg-blue-700 transition"
          >
            Salvar alterações
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
    </>
  );
};

export default Profile;
