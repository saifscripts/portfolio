import About from '@/components/about';
import Blogs from '@/components/blogs';
import Contact from '@/components/contact';
import Education from '@/components/education';
import Hero from '@/components/hero';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <div className="scroll-mt-16 relative">
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Education />
      <Blogs />
      <Contact />
    </div>
  );
}
