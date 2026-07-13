export interface Research {
  id: string;
  title: string;
  description: string;
  category: string;
  githubUrl: string;
  startDate: string;
  endDate: string; // ISO date or 'present'
  status: string;
  technologies: string[];
  collaborators: string[];
  publications: string[];
  featured: boolean;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string; // ISO date or 'present'
  highlights: string[];
  featured: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  featured: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle?: string;
  description: string | null;
  category: string;
  date: string;
  period?: string;
  linkedinUrl?: string;
  rank?: number | null;
  totalParticipants?: number | null;
  technologies?: string[];
  highlights?: string[];
  collaborators?: string[];
  organization?: string;
  location?: string;
  events?: string[];
  insights?: string[];
  featured: boolean;
}

export interface PortfolioData {
  recentResearch: Research[];
  workExperience: WorkExperience[];
  education: Education[];
  recentAchievements: Achievement[];
}
