import React from 'react'
import { FaCode, FaCheckCircle, FaUser } from 'react-icons/fa'

const projetos = [
  {
    nome: 'PDV Smart Restaurante',
    descricao: 'Sistema PDV completo para restaurantes, com gestão de mesas, pedidos e integração com impressoras.',
    tecnologias: 'Flet (Python), SQLite',
  },
  {
    nome: 'App Açougue Fácil',
    descricao: 'Aplicativo Android para controle de estoque e vendas em açougues.',
    tecnologias: 'React Native, Firebase',
  },
  {
    nome: 'Mercearia Web',
    descricao: 'Website institucional para mercearias, com catálogo de produtos e área de contato.',
    tecnologias: 'ReactJS, TailwindCSS',
  },
  {
    nome: 'PDV Mercearia',
    descricao: 'Sistema PDV para mercearias, com controle de estoque, vendas e relatórios.',
    tecnologias: 'Flet (Python)',
  },
]

const clientes = [
  {
    nome: 'Saide Adamo Marrapaz',
    descricao: 'Comprador de PDV para restaurante e mercearia',
    telefone: '+258 866036386',
  },
  {
    nome: 'Valdimiro Cassamo',
    descricao: 'Suporte técnico',
    telefone: '+258 877638547',
  },
]

export default function Portfolio() {
  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-blue-400 flex items-center gap-2"><FaCode /> Portfólio</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projetos.map((proj, idx) => (
          <div key={idx} className="bg-slate-800 rounded-lg p-4 shadow hover:scale-105 transition-transform flex flex-col gap-2">
            <h3 className="text-xl font-semibold mb-1 flex items-center gap-2 text-blue-300"><FaCheckCircle /> {proj.nome}</h3>
            <p className="mb-1 text-slate-300">{proj.descricao}</p>
            <span className="text-xs text-slate-400">Tecnologias: <span className="text-blue-400">{proj.tecnologias}</span></span>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4 text-blue-400 flex items-center gap-2"><FaUser /> Clientes</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {clientes.map((cli, idx) => (
            <div key={idx} className="bg-slate-800 rounded-lg p-4 shadow flex flex-col gap-1">
              <span className="font-semibold text-white">{cli.nome}</span>
              <span className="text-slate-300 text-sm">{cli.descricao}</span>
              <span className="text-blue-400 text-sm">{cli.telefone}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 