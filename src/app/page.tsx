'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold text-center mb-2">Conquista Aí</h1>
      <p className="text-lg text-center mb-8 max-w-xl text-white/70">
        Conquiste seu parceiro IA. Nem todo flerte é fácil. Mas aqui, vale a pena tentar.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="rounded-xl overflow-hidden shadow-xl text-center bg-cover bg-center relative" style={{ backgroundImage: 'url(/img/personagem-basico.jpg)' }}>
          <div className="bg-black/60 p-6">
            <h2 className="text-2xl font-semibold mb-1">🟢 BÁSICO</h2>
            <p className="text-sm mb-2">R$49,90/mês</p>
            <Link href="/basico" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl inline-block">Acessar plano</Link>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl text-center bg-cover bg-center relative" style={{ backgroundImage: 'url(/img/personagem-sensual.jpg)' }}>
          <div className="bg-black/60 p-6">
            <h2 className="text-2xl font-semibold mb-1">🌸 SENSUAL</h2>
            <p className="text-sm mb-2">R$79,90/mês</p>
            <Link href="/picante" className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-xl inline-block">Assinar</Link>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-inner text-center bg-cover bg-center relative opacity-80" style={{ backgroundImage: 'url(/img/personagem-picante.jpg)' }}>
          <div className="bg-black/70 p-6">
            <h2 className="text-2xl font-semibold mb-1">🔞 PICANTE</h2>
            <p className="text-sm mb-2">Em breve</p>
            <button disabled className="bg-gray-500 cursor-not-allowed px-4 py-2 rounded-xl">Indisponível</button>
          </div>
        </div>
      </div>
      <footer className="mt-10 text-white/40 text-sm">
        Projeto educacional por Marcio Eugênio | 2025
      </footer>
    </main>
  );
}
