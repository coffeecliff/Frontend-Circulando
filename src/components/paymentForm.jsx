import React from "react";
 
const PaymentForm = () => {
  return (
<div className="max-w-5xl mx-auto mt-25 p-6 bg-white rounded-lg shadow-md space-y-6">
      {/* Resumo da Viagem */}
<section className="border rounded-lg p-4">
<h2 className="font-semibold text-lg mb-2">Resumo da viagem</h2>
<p className="font-bold">Ida: Terça, 01 de Julho</p>
<div className="flex items-start gap-4 mt-2">
<img src="/onibus.png" alt="Ônibus" className="w-14" />
<div className="text-sm">
<p className="text-gray-500">Executivo</p>
<p><strong>13:40</strong> - Pouso Alegre, MG</p>
<p className="ml-5 text-xs text-gray-500">Terminal Rodoviário</p>
<p><strong>16:40</strong> - São Paulo, SP - Tiete</p>
<p className="ml-5 text-xs text-gray-500">Av Cruzeiro do Sul...</p>
</div>
</div>
</section>
 
      {/* Seguro */}
<section className="border rounded-lg p-4">
<h2 className="font-semibold mb-2">Viajar sem imprevistos?</h2>
<ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
<li>Preço justo</li>
<li>Proteção pessoal para viajantes</li>
<li>Garantia de assistência especial</li>
</ul>
<label className="mt-2 block">
<input type="checkbox" className="mr-2" /> Sim, adicionar seguro <span className="ml-2">R$ 6,00</span>
</label>
</section>
 
      {/* Vantagens */}
<div className="bg-blue-50 p-4 border rounded-lg text-sm">
<p className="font-semibold text-blue-800">Aproveite nossas vantagens!</p>
<p className="text-gray-700">Você reserva sua passagem e pode cancelar grátis até 24h depois da compra.</p>
</div>
 
      <div className="grid md:grid-cols-2 gap-6">
        {/* Resumo do pedido */}
<section className="border rounded-lg p-4">
<h2 className="font-semibold text-lg mb-2">Resumo do pedido</h2>
<div className="flex gap-2">
<input
              type="text"
              placeholder="Insira seu cupom aqui"
              className="border px-3 py-2 rounded w-full"
            />
<button className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600 cursor-pointer">
              Aplicar
</button>
</div>
<div className="mt-4 text-sm">
<p>01 assento <span className="text-yellow-600 font-bold ml-2">R$ 102,99</span></p>
<p className="mt-2 font-bold text-lg">Total: R$ 121,53</p>
<p className="text-xs text-gray-500">(Taxas inclusas)</p>
</div>
<div className="mt-4 bg-blue-100 p-3 rounded flex items-center gap-2 text-sm font-semibold text-blue-800">
<span>💰</span> Receba R$ 3,65 de <span className="font-bold">cashback</span>
</div>
</section>
 
        {/* Pagamento */}
<section className="border rounded-lg p-4">
<h2 className="font-semibold text-lg mb-2">Pagar com</h2>
<div className="grid grid-cols-3 gap-2 mb-4">
<button className="border rounded px-3 py-2 hover:border-blue-500">Pix</button>
<button className="border rounded px-3 py-2 hover:border-blue-500">Cartão de crédito</button>
<button className="border rounded px-3 py-2 hover:border-blue-500">NuPay</button>
<button className="border rounded px-3 py-2 hover:border-blue-500 col-span-2">Google Pay</button>
<button className="border rounded px-3 py-2 hover:border-blue-500">Transferência</button>
</div>
<div className="text-sm text-gray-700">
<p className="font-semibold">Pagamento instantâneo</p>
<ul className="list-disc ml-5">
<li>Com Pix, você paga rápido e seguro</li>
<li>Pague a qualquer hora e lugar!</li>
</ul>
</div>
</section>
</div>
 
      {/* Botão Final */}
<div className="text-center">
<p className="text-sm text-gray-600 mb-2">
          Clicando em <span className="font-semibold">Pagar agora</span>, você aceita nossos <a href="#" className="underline">termos de uso</a> e <a href="#" className="underline">política de privacidade</a>.
</p>
<button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 text-lg cursor-pointer">
          Pagar agora
</button>
</div>
</div>
  );
};
 
export default PaymentForm;