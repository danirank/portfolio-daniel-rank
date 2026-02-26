import { Card } from '../ui/Card'

const nodes = [
  { title: 'Frontend (React)', bullets: ['Dashboard and forms', 'Secure API consumption'] },
  { title: 'API (.NET)', bullets: ['Business rules & auth', 'Versioned REST endpoints'] },
  { title: 'DB (SQL)', bullets: ['Relational storage', 'Indexed queries'] },
  { title: 'Cache/Queue', bullets: ['Fast reads', 'Async workloads'] },
  { title: 'Cloud (Azure)', bullets: ['Hosting and scaling', 'Monitoring + alerts'] },
]

export function ArchitectureSection() {
  return (
    <section id="architecture" className="border-b border-slate-800 py-16">
      <h2 className="text-2xl font-semibold text-white">Architecture</h2>
      <p className="mt-2 text-slate-300">
        Typical cloud-ready architecture for scalable .NET systems.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {nodes.map((node, index) => (
          <div key={node.title} className="flex items-center gap-3">
            <Card className="min-w-48">
              <h3 className="text-sm font-semibold text-white">{node.title}</h3>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                {node.bullets.map((bullet) => (
                  <li key={bullet}>� {bullet}</li>
                ))}
              </ul>
            </Card>
            {index < nodes.length - 1 && <span className="text-slate-500">?</span>}
          </div>
        ))}
      </div>
    </section>
  )
}
