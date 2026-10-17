'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { Play } from 'lucide-react'
import { img } from '@/lib/images'

const alertas = [
  {
    region: 'Valle del Cauca',
    mapa: img.mapaColombia,
    monto: '$4.9',
    noticia:
      'Inicia construcción de obra clave en la vía alterna a Buenaventura: plan será clave para el Valle del Cauca. Este proyecto presenta un avance de 32,59%, y según la ANI, beneficiaría a cerca de tres millones de personas en Valle del Cauca.',
    href: '#',
  },
]

export default function AlertasSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  return (
    <section
      id="alertas"
      className="bg-navy relative overflow-hidden"
      aria-roledescription="carrusel"
      aria-label="Alertas de proyectos de inversión"
    >
      <div
        className="embla max-w-olo mx-auto focus-visible:outline-offset-[-4px]"
        ref={emblaRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div className="embla__container">
          {alertas.map((a) => (
            <div className="embla__slide relative" key={a.region}>
              {/* Nombre de la región en contorno, de fondo */}
              <div
                aria-hidden
                className="absolute inset-0 select-none pointer-events-none uppercase font-semibold text-transparent leading-[0.82]"
                style={{ WebkitTextStroke: '3px rgba(255,255,255,0.05)' }}
              >
                <span className="absolute right-[1%] top-[2%] text-[clamp(6rem,15vw,18rem)]">Valle</span>
                <span className="absolute right-[1%] top-[33%] text-[clamp(6rem,15vw,18rem)]">del</span>
                <span className="absolute left-[4%] bottom-[-6%] text-[clamp(6rem,15vw,18rem)]">Cauca</span>
              </div>

              <div className="relative grid lg:grid-cols-[620px_1fr] gap-8 px-16 lg:pl-[110px] lg:pr-[160px] pt-14 lg:pt-[58px] pb-16 lg:pb-[112px]">
                <div>
                  <p className="flex items-center gap-4 text-cyan font-bold text-[clamp(1.4rem,1.8vw,2.1rem)] pl-4">
                    <span className="w-1 h-10 bg-cyan" />
                    {a.region}
                  </p>
                  <Image
                    src={a.mapa}
                    sizes="(min-width: 1024px) 590px, 85vw"
                    alt={`Mapa de Colombia con ${a.region} resaltado`}
                    className="mt-10 w-full max-w-[590px] h-auto"
                  />
                </div>

                <div className="relative lg:pt-[20px]">
                  <h2 className="font-bold leading-[0.92] text-[clamp(2.8rem,4.6vw,5.5rem)]">
                    <span className="block text-white">ALERTAS</span>
                    <span className="block text-lima">
                      PROYECTOS
                      <br />
                      DE INVERSIÓN
                    </span>
                  </h2>

                  <div className="flex gap-8">
                    <p className="mt-6 text-white text-[clamp(1.05rem,1.55vw,1.85rem)] leading-[1.25] max-w-[500px]">
                      En 2026, el Observatorio Laboral y Ocupacional SENA, ha identificado 376
                      proyectos de inversión, con potencial para la generación de empleo en el país.
                    </p>
                    <Image
                      src={img.flecha2}
                      alt=""
                      className="hidden lg:block w-[120px] h-[120px] mt-6 self-start"
                    />
                  </div>

                  <div className="relative mt-6 flex justify-end items-center gap-6">
                    <Image
                      src={img.flecha1}
                      alt=""
                      className="hidden lg:block absolute left-[-15px] top-[10px] w-[120px] h-[120px]"
                    />
                    <span className="text-lima font-bold text-[clamp(4rem,7.3vw,8.8rem)] leading-none">
                      {a.monto}
                    </span>
                    <span className="text-lima font-bold text-[clamp(1.6rem,2.7vw,3.2rem)] leading-[0.95]">
                      BILLONES
                      <br />
                      DE PESOS
                    </span>
                  </div>

                  <p className="mt-4 ml-auto text-right text-white text-[clamp(1.05rem,1.55vw,1.85rem)] leading-[1.25] max-w-[810px]">
                    {a.noticia}
                  </p>

                  <div className="flex justify-end mt-8">
                    <a
                      href={a.href}
                      className="bg-cyan text-navy font-semibold text-[clamp(1.2rem,1.75vw,2.1rem)] rounded-t-xl rounded-b-sm px-6 py-2 hover:brightness-110"
                    >
                      Consulta la noticia aquí:
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-[2.6%] top-[45%] -translate-y-1/2 w-[clamp(36px,3.1vw,60px)] aspect-square rounded-full bg-white text-navy flex items-center justify-center"
      >
        <Play className="w-2/5 h-2/5 rotate-180 fill-navy" />
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-[2.6%] top-[45%] -translate-y-1/2 w-[clamp(36px,3.1vw,60px)] aspect-square rounded-full bg-white text-navy flex items-center justify-center"
      >
        <Play className="w-2/5 h-2/5 fill-navy" />
      </button>
    </section>
  )
}
