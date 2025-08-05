import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PerfilUsuario = () => {
  const [usuario, setUsuario] = useState(null);
  const [residencia, setResidencia] = useState('');
  const [pontoPreferido, setPontoPreferido] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('userEmail'); // ou 'email', se você salvou com outro nome

    if (email) {
      axios.get(`https://backend-circulando.onrender.com/api/users/${email}`)
        .then(res => {
          setUsuario(res.data);
        })
        .catch(err => {
          console.error('Erro ao buscar dados do usuário:', err);
          alert("Erro ao carregar dados do perfil.");
        });
    } else {
      alert("Usuário não está logado.");
    }
  }, []);

  if (!usuario) {
    return <div className="text-center mt-10 text-xl">Carregando perfil...</div>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10 text-black">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">Perfil do Usuário</h2>

      <div className="mb-4">
        <strong>Nome:</strong>
        <p>{usuario.name}</p>
      </div>

      <div className="mb-4">
        <strong>Email:</strong>
        <p>{usuario.email}</p>
      </div>

      <div className="mb-4">
        <strong>Senha:</strong>
        <p>{'*'.repeat(usuario.password.length)}</p>
      </div>

      <div className="mb-4">
        <strong>Telefone:</strong>
        <p>{usuario.number}</p>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Residência:</label>
        <input
          type="text"
          value={residencia}
          onChange={(e) => setResidencia(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Ex: Bairro São Jorge"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Ponto preferido de embarque:</label>
        <input
          type="text"
          value={pontoPreferido}
          onChange={(e) => setPontoPreferido(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Ex: Terminal Central"
        />
      </div>

      <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
        Salvar Alterações (futuro)
      </button>
    </div>
  );
};

export default PerfilUsuario;
