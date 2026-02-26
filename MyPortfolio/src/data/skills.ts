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
      'Docker & GitHub Actions',
    ],
  },
  {
    title: 'Soft skills',
    icon: '✦',
    items: [
      'Team-oriented and easy to collaborate with',
      'Strong relationship-building and communication skills',
      'Structured and analytical problem-solving',
      'High sense of responsibility and follow-through',
      'Driven by continuous learning and improvement',
    ],
  },
  {
    title: 'Engineering practices',
    icon: '⌨',
    items: [
      'TDD in service-layer workflows',
      'Unit testing with xUnit and Moq',
      'Clean layering: Controller -> Service -> Repository',
      'CI pipelines with build and test gates',
    ],
  },
]
