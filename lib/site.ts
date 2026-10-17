// URL pública del sitio. En Vercel se toma automáticamente del dominio de producción.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : vercelUrl
    ? `https://${vercelUrl}`
    : 'http://localhost:3000'

export const siteName = 'Observatorio Laboral y Ocupacional - OLO SENA'

export const siteDescription =
  'El Observatorio Laboral y Ocupacional del SENA provee información a nivel nacional que contribuye a la orientación de acciones de formación, emprendimiento y empleo, y genera alertas de proyectos de inversión en las regiones.'
