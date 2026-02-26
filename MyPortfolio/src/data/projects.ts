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
    summary: 'Fullstack auction platform with tested ASP.NET Core APIs and automated CI builds.',
    tech: ['ASP.NET Core Web API', 'Microsoft Identity', 'React', 'xUnit', 'Moq', 'GitHub Actions'],
    highlights: [
      'Implements a layered flow: Controller → Service → Repository.',
      'Service layer was developed using a TDD-first workflow.',
      'Unit tests cover core service behavior with xUnit + Moq.',
      'GitHub Actions runs automated build and test steps on push.',
    ],
    githubUrl: 'https://github.com/danirank/AuctionPlatform',
    proofBadges: ['TDD', 'Layered Architecture', 'Automated Tests', 'CI Pipeline'],
  },

  {
    title: 'Bookstore Admin Tool',
    summary: 'WPF admin tool for SQL-backed CRUD management of bookstore data.',
    tech: ['WPF', 'C#', 'MVVM', 'Entity Framework (Database First)', 'SQL Server'],
    highlights: [
      'CRUD for books, authors, stores, and inventory.',
      'MVVM structure separates UI, state, and data access concerns.',
      'Runs against a SQL Server database restore (BookstoreDB backup).',
    ],
    githubUrl: 'https://github.com/danirank/BookstoreAdminWpfInlmning2',
    proofBadges: ['MVVM Architecture', 'Relational CRUD', 'Database-First Modeling'],
  },

  {
    title: 'BlogPost API',
    summary: 'ASP.NET Core REST API with JWT auth, DTO mapping, and a structured service layer.',
    tech: [
      '.NET 10',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'SQL Server',
      'JWT Bearer Auth',
      'AutoMapper',
      'Swagger/OpenAPI',
      'Microsoft Identity',
    ],
    highlights: [
      'CRUD endpoints for BlogPosts and related Comments.',
      'Protected routes using [Authorize] with JWT Bearer authentication.',
      'DTO + service layer structure using a ServiceResult pattern.',
    ],
    githubUrl: 'https://github.com/danirank/BlogPostApi',
    proofBadges: ['Auth & Authorization', 'Service Layer Pattern', 'DTO Mapping', 'OpenAPI Documentation'],
  },

  {
    title: 'WorkoutLogger',
    summary: 'Workout logging app with an API-first setup and MongoDB persistence.',
    tech: ['Blazor', 'ASP.NET Core API', 'MongoDB'],
    highlights: [
      'Designed for API-first startup (API runs before the UI).',
      'Includes a seeding endpoint to populate exercise data.',
      'MongoDB connection is configured through a MongoContext abstraction.',
    ],
    githubUrl: 'https://github.com/danirank/WorkoutLogger',
    proofBadges: ['API-First Workflow', 'NoSQL Persistence', 'Seeding & Bootstrapping'],
  },

  {
    title: 'RSA Encryption',
    summary: 'Educational project demonstrating RSA public/private key cryptography concepts.',
    tech: ['C#', 'Cryptography', 'RSA'],
    highlights: [
      'Explains RSA key generation using large prime numbers.',
      'Demonstrates public key encryption and private key decryption roles.',
      'Covers signatures and secure communication at a conceptual level.',
    ],
    githubUrl: 'https://github.com/danirank/RSAkryptering',
    proofBadges: ['Security Fundamentals', 'Public-Key Cryptography', 'Conceptual Documentation'],
  },
]