export interface ProfileInfo {
  name: string;
  role: string;
  username: string;
  tagline: string;
  subheadline: string;
  aboutIntro: string;
  aboutDetails: string[];
  location: string;
  email: string;
  github: string;
  instagram: string;
  website: string;
  status: {
    isOpenToWork: boolean;
    label: string;
  };
  cvUrl: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  iconName?: string;
  levelBadge?: string;
  description: string;
  isFeatured?: boolean;
}

export type ProjectCategory = "all" | "fullstack" | "frontend" | "backend" | "webapp";

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  summary: string;
  problemSolved: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  isFeatured: boolean;
  statusBadge: "Live Production" | "Demo Project" | "In Development" | "Case Study";
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  institutionOrRole: string;
  category: "journey" | "education" | "project";
  description: string;
  highlights: string[];
  isCurrent?: boolean;
}

export interface GitHubStats {
  username: string;
  publicRepos: number;
  followers: number;
  following: number;
  avatarUrl: string;
  profileUrl: string;
  bio: string;
  topRepos: {
    name: string;
    description: string;
    url: string;
    stars: number;
    forks: number;
    language: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  _honeypot?: string;
}
