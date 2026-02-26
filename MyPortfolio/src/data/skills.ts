export type SkillGroup = {
  title: string
  icon: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    icon: '?',
    items: ['ASP.NET Core Web API', 'Entity Framework Core', 'RESTful design & auth'],
  },
  {
    title: 'Cloud/DevOps',
    icon: '?',
    items: ['Azure App Services & SQL', 'Docker & container workflows', 'GitHub Actions pipelines'],
  },
  {
    title: 'Quality',
    icon: '?',
    items: [
      'xUnit integration tests',
      'Code quality with ESLint/Prettier',
      'Monitoring, logs, and health checks',
    ],
  },
]
