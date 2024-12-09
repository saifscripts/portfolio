'use client';

import { useHashSync } from '@/hooks/hash-sync.hook';
import { IProfile } from '@/types';
import { Button } from '@nextui-org/button';
import Image from 'next/image';

export default function About({ profileInfo }: { profileInfo: IProfile }) {
  const ref = useHashSync('#about');

  const { name, photo, about } = profileInfo;

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
              src={photo}
              alt={`Photo of ${name.firstName} ${name.middleName} ${name.lastName}`}
              fill
              className="rounded-2xl relative z-20"
            />
          </div>
          <Button href="#contact" color="secondary" variant="bordered" as="a">
            Get in Touch
          </Button>
        </div>

        <div className="space-y-8">
          <h1 className="text-center text-5xl font-bold bg-gradient-to-r from-primary/90 via-secondary/90 to-success/90 inline-block text-transparent bg-clip-text">
            About Me_
          </h1>
          {about.split('\n').map((p, i) => (
            <p key={i} className="text-foreground text-xl leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
