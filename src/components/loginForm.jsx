import React, { useState } from "react";
 
const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email} \nSenha: ${senha}`)
  }
 
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