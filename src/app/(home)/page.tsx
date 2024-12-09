import About from '@/components/about';
import Blogs from '@/components/blogs';
import Contact from '@/components/contact';
import Education from '@/components/education';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import { fetchProfile } from '@/services/profile.service';
import { IProfileResponse } from '@/types';

export default async function Home() {
  const { data: profileInfo } = await fetchProfile<IProfileResponse>();

  return (
    <div className="scroll-mt-16 relative">
      <Hero profileInfo={profileInfo} />
      <About profileInfo={profileInfo} />
      <Skills />
      <Projects />
      <Education />
      <Blogs />
      <Contact profileInfo={profileInfo} />
    </div>
  );
}
