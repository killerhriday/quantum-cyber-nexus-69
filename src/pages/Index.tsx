import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import WebsitePhaseAnimation from "@/components/WebsitePhaseAnimation";

const Index = () => {
  return (
    <WebsitePhaseAnimation>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResearchSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </WebsitePhaseAnimation>
  );
};

export default Index;
