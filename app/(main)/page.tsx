import {
  getFeaturedResearch,
  getFeaturedExperience,
  getFeaturedEducation,
  getFeaturedAchievements,
} from '@/lib/data/portfolio';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ExperienceCard } from '@/components/cards/ExperienceCard';
import { EducationCard } from '@/components/cards/EducationCard';
import { AchievementCard } from '@/components/cards/AchievementCard';
import { ResearchCard } from '@/components/cards/ResearchCard';

const cardList = 'flex flex-col gap-8';

export default function HomePage() {
  return (
    <>
      <Reveal>
        <section className="mb-[120px] flex items-center gap-3">
          <div className="flex-1">
            <h1>Award-Winning AI Builder</h1>
            <p className="my-4 text-[1.1rem] leading-normal">
              <strong>Award-winning builder</strong> and{' '}
              <strong>four-time hackathon winner</strong>, judged and spoken at
              competitions across <strong>Europe, Saudi Arabia, and San Francisco</strong>.
              Operated at the frontier, building the{' '}
              <strong>world&apos;s first culturally aware large language model</strong>{' '}
              at King&apos;s College London, and helped build the{' '}
              <strong>first ever unified MCP server</strong>.
            </p>
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
          <SectionHeading highlight="EDUCATION" rest="" />
          <div className={cardList}>
            {getFeaturedEducation().map((education) => (
              <EducationCard key={education.id} education={education} />
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
