export interface WorkExperience {
  id: string;
  company: string;
  /** Company site — makes the logo and name a link. */
  url?: string;
  /** Path under /public, e.g. '/images/aci-logo.png'. */
  logo?: string;
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
  /** Path under /public, e.g. '/images/kcl.png'. */
  logo?: string;
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

export interface PostMeta {
  title: string;
  excerpt: string;
  author: string;
  authorTitle?: string;
  publishedDate: string;
  category?: string;
  tags?: string[];
  readTime?: string;
  image?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  /** Repo or live site — makes the name a link. */
  url?: string;
  /** Short right-hand label, e.g. 'Agent layer'. */
  category?: string;
  /** Path under /public. */
  image?: string;
  technologies?: string[];
  featured: boolean;
}

export interface PortfolioData {
  projects: Project[];
  workExperience: WorkExperience[];
  education: Education[];
  recentAchievements: Achievement[];
}
