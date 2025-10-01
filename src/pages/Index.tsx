import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import IntroAnimation from "@/components/IntroAnimation";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <IntroAnimation onComplete={() => setShowIntro(false)} />
      {!showIntro && (
        <div className="min-h-screen bg-background">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ResearchSection />
          <SkillsSection />
          <ContactSection />
        </div>
      )}
    </>
  );
};

export default Index;
