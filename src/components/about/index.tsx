'use client';

import { useHashSync } from '@/hooks/hash-sync.hook';

export default function About() {
  const ref = useHashSync('#about');

  return (
    <section ref={ref} id="about" className="w-full h-96 scroll-mt-16">
      <h1 className="text-center p-8 text-4xl font-bold">About</h1>
    </section>
  );
}
