import type { Metadata } from 'next';
import { getFeaturedExperience, getFeaturedEducation } from '@/lib/data/portfolio';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ExperienceCard } from '@/components/cards/ExperienceCard';
import { EducationCard } from '@/components/cards/EducationCard';

export const metadata: Metadata = {
  title: 'Experience',
};

export default function ExperiencePage() {
  return (
    <>
      <Reveal>
        <section className="mb-[100px]">
          <SectionHeading highlight="WORK" rest="EXPERIENCE" />
          <div className="flex flex-col gap-8">
            {getFeaturedExperience().map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-[100px]">
          <SectionHeading highlight="MY" rest="EDUCATION" />
          <div className="flex flex-col gap-8">
            {getFeaturedEducation().map((education) => (
              <EducationCard key={education.id} education={education} />
            ))}
          </div>
        </section>
      </Reveal>
    </>
  );
}
