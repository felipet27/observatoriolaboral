import SectionHeading from './SectionHeading'

export default function DatosSection() {
  return (
    <section id="datos" className="bg-papel-textura pt-16 lg:pt-[70px] pb-16 lg:pb-[70px]">
      <SectionHeading
        left={
          <span className="block text-right">
            Conoce
            <br />
            <b className="font-extrabold">más</b>
          </span>
        }
        word="Datos OLO"
      />
    </section>
  )
}
