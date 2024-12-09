'use client';

import { Section, SectionHeader } from '@/components/ui/section';
import { useHashSync } from '@/hooks/hash-sync.hook';
import { BookOpenIcon, CheckCircleIcon, UniversityIcon } from 'lucide-react';
import { Timeline } from '../../ui/timeline';

const educationData = [
  {
    degree: 'M.Sc. in Zoology',
    university: 'National University, Bangladesh',
    learnings: [
      'Enhanced research and analytical skills, applied in debugging and optimization.',
      'Developed problem-solving techniques akin to software architecture.',
      'Applied data organization methods to system structuring.',
    ],
  },
  {
    degree: 'B.Sc. in Zoology',
    university: 'National University, Bangladesh',
    learnings: [
      'Gained critical thinking and attention to detail.',
      'Collaborated in group projects, improving teamwork and communication.',
    ],
  },
];

const data = educationData.map((item) => ({
  title: item.degree,
  content: (
    <>
      <div className="flex items-center space-x-4">
        <UniversityIcon className="size-6 text-primary" />
        <h3 className="text-lg md:text-xl font-bold text-primary">
          {item.university}
        </h3>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <BookOpenIcon className="size-5 text-secondary" />
        <h4 className="text-md md:text-lg font-semibold text-secondary">
          Learnings
        </h4>
      </div>
      <ul className="ml-6 space-y-2 mt-2">
        {item.learnings.map((learning, index) => (
          <li key={index} className="text-base text-foreground-500 flex gap-2">
            <CheckCircleIcon className="size-5 text-success" />
            {learning}
          </li>
        ))}
      </ul>
    </>
  ),
}));

export default function Education() {
  const ref = useHashSync('#education');

  return (
    <Section ref={ref} id="education">
      <SectionHeader title="Education_" description="My Education" />
      <Timeline data={data} />
    </Section>
  );
}
