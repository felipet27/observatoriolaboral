import Image from 'next/image'
import SectionHeading from './SectionHeading'
import { img } from '@/lib/images'

const cards = [
  {
    img: img.observa1,
    alt: 'Monitoreo del mercado: el Observatorio Laboral y Ocupacional analiza',
    href: '#demanda',
  },
  {
    img: img.observa2,
    alt: 'Orientación y formación: gracias a él, el SENA puede crear programas más pertinentes y útiles',
    href: '#servicios',
  },
  {
    img: img.observa3,
    alt: 'Generación de alertas: y tú puedes conocer si una ocupación realmente tiene demanda laboral. #NosOcupaElPaís',
    href: '#alertas',
  },
]

export default function ObservaSection() {
  return (
    <section id="observa" className="bg-papel-textura pt-12 pb-16 lg:pb-[72px]">
      <SectionHeading
        left={
          <>
            En <b className="font-extrabold">Colombia,</b>
            <br />
            el <b className="font-extrabold">SENA</b> no solo
            <br />
            <b className="font-extrabold">forma,</b> también
          </>
        }
        word="Observa"
        right={
          <>
            el <b className="font-extrabold">mundo</b>
            <br />
            del <b className="font-extrabold">trabajo.</b>
          </>
        }
      />

      <div className="max-w-[1506px] mx-auto px-4 mt-12 lg:mt-14 grid sm:grid-cols-3 gap-6 lg:gap-[67px]">
        {cards.map((c, i) => (
          <a
            key={c.href}
            href={c.href}
            className="cq relative block transition-transform hover:-translate-y-1"
          >
            <Image
              src={c.img}
              alt={c.alt}
              className="block w-full h-auto"
              sizes="(min-width: 1536px) 458px, (min-width: 640px) 31vw, 92vw"
              quality={90}
            />
            {i === 0 && (
              <p className="absolute left-[9.6%] top-[49.2%] w-[60%] text-navy text-[4.5cqw] leading-[1.08]">
                el comportamiento de la <b className="font-extrabold">oferta y demanda</b> de
                ocupaciones en las <b className="font-extrabold">regiones y sectores</b>{' '}
                <b className="font-extrabold">económicos.</b>
              </p>
            )}
          </a>
        ))}
      </div>
    </section>
  )
}
