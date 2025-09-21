import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import QuantumLoadingScreen from "@/components/QuantumLoadingScreen";
import quantumCyberBg from "@/assets/quantum-cyber-bg.jpg";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <QuantumLoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background relative"
    >
      {/* Quantum Cyber Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${quantumCyberBg})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background/95" />
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResearchSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </motion.div>
  );
};

export default Index;
