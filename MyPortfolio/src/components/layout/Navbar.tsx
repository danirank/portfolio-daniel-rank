import { useState } from 'react'
import { Button } from '../ui/Button'
import { Container } from './Container'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a className="text-lg font-bold tracking-tight text-white" href="#about">
          Daniel Ränk
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="px-4 py-2 text-xs">
            Get in touch
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-200 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? '�' : '?'}
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-cyan-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" className="w-full justify-center">
              Get in touch
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
