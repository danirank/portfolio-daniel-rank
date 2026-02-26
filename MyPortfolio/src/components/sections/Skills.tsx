import { skillGroups } from '../../data/skills'
import { Card } from '../ui/Card'

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-slate-800 py-16">
      <h2 className="text-2xl font-semibold text-white">Skills</h2>
      <p className="mt-2 text-slate-300">
        Focused on reliable backend systems and practical cloud delivery.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <p className="text-2xl" aria-hidden="true">
              {group.icon}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {group.items.map((item) => (
                <li key={item}>� {item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
}
