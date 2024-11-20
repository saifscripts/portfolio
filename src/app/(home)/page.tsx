export default function Home() {
  return (
    <div className="scroll-mt-16">
      <section id="about" className="bg-default-100 w-full h-96 scroll-mt-16">
        <h1 className="text-center p-8 text-4xl font-bold">About</h1>
      </section>
      <section id="skills" className="bg-default-300 w-full h-96 scroll-mt-16">
        <h1 className="text-center p-8 text-4xl font-bold">Skills</h1>
      </section>
      <section
        id="projects"
        className="bg-default-100 w-full h-96 scroll-mt-16"
      >
        <h1 className="text-center p-8 text-4xl font-bold">Projects</h1>
      </section>
      <section id="blogs" className="bg-default-300 w-full h-96 scroll-mt-16">
        <h1 className="text-center p-8 text-4xl font-bold">Blogs</h1>
      </section>
      <section id="contact" className="bg-default-100 w-full h-96 scroll-mt-16">
        <h1 className="text-center p-8 text-4xl font-bold">Contact</h1>
      </section>
    </div>
  );
}
