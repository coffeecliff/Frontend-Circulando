import React, {use, useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom"
 
const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("https://backend-circulando.onrender.com/api/auth/login", {
            email,
            password: senha
          })
          const userData = response.data;
          localStorage.setItem("user", JSON.stringify(userData))
          alert("usuario logado com sucesso!!")
          navigate("/")
        } catch (error) {
          if (error.response) {
            alert("Erro ao logar usuário email ou senha incorretos")
          } else {
            alert("erro ao conectar ao servidor")
          }
        }
    };
 
  return (
    <>
      <div className="bg-white p-8 rounded-4xl shadow-lg w-1000 max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 border-b-3 p-2 rounded-md focus:outline-none
              focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-black"
              placeholder="Digite seu email"/>
          </div>
          <div>
            <label htmlFor="senha" className="block mb-1 font-medium">Senha</label>
            <input
              id="senha"
              type="password"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="w-full border border-gray-300 border-b-3 p-2 rounded-md focus:outline-none
              focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-black"
              placeholder="Digite sua senha"
            />
          </div>
          <button
            type="submit"
            className="w-full border-gray-200 border-2 cursor-pointer bg-blue-500 text-white py-2 rounded-b-lg hover:bg-blue-700 transition pt-3 duration-300 sm:w-full mt-2"
          >
            Entrar
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Não tem conta?
          <a href="/register" className="text-blue-700 hover:underline ml-1">
            Cadastre-se
          </a>
        </p>
      </div>
    </>
  )
}
 
export default LoginForm;