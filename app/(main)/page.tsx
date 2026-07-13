import {
  getFeaturedProjects,
  getFeaturedResearch,
  getFeaturedExperience,
  getFeaturedEducation,
  getFeaturedAchievements,
} from '@/lib/data/portfolio';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GitHubButton } from '@/components/ui/GitHubButton';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { ExperienceCard } from '@/components/cards/ExperienceCard';
import { EducationCard } from '@/components/cards/EducationCard';
import { AchievementCard } from '@/components/cards/AchievementCard';
import { ResearchCard } from '@/components/cards/ResearchCard';

const projectsGrid =
  'grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8 max-lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] max-md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] max-md:gap-6 max-[576px]:grid-cols-1';
const cardList = 'flex flex-col gap-8';

export default function HomePage() {
  return (
    <>
      <Reveal>
        <section className="mb-[120px] flex items-center gap-3">
          <div className="flex-1">
            <h1>Building the Business Context Layer For AI Agent</h1>
            <p className="my-4 text-[1.1rem] leading-normal">
              4x hackathon winner, Judge, speaker, and panelist at 9+ AI events
              across London, Berlin, Paris, Stockholm, and Warsaw
            </p>
            <div className="mt-[30px] flex flex-wrap gap-5">
              <GitHubButton />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-[120px]">
          <SectionHeading highlight="RECENT" rest="PROJECTS" />
          <div className={projectsGrid}>
            {getFeaturedProjects(4).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-[100px]">
          <SectionHeading highlight="WORK" rest="EXPERIENCE" />
          <div className={cardList}>
            {getFeaturedExperience(2).map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-[100px]">
          <SectionHeading highlight="MY" rest="EDUCATION" />
          <div className={cardList}>
            {getFeaturedEducation().map((education) => (
              <EducationCard key={education.id} education={education} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-[120px]">
          <SectionHeading highlight="RECENT" rest="ACHIEVEMENTS" />
          <div className={cardList}>
            {getFeaturedAchievements(3).map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-[120px]">
          <SectionHeading highlight="RECENT" rest="RESEARCH" />
          <div className={cardList}>
            {getFeaturedResearch(3).map((research) => (
              <ResearchCard key={research.id} research={research} />
            ))}
          </div>
        </section>
      </Reveal>
    </>
  );
}
