'use client';

import avatar from '@/assets/avatar.svg';
import { useHashSync } from '@/hooks/hash-sync.hook';
import { Button } from '@nextui-org/button';
import Image from 'next/image';

export default function Hero() {
  const ref = useHashSync('#home');

  return (
    <section
      ref={ref}
      id="home"
      className="relative mt-[64px] sm:mt-0 min-h-[calc(100svh-64px)] sm:min-h-screen flex justify-center items-center py-8 sm:py-12"
    >
      <div className="container flex gap-8 flex-col justify-center lg:flex-row lg:items-center lg:justify-between">
        {/* <!-- Hero Content --> */}
        <div className="max-w-2xl order-2 lg:order-1 flex-1">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
            Hi, I&apos;m <span className="text-primary">Saif</span> _
          </h1>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl xl:text-4xl mt-4">
            A <span className="text-secondary">Full-Stack Developer</span>
          </h2>
          <p className="mt-4 text-lg text-default-500">
            I specialize in building dynamic, responsive, and user-friendly web
            applications that solve real-world problems.
          </p>
          <div className="mt-8 flex gap-4">
            <Button
              href="#projects"
              color="primary"
              variant="bordered"
              size="lg"
              as="a"
            >
              View My Work
            </Button>
            <Button href="/resume.pdf" color="primary" size="lg" as="a">
              Download Resume
            </Button>
          </div>
        </div>

        {/* <!-- Hero Image --> */}
        <div className="relative aspect-square rounded-3xl w-full sm:w-auto sm:size-80 lg:size-96 ring-2 ring-primary overflow-hidden order-1 lg:order-2">
          <div className="absolute inset-6 lg:inset-8 z-10 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl overflow-hidden" />
          <Image
            src={avatar}
            alt="Saif's Picture"
            className="rounded-2xl relative z-20"
          />
        </div>
      </div>
    </section>
  );
}
