import React from 'react'
import { FaUserTie, FaLightbulb } from 'react-icons/fa'

export default function About() {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-blue-400 flex items-center gap-2"><FaLightbulb /> Sobre a <span className="text-blue-500">Neotrix</span></h2>
      <p className="mb-4 text-slate-300">
        <span className="font-bold text-blue-400">Neotrix Tecnologias</span> é uma startup dedicada a criar soluções tecnológicas inovadoras para o comércio. Nossa missão é facilitar o dia a dia de restaurantes, açougues, mercearias e lojas, oferecendo sistemas PDV, aplicativos Android e websites modernos.
      </p>
      <div className="bg-slate-800 rounded-lg p-4 mt-8 flex items-center gap-4 shadow">
        <FaUserTie size={40} className="text-blue-400" />
        <div>
          <h3 className="text-xl font-semibold mb-1">Fundador e CEO</h3>
          <p className="mb-1 text-slate-300">Helder Alves Fonseca</p>
          <p className="text-slate-400">
            A Neotrix foi fundada com o objetivo de levar inovação e eficiência ao comércio local, oferecendo soluções acessíveis e suporte de qualidade.
          </p>
        </div>
      </div>
    </div>
  )
} 