'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const datos = [
  {
    pregunta: '¿ Y ENTRE LAS MUJERES?',
    cifra: '67,85%',
    texto: (
      <>
        de las certificadas que se <b className="font-bold">reconocen</b> como parte de un{' '}
        <b className="font-bold">grupo étnico</b> son <b className="font-bold">afrocolombianas.</b>
      </>
    ),
  },
]

export default function MujeresSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="bg-papel-textura">
      {/* Fondo de muro azul con letras OLO, reconstruido desde la maqueta */}
      <div className="relative overflow-hidden rounded-[40px] lg:rounded-[60px] max-w-olo mx-auto bg-[#00287a] bg-[url('/img/fondo-mujeres.jpg')] bg-cover bg-center">

        <div className="embla relative" ref={emblaRef}>
          <div className="embla__container">
            {datos.map((d) => (
              <div className="embla__slide" key={d.cifra}>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-[min(2.7vw,52px)] px-16 lg:px-[7.5%] pt-12 lg:pt-[min(9.3vw,178px)] pb-14 lg:pb-[min(7.7vw,148px)]">
                  {/* El dato OLO */}
                  <div className="relative lg:mt-[min(5.8vw,112px)] shrink-0 text-right">
                    <img
                      src="/img/icono-dato.png"
                      alt=""
                      className="absolute -top-[78px] right-[-30px] w-[110px]"
                    />
                    <p className="relative bg-cyan text-navy font-bold text-[clamp(2.2rem,3.4vw,4rem)] leading-none px-2 py-1">
                      EL DATO:
                    </p>
                    <p className="text-white font-black italic text-[clamp(2.6rem,4.3vw,5.2rem)] leading-[1.05]">
                      OLO
                    </p>
                  </div>

                  <img
                    src="/img/mujer-m.jpg"
                    alt="Ilustración de una mujer dentro de la letra M"
                    className="w-[260px] lg:w-[min(22.8vw,438px)] h-auto shrink-0"
                  />

                  <div className="text-white text-center lg:text-left lg:pt-[min(1.9vw,37px)]">
                    <p className="inline-block whitespace-nowrap bg-lima text-navy font-semibold text-[clamp(1rem,2.6vw,3.1rem)] leading-none px-[0.4em] py-[0.25em] tracking-wide">
                      {d.pregunta}
                    </p>
                    <p className="font-semibold text-[clamp(4.5rem,9.4vw,11.3rem)] leading-[0.95] tracking-tight">
                      {d.cifra}
                    </p>
                    <p className="text-[clamp(1.05rem,1.55vw,1.85rem)] leading-[1.25] max-w-[700px] lg:ml-5 mt-3">
                      {d.texto}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-[2.8%] top-[46.6%] -translate-y-1/2 w-[clamp(32px,2.7vw,52px)] aspect-square rounded-full bg-white text-navy flex items-center justify-center"
        >
          <ChevronLeft className="w-3/5 h-3/5" />
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-[2.8%] top-[46.6%] -translate-y-1/2 w-[clamp(32px,2.7vw,52px)] aspect-square rounded-full bg-white text-navy flex items-center justify-center"
        >
          <ChevronRight className="w-3/5 h-3/5" />
        </button>
      </div>
    </section>
  )
}
