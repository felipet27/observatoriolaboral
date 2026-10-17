import Image from 'next/image'
import SectionHeading from './SectionHeading'
import { img } from '@/lib/images'

const servicios = [
  { img: img.servicio1, alt: '¿Qué mide el Observatorio Laboral y Ocupacional SENA?' },
  {
    img: img.servicio2,
    alt: '1. La tasa de vinculación laboral: ¿cuántos egresados del SENA consiguen empleo formal? 2. La tasa de empleabilidad en formación complementaria y certificaciones',
  },
  { img: img.servicio3, alt: 'Pertinencia de la formación: ¿lo que se enseña se necesita en el mercado?' },
]

// Medidas proporcionales al diseño de 1920px para conservar la composición en cualquier ancho
export default function ServiciosSection() {
  return (
    <section id="servicios" className="bg-papel-textura relative overflow-hidden pt-12 lg:pt-[min(3.4vw,65px)]">
      <SectionHeading
        left={
          <>
            ¿Sabes
            <br />
            <b className="font-bold">cuáles</b>
          </>
        }
        word="Servicios"
        right={
          <>
            encuentras
            <br />
            en el <b className="font-extrabold">OLO?</b>
          </>
        }
      />

      <div className="relative max-w-olo mx-auto">
        <div className="px-4 lg:px-0 lg:ml-[4.75%] lg:w-[67.3%] pt-10 lg:pt-[min(2.6vw,50px)] pb-14 lg:pb-[min(3.4vw,66px)]">
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-[1.45%]">
            {servicios.map((s) => (
              <Image
                key={s.alt}
                src={s.img}
                alt={s.alt}
                className="block w-full h-auto transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02]"
                sizes="(min-width: 1920px) 412px, (min-width: 1024px) 22vw, (min-width: 640px) 31vw, 92vw"
                quality={90}
              />
            ))}
          </div>
          <p className="mt-10 lg:mt-[min(3.7vw,72px)] text-[clamp(1rem,1.5vw,1.8rem)] leading-[1.22] text-[#1a1a1a]">
            <b className="font-extrabold text-navy">El OLO,</b> Provee información a nivel nacional,
            que contribuye a la <b className="font-extrabold text-navy">orientación</b> de acciones
            de formación emprendimiento y empleo. Además{' '}
            <b className="font-extrabold text-navy">genera alertas de proyectos de inversión</b> que
            se quieren realizar en las diferentes{' '}
            <b className="font-extrabold text-navy">regiones y sectores económicos.</b>
          </p>
        </div>

        <Image
          src={img.campesina}
          sizes="(min-width: 1920px) 530px, 28vw"
          alt="Mujer campesina con una caja de verduras"
          className="hidden lg:block absolute right-0 bottom-0 w-[27.6%] h-auto"
        />
      </div>
    </section>
  )
}
