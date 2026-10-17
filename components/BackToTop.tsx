'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Volver arriba"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-navy text-cyan border-2 border-cyan/60 shadow-lg shadow-black/30 flex items-center justify-center transition-all duration-300 hover:bg-cyan hover:text-navy ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp size={22} strokeWidth={2.5} />
    </button>
  )
}
