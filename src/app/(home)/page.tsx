import About from '@/components/about';
import Blogs from '@/components/blogs';
import Contact from '@/components/contact';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <div className="relative h-full w-full bg-background scroll-mt-16">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
}
