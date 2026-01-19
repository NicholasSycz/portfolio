
export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  contributions: string[];
  isProprietary?: boolean;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  description: string;
  achievements: string[];
  logo?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  level?: 'basic' | 'intermediate' | 'higher';
  description: string;
  highlights?: string[];
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum SkillLevel {
  Beginner = 40,
  Intermediate = 60,
  Advanced = 80,
  Expert = 95
}
