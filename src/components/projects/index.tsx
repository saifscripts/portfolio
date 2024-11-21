'use client';

import { useHashSync } from '@/hooks/hash-sync.hook';

export default function Projects() {
  const ref = useHashSync('#projects');

  return (
    <section ref={ref} id="projects" className="w-full h-96 scroll-mt-16">
      <h1 className="text-center p-8 text-4xl font-bold">Projects</h1>
    </section>
  );
}
