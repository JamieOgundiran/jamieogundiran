import type { PortfolioData } from '@/lib/types';
import { getSortableDate } from '@/lib/format';

export const portfolio = {
  /**
   * Recovered from data/portfolio-data.json (commit f3da002) plus the work
   * highlights below. Descriptions and links are as originally written.
   */
  projects: [
    {
      id: 'eidexa',
      name: 'Eidexa',
      category: 'Retrieval',
      url: 'https://eidexa.ai',
      image: '/images/eidexa.png',
      description: 'A secure multi-tenant RAG system built end-to-end.',
      technologies: ['Chrome Extension', 'FastAPI', 'Supabase', 'pgvector', 'RAG'],
      featured: true,
    },
    {
      id: 'pixel-panel',
      name: 'PixelPanel',
      category: 'Multimodal AI',
      url: 'https://www.pixelpanel.co/',
      image: '/images/pixelpanel.png',
      description:
        'End-to-end multimodal AI comic generator with panel creation, sketch refinement, and voice narration.',
      technologies: ['Next.js', 'FastAPI', 'Supabase', 'Google Gemini', 'ElevenLabs'],
      featured: true,
    },
    {
      id: 'table42',
      name: 'Table 42',
      category: 'Applied AI',
      url: 'https://github.com/JReal10/Table42',
      image: '/images/table42.jpeg',
      description:
        'AI-powered customer service and CRM platform for restaurants and cafes.',
      technologies: ['AI', 'CRM', 'Customer Service', 'Restaurant Tech'],
      featured: true,
    },
  ],
  workExperience: [
    {
      id: 'aci-dev',
      company: 'ACI.dev',
      url: 'https://aci.dev',
      logo: '/images/aci-logo.png',
      role: 'Member of Technical Staff',
      location: 'London, UK',
      startDate: '2025-05-01',
      endDate: '2026-06-01',
      highlights: [
        'Led Eidexa end-to-end with Chrome Extension, FastAPI, and Supabase/pgvector, shipping a secure multi-tenant RAG system in **1 month** with **100+ users** and **200+ knowledge entries**',
        'Supervised **4 interns**, delivered **10+ code reviews**, and conducted **12 user interviews** to improve feature reliability and adoption',
        'Designed and implemented a **two-stage AI agent eval pipeline** with concurrent output generation, LLM-based grading, and **12 custom graders**',
        'Implemented Gate22 developer docs and UI, growing the open-source MCP gateway to **130+ GitHub stars**',
        'Scaled community engagement with **2 technical blogs**, **10+ demos**, **5+ tutorials**, and partnerships with **2 open-source projects**; grew Discord from **100 to 600**, LinkedIn from **200 to 700**, and GitHub from **3.0K to 4.7K stars**',
        'Represented ACI.dev as an **invited speaker at Tahakom**, delivering a hands-on **Model Context Protocol (MCP)** workshop',
      ],
      featured: true,
    },
  ],
  education: [
    {
      id: 'kcl-msc-ai',
      logo: '/images/kcl.png',
      degree: 'Master of Science (Thesis) - Artificial Intelligence',
      institution: "King's College London",
      location: 'London, UK',
      startDate: '2024-09-01',
      endDate: '2025-09-01',
      highlights: [
        'Master\'s Thesis: "Cultural alignment of Large Language Models in African Languages"',
      ],
      featured: true,
    },
    {
      id: 'essex-bsc-cs',
      logo: '/images/essex.png',
      degree: 'Bachelor of Science - Computer Science',
      institution: 'University of Essex',
      location: 'Colchester, UK',
      startDate: '2020-09-01',
      endDate: '2023-06-01',
      highlights: [],
      featured: true,
    },
  ],
  recentAchievements: [
    {
      id: 'ai-tinkerer-ultimate-agent-winner',
      title: '1st Place Winner - AI Tinkerer Ultimate Agent Hackathon',
      description: null,
      category: 'hackathon',
      date: '2025-08-01',
      period: 'August 2025',
      linkedinUrl: 'https://showcase.elevenlabs.io/projects/p/pixel-panel',
      rank: 1,
      totalParticipants: 140,
      technologies: ['AI Agents', 'Generative AI', 'Creative AI'],
      highlights: [
        'Led a **team of 3** to **1st place** among **140+ builders**, securing the **£10K grand prize**',
        'Built PixelPanel, an AI-powered comic generator featured in the ElevenLabs showcase',
      ],
      featured: true,
    },
    {
      id: 'tech-europe-hackathons-judge',
      title: 'Judge, Speaker and Panelist - Tech Europe AI Hackathons',
      description: null,
      category: 'community',
      date: '2025-03-01',
      period: 'May 2025 - October 2025',
      linkedinUrl: 'https://techeurope.io/hackathons/paris-ai-hackathon-2025',
      rank: null,
      totalParticipants: 1000,
      technologies: ['AI Ecosystems', 'Community Building'],
      highlights: [
        "Represented Tech Europe, one of Europe's largest AI builder networks, as **judge, speaker, and panelist** across **9 hackathons**",
        'Helped unite **1,000+ builders** across London, Berlin, Paris, and Stockholm through live mentorship and evaluation',
      ],
      featured: true,
    },
    {
      id: 'ai-engine-warsaw-mentor',
      title: 'Judge, Mentor and Panelist - AI Engine Warsaw Edition',
      description: null,
      category: 'community',
      date: '2025-10-01',
      period: 'October 2025',
      linkedinUrl: 'https://luma.com/8vxfeo4a?tk=lKPK7l',
      rank: null,
      totalParticipants: 100,
      technologies: ['AI Agents', 'Mentorship', 'Innovation'],
      highlights: [
        "Supported AI Engine's pan-European program spanning **10+ major tech hubs** and **1,000+ builders annually**",
        'Evaluated **100+ builders**, guiding finalist teams on innovation, technical execution, and AI agent architecture',
        'Featured on Viraj Acharya\'s "Ventures Series" with **138K+ total views** and **100+ live viewers**',
      ],
      featured: true,
    },
    {
      id: 'tahakom-developer-day-speaker',
      title: 'Speaker – TAHAKOM Developer Day, Riyadh',
      description:
        'Presented on Model Context Protocol (MCP), exploring its challenges like prompt injection and context expansion and showcasing how ACI.dev is tackling them head-on. Shared work with the brilliant AI talent in Saudi Arabia and contributed to their flourishing AI ecosystem.',
      category: 'conference',
      date: '2025-08-01',
      period: 'August 2025',
      linkedinUrl:
        'https://www.linkedin.com/posts/jamie-ogundiran-874aa3230_%F0%9D%97%AA%F0%9D%97%B5%F0%9D%97%AE%F0%9D%98%81-%F0%9D%97%AE-%F0%9D%97%B1%F0%9D%97%AE%F0%9D%98%86-%F0%9D%97%B6%F0%9D%97%BB-%F0%9D%97%A5%F0%9D%97%B6%F0%9D%98%86%F0%9D%97%AE%F0%9D%97%B1%F0%9D%97%B5-im-activity-7357101257544593409-dxD1',
      rank: null,
      totalParticipants: null,
      technologies: ['Model Context Protocol', 'MCP', 'AI Security', 'Prompt Injection', 'Context Expansion'],
      featured: true,
      collaborators: ['Opemipo Disu', 'Parth Sharma'],
      organization: 'TAHAKOM',
      location: 'Riyadh, Saudi Arabia',
    },
    {
      id: 'sf-tech-week-speaker',
      title: 'Speaker – HackNight @ GitHub HQ',
      description:
        "Presented ACI.dev's new technology to **100+ developers** at GitHub HQ in San Francisco, driving **30+ Discord joins** and **20+ new user signups** while showcasing the future of tool-calling for AI agents.",
      category: 'conference',
      date: '2025-07-01',
      period: 'July 2025',
      linkedinUrl:
        'https://www.linkedin.com/posts/jamie-ogundiran-874aa3230_recently-i-spent-a-week-immersed-in-the-san-activity-7353121750525583360-2bpV',
      rank: null,
      totalParticipants: null,
      technologies: ['AI Agents', 'Tool-calling', 'ACI.dev', 'AI Workflows'],
      featured: true,
      collaborators: [],
      organization: 'GitHub',
      location: 'San Francisco, California',
      events: ['HackNight @ GitHub HQ'],
      insights: ['Presented to 100+ developers', 'Drove 30+ Discord joins', 'Onboarded 20+ new users'],
    },
    {
      id: 'ai-agent-hackathon',
      title: "2nd Place – Europe's Largest AI Agent Hackathon",
      description:
        'Built Table 42, an AI-powered restaurant concierge that converted social media engagement into real bookings; won **2nd place** at Europe\'s largest AI agent hackathon.',
      category: 'hackathon',
      date: '2025-04-01',
      period: 'March 2025 - April 2025',
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7324704340596715520/',
      rank: 2,
      totalParticipants: null,
      technologies: ['AI', 'Social Media Integration', 'Restaurant Tech'],
      featured: true,
    },
    {
      id: 'portia-ai-track',
      title: '3rd Place – Portia AI Track, Encode AI London Hackathon',
      description:
        'Developed SNTC (Say NO TO CORRUPTION), an AI-Powered risk assessment tool. The system identifies corruption risks through political exposure screening, sanctions checks, adverse media analysis, and jurisdictional risk evaluation.',
      category: 'hackathon',
      date: '2025-04-01',
      period: 'April 2025',
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7317505996032020484/',
      rank: 3,
      totalParticipants: null,
      technologies: ['AI', 'Risk Assessment', 'Compliance', 'NLP'],
      featured: true,
    },
    {
      id: 'hacklbs-winner',
      title: 'Winner – HackLBS 2025, London Business School',
      description:
        'Built Gastronaut, a conversational agent for restaurant bookings; won **1st place** among **21 teams** and **100+ MBA candidates**.',
      category: 'hackathon',
      date: '2025-03-01',
      period: 'March 2025',
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7302631978154033152/',
      rank: 1,
      totalParticipants: null,
      technologies: ['Conversational AI', 'Audio Processing', 'Restaurant Tech', 'Automation'],
      featured: true,
    },
  ],
} satisfies PortfolioData;

