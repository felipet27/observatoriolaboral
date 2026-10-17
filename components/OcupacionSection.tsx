'use client'

import { Search } from 'lucide-react'

export default function OcupacionSection() {
  return (
    <section id="ocupacion" className="bg-papel-textura pt-14 lg:pt-16 pb-10">
      <div className="max-w-olo mx-auto px-4 lg:px-[90px] grid lg:grid-cols-[minmax(0,1030px)_1fr] gap-10 items-center">
        <div>
          <p className="text-navy font-bold text-[clamp(2rem,3.3vw,3.9rem)] leading-none pl-1">
            ¿Sabes qué es una
          </p>
          <h2 className="texto-ocupacion font-black text-[clamp(4rem,8vw,9.6rem)] leading-[0.85] tracking-tight">
            ocupación?
          </h2>
          <p className="mt-8 text-[clamp(1.1rem,1.6vw,1.95rem)] leading-[1.22] text-[#1a1a1a] max-w-[900px]">
            Es un <b className="font-bold">conjunto</b> de cargos,{' '}
            <b className="font-bold">empleos u oficios que incluyen categorías homogéneas de funciones,</b>{' '}
            independientemente del lugar o tiempo donde se desarrollen.
          </p>

          <div className="mt-12 bg-navy rounded-[28px] px-8 lg:pl-[50px] lg:pr-8 py-8 lg:py-9 grid md:grid-cols-[1fr_minmax(0,445px)] gap-6 items-center">
            <h3 className="text-white font-semibold text-[clamp(1.9rem,2.9vw,3.4rem)] leading-[1.02]">
              Buscado
              <br />
              de ocupaciones
              <br />
              Colombianas
            </h3>
            <div>
              <p className="text-cyan text-[1.2rem] leading-[1.15] mb-6">
                Accede a la clasificación de ocupaciones y consulta su descripción, funciones y perfiles.
              </p>
              <form className="relative" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="search"
                  aria-label="Buscar ocupación"
                  className="w-full h-[58px] rounded-full bg-[#e6e6e6] pl-6 pr-16 text-navy outline-none"
                />
                <button
                  aria-label="Buscar"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center"
                >
                  <Search size={20} className="-scale-x-100" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-end xl:pr-[150px]">
          <img
            src="/img/olo-logo-grande.png"
            alt="Observatorio Laboral y Ocupacional"
            className="w-[300px] h-auto"
          />
        </div>
      </div>
    </section>
  )
}
