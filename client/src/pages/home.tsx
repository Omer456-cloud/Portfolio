import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
