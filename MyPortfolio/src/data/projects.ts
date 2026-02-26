export type Project = {
  title: string
  summary: string
  tech: string[]
  highlights: string[]
  githubUrl: string
  liveUrl: string
}

export const projects: Project[] = [
  {
    title: 'Portfolio API + CI/CD',
    summary: 'A production-ready ASP.NET Core API with tests and automated delivery.',
    tech: ['ASP.NET Core', 'xUnit', 'GitHub Actions', 'Azure App Service'],
    highlights: [
      'Implemented JWT auth, health checks, and structured logging.',
      'Automated build, test, and deployment pipeline via GitHub Actions.',
      'Published OpenAPI docs and versioned endpoints for maintainability.',
    ],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Containerized Scraper Service',
    summary: 'Background worker service packaged with Docker and deployed to cloud runtime.',
    tech: ['.NET Worker', 'Docker', 'Azure Container Apps', 'Redis'],
    highlights: [
      'Scheduled scraping jobs with retry policies and telemetry.',
      'Container image build and push through CI pipeline.',
      'Cached expensive lookups to reduce external API pressure.',
    ],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Fullstack Ops Tracker',
    summary: 'A fullstack app connecting React UI, .NET API, and SQL data layer.',
    tech: ['React', 'ASP.NET Core', 'SQL Server', 'Azure SQL'],
    highlights: [
      'Built role-aware dashboard for operational metrics and alerts.',
      'Designed relational schema with indexed queries for fast reporting.',
      'Added release checks with linting, tests, and database migration steps.',
    ],
    githubUrl: '#',
    liveUrl: '#',
  },
]
