'use client';

import { useHashSync } from '@/hooks/hash-sync.hook';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import Image from 'next/image';

interface ISkill {
  category: string;
  skills: {
    name: string;
    icon: string;
    description: string;
    projects?: {
      name: string;
      slug: string;
    }[];
    courses?: {
      name: string;
      slug: string;
    }[];
    certifications?: {
      name: string;
      slug: string;
    }[];
    experiences?: {
      company: string;
      years: number;
      slug: string;
    }[];
  }[];
}

const skillsData: ISkill[] = [
  {
    category: 'Languages',
    skills: [
      {
        name: 'JavaScript',
        description: 'A versatile language',
        icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732220752/javascript_ic8ech.svg',
        projects: [
          { name: 'Delibhai', slug: 'delibhai' },
          { name: 'RideX', slug: 'ridex' },
        ],
        experiences: [
          { company: 'Islami Bank Bangladesh PLC', years: 2, slug: 'ibbplc' },
        ],
        courses: [
          {
            name: 'Complete Web Development with Programming Hero',
            slug: 'programming-hero',
          },
          { name: 'JavaScript: The Advanced Concepts', slug: 'advanced-js' },
        ],
        certifications: [
          { name: 'JavaScript Mastery by XYZ', slug: 'javascript-mastery' },
        ],
      },
      {
        name: 'TypeScript',
        description: 'Superset of JavaScript',
        icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732220752/javascript_ic8ech.svg',
        projects: [{ name: 'Delibhai', slug: 'delibhai' }],
        experiences: [
          { company: 'Islami Bank Bangladesh PLC', years: 1, slug: 'ibbplc' },
        ],
        courses: [
          { name: 'Understanding TypeScript', slug: 'typescript-course' },
        ],
        certifications: [],
      },
      {
        name: 'HTML',
        description: 'A versatile language',
        icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732220752/javascript_ic8ech.svg',
        projects: [
          { name: 'Delibhai', slug: 'delibhai' },
          { name: 'RideX', slug: 'ridex' },
        ],
        experiences: [
          { company: 'Islami Bank Bangladesh PLC', years: 2, slug: 'ibbplc' },
        ],
        courses: [
          {
            name: 'Complete Web Development with Programming Hero',
            slug: 'programming-hero',
          },
          { name: 'JavaScript: The Advanced Concepts', slug: 'advanced-js' },
        ],
        certifications: [
          { name: 'JavaScript Mastery by XYZ', slug: 'javascript-mastery' },
        ],
      },
      {
        name: 'CSS',
        description: 'Superset of JavaScript',
        icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732220752/javascript_ic8ech.svg',
        projects: [{ name: 'Delibhai', slug: 'delibhai' }],
        experiences: [
          { company: 'Islami Bank Bangladesh PLC', years: 1, slug: 'ibbplc' },
        ],
        courses: [
          { name: 'Understanding TypeScript', slug: 'typescript-course' },
        ],
        certifications: [],
      },
    ],
  },
  {
    category: 'Frameworks/Libraries',
    skills: [
      {
        name: 'React',
        description: 'A JavaScript library for building user interfaces.',
        icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732220752/javascript_ic8ech.svg',
        projects: [
          { name: 'Delibhai', slug: 'delibhai' },
          { name: 'E-Commerce Platform', slug: 'ecommerce' },
        ],
        experiences: [],
        courses: [{ name: 'React - The Complete Guide', slug: 'react-guide' }],
        certifications: [{ name: 'React Pro by ABC', slug: 'react-pro' }],
      },
      {
        name: 'Express.js',
        description:
          'A minimal and flexible Node.js web application framework.',
        icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732220752/javascript_ic8ech.svg',
        projects: [{ name: 'RideX', slug: 'ridex' }],
        experiences: [],
        courses: [{ name: 'Express.js Fundamentals', slug: 'express-course' }],
        certifications: [],
      },
      {
        name: 'Next JS',
        description: 'A JavaScript library for building user interfaces.',
        icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732220752/javascript_ic8ech.svg',
        projects: [
          { name: 'Delibhai', slug: 'delibhai' },
          { name: 'E-Commerce Platform', slug: 'ecommerce' },
        ],
        experiences: [],
        courses: [{ name: 'React - The Complete Guide', slug: 'react-guide' }],
        certifications: [{ name: 'React Pro by ABC', slug: 'react-pro' }],
      },
      {
        name: 'Redux',
        description:
          'A minimal and flexible Node.js web application framework.',
        icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732220752/javascript_ic8ech.svg',
        projects: [{ name: 'RideX', slug: 'ridex' }],
        experiences: [],
        courses: [{ name: 'Express.js Fundamentals', slug: 'express-course' }],
        certifications: [],
      },
      {
        name: 'TailwindCSS',
        description:
          'A minimal and flexible Node.js web application framework.',
        icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732220752/javascript_ic8ech.svg',
        projects: [{ name: 'RideX', slug: 'ridex' }],
        experiences: [],
        courses: [{ name: 'Express.js Fundamentals', slug: 'express-course' }],
        certifications: [],
      },
    ],
  },
  {
    category: 'Tools',
    skills: [
      {
        name: 'Git',
        description:
          'A version control system for tracking changes in source code.',
        icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732220752/javascript_ic8ech.svg',
        experiences: [],
        courses: [{ name: 'Git for Professionals', slug: 'git-course' }],
        certifications: [],
      },
      {
        name: 'VS Code',
        description: 'A source-code editor developed by Microsoft.',
        icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732220752/javascript_ic8ech.svg',
        experiences: [],
        courses: [],
        certifications: [],
      },
      {
        name: 'Postman',
        description:
          'A version control system for tracking changes in source code.',
        icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732220752/javascript_ic8ech.svg',
        experiences: [],
        courses: [{ name: 'Git for Professionals', slug: 'git-course' }],
        certifications: [],
      },
      {
        name: 'Vercel',
        description: 'A source-code editor developed by Microsoft.',
        icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732220752/javascript_ic8ech.svg',
        experiences: [],
        courses: [],
        certifications: [],
      },
    ],
  },
];

