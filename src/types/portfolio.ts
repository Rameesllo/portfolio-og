export type ProjectCategory = 'All' | 'Web Apps' | 'Full Stack' | 'Management Systems' | 'Games' | 'Messaging Web App';

export interface ArchitectureNode {
  label: string;
  subtext: string;
  iconName: string;
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  role: string;
  year: string;
  stack: string[];
  image: string;
  gallery: { url: string; title: string; caption: string }[];
  overview: string;
  problem: string;
  solution: string;
  features: { title: string; description: string; icon: string }[];
  architectureNodes: ArchitectureNode[];
  challenges: ChallengeSolution[];
  results: { metric: string; label: string }[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  id: string;
  number: string;
  name: string;
  description: string;
  tags: string[];
  icon: string;
  level: string;
  category: string;
}

export interface ExperienceItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface StatItem {
  number: string;
  label: string;
  description: string;
}
