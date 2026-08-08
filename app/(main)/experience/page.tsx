import type { Metadata } from 'next';
import { getFeaturedExperience, getFeaturedEducation } from '@/lib/data/portfolio';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EntryList } from '@/components/cards/EntryList';
import { ExperienceCard } from '@/components/cards/ExperienceCard';
import { EducationCard } from '@/components/cards/EducationCard';

export const metadata: Metadata = {
  title: 'Experience',
};

export default function ExperiencePage() {
  return (
    <>
      <Reveal>
        <h1 className="mb-16">Experience</h1>
        <EntryList>
          {getFeaturedExperience().map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </EntryList>
      </Reveal>

      <Reveal>
        <section className="mt-28">
          <SectionHeading title="Education" />
          <EntryList>
            {getFeaturedEducation().map((education) => (
              <EducationCard key={education.id} education={education} />
            ))}
          </EntryList>
        </section>
      </Reveal>
    </>
  );
}
