'use client';

import { Section, SectionHeader } from '@/components/ui/section';
import { useHashSync } from '@/hooks/hash-sync.hook';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import { Tooltip } from '@nextui-org/tooltip';
import { Github, SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';

const projectsData = [
  {
    name: 'deliBhai',
    slug: 'delibhai',
    description: 'A one stop service',
    summary:
      'deliBhai is a comprehensive platform offering a wide range of services',
    images: [
      'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732232376/delibhai_tbcc8u.jpg',
    ],
    live: 'https://delibhai.com',
    repositories: [
      {
        label: 'Frontend',
        href: 'https://github.com/saifscripts/delibhai',
      },
      {
        label: 'Backend',
        href: 'https://github.com/saifscripts/delibhai-server',
      },
    ],
    technologies: ['React', 'Next.js', 'TypeScript'],
  },
  {
    name: 'deliBhai',
    slug: 'delibhai-2',
    description: 'A one stop service',
    summary:
      'deliBhai is a comprehensive platform offering a wide range of services',
    images: [
      'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732232376/delibhai_tbcc8u.jpg',
    ],
    live: 'https://delibhai.com',
    repositories: [
      {
        label: 'Frontend',
        href: 'https://github.com/saifscripts/delibhai',
      },
      {
        label: 'Backend',
        href: 'https://github.com/saifscripts/delibhai-server',
      },
    ],
    technologies: ['React', 'Next.js', 'TypeScript'],
  },
  {
    name: 'deliBhai',
    slug: 'delibhai-3',
    description: 'A one stop service',
    summary:
      'deliBhai is a comprehensive platform offering a wide range of services',
    images: [
      'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732232376/delibhai_tbcc8u.jpg',
    ],
    live: 'https://delibhai.com',
    repositories: [
      {
        label: 'Frontend',
        href: 'https://github.com/saifscripts/delibhai',
      },
      {
        label: 'Backend',
        href: 'https://github.com/saifscripts/delibhai-server',
      },
    ],
    technologies: ['React', 'Next.js', 'TypeScript'],
  },
];

export default function Projects() {
  const ref = useHashSync('#projects');
  const router = useRouter();
  return (
    <Section ref={ref} id="projects">
      <SectionHeader
        title="Projects_"
        align="right"
        description="My Recent Projects"
      />
      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <Fragment key={project.slug}>
            <div className="py-4 group hover:bg-default-300/30 rounded-xl">
              <div
                onClick={() => router.push(`/projects/${project.slug}`)}
                className="grid grid-cols-[2fr_2fr_1.5fr] gap-8 items-center group-hover:scale-95 transition-transform duration-150 ease-in cursor-pointer"
              >
                <picture className="w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={project.images[0]}
                    width={1600}
                    height={900}
                    alt="Delibhai"
                    className="h-full w-full"
                  />
                </picture>
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold group-hover:underline">
                    {project.name} -{' '}
                    <span className="text-foreground-400">
                      {project.description}
                    </span>
                  </h2>
                  <p>{project.summary}</p>
                  <div className="flex gap-2">
                    <Button
                      as="a"
                      href={project.live}
                      target="_blank"
                      startContent={<SquareArrowOutUpRight size={16} />}
                      variant="flat"
                      color="success"
                      size="sm"
                    >
                      Live
                    </Button>
                    <Tooltip
                      content={
                        <div className="p-2 space-y-2">
                          <h4>Repositories:</h4>
                          <ul className="list-disc ml-6 space-y-1">
                            {project.repositories.map((repo) => (
                              <li key={repo.href}>
                                <Link
                                  target="_blank"
                                  className="hover:underline"
                                  href={repo.href}
                                >
                                  {repo.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      }
                    >
                      <Button
                        startContent={<Github size={16} />}
                        variant="flat"
                        color="primary"
                        size="sm"
                        disabled
                      >
                        Code
                      </Button>
                    </Tooltip>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <h3 className="text-7xl">
                    {(index + 1).toString().padStart(2, '0')}
                  </h3>
                </div>
              </div>
            </div>
            {projectsData.length !== index + 1 && <Divider className="my-4" />}
          </Fragment>
        ))}
      </div>
    </Section>
  );
}
