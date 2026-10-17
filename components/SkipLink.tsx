'use client'

// Permite a quien usa teclado saltar el menú e ir directo al contenido
export default function SkipLink() {
  return (
    <a
      href="#contenido"
      onClick={(e) => {
        const main = document.getElementById('contenido')
        if (!main) return
        e.preventDefault()
        main.focus()
        main.scrollIntoView()
      }}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-lima focus:px-4 focus:py-2 focus:font-semibold focus:text-navy"
    >
      Saltar al contenido
    </a>
  )
}
