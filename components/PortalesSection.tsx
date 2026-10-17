import Image from 'next/image'
import { img } from '@/lib/images'

const logos = [
  { img: img.logoSenaVerde, alt: 'SENA', href: 'https://www.sena.edu.co', w: 'w-[130px]' },
  { img: img.logoFondoEmprender, alt: 'Fondo Emprender', href: 'https://www.fondoemprender.com', w: 'w-[410px]' },
  { img: img.logoApe, alt: 'Agencia Pública de Empleo', href: 'https://ape.sena.edu.co', w: 'w-[335px]' },
]

// z decreciente: la punta de cada bloque se pinta encima del bloque siguiente
const portales = [
  { label: ['Molestia referente', 'a PQRS'], icon: img.portal1, bg: 'bg-navy', z: 'z-30' },
  { label: ['Denuncia por', 'corrupción'], icon: img.portal2, bg: 'bg-lima', z: 'z-20' },
  { label: ['Transparencia'], icon: img.portal3, bg: 'bg-cyan', z: 'z-10' },
]

export default function PortalesSection() {
  return (
    <section id="portales" className="bg-white">
      <div className="max-w-olo mx-auto px-4 lg:px-[80px] pt-14 lg:pt-[55px]">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-0">
          {logos.map((l, i) => (
            <div key={l.alt} className="flex items-center">
              {i > 0 && <span className="hidden lg:block w-[3px] h-[106px] bg-[#7a7a7a] mx-[120px]" />}
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                <Image src={l.img} alt={l.alt} className={`${l.w} max-w-full h-auto`} />
              </a>
            </div>
          ))}
        </div>
        <h2 className="mt-14 lg:mt-[62px] mb-10 lg:mb-[42px] text-navy font-semibold text-[clamp(1.6rem,2.2vw,2.6rem)]">
          Portales Externos
        </h2>
      </div>

      <div className="grid md:grid-cols-3">
        {portales.map(({ label, icon, bg, z }, i) => (
          <a
            key={label[0]}
            href="#"
            className={`${bg} ${z} relative flex items-center gap-5 px-8 h-[132px] text-left text-white font-bold text-[1.35rem] leading-[1.2] md:flex-col md:justify-center md:gap-0 md:px-0 md:text-center md:text-[clamp(1.4rem,2.2vw,2.6rem)] md:h-[300px] lg:h-[366px]`}
          >
            {i < portales.length - 1 && (
              <>
                {/* Franja de 1px que cubre la unión entre bloques */}
                <span aria-hidden className="hidden md:block absolute inset-y-0 -right-px w-[2px] bg-inherit" />
                {/* Punta de flecha sobre el bloque siguiente */}
                <span
                  aria-hidden
                  className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-[44px] w-[45px] h-[26%] bg-inherit [clip-path:polygon(0_0,100%_50%,0_100%)]"
                />
                {/* En celular los bloques se apilan: la unión y la flecha apuntan hacia abajo */}
                <span aria-hidden className="md:hidden absolute inset-x-0 -bottom-px h-[2px] bg-inherit" />
                <span
                  aria-hidden
                  className="md:hidden absolute left-1/2 -translate-x-1/2 -bottom-[26px] w-[64px] h-[27px] bg-inherit [clip-path:polygon(0_0,100%_0,50%_100%)]"
                />
              </>
            )}
            <Image src={icon} alt="" className="w-[76px] md:w-[120px] lg:w-[150px] h-auto shrink-0 md:mb-8" />
            <span className="flex flex-col">
              {label.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
