import React, { useEffect, useState } from 'react'
import { FaRocket, FaMobileAlt, FaStore, FaTools } from 'react-icons/fa'
import electronica from '../../assets/electronica.jpg'
import apps from '../../assets/apps.avif'
import desenvolvendo from '../../assets/desenvolvendo.jpg'

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    alt: 'Equipe de tecnologia',
    text: 'Neotrix',
    sub: 'Tecnologia ao seu alcance',
  },
  {
    src: apps,
    alt: 'Apps',
    text: 'Apps',
    sub: 'Seu negócio na palma da mão',
  },
  {
    src: desenvolvendo,
    alt: 'Desenvolvimento',
    text: 'Desenvolvimento',
    sub: 'Projetos sob medida para o seu negócio',
  },
  {
    src: electronica,
    alt: 'Eletrônica',
    text: 'Eletrônica',
    sub: 'Reparos, manutenção e consultoria',
  },
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-screen h-[180px] xs:h-[220px] sm:h-[260px] md:h-[420px] flex items-center justify-center overflow-hidden mb-8 z-0">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-2 animate-fade-in-slow leading-tight">{slide.text}</h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-2xl text-blue-200 font-semibold mb-4 animate-fade-in-slow delay-200 leading-tight">{slide.sub}</p>
            <a href="/contato" className="px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition-colors animate-fade-in-slow delay-300 text-xs xs:text-sm sm:text-base md:text-lg">Fale com a Neotrix</a>
          </div>
        </div>
      ))}
    </section>
  )
}