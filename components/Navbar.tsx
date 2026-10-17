'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown, Search } from 'lucide-react'
import { img } from '@/lib/images'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Clasificaciones', href: '#ocupacion', dropdown: true },
  { label: 'Tendencia de las ocupaciones', href: '#demanda' },
  { label: 'Programas sobresalientes', href: '#servicios' },
  { label: 'Publicaciones', href: '#mirada' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const [active, setActive] = useState('#inicio')
  const navRef = useRef<HTMLElement>(null)

  // Menú compacto al bajar y sección activa: la última cuyo inicio ya pasó la mitad de la pantalla
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null)
    let frame = 0
    const update = () => {
      frame = 0
      setCompact(window.scrollY > 60)
      const middle = window.innerHeight / 2
      let current = sections[0]
      for (const s of sections) if (s.getBoundingClientRect().top <= middle) current = s
      if (current) setActive(`#${current.id}`)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Cierra el menú móvil con Esc o al tocar fuera
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  // En la vista inicial no se resalta nada, igual que en el diseño
  const current = compact ? active : ''

  return (
    <>
      {/* Barra gov.co */}
      <div className="bg-gov h-10 flex items-center justify-center border-b border-white/30">
        <Image src={img.govCo} alt="gov.co" className="h-7 w-auto" priority />
      </div>

      <nav
        ref={navRef}
        aria-label="Principal"
        // Al compactarse, el margen compensa la altura perdida para que el contenido no salte
        className={`sticky top-0 z-50 bg-navy transition-[margin,box-shadow] duration-300 ${
          compact ? 'mb-[28px] lg:mb-[36px] shadow-lg shadow-black/30' : ''
        }`}
      >
        <div
          className={`max-w-olo mx-auto px-4 lg:px-[clamp(24px,2.1vw,40px)] flex items-center justify-between gap-[clamp(16px,1.6vw,32px)] transition-[height] duration-300 ${
            compact ? 'h-[72px] lg:h-[84px]' : 'h-[100px] lg:h-[120px]'
          }`}
        >
          <a href="#inicio" className="shrink-0" aria-label="Ir al inicio">
            <Image
              src={img.logosNav}
              alt="SENA - Observatorio Laboral y Ocupacional"
              className={`w-auto transition-[height] duration-300 ${
                compact ? 'h-11 xl:h-[clamp(48px,3.1vw,60px)]' : 'h-14 xl:h-[clamp(62px,4.4vw,84px)]'
              }`}
              priority
            />
          </a>

          <ul className="hidden xl:flex items-center gap-[clamp(14px,1.55vw,32px)]">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  aria-current={current === l.href ? 'true' : undefined}
                  className={`relative flex items-center gap-1 whitespace-nowrap text-[clamp(15px,calc(1.25vw-1px),23px)] font-semibold transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-[3px] after:rounded-full after:bg-lima after:transition-all after:duration-300 ${
                    current === l.href ? 'text-white after:w-full' : 'text-cyan hover:text-white after:w-0'
                  }`}
                >
                  {l.label}
                  {l.dropdown && <ChevronDown className="w-[1em] h-[1em]" strokeWidth={3} aria-hidden />}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden xl:flex items-center shrink-0 gap-[clamp(16px,2.5vw,48px)]">
            <button
              aria-label="Buscar"
              className="w-[clamp(34px,2.1vw,40px)] aspect-square rounded-full bg-cyan flex items-center justify-center text-navy"
            >
              <Search strokeWidth={2.5} className="w-1/2 h-1/2 -scale-x-100" />
            </button>
            <a
              href="#"
              className="whitespace-nowrap bg-lima text-navy text-[clamp(17px,calc(1.4vw-1px),25.6px)] font-medium tracking-[0.12em] rounded-full px-[0.8em] py-0.5 hover:brightness-110"
            >
              Intranet
            </a>
          </div>

          <button
            className="xl:hidden text-cyan"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="menu-movil"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {open && (
          <div
            id="menu-movil"
            className="xl:hidden absolute inset-x-0 top-full bg-navy border-t border-white/10 px-4 pb-6 shadow-lg shadow-black/30 max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={current === l.href ? 'true' : undefined}
                className={`block py-3 text-lg font-semibold border-b border-white/10 ${
                  current === l.href ? 'text-white' : 'text-cyan'
                }`}
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
    </>
  )
}
