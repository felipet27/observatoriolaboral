# Observatorio Laboral y Ocupacional (OLO) — Sitio web

Sitio web informativo del **Observatorio Laboral y Ocupacional (OLO)** del Servicio Nacional de Aprendizaje (SENA) de Colombia.

El Observatorio produce y divulga información sobre el mercado laboral del país: qué ocupaciones se demandan, en qué regiones y sectores, y qué tan pertinente es la formación frente a esas necesidades. Su propósito es orientar las acciones de formación, emprendimiento y empleo, además de generar alertas sobre proyectos de inversión con potencial de creación de empleo en las regiones.

> En Colombia, el SENA no solo forma, también **observa** el mundo del trabajo.

---

## Contenido del sitio

La página es una *landing* de una sola vista organizada en las siguientes secciones:

| Sección | Descripción |
|---|---|
| **Inicio** | Presentación del Observatorio Laboral y Ocupacional. |
| **¿Sabes qué es una ocupación?** | Define una ocupación como el conjunto de cargos, empleos u oficios con categorías homogéneas de funciones, e incluye el buscador de ocupaciones colombianas. |
| **Observa** | Las tres líneas de trabajo del Observatorio: monitoreo del mercado, orientación y formación, y generación de alertas. |
| **La demanda laboral en el territorio** | Infografía con las vacantes y las principales ocupaciones demandadas por departamento. |
| **Servicios** | Lo que mide el OLO: tasa de vinculación laboral de los egresados, tasa de empleabilidad en formación complementaria y certificaciones, y pertinencia de la formación. |
| **El dato OLO** | Cifras destacadas sobre la población formada y certificada, con enfoque diferencial. |
| **Mirada OLO** | Publicaciones del Observatorio que analizan, interpretan y traducen los datos en conocimiento útil, disponibles para descarga. |
| **Alertas de proyectos de inversión** | Proyectos identificados por región, con su valor estimado y su potencial de generación de empleo. |
| **Portales externos** | Accesos al SENA, Fondo Emprender y la Agencia Pública de Empleo, y a los canales de PQRS, denuncia por corrupción y transparencia. |

---

## Tecnologías

- [Next.js 14](https://nextjs.org/) (App Router) con React 18
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Embla Carousel](https://www.embla-carousel.com/) para los carruseles
- [Lucide](https://lucide.dev/) para los íconos de la interfaz
- Tipografía [Work Sans](https://fonts.google.com/specimen/Work+Sans)

El sitio es estático: no requiere base de datos ni variables de entorno.

---

## Estructura del proyecto

```
app/
  layout.tsx          Metadatos y estructura base del documento
  page.tsx            Composición de la página principal
  globals.css         Estilos globales, texturas y tipografías
  favicon.ico, icon.png, apple-icon.png
components/           Una sección del sitio por componente
public/
  img/                Imágenes, logotipos y texturas
  fonts/              Tipografía para los títulos contorneados
```

---

## Ejecución local

Requisitos: [Node.js](https://nodejs.org/) 18.17 o superior.

```bash
npm install
npm run dev
```

El sitio queda disponible en `http://localhost:3000`.

Otros comandos:

```bash
npm run build   # compila la versión de producción
npm run start   # sirve la versión compilada
npm run lint    # revisa el código
```

---

## Despliegue

El proyecto está preparado para desplegarse en [Vercel](https://vercel.com/): al importar el repositorio se detecta Next.js automáticamente y no se necesita configuración adicional. Cada cambio publicado en la rama `main` genera un nuevo despliegue.

---

## Créditos

Contenido, cifras, publicaciones e identidad visual: **Observatorio Laboral y Ocupacional — SENA**. Los logotipos del SENA, Fondo Emprender, la Agencia Pública de Empleo, el Ministerio del Trabajo y GOV.CO pertenecen a sus respectivas entidades y se usan únicamente con fines de identificación institucional.
