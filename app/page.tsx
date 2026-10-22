import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { GitHubActivitySection } from "@/components/sections/github-activity";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <main id="main-content" className="relative flex flex-col">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <GitHubActivitySection />
      <ContactSection />
    </main>
  );
}
