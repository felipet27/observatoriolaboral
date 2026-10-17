'use client'

import Image from 'next/image'
import { Search } from 'lucide-react'
import fondo from '@/public/img/ocupacion-fondo.png'

export default function OcupacionSection() {
  return (
    <section id="ocupacion" className="bg-papel-textura relative overflow-hidden pt-14 lg:pt-16 pb-10">
      <div className="relative max-w-olo mx-auto">
        {/* Foto difuminada con el logo del Observatorio */}
        <Image
          src={fondo}
          alt="Observatorio Laboral y Ocupacional"
          className="hidden lg:block absolute right-0 -top-16 w-[41.75%] h-auto pointer-events-none select-none"
          sizes="(min-width: 1920px) 800px, 42vw"
        />
        <div className="relative px-4 lg:px-0 lg:ml-[4.75%] lg:w-[53.5%] lg:min-w-[640px]">
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

          <div className="mt-12 bg-navy rounded-[28px] px-8 lg:pl-[50px] lg:pr-8 py-8 lg:py-9 grid md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] gap-6 items-center">
            <h3 className="text-white font-semibold text-[clamp(1.9rem,2.9vw,3.4rem)] leading-[1.02]">
              Buscado
              <br />
              de ocupaciones
              <br />
              Colombianas
            </h3>
            <div>
              <p className="text-cyan text-[clamp(1.05rem,1.15vw,1.4rem)] leading-[1.2] mb-6">
                Conozca las ocupaciones de Colombia, según el sector de desempeño y nivel de cualificación.
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
      </div>
    </section>
  )
}
