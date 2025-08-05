import React, { useState, useEffect } from "react";
import axios from "axios";

const RegisterForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');

    useEffect(() => {
        setNome('');
        setEmail('');
        setSenha('');
        setTelefone('');
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("https://backend-circulando.onrender.com/api/users" ,{
            name: nome,
            email,
            password: senha,
            number: telefone
          });
         alert("Usuário cadastrado com sucesso!!" + `nome: ${response.data.name} email: ${response.data.email}`)
         window.location.href = "/login"
        } catch (error) {
          if (error.response) {
            console.error("Erro completo da API:", error.response.data);
            alert("Erro ao cadastrar: " + error.response.data.message);
          } else if (error.request) {
            console.error("Requisição feita, mas sem resposta:", error.request);
            alert("Erro: o servidor não respondeu.");
          } else {
            console.error("Erro desconhecido:", error.message);
            alert("Erro inesperado: " + error.message);
          }
        }
      };

    return (
        <>
            <div className="bg-white p-8 rounded-4xl shadow-lg w-300 max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6 text-black">Cadastrar</h2>
                <form onSubmit={handleSubmit}>
                <div>
                        <label>Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            className="w-full border border-gray-300 border-b-3 p-2 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-black"
                            placeholder="Digite seu nome" />
                    </div>
                    <div>
                        <label>E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 border-b-3 p-2 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-black"
                            placeholder="Digite seu email" />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full border border-gray-300 border-b-3 p-2 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                            placeholder="Digite sua senha" />
                    </div>
                    <div>
                        <label>Telefone</label>
                        <input
                            id="telefone"
                            type="text"
                            name="telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                            className="w-full border border-gray-300 border-b-3 p-2 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                            placeholder="Digite seu telefone" />
                    </div>
                    <button type="submit" className="w-full cursor-pointer border-gray-200 border-2  bg-blue-500 text-white py-2 rounded-b-lg hover:bg-blue-700 transition pt-3 duration-300 sm:w-full mt-2">
                        Cadastrar</button>
                </form>
               
               
            </div>
        </>
    )
}
 
export default RegisterForm;