import { projects } from '../../data/projects'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export function ProjectsSection() {
  const hasRealUrl = (url?: string) => Boolean(url && url.trim() && url !== '#')

  return (
    <section id="projects" className="border-b border-slate-800 py-16">
      <h2 className="text-2xl font-semibold text-white">Projects</h2>
      <p className="mt-2 text-slate-300">
        Selected backend and cloud-focused projects.
      </p>

      <div className="mt-8 overflow-x-auto pb-2">
        <div className="flex gap-6 snap-x snap-mandatory">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex h-full min-w-[85%] snap-start flex-col sm:min-w-[70%] lg:min-w-[calc((100%-3rem)/3)]"
            >
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
                    <li key={highlight}>- {highlight}</li>
                  ))}
                </ul>
              </div>

              {project.proofBadges && project.proofBadges.length > 0 && (
                <div className="mt-4 border-t border-slate-800 pt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Design
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.proofBadges.map((proof) => (
                      <Badge key={proof}>{proof}</Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 flex gap-3">
                {hasRealUrl(project.githubUrl) && (
                  <Button
                    href={project.githubUrl}
                    variant="secondary"
                    className="px-4 py-2 text-xs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </Button>
                )}
                {hasRealUrl(project.liveUrl) && (
                  <Button href={project.liveUrl} className="px-4 py-2 text-xs">
                    Live
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
