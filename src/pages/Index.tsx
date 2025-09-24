import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import MobileLayout from "@/components/mobile/MobileLayout";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  // Show mobile layout for phones and small tablets
  if (isMobile) {
    return <MobileLayout />;
  }

  // Show desktop layout for larger screens
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResearchSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
