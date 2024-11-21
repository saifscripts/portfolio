'use client';

import avatar from '@/assets/avatar.svg';
import { useHashSync } from '@/hooks/hash-sync.hook';
import { Button } from '@nextui-org/button';
import Image from 'next/image';

export default function About() {
  const ref = useHashSync('#about');

  return (
    <section
      ref={ref}
      id="about"
      className="w-full scroll-mt-16 container py-8 sm:py-12 border-t border-divider"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="relative aspect-square rounded-3xl w-full sm:w-auto sm:size-80 lg:size-96 ring-2 ring-primary overflow-hidden">
            <div className="absolute inset-6 lg:inset-8 z-10 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl overflow-hidden" />
            <Image
              src={avatar}
              alt="Saif's Picture"
              className="rounded-2xl relative z-20"
            />
          </div>
          <Button color="secondary" variant="bordered">
            Get in Touch
          </Button>
        </div>

        <div className="space-y-8">
          <h1 className="text-center text-5xl font-bold bg-gradient-to-r from-primary/90 via-secondary/90 to-success/90 inline-block text-transparent bg-clip-text">
            About Me_
          </h1>
          <p className="text-foreground text-xl leading-relaxed">
            Hi, I&apos;m Saif, a Full-Stack Web Developer. My journey to web
            development began when I discovered a love for coding during my
            MasterI&apos;s degree in Zoology. Transitioning from studying
            wildlife to building web ecosystems taught me adaptability,
            problem-solving, and a keen attention to detail—qualities I bring to
            every line of code.
          </p>
          <p className="text-foreground text-xl leading-relaxed">
            Today, I specialize in creating responsive, user-centric
            applications using modern web technologies like React, Node.js, and
            MongoDB. I thrive at the intersection of creativity and technology,
            combining functionality with clean design to build solutions that
            make an impact. When Im not coding, you&apos;ll find me exploring
            new tech trends, writing blogs, or engaging in community-driven
            projects.
          </p>
        </div>
      </div>
    </section>
  );
}
