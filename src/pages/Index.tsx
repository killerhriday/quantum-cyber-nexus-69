import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DeviceShowcase from "@/components/DeviceShowcase";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyNav />
      <HeroSection />
      <AboutSection />
      <DeviceShowcase />
      <ProjectsSection />
      <ResearchSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