function sortByDateDesc<T extends { date?: string; endDate?: string; startDate?: string }>(
  items: T[]
): T[] {
  return [...items].sort(
    (a, b) => getSortableDate(b).getTime() - getSortableDate(a).getTime()
  );
}

function limitTo<T>(items: T[], limit?: number): T[] {
  return limit ? items.slice(0, limit) : items;
}

// Projects carry no dates, so declaration order is the intended order.
export function getFeaturedProjects(limit?: number) {
  return limitTo(portfolio.projects.filter((p) => p.featured), limit);
}

export function getFeaturedExperience(limit?: number) {
  return limitTo(
    sortByDateDesc(portfolio.workExperience.filter((e) => e.featured)),
    limit
  );
}

export function getFeaturedEducation(limit?: number) {
  return limitTo(
    sortByDateDesc(portfolio.education.filter((e) => e.featured)),
    limit
  );
}

/**
 * Awards are the competition placements; everything else is a speaking,
 * judging or mentoring appearance. Speaking is defined as the complement of
 * awards so a new category can never fall out of both lists.
 */
const AWARD_CATEGORY = 'hackathon';

export function getAwards(limit?: number) {
  return limitTo(
    sortByDateDesc(
      portfolio.recentAchievements.filter(
        (a) => a.featured && a.category === AWARD_CATEGORY
      )
    ),
    limit
  );
}

export function getSpeaking(limit?: number) {
  return limitTo(
    sortByDateDesc(
      portfolio.recentAchievements.filter(
        (a) => a.featured && a.category !== AWARD_CATEGORY
      )
    ),
    limit
  );
}
