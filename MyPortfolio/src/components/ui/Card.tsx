import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition duration-200 hover:border-slate-700 hover:bg-slate-900/80 ${className}`}
    >
      {children}
    </div>
  )
}
