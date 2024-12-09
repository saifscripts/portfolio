import About from '@/components/main/about';
import Blogs from '@/components/main/blogs';
import Contact from '@/components/main/contact';
import Education from '@/components/main/education';
import Footer from '@/components/main/footer';
import Hero from '@/components/main/hero';
import Projects from '@/components/main/projects';
import Skills from '@/components/main/skills';
import { fetchProfile } from '@/services/profile.service';

export default async function Home() {
  const { data: profileInfo } = await fetchProfile();

  return (
    <div className="scroll-mt-16 relative">
      <Hero profileInfo={profileInfo} />
      <About profileInfo={profileInfo} />
      <Skills />
      <Projects />
      <Education />
      <Blogs />
      <Contact profileInfo={profileInfo} />
      <Footer profileInfo={profileInfo} />
    </div>
  );
}
