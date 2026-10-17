'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown, Search } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Clasificaciones', href: '#ocupacion', dropdown: true },
  { label: 'Tendencia de las ocupaciones', href: '#demanda' },
  { label: 'Programas sobresalientes', href: '#servicios' },
  { label: 'Publicaciones', href: '#mirada' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header id="inicio">
      {/* Barra gov.co */}
      <div className="bg-gov h-10 flex items-center justify-center border-b border-white/30">
        <img src="/img/gov-co.png" alt="gov.co" className="h-7 w-auto" />
      </div>

      <nav className="bg-navy">
        <div className="max-w-olo mx-auto px-4 lg:px-10 h-[100px] lg:h-[120px] flex items-center justify-between gap-6">
          <a href="#inicio" className="shrink-0">
            <img
              src="/img/logos-nav.png"
              alt="SENA - Observatorio Laboral y Ocupacional"
              className="h-14 lg:h-[84px] w-auto"
            />
          </a>

          <ul className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="flex items-center gap-1 text-cyan text-[1.15rem] 2xl:text-[1.45rem] font-semibold hover:text-white transition-colors"
                >
                  {l.label}
                  {l.dropdown && <ChevronDown size={18} strokeWidth={3} />}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden xl:flex items-center gap-8 2xl:gap-12">
            <button
              aria-label="Buscar"
              className="w-10 h-10 rounded-full bg-cyan flex items-center justify-center text-navy"
            >
              <Search size={20} strokeWidth={2.5} className="-scale-x-100" />
            </button>
            <a
              href="#"
              className="bg-lima text-navy text-[1.3rem] 2xl:text-[1.6rem] font-medium tracking-[0.12em] rounded-full px-5 py-0.5 hover:brightness-110"
            >
              Intranet
            </a>
          </div>

          <button
            className="xl:hidden text-cyan"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {open && (
          <div className="xl:hidden bg-navy border-t border-white/10 px-4 pb-6">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-cyan text-lg font-semibold border-b border-white/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#"
              className="inline-block mt-5 bg-lima text-navy text-lg font-medium tracking-[0.12em] rounded-full px-5 py-1"
            >
              Intranet
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
