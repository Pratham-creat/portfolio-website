export type ProjectCategory = 'all' | 'ai-ml' | 'web' | 'systems';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'ai-ml' | 'web' | 'systems';
  problem: string;
  solution: string;
  techStack: string[];
  keyFeatures: string[];
  metrics?: string;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  accentColor: string;
  architectureNotes?: string[];
}

export interface SkillItem {
  name: string;
  badge?: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  type: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'hackathon' | 'certification' | 'award';
  description: string;
  badge: string;
  skillsGained: string[];
  credentialUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
