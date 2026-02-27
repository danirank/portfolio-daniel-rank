import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  href?: string
  className?: string
  target?: string
  rel?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-[0_8px_30px_rgba(34,211,238,0.2)] hover:from-cyan-400 hover:to-indigo-400',
  secondary: 'border border-slate-600 text-slate-100 hover:border-slate-400 hover:bg-slate-800/80',
}

const baseClasses =
  'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 disabled:cursor-not-allowed disabled:opacity-60'

export function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  target,
  rel,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <a className={classes} href={href} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
