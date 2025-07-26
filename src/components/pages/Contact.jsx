import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in flex flex-col items-center gap-8 bg-slate-800 rounded-lg px-2 py-6 sm:px-6 md:px-8 shadow">
      <h2 className="text-3xl font-bold text-blue-400 mb-2 text-center">Vamos conversar?</h2>
      <p className="text-slate-300 text-center mb-4">A equipe Neotrix está pronta para te ajudar. Escolha a melhor forma de contato abaixo:</p>
      <div className="w-full flex flex-col md:flex-row gap-6 justify-center">
        {/* WhatsApp */}
        <div className="flex-1 bg-slate-900 rounded-lg p-4 sm:p-6 flex flex-col items-center gap-3 shadow">
          <FaWhatsapp size={36} className="text-green-400 mb-2" />
          <span className="font-semibold text-white">WhatsApp</span>
          <span className="text-slate-300 text-sm">Atendimento rápido e direto</span>
          <a href="https://wa.me/258872664074" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 sm:px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded shadow flex items-center gap-2 transition-colors text-sm sm:text-base">
            <FaPhoneAlt /> Falar no WhatsApp
          </a>
          <span className="text-blue-400 text-xs mt-2">+258 87 266 4074</span>
        </div>
        {/* E-mail */}
        <div className="flex-1 bg-slate-900 rounded-lg p-4 sm:p-6 flex flex-col items-center gap-3 shadow">
          <FaEnvelope size={36} className="text-blue-400 mb-2" />
          <span className="font-semibold text-white">E-mail</span>
          <span className="text-slate-300 text-sm">Responderemos o mais breve possível</span>
          <a href="mailto:neotrixtecnologias37@gmail.com?subject=Contato%20Neotrix" className="mt-2 px-4 py-2 sm:px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow flex items-center gap-2 transition-colors text-sm sm:text-base">
            <FaEnvelope /> Enviar E-mail
          </a>
          <span className="text-blue-400 text-xs mt-2">neotrixtecnologias37@gmail.com</span>
        </div>
      </div>
      {/* Agendar Meeting */}
      <div className="w-full bg-slate-900 rounded-lg p-4 sm:p-6 flex flex-col items-center gap-4 shadow mt-4">
        <h3 className="text-xl font-bold text-blue-400 flex items-center gap-2 text-center"><FaCalendarAlt /> Agendar Meeting</h3>
        <p className="text-slate-300 text-center">Prefere agendar um horário? Clique abaixo e marque uma reunião com um especialista da Neotrix.</p>
        <a href="mailto:neotrixtecnologias37@gmail.com?subject=Agendar%20Meeting%20com%20Neotrix" className="px-4 py-2 sm:px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow flex items-center gap-2 transition-colors text-sm sm:text-base">
          <FaCalendarAlt /> Agendar por E-mail
        </a>
        <a href="https://wa.me/258872664074?text=Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20com%20a%20Neotrix" target="_blank" rel="noopener noreferrer" className="px-4 py-2 sm:px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded shadow flex items-center gap-2 transition-colors text-sm sm:text-base">
          <FaWhatsapp /> Agendar por WhatsApp
        </a>
      </div>
    </div>
  )
}
