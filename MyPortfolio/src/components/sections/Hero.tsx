import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

const statusItems = [
  ['Build', 'passing'],
  ['Deploy', 'automated'],
  ['Uptime', 'monitored'],
  ['Region', 'West Europe'],
]

export function HeroSection() {
  return (
    <section id="about" className="relative border-b border-slate-800 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.16),transparent_35%)]" />
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            .NET Cloud Developer
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">
            I build reliable APIs and ship them to the cloud with CI/CD.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View Projects</Button>
            <Button href="#" variant="secondary">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
