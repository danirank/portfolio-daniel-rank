import { useState } from 'react'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export function ContactSection() {
  const [message, setMessage] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('Form submission is coming soon.')
  }

  return (
    <section id="contact" className="py-16">
      <h2 className="text-2xl font-semibold text-white">Contact</h2>
      <p className="mt-2 text-slate-300">
        Let�s connect about backend, cloud engineering, and new opportunities.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm text-slate-200">
              Name
              <input className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100" />
            </label>
            <label className="block text-sm text-slate-200">
              Email
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
              />
            </label>
            <label className="block text-sm text-slate-200">
              Message
              <textarea className="mt-1 h-28 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100" />
            </label>
            <Button type="submit">Send message</Button>
            {message && <p className="text-sm text-cyan-300">{message}</p>}
          </form>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white">Find me online</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <a className="text-slate-300 transition hover:text-cyan-300" href="#">
              LinkedIn
            </a>
            <a className="text-slate-300 transition hover:text-cyan-300" href="#">
              GitHub
            </a>
            <a
              className="text-slate-300 transition hover:text-cyan-300"
              href="mailto:hello@example.com"
            >
              hello@example.com
            </a>
          </div>
        </Card>
      </div>
    </section>
  )
}
