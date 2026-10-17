import type { ReactNode } from 'react'

// Encabezado con palabra contorneada al centro y líneas laterales
export default function SectionHeading({
  left,
  word,
  right,
}: {
  left?: ReactNode
  word: string
  right?: ReactNode
}) {
  return (
    <div className="flex items-center gap-4 lg:gap-8">
      <span className="hidden md:block h-[2px] flex-1 bg-navy" />
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 lg:gap-8 text-navy px-4 md:px-0">
        {left && (
          <div className="text-[clamp(1.1rem,2.1vw,2.4rem)] leading-[1.1] font-medium text-left">
            {left}
          </div>
        )}
        <h2 className="texto-contorno text-[clamp(3rem,7.8vw,9.5rem)] leading-none uppercase">
          {word}
        </h2>
        {right && (
          <div className="text-[clamp(1.1rem,2.1vw,2.4rem)] leading-[1.1] font-medium text-left">
            {right}
          </div>
        )}
      </div>
      <span className="hidden md:block h-[2px] flex-1 bg-navy" />
    </div>
  )
}
