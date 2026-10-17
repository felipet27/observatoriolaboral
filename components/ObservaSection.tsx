import SectionHeading from './SectionHeading'

const cards = [
  { img: '/img/observa-1.jpg', alt: 'Monitoreo del mercado', href: '#demanda' },
  { img: '/img/observa-2.jpg', alt: 'Orientación y formación', href: '#servicios' },
  { img: '/img/observa-3.jpg', alt: 'Generación de alertas', href: '#alertas' },
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
            key={c.alt}
            href={c.href}
            className="cq relative block transition-transform hover:-translate-y-1"
          >
            <img src={c.img} alt={c.alt} className="block w-full h-auto" />
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
