import { useState } from 'react'
import { Button } from '../ui/Button'
import profileImage from '../../assets/CvKvadCloudBg.jpg'

// TODO: Implement background - teacher, education. Short and concise description
export function HeroSection() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="about" className="relative border-b border-slate-800 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.07),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent_35%)]" />
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Portfolio</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{'Daniel R\u00e4nk'}</h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">
            Backend-focused .NET Developer building scalable APIs and cloud ready systems.
          </p>
          <p className="mt-1 max-w-xl text-lg text-slate-300">
            Currently studying .NET Cloud Development and looking to contribute as a LIA,
             intern, summer developer, or junior backend engineer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View Projects</Button>
            <Button type="button" variant="secondary" onClick={() => setShowMore((prev) => !prev)}>
              {showMore ? 'Show less' : 'My background'}
            </Button>
          </div>
          {showMore && (
            <div className="mt-5 max-w-xl rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-sm text-slate-300">
              <p>
                Im currently studying .NET Cloud Development with a strong focus on backend systems and architecture.
                Alongside my studies, I actively build projects centered around structured design and maintainable
                system development.
              </p>
              <p className="mt-3">
                With a background in mathematics and experience as a teacher, Ive always been drawn to analytical
                thinking, clarity, and problem solving. Those qualities naturally guide how I approach software
                engineering with structure, intention, and long term perspective.
              </p>
              <p className="mt-3">
                I enjoy designing layered APIs, separating concerns clearly, and building systems that are
                understandable, testable, and built to evolve over time.
              </p>
              <p className="mt-3">
                Im now looking to contribute to a development team where I can continue growing, take responsibility,
                and help build reliable backend systems in a collaborative environment.
              </p>
            </div>
          )}
        </div>

        <div className="order-first mx-auto w-full max-w-xs lg:order-none lg:ml-auto lg:mr-0 lg:max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/50 shadow-[0_20px_50px_rgba(2,6,23,0.55)]">
            <img
              src={profileImage}
              alt="Portrait of Daniel, .NET cloud developer"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
