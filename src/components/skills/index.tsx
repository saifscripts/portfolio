'use client';

import { useHashSync } from '@/hooks/hash-sync.hook';

export default function Skills() {
  const ref = useHashSync('#skills');

  return (
    <section ref={ref} id="skills" className="w-full h-96 scroll-mt-16">
      <h1 className="text-center p-8 text-4xl font-bold">Skills</h1>
    </section>
  );
}
