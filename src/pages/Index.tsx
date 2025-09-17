import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import FloatingNav from "@/components/FloatingNav";
import LoadingScreen from "@/components/LoadingScreen";
import AnimationWrapper from "@/components/AnimationWrapper";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingNav />
      
      <div id="hero">
        <AnimationWrapper animation="fade-in" duration={800}>
          <HeroSection />
        </AnimationWrapper>
      </div>
      
      <div id="about">
        <AnimationWrapper animation="slide-up" delay={200} duration={800}>
          <AboutSection />
        </AnimationWrapper>
      </div>
      
      <div id="projects">
        <AnimationWrapper animation="slide-up" delay={100} duration={800}>
          <ProjectsSection />
        </AnimationWrapper>
      </div>
      
      <div id="research">
        <AnimationWrapper animation="slide-left" delay={150} duration={800}>
          <ResearchSection />
        </AnimationWrapper>
      </div>
      
      <div id="skills">
        <AnimationWrapper animation="scale-in" delay={200} duration={800}>
          <SkillsSection />
        </AnimationWrapper>
      </div>
      
      <div id="contact">
        <AnimationWrapper animation="slide-up" delay={100} duration={800}>
          <ContactSection />
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default Index;
