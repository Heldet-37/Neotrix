import React from 'react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] animate-fade-in">
      <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
      <span className="text-blue-400 font-semibold">Carregando...</span>
    </div>
  )
} 