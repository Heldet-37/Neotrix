import React, { Suspense, lazy } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import logo from './assets/neotrix-logo.png'
import Loading from './components/pages/Loading'

function delayImport(factory, ms = 900) {
  return new Promise(resolve => setTimeout(() => resolve(factory()), ms));
}

const Home = lazy(() => delayImport(() => import('./components/pages/Home')))
const About = lazy(() => delayImport(() => import('./components/pages/About')))
const Services = lazy(() => delayImport(() => import('./components/pages/Services')))
const Portfolio = lazy(() => delayImport(() => import('./components/pages/Portfolio')))
const Contact = lazy(() => delayImport(() => import('./components/pages/Contact')))

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-800 px-6 py-3 flex items-center justify-between shadow">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo Neotrix" className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-1" />
        <span className="font-bold text-xl tracking-tight">Neotrix</span>
      </div>
      <nav className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/servicos">Serviços</NavLink>
        <NavLink to="/portfolio">Portfólio</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
    </header>
  )
}

function NavLink({ to, children }) {
  const location = useLocation()
  const isActive = location.pathname === to
  return (
    <Link
      to={to}
      className={`relative px-2 py-1 font-medium transition-colors duration-200
        ${isActive ? 'text-blue-400' : 'text-slate-200 hover:text-blue-400'}
        after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left
      `}
      style={{textDecoration: 'none'}}
    >
      {children}
    </Link>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="p-8 pt-24">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}
