'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    img: '/img/demanda.jpg',
    alt: 'La demanda laboral en el territorio: 1.449 vacantes en el Valle del Cauca, Risaralda 622 vacantes, Caldas 264 vacantes',
  },
]

export default function DemandaSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section id="demanda" className="relative bg-[#e7e3d9]">
      <div className="embla max-w-olo mx-auto" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((s) => (
            <div className="embla__slide" key={s.img}>
              <img src={s.img} alt={s.alt} className="block w-full h-auto" />
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
    </section>
  )
}
