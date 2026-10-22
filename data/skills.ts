import { SkillItem } from "@/types/portfolio";

export const skillCategories = [
  { id: "all", label: "Semua Skill" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools & DevOps" },
] as const;

export const skillsData: SkillItem[] = [
  // Frontend
  {
    name: "Next.js",
    category: "frontend",
    description: "App Router, Server Components, SSR/SSG, SEO & API routes",
    isFeatured: true,
  },
  {
    name: "React",
    category: "frontend",
    description: "Component architecture, custom hooks, state management & virtual DOM",
    isFeatured: true,
  },
  {
    name: "TypeScript",
    category: "frontend",
    description: "Type safety, interfaces, generics, and strict compile-time checks",
    isFeatured: true,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    description: "Utility-first CSS, responsive layouts, theme tokens & modern UI",
    isFeatured: true,
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    description: "Async/await, closures, modern ES features, DOM manipulation",
    isFeatured: false,
  },
  {
    name: "HTML5",
    category: "frontend",
    description: "Semantic elements, SEO structure, accessibility (a11y) standards",
    isFeatured: false,
  },
  {
    name: "CSS3",
    category: "frontend",
    description: "Flexbox, CSS Grid, custom keyframe animations & responsive design",
    isFeatured: false,
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    description: "Event-driven asynchronous JavaScript runtime for server-side applications",
    isFeatured: true,
  },
  {
    name: "Express.js",
    category: "backend",
    description: "RESTful routing, middleware pipelines, error handling & request handling",
    isFeatured: true,
  },
  {
    name: "REST API",
    category: "backend",
    description: "Standard HTTP methods, status codes, JSON payload design & versioning",
    isFeatured: true,
  },
  {
    name: "Authentication & Authorization",
    category: "backend",
    description: "JWT, HTTP-only cookie sessions, role-based access control (RBAC)",
    isFeatured: true,
  },

  // Database
  {
    name: "PostgreSQL",
    category: "database",
    description: "Relational database, relational schema design, indexes & ACID transactions",
    isFeatured: true,
  },
  {
    name: "MySQL",
    category: "database",
    description: "Relational modeling, complex queries, foreign keys & query optimization",
    isFeatured: false,
  },
  {
    name: "Supabase",
    category: "database",
    description: "Cloud PostgreSQL, Row Level Security (RLS), realtime storage & Auth",
    isFeatured: true,
  },

  // Tools
  {
    name: "Git & GitHub",
    category: "tools",
    description: "Version control, branching workflows, PRs, code review & collaboration",
    isFeatured: true,
  },
  {
    name: "Vercel",
    category: "tools",
    description: "Zero-config deployment, preview environments, edge runtime & analytics",
    isFeatured: true,
  },
  {
    name: "Docker",
    category: "tools",
    description: "Containerization, multi-stage Dockerfiles & development environments",
    isFeatured: false,
  },
  {
    name: "Postman",
    category: "tools",
    description: "API testing, automated endpoint collections & environment variables",
    isFeatured: false,
  },
  {
    name: "VS Code",
    category: "tools",
    description: "Primary editor with custom snippets, debugging & linting workflow",
    isFeatured: false,
  },
];
