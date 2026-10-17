'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { img } from '@/lib/images'
import fondoMujeres from '@/public/img/fondo-mujeres.jpg'
import disenoMujeres from '@/public/img/el-dato-mujeres.png'
import disenoPertinencia from '@/public/img/el-dato-pertinencia.png'
import disenoTalento from '@/public/img/el-dato-talento.png'

const mujeres = {
  pregunta: '¿ Y ENTRE LAS MUJERES?',
  cifra: '67,85%',
  texto: (
    <>
      de las certificadas que se <b className="font-bold">reconocen</b> como parte de un{' '}
      <b className="font-bold">grupo étnico</b> son <b className="font-bold">afrocolombianas.</b>
    </>
  ),
}

// Diseños oficiales. `flechas` indica si la imagen ya trae las flechas dibujadas.
const slides = [
  {
    src: disenoMujeres,
    alt: 'El dato OLO: ¿y entre las mujeres? 67,85% de las certificadas que se reconocen como parte de un grupo étnico son afrocolombianas.',
    flechas: true,
    html: true,
  },
  {
    src: disenoPertinencia,
    alt: 'El dato OLO: la pertinencia de la formación SENA alcanzó un récord nacional: 49,4% en 2025. Esto significa que estamos formando talento cada vez más alineado con las necesidades del mercado laboral y los territorios.',
    flechas: false,
    html: false,
  },
  {
    src: disenoTalento,
    alt: 'El dato OLO: el talento SENA genera valor. 93% de los empresarios considera que nuestros egresados aportan valor a sus organizaciones.',
    flechas: true,
    html: false,
  },
]

function MujeresHtml() {
  return (
    <div className="relative h-full bg-[#00287a]">
      {/* Fondo de muro azul con letras OLO, reconstruido desde la maqueta */}
      <Image
        src={fondoMujeres}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
      />
      <div className="relative flex flex-col items-center justify-center gap-8 px-16 pt-12 pb-14">
        {/* El dato OLO */}
        <div className="relative shrink-0 text-right">
          <Image
            src={img.iconoDato}
            alt=""
            className="absolute -top-[78px] right-[-30px] w-[110px] h-auto"
          />
          <p className="relative bg-cyan text-navy font-bold text-[clamp(2.2rem,3.4vw,4rem)] leading-none px-2 py-1">
            EL DATO:
          </p>
          <p className="text-white font-black italic text-[clamp(2.6rem,4.3vw,5.2rem)] leading-[1.05]">
            OLO
          </p>
        </div>

        <Image
          src={img.mujerM}
          alt="Ilustración de una mujer dentro de la letra M"
          className="w-[260px] h-auto shrink-0"
          sizes="260px"
        />

        <div className="text-white text-center">
          <p className="inline-block whitespace-nowrap bg-lima text-navy font-semibold text-[clamp(1rem,2.6vw,3.1rem)] leading-none px-[0.4em] py-[0.25em] tracking-wide">
            {mujeres.pregunta}
          </p>
          <p className="font-semibold text-[clamp(4.5rem,9.4vw,11.3rem)] leading-[0.95] tracking-tight">
            {mujeres.cifra}
          </p>
          <p className="text-[clamp(1.05rem,1.55vw,1.85rem)] leading-[1.25] max-w-[700px] mt-3">
            {mujeres.texto}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function MujeresSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [actual, setActual] = useState(0)
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setActual(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  // En escritorio, si el diseño ya trae flechas dibujadas, el botón es solo una zona clicable encima
  const flecha = slides[actual].flechas
    ? 'lg:bg-transparent lg:text-transparent lg:hover:bg-white/20'
    : ''

  return (
    <section className="bg-papel-textura" aria-roledescription="carrusel" aria-label="El dato OLO">
      <div className="relative max-w-olo mx-auto overflow-hidden rounded-[40px] lg:rounded-none">
        <div className="embla relative focus-visible:outline-offset-[-4px]" ref={emblaRef} tabIndex={0} onKeyDown={onKeyDown}>
          <div className="embla__container">
            {slides.map((s, i) => (
              <div
                className="embla__slide"
                key={s.src.src}
                role="group"
                aria-roledescription="diapositiva"
                aria-label={`${i + 1} de ${slides.length}`}
              >
                {/* Celular y tableta: el primer dato en HTML legible a cualquier ancho */}
                {s.html && (
                  <div className="lg:hidden h-full">
                    <MujeresHtml />
                  </div>
                )}
                <div className={`${s.html ? 'hidden lg:flex' : 'flex'} h-full items-center bg-[#00287a] lg:bg-transparent`}>
                  <Image
                    src={s.src}
                    alt={s.alt}
                    className="block w-full h-auto"
                    sizes="(min-width: 1920px) 1920px, 100vw"
                    quality={90}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prev}
          aria-label="Anterior"
          className={`absolute left-[2.75%] top-[46.3%] -translate-y-1/2 w-[clamp(32px,2.7vw,52px)] lg:w-[2.7%] aspect-square rounded-full bg-white text-navy flex items-center justify-center transition-colors ${flecha}`}
        >
          <ChevronLeft className="w-3/5 h-3/5" />
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className={`absolute right-[2.75%] lg:right-auto lg:left-[94.5%] top-[46.3%] -translate-y-1/2 w-[clamp(32px,2.7vw,52px)] lg:w-[2.7%] aspect-square rounded-full bg-white text-navy flex items-center justify-center transition-colors ${flecha}`}
        >
          <ChevronRight className="w-3/5 h-3/5" />
        </button>
      </div>
    </section>
  )
}
