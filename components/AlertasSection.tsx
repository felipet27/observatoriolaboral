'use client'

import { useCallback } from 'react'
import Image, { type StaticImageData } from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { Play } from 'lucide-react'
import { img } from '@/lib/images'
import disenoValle from '@/public/img/alertas-valle.png'
import disenoSenales from '@/public/img/alertas-senales.png'

const valle = {
  region: 'Valle del Cauca',
  mapa: img.mapaColombia,
  monto: '$4.9',
  noticia:
    'Inicia construcción de obra clave en la vía alterna a Buenaventura: plan será clave para el Valle del Cauca. Este proyecto presenta un avance de 32,59%, y según la ANI, beneficiaría a cerca de tres millones de personas en Valle del Cauca.',
  href: '#',
}

type Slide = {
  src: StaticImageData
  alt: string
  // Zonas clicables sobre los botones "Consulta la noticia aquí" dibujados (en % de la imagen)
  enlaces: { href: string; label: string; className: string }[]
  html?: boolean
}

// Diseños oficiales; todos traen las flechas dibujadas en la misma posición
const slides: Slide[] = [
  {
    src: disenoValle,
    alt: `Alertas de proyectos de inversión en ${valle.region}. En 2026, el Observatorio Laboral y Ocupacional SENA ha identificado 376 proyectos de inversión con potencial para la generación de empleo en el país. ${valle.monto} billones de pesos. ${valle.noticia}`,
    enlaces: [
      {
        href: valle.href,
        label: 'Consulta la noticia aquí',
        className: 'left-[67.2%] top-[83.1%] w-[24.3%] h-[5.95%]',
      },
    ],
    html: true,
  },
  {
    src: disenoSenales,
    alt: 'Señales del territorio, actualidad: el presidente de la República Abelardo De La Espriella anunció medidas para acelerar la reconstrucción de Cali tras el terremoto, con acciones en vivienda, empleo y economía (El Tiempo, 6 de septiembre de 2026). Alerta de inversión: 35% del cupo para reconstrucción deberá dirigirse a municipios de categorías 5 y 6 afectados por el terremoto. El Decreto Legislativo 1389 de 2026 creó temporalmente una modalidad especial de obras por impuestos para canalizar recursos y capacidad de ejecución de las empresas hacia la reconstrucción de los territorios afectados por el terremoto del 10 de agosto. Los recursos podrán financiar vivienda, educación, salud, agua y saneamiento, vías, puentes, aeropuertos, transporte, conectividad e infraestructura productiva, entre otros proyectos de interés público (Portafolio, 10 de septiembre de 2026).',
    enlaces: [
      {
        href: 'https://www.eltiempo.com/colombia/cali/abelardo-de-la-espriella-anuncio-medidas-para-acelerar-la-reconstruccion-de-cali-tras-el-terremoto-con-acciones-en-vivienda-empleo-y-economia-3583937',
        label: 'Consulta la noticia aquí: El Tiempo',
        className: 'left-[8.4%] top-[68.9%] w-[24.35%] h-[5.9%]',
      },
      {
        href: 'https://www.portafolio.co/economia/gobierno/asi-aportaran-las-empresas-a-la-reconstruccion-de-colombia-con-el-mecanismo-de-obras-por-impuestos-502235',
        label: 'Consulta la noticia aquí: Portafolio',
        className: 'left-[67.1%] top-[84.5%] w-[24.4%] h-[5.9%]',
      },
    ],
  },
]

function ValleHtml() {
  const a = valle
  return (
    <div className="relative">
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

      <div className="relative grid gap-8 px-16 pt-14 pb-16">
        <div>
          <p className="flex items-center gap-4 text-cyan font-bold text-[clamp(1.4rem,1.8vw,2.1rem)] pl-4">
            <span className="w-1 h-10 bg-cyan" />
            {a.region}
          </p>
          <Image
            src={a.mapa}
            sizes="85vw"
            alt={`Mapa de Colombia con ${a.region} resaltado`}
            className="mt-10 w-full max-w-[590px] h-auto"
          />
        </div>

        <div className="relative">
          <h2 className="font-bold leading-[0.92] text-[clamp(2.8rem,4.6vw,5.5rem)]">
            <span className="block text-white">ALERTAS</span>
            <span className="block text-lima">
              PROYECTOS
              <br />
              DE INVERSIÓN
            </span>
          </h2>

          <p className="mt-6 text-white text-[clamp(1.05rem,1.55vw,1.85rem)] leading-[1.25] max-w-[500px]">
            En 2026, el Observatorio Laboral y Ocupacional SENA, ha identificado 376
            proyectos de inversión, con potencial para la generación de empleo en el país.
          </p>

          <div className="relative mt-6 flex justify-end items-center gap-6">
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
  )
}

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
      <h2 className="hidden lg:block sr-only">Alertas: proyectos de inversión</h2>
      <div className="relative max-w-olo mx-auto">
        <div
          className="embla focus-visible:outline-offset-[-4px]"
          ref={emblaRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          <div className="embla__container">
            {slides.map((s, i) => (
              <div
                className="embla__slide relative"
                key={s.src.src}
                role="group"
                aria-roledescription="diapositiva"
                aria-label={`${i + 1} de ${slides.length}`}
              >
                {/* Celular y tableta: la primera alerta en HTML */}
                {s.html && (
                  <div className="lg:hidden">
                    <ValleHtml />
                  </div>
                )}
                {/* Escritorio (y celular para los demás): diseño oficial con zonas clicables */}
                <div className={`${s.html ? 'hidden lg:flex' : 'flex'} relative h-full items-center`}>
                  {/* aspect fijo: los diseños difieren en unos px de alto y no debe asomar el fondo */}
                  <div className="relative w-full aspect-[4000/2191]">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      className="block w-full h-full object-cover"
                      sizes="(min-width: 1920px) 1920px, 100vw"
                      quality={90}
                    />
                    {s.enlaces.map((e) => (
                      <a
                        key={e.className}
                        href={e.href}
                        {...(e.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                        aria-label={e.label}
                        className={`absolute rounded-[0.6vw] hover:bg-white/15 transition-colors ${e.className}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* En escritorio las flechas vienen dibujadas: los botones son solo zonas clicables encima */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-[2.6%] lg:left-[2.65%] top-[45%] lg:top-[50%] -translate-y-1/2 w-[clamp(36px,3.1vw,60px)] lg:w-[3.1%] aspect-square rounded-full bg-white text-navy lg:bg-transparent lg:text-transparent lg:hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <Play className="w-2/5 h-2/5 rotate-180 fill-navy lg:hidden" />
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-[2.6%] lg:right-auto lg:left-[93.75%] top-[45%] lg:top-[50%] -translate-y-1/2 w-[clamp(36px,3.1vw,60px)] lg:w-[3.1%] aspect-square rounded-full bg-white text-navy lg:bg-transparent lg:text-transparent lg:hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <Play className="w-2/5 h-2/5 fill-navy lg:hidden" />
        </button>
      </div>
    </section>
  )
}
