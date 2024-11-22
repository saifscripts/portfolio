'use client';

import { useHashSync } from '@/hooks/hash-sync.hook';

export default function Contact() {
  const ref = useHashSync('#contact');

  return (
    <section
      ref={ref}
      id="contact"
      className="w-full scroll-mt-16 container py-8 sm:py-12 border-t border-divider"
    >
      <header className="flex justify-end">
        <h1 className="text-center text-5xl font-bold bg-gradient-to-r from-primary/90 via-secondary/90 to-success/90 inline-block text-transparent bg-clip-text">
          Contact_
        </h1>
      </header>
    </section>
  );
}
