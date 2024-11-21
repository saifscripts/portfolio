'use client';

import { useHashSync } from '@/hooks/hash-sync.hook';

export default function About() {
  const ref = useHashSync('#about');

  return (
    <section ref={ref} id="about" className="w-full h-screen scroll-mt-16 ">
      <div className="container py-12">
        <h1 className="text-center text-white text-5xl font-bold mb-8">
          About Me
        </h1>
        <p className="text-center text-white text-xl mb-4">
          I&apos;m Saif, a passionate software developer with a love for
          creating innovative solutions.
        </p>
        <p className="text-center text-white text-xl mb-8">
          With a strong foundation in computer science and a keen eye for
          design, I craft user-friendly experiences that bring ideas to life.
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-primary-500 hover:bg-primary-500 hover:text-white transition duration-300 ease-in-out py-2 px-4 rounded-full text-lg font-bold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
