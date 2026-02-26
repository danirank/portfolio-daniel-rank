import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <Container className="flex flex-col items-center justify-between gap-3 text-sm text-slate-400 md:flex-row">
        <p>� {new Date().getFullYear()} Daniel - .NET Cloud Developer</p>
        <p>Built with React, TypeScript, Tailwind</p>
      </Container>
    </footer>
  )
}
