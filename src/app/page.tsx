//import Image from "next/image";
import ContactSection from '@/components/contact';
import Hero from '@/components/hero'
import OverviewSection from '@/components/overview';
import ProjectCardsSection from '@/components/projects';
import Skills from '@/components/skills';
import Socials from '@/components/social';
import WorkExperienceSection from '@/components/workExperience';


export default function Home() {
  return (
    <div>
      <Hero />
      <OverviewSection />
      < WorkExperienceSection />
      <Skills />
      <ProjectCardsSection />
      <Socials />
      <ContactSection />
    </div>
  );
}


