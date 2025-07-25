import React from 'react'
import { FaStore, FaMobileAlt, FaGlobe, FaTools, FaComments, FaMicrochip, FaWrench, FaSyncAlt } from 'react-icons/fa'

const servicos = [
  { icon: <FaStore size={28} />, titulo: 'PDV para Comércio', desc: 'Sistemas PDV para restaurantes, açougues, mercearias e lojas.' },
  { icon: <FaMobileAlt size={28} />, titulo: 'Apps Android', desc: 'Desenvolvimento de aplicativos modernos e funcionais.' },
  { icon: <FaGlobe size={28} />, titulo: 'Websites', desc: 'Criação de sites institucionais e catálogos online.' },
  { icon: <FaTools size={28} />, titulo: 'Suporte e Manutenção', desc: 'Atendimento técnico e manutenção de sistemas.' },
  { icon: <FaComments size={28} />, titulo: 'Consultoria', desc: 'Consultoria em tecnologia e soluções digitais.' },
  { icon: <FaMicrochip size={28} />, titulo: 'Eletrônica', desc: 'Serviços de eletrônica para equipamentos diversos.' },
  { icon: <FaWrench size={28} />, titulo: 'Reparação de Celulares', desc: 'Reparo de celulares, troca de peças e manutenção.' },
  { icon: <FaSyncAlt size={28} />, titulo: 'Atualização de Software', desc: 'Atualização de software para celulares e dispositivos.' },
]

export default function Services() {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicos.map((s, i) => (
          <div key={i} className="flex items-center gap-4 bg-slate-800 rounded-lg p-4 shadow hover:scale-105 transition-transform">
            <div className="text-blue-400">{s.icon}</div>
            <div>
              <div className="font-semibold">{s.titulo}</div>
              <div className="text-sm text-slate-400">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 