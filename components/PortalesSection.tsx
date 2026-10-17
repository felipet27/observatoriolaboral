import Image from 'next/image'
import { img } from '@/lib/images'

const logos = [
  { img: img.logoSenaVerde, alt: 'SENA', href: 'https://www.sena.edu.co', w: 'w-[130px]' },
  { img: img.logoFondoEmprender, alt: 'Fondo Emprender', href: 'https://www.fondoemprender.com', w: 'w-[410px]' },
  { img: img.logoApe, alt: 'Agencia Pública de Empleo', href: 'https://ape.sena.edu.co', w: 'w-[335px]' },
]

// Muesca en flecha hacia la derecha entre bloques
const notch = 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 63%, 6.8% 50%, 0 37%)'

const portales = [
  { label: ['Molestia referente', 'a PQRS'], icon: img.portal1, bg: 'bg-navy', clip: undefined },
  { label: ['Denuncia por', 'corrupción'], icon: img.portal2, bg: 'bg-lima', clip: notch },
  { label: ['Transparencia'], icon: img.portal3, bg: 'bg-cyan', clip: notch },
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
        {portales.map(({ label, icon, bg, clip }, i) => (
          <a
            key={label[0]}
            href="#"
            className={`${bg} relative flex flex-col items-center justify-center text-white font-bold text-center text-[clamp(1.4rem,2.2vw,2.6rem)] leading-[1.2] h-[300px] lg:h-[366px] ${i > 0 ? 'md:-ml-[44px]' : ''}`}
            style={clip ? { clipPath: clip } : undefined}
          >
            <Image src={icon} alt="" className="w-[120px] lg:w-[150px] h-auto mb-8" />
            {label.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </a>
        ))}
      </div>
    </section>
  )
}
