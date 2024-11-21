'use client';

import { useHashSync } from '@/hooks/hash-sync.hook';

export default function Contact() {
  const ref = useHashSync('#contact');

  return (
    <section ref={ref} id="contact" className="w-full h-96 scroll-mt-16">
      <h1 className="text-center p-8 text-4xl font-bold">Contact</h1>
    </section>
  );
}
