'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import { img } from '@/lib/images'

const slides = [
  {
    img: img.demanda,
    alt: 'Infografía: la demanda laboral en el territorio',
    // Versión en texto de la infografía para lectores de pantalla
    texto: (
      <>
        <p>La demanda laboral en el territorio.</p>
        <p>
          Valle del Cauca: 1.449 vacantes. Principales ocupaciones: Ayudantes de Otros Oficios (20
          vacantes, 28,2%); Instaladores de Redes y Equipos a Gas (5 vacantes, 7,0%); Ayudantes de
          establecimientos de alimentos y bebidas (5 vacantes, 7,0%). El 60,2% del total en
          Auxiliares de Alimentación y Bebidas. 264 vacantes en el sector de Alimentos y Bebidas.
        </p>
        <p>
          Risaralda: 622 vacantes, 25,9% del total. Principales ocupaciones: Otros obreros y
          ayudantes en fabricación y procesamiento (98 vacantes, 15,8%); Ajustadores y operadores de
          Máquinas Herramientas (71 vacantes, 11,4%); Analistas, Asistentes y Asesores de Servicios
          Financieros (48 vacantes, 7,7%).
        </p>
        <p>
          Caldas: 264 vacantes, 11,0% del total. Principales ocupaciones: Auxiliares de Información
          y Servicio al Cliente (101 vacantes, 38,3%); Agentes de Viajes (25 vacantes, 9,5%);
          Trabajadores Agrícolas (20 vacantes, 7,6%).
        </p>
      </>
    ),
  },
]

export default function DemandaSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const [zoom, setZoom] = useState<number | null>(null)

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  return (
    <section
      id="demanda"
      className="relative bg-[#e7e3d9]"
      aria-roledescription="carrusel"
      aria-label="La demanda laboral en el territorio"
    >
      <div
        className="embla max-w-olo mx-auto focus-visible:outline-offset-[-4px]"
        ref={emblaRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div className="embla__container">
          {slides.map((s, i) => (
            <div className="embla__slide" key={i}>
              <button
                type="button"
                onClick={() => setZoom(i)}
                className="group relative block w-full cursor-zoom-in"
                aria-label="Ampliar infografía"
              >
                <Image
                  src={s.img}
                  alt={s.alt}
                  className="block w-full h-auto"
                  sizes="(min-width: 1920px) 1920px, 100vw"
                  quality={85}
                  placeholder="blur"
                />
                <span className="lg:hidden absolute right-3 bottom-3 flex items-center gap-1.5 rounded-full bg-navy/85 text-white text-xs font-semibold px-3 py-1.5">
                  <ZoomIn size={14} aria-hidden /> Toca para ampliar
                </span>
              </button>
              <div className="sr-only">{s.texto}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-[2.7%] top-[48.1%] -translate-y-1/2 w-[clamp(32px,2.7vw,52px)] aspect-square rounded-full bg-white text-navy flex items-center justify-center shadow"
      >
        <ChevronLeft className="w-3/5 h-3/5" />
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-[2.7%] top-[48.1%] -translate-y-1/2 w-[clamp(32px,2.7vw,52px)] aspect-square rounded-full bg-white text-navy flex items-center justify-center shadow"
      >
        <ChevronRight className="w-3/5 h-3/5" />
      </button>

      {zoom !== null && <Visor slide={slides[zoom]} onClose={() => setZoom(null)} />}
    </section>
  )
}

// Visor a pantalla completa: permite desplazar y hacer zoom con los dedos
function Visor({ slide, onClose }: { slide: (typeof slides)[number]; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previo = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKey)
      previo?.focus()
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={slide.alt}
      className="fixed inset-0 z-[100] bg-black/90 overflow-auto overscroll-contain"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Cerrar"
        className="fixed right-4 top-4 z-10 w-11 h-11 rounded-full bg-white text-navy flex items-center justify-center shadow-lg"
      >
        <X size={24} />
      </button>
      <div className="min-h-full flex items-center p-4 lg:justify-center">
        <Image
          src={slide.img}
          alt={slide.alt}
          onClick={(e) => e.stopPropagation()}
          className="h-auto shrink-0 max-w-none w-[1100px] lg:w-full lg:max-w-[1920px]"
          sizes="(min-width: 1100px) 100vw, 1100px"
          quality={90}
          loading="eager"
        />
      </div>
    </div>
  )
}