export default function Skills() {
  const ref = useHashSync('#skills');

  return (
    <section
      ref={ref}
      id="skills"
      className="w-full scroll-mt-16 container py-8 sm:py-12 border-t border-divider"
    >
      <h1 className="text-center text-5xl font-bold bg-gradient-to-r from-primary/90 via-secondary/90 to-success/90 inline-block text-transparent bg-clip-text">
        Skills_
      </h1>
      {skillsData.map((category) => (
        <section
          key={category.category}
          className="mt-16 grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-2"
        >
          <h2 className="text-2xl font-bold text-success">
            {category.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 col-span-2">
            {category.skills.map((skill) => {
              const years =
                (skill?.experiences &&
                  skill.experiences.reduce((acc, exp) => acc + exp.years, 0)) ||
                0;

              return (
                <div
                  key={skill.name}
                  className="border hover:border-none border-divider bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 space-y-4 cursor-pointer hover:bg-gradient-to-r hover:from-primary/40 hover:to-secondary/40 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={skill.icon}
                      width={40}
                      height={40}
                      className="size-10"
                      alt="Next Icon"
                    />

                    <h3 className="text-lg font-semibold text-foreground">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="flex gap-2 justify-end">
                    {skill?.projects && skill?.projects.length > 0 && (
                      <Popover>
                        <PopoverTrigger>
                          <button className="cursor-pointer text-[10px] flex gap-2">
                            <span className="hover:underline">
                              {`${skill.projects.length}+ projects`}
                            </span>
                            <span>|</span>
                          </button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div>
                            <h4 className="font-medium">Projects:</h4>
                            <ul className="list-disc ml-6">
                              {skill?.projects.map((project) => (
                                <li key={project.name}>{project.name}</li>
                              ))}
                            </ul>
                          </div>
                        </PopoverContent>
                      </Popover>
                    )}
                    {skill?.experiences && skill?.experiences.length > 0 && (
                      <Popover>
                        <PopoverTrigger>
                          <button className="cursor-pointer text-[10px] flex gap-2">
                            <span className="hover:underline">
                              {`${years}+ years`}
                            </span>
                            <span>|</span>
                          </button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div>
                            <h4 className="font-medium">Companies:</h4>
                            <ul className="list-disc ml-6">
                              {skill?.experiences.map((project) => (
                                <li key={project.company}>{project.company}</li>
                              ))}
                            </ul>
                          </div>
                        </PopoverContent>
                      </Popover>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </section>
  );
}
