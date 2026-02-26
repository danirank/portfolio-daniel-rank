import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200">
      {children}
    </span>
  )
}
