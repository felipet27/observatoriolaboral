import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Observatorio Laboral y Ocupacional - OLO SENA',
  description: 'El Observatorio Laboral y Ocupacional del SENA provee información que contribuye a la toma de decisiones de formación profesional integral y empleo.',
  keywords: 'observatorio laboral, ocupacional, SENA, empleo, mercado laboral, Colombia, vacantes',
  openGraph: {
    title: 'Observatorio Laboral y Ocupacional - OLO SENA',
    description: 'Información estratégica sobre el mercado laboral colombiano',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
