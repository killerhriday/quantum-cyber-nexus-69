import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
