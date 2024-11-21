'use client';

import { useHashSync } from '@/hooks/hash-sync.hook';

export default function Blogs() {
  const ref = useHashSync('#blogs');

  return (
    <section ref={ref} id="blogs" className="w-full h-96 scroll-mt-16">
      <h1 className="text-center p-8 text-4xl font-bold">Blogs</h1>
    </section>
  );
}
