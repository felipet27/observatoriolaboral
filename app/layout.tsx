import type { Metadata, Viewport } from 'next'
import { Work_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'
import { siteDescription, siteName, siteUrl } from '@/lib/site'
import SkipLink from '@/components/SkipLink'
import './globals.css'

const workSans = Work_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-work-sans',
})

// Work Sans ExtraBold sin contornos solapados, para los títulos contorneados
const workSansContorno = localFont({
  src: './fonts/WorkSans-ExtraBold-contorno.woff2',
  weight: '800',
  display: 'swap',
  variable: '--font-contorno',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  keywords: [
    'observatorio laboral',
    'observatorio ocupacional',
    'SENA',
    'empleo',
    'mercado laboral',
    'ocupaciones',
    'vacantes',
    'Colombia',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: '/',
    siteName,
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
  },
}

export const viewport: Viewport = {
  themeColor: '#001145',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${workSans.variable} ${workSansContorno.variable}`}>
      <body>
        <SkipLink />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
