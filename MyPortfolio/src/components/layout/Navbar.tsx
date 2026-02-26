import { useState } from 'react'
import { Button } from '../ui/Button'
import { Container } from './Container'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
]

const socialLinks = [
  { href: 'https://github.com/danirank', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/daniel-rank', label: 'LinkedIn' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <a className="text-lg font-bold tracking-tight text-white" href="#about">
            {'Daniel R\u00e4nk'}
          </a>

          <div className="hidden items-center gap-3 sm:flex">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-slate-300 transition hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

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
          <Button href="#projects" className="px-4 py-2 text-xs">
            View projects
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-200 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <span className="text-base font-semibold leading-none">X</span>
          ) : (
            <span className="flex flex-col gap-1" aria-hidden="true">
              <span className="block h-0.5 w-4 bg-slate-200" />
              <span className="block h-0.5 w-4 bg-slate-200" />
              <span className="block h-0.5 w-4 bg-slate-200" />
            </span>
          )}
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
            <div className="h-px bg-slate-800" />
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-slate-300 transition hover:text-cyan-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="#projects" className="w-full justify-center">
              View projects
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
