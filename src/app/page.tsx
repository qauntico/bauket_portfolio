//import Image from "next/image";
import Hero from '@/components/hero'
import OverviewSection from '@/components/overview';
import WorkExperienceSection from '@/components/workExperience';


export default function Home() {
  return (
    <div>
      <Hero />
      <OverviewSection />
      < WorkExperienceSection />
    </div>
  );
}


