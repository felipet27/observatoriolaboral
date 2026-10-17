import Navbar from '@/components/Navbar'
import HeroCarousel from '@/components/HeroCarousel'
import OcupacionSection from '@/components/OcupacionSection'
import ObservaSection from '@/components/ObservaSection'
import DemandaSection from '@/components/DemandaSection'
import ServiciosSection from '@/components/ServiciosSection'
import MujeresSection from '@/components/MujeresSection'
import MiradaSection from '@/components/MiradaSection'
import DatosSection from '@/components/DatosSection'
import AlertasSection from '@/components/AlertasSection'
import PortalesSection from '@/components/PortalesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroCarousel />
      <OcupacionSection />
      <ObservaSection />
      <DemandaSection />
      <ServiciosSection />
      <MujeresSection />
      <MiradaSection />
      <DatosSection />
      <AlertasSection />
      <PortalesSection />
      <Footer />
    </main>
  )
}
