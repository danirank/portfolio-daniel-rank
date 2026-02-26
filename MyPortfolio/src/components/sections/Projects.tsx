import { projects } from '../../data/projects'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-slate-800 py-16">
      <h2 className="text-2xl font-semibold text-white">Projects</h2>
      <p className="mt-2 text-slate-300">
        Selected backend and cloud-focused projects with CI/CD workflows.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex h-full flex-col">
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{project.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold text-slate-100">Highlights</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>� {highlight}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex gap-3">
              <Button href={project.githubUrl} variant="secondary" className="px-4 py-2 text-xs">
                GitHub
              </Button>
              <Button href={project.liveUrl} className="px-4 py-2 text-xs">
                Live
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
