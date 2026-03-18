import Hero from "@/components/Hero";
import ExperienceCard from "@/components/ExperienceCard";
import SkillsCloud from "@/components/SkillsCloud";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Links from "@/components/Links";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ExperienceCard />
      <SkillsCloud />
      <Education />
      <Achievements />
      <Links />
      <Contact />
    </main>
  );
}
