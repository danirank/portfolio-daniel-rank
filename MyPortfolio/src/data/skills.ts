export type SkillGroup = {
  title: string
  icon: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Tech stack',
    icon: '⚙',
    items: [
      'ASP.NET Core Web API',
      'React + TypeScript',
      'Entity Framework Core',
      'SQL Server & MongoDB',
      'Docker',
      'GitHub Actions',
      'JWT & Microsoft Identity',
    ],
  },
  {
    title: 'Engineering practices',
    icon: '⌨',
    items: [
      'Layered architecture (Controller → Service → Repository)',
      'TDD-driven service layer development',
      'Automated unit testing',
      'CI pipelines with build and test gates',
      'AI-assisted prototyping and refactoring',
    ],
  },
  {
    title: 'Soft skills',
    icon: '✦',
    items: [
      'Team-oriented and collaborative',
      'Strong relationship-building and communication skills',
      'Structured and analytical problem-solving',
      'High ownership and accountability',
      'Continuous improvement mindset',
    ],
  },
]