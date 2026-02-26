import { Card } from '../ui/Card'

const pipelineSteps = ['Commit', 'Build', 'Test', 'Dockerize', 'Deploy']

export function CICDSection() {
  return (
    <section id="cicd" className="border-b border-slate-800 py-16">
      <h2 className="text-2xl font-semibold text-white">CI/CD Pipeline</h2>
      <p className="mt-2 text-slate-300">
        GitHub Actions validates each commit, runs tests, builds containers, and deploys to Azure
        environments.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {pipelineSteps.map((step) => (
          <Card key={step} className="p-4 text-center">
            <p className="text-sm font-semibold text-cyan-200">{step}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
