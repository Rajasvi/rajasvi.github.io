import Hero from "@/components/Hero";
import About from "@/components/About";
import SectionHeader from "@/components/SectionHeader";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import EducationCard from "@/components/EducationCard";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { education } from "@/data/education";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-5 pb-16">
      <Hero />

      <SectionHeader id="about" title="About" />
      <div className="py-4">
        <About />
      </div>

      <SectionHeader id="experience" title="Experience" />
      <div className="py-2">
        {experience.map((item) => (
          <ExperienceCard key={`${item.company}-${item.period}`} item={item} />
        ))}
      </div>

      <SectionHeader id="skills" title="Skills" />
      <SkillsSection />

      <SectionHeader id="projects" title="Projects" />
      <div className="py-2">
        {projects.map((item) => (
          <ProjectCard key={item.title} item={item} />
        ))}
      </div>

      <SectionHeader id="education" title="Education" />
      <div className="py-2">
        {education.map((item) => (
          <EducationCard key={item.institution} item={item} />
        ))}
      </div>

      <footer className="pt-10 pb-4 border-t border-gray-100 text-xs text-gray-400 text-center">
        Inspired by{" "}
        <a
          href="https://jonbarron.info/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jon Barron&apos;s website
        </a>
        {" · "}
        <a
          href="https://github.com/rajasvi/rajasvi.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </footer>
    </main>
  );
}
