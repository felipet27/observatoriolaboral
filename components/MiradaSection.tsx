import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { img } from '@/lib/images'

const publicaciones = [
  { img: img.pub1, alt: 'OLO: El rostro de la esperanza - Boletín vinculación víctimas', href: '#' },
  { img: img.pub2, alt: 'Estas habilidades obtuvieron una calificación superior a 4 sobre 5', href: '#' },
  { img: img.pub3, alt: 'Pensamiento independiente', href: '#' },
]

// Medidas proporcionales al diseño de 1920px para conservar la composición en cualquier ancho
export default function MiradaSection() {
  return (
    <section id="mirada" className="bg-papel-textura relative overflow-hidden">
      <div className="relative max-w-olo mx-auto pt-12 lg:pt-[min(10.4vw,200px)] pb-10 lg:pb-[min(2vw,40px)]">
        {/* Marca de agua SENA */}
        <span
          aria-hidden
          className="hidden lg:block absolute left-[38.5%] top-[min(1.5vw,28px)] font-bold text-[#d9d9d9]/80 text-[20.5vw] min-[1920px]:text-[394px] leading-none tracking-tight select-none pointer-events-none"
        >
          SENA
        </span>

        <Image
          src={img.revista}
          sizes="(min-width: 1920px) 755px, (min-width: 1024px) 40vw, 80vw"
          alt="Revista Mirada OLO: Vinculación de Egresados 2023-2, Enfoque Diferencial e Interseccional"
          className="w-[80%] max-w-[560px] mx-auto mb-10 lg:mb-0 lg:max-w-none lg:absolute lg:left-[4.7%] lg:top-[min(7.1vw,136px)] lg:w-[39.3%] h-auto"
        />

        <div className="relative px-4 lg:px-0 lg:ml-[43.3%] lg:w-[52%]">
          <h2 className="text-navy font-semibold text-[clamp(2.6rem,4.6vw,5.5rem)] leading-none">
            Mirada OLO
          </h2>
          <div className="mt-[0.5em] space-y-[1.2em] text-navy text-[clamp(1rem,1.62vw,1.95rem)] leading-[1.25]">
            <p>
              Las publicaciones del Observatorio Laboral y Ocupacional del SENA buscan ir más allá
              de presentar cifras: Analizan, interpretan y traducen los datos para convertirlos en
              conocimiento útil.
            </p>
            <p>
              Cada publicación permite comprender mejor las dinámicas del empleo y las ocupaciones,
              explicar qué está ocurriendo y aportar información clara para orientar decisiones.
            </p>
          </div>

          <div className="mt-[min(1.8vw,35px)] lg:ml-[1.6%] lg:w-[93.5%] border-2 border-navy rounded-[min(2vw,36px)] px-[6%] py-[min(1.3vw,24px)] grid grid-cols-3 gap-[6.5%]">
            {publicaciones.map((p) => (
              <div key={p.alt} className="flex flex-col items-center">
                <Image
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-auto rounded-md"
                  sizes="(min-width: 1920px) 233px, (min-width: 1024px) 13vw, 28vw"
                  quality={85}
                />
                <a href={p.href} className="mt-[6%] flex items-center gap-[6%] w-full justify-center group">
                  <span className="w-[clamp(18px,1.5vw,28px)] aspect-square shrink-0 rounded-full bg-navy text-white flex items-center justify-center">
                    <ArrowDown className="w-1/2 h-1/2" strokeWidth={3} />
                  </span>
                  <span className="bg-navy text-white font-bold text-[clamp(0.75rem,0.95vw,1.15rem)] px-[12%] py-[0.2em] rounded-sm group-hover:bg-gov transition-colors">
                    Descargar
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
