export type Project = {
  title: string
  summary: string
  tech: string[]
  highlights: string[]
  githubUrl: string
  liveUrl?: string
  proofBadges?: string[]
}

export const projects: Project[] = [
  {
    title: 'Auction Platform',
    summary:
      'Fullstack auction platform featuring tested ASP.NET Core APIs and automated CI workflows.',
    tech: [
      'ASP.NET Core Web API',
      'Microsoft Identity',
      'React',
      'xUnit',
      'Moq',
      'GitHub Actions',
    ],
    highlights: [
      'Implements layered architecture (Controller → Service → Repository).',
      'Develops the service layer using a TDD-first workflow.',
      'Ensures core business logic correctness with xUnit and Moq.',
      'Automates build and test pipelines via GitHub Actions.',
    ],
    githubUrl: 'https://github.com/danirank/AuctionPlatform',
    proofBadges: ['TDD', 'Layered Architecture', 'Automated Testing', 'CI Pipeline'],
  },

  {
    title: 'Bookstore Admin Tool',
    summary:
      'WPF administration tool managing bookstore data through a SQL-backed CRUD architecture.',
    tech: [
      'WPF',
      'C#',
      'MVVM',
      'Entity Framework (Database First)',
      'SQL Server',
    ],
    highlights: [
      'Implements full CRUD operations for books, authors, stores, and inventory.',
      'Applies MVVM to separate UI logic, state management, and data access.',
      'Connects to a restored SQL Server database (BookstoreDB).',
    ],
    githubUrl:
      'https://github.com/danirank/BookstoreAdminWpfInlmning2',
    proofBadges: [
      'MVVM Architecture',
      'Relational Data Modeling',
      'Database First Approach',
    ],
  },
  {
    title: 'WorkoutLogger',
    summary:
      'Workout tracking system built with an API-first approach and MongoDB persistence.',
    tech: ['Blazor', 'ASP.NET Core API', 'MongoDB'],
    highlights: [
      'Structures the application with an API-first startup flow.',
      'Provides data seeding endpoints for initial exercise setup.',
      'Manages MongoDB access through a dedicated MongoContext abstraction.',
    ],
    githubUrl: 'https://github.com/danirank/WorkoutLogger',
    proofBadges: [
      'API First Design',
      'NoSQL Persistence',
      'Seeding Strategy',
    ],
  },


  {
    title: 'BlogPost API',
    summary:
      'ASP.NET Core REST API with JWT authentication, DTO mapping, and structured service-layer architecture.',
    tech: [
      '.NET 10',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'SQL Server',
      'JWT Bearer Authentication',
      'AutoMapper',
      'Swagger/OpenAPI',
      'Microsoft Identity',
    ],
    highlights: [
      'Implements CRUD endpoints for BlogPosts and related Comments.',
      'Secures protected routes using JWT and [Authorize] policies.',
      'Applies DTO mapping and a ServiceResult pattern for clean separation of concerns.',
    ],
    githubUrl: 'https://github.com/danirank/BlogPostApi',
    proofBadges: [
      'Authentication & Authorization',
      'Service Layer Pattern',
      'DTO Mapping',
      'OpenAPI Documentation',
    ],
  },

  
  
]