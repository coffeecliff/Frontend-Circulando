import React, { useState, useEffect } from "react";

const ProfilePage = () => {
  const [dadosUsuario, setDadosUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
  });

  const [residencia, setResidencia] = useState("");
  const [referencia, setReferencia] = useState("");
  const [cidade, setCidade] = useState("");

  useEffect(() => {
    // Simula dados já cadastrados (normalmente viria de API ou localStorage)
    const dadosCadastrados = {
      nome: "João da Silva",
      email: "joao@email.com",
      senha: "********", // senha exibida de forma censurada
      telefone: "+55 (35) 99999-9999",
    };
    setDadosUsuario(dadosCadastrados);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Perfil do Usuário</h2>

        <div className="space-y-4 text-black">
          <div>
            <label className="block font-semibold">Nome:</label>
            <p className="bg-gray-100 p-2 rounded-md">{dadosUsuario.nome}</p>
          </div>

          <div>
            <label className="block font-semibold">Email:</label>
            <p className="bg-gray-100 p-2 rounded-md">{dadosUsuario.email}</p>
          </div>

          <div>
            <label className="block font-semibold">Senha:</label>
            <p className="bg-gray-100 p-2 rounded-md">{dadosUsuario.senha}</p>
          </div>

          <div>
            <label className="block font-semibold">Telefone:</label>
            <p className="bg-gray-100 p-2 rounded-md">{dadosUsuario.telefone}</p>
          </div>

          <div>
            <label className="block font-semibold">Endereço / Residência:</label>
            <input
              type="text"
              value={residencia}
              onChange={(e) => setResidencia(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Rua, número, bairro..."
            />
          </div>

          <div>
            <label className="block font-semibold">Ponto de Referência:</label>
            <input
              type="text"
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Ex: Próximo ao mercado X..."
            />
          </div>

          <div>
            <label className="block font-semibold">Cidade:</label>
            <input
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Cidade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
