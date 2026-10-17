import Image from 'next/image'
import { img } from '@/lib/images'

export default function HeroCarousel() {
  return (
    <section id="inicio" className="bg-navy">
      <h1 className="sr-only">Observatorio Laboral y Ocupacional</h1>
      <Image
        src={img.hero}
        alt="Trabajadores con casco revisando una tableta - Observatorio Laboral y Ocupacional"
        className="block w-full max-w-olo mx-auto h-auto"
        sizes="(min-width: 1920px) 1920px, 100vw"
        quality={85}
        placeholder="blur"
        priority
      />
    </section>
  )
}
