import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Terminal, Brain, ExternalLink, Github, Beaker } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TypewriterText } from "@/components/TypewriterText";

const ProjectsSection = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.2);
  const { ref: projectsRef, isInView: projectsInView } = useScrollAnimation(0.1);

  const projects = [
    {
      title: "CRYPTECH",
      subtitle: "AI-Powered Cybersecurity Research Platform",
      description: "CRYPTECH is my project developing an AI-powered cybersecurity platform for autonomous network defense. It leverages federated learning for collaborative threat detection, digital forensic DNA to uniquely trace attack patterns, adaptive encryption for dynamic security, and real-time encrypted telemetry for continuous LAN monitoring. The system is designed to automatically detect and respond to threats, minimizing the need for manual intervention. The project is currently at the prototype stage, with a patent application in progress.",
      icon: Shield,
      color: "quantum",
      features: [
        "Decentralized Response Engine",
        "AI-Driven Triage",
        "Privacy-Preserving Protocols", 
        "Automated Forensic Logging",
        "Predictive Threat Response",
        "Homomorphic Encryption"
      ],
      status: "Patent Pending",
      tech: ["Python", "AI/ML", "Federated Learning", "Cryptography"]
    },
    {
      title: "HP19",
      subtitle: "Autonomous Hacking AI",
      description: "HP19 is an AI software built by me that can hack any system on command. You tell it what to do, and it can scan, analyze, and exploit vulnerabilities automatically, acting like a digital hacker assistant.",
      icon: Terminal,
      color: "cyber",
      features: [
        "Hacks systems automatically based on user instructions",
        "Finds vulnerabilities and exploits them",
        "Performs security testing and analysis",
        "Step-by-step learning modules for safe experimentation",
        "Optimized for MacOS"
      ],
      status: "Active Development",
      tech: ["Python", "Terminal UI", "Security Tools", "AI/ML", "TensorFlow", "PyTorch", "Neural Networks"]
    },
    {
      title: "patel AI",
      subtitle: "Autonomous Personal AI Agent",
      description: "Patel AI is an AI software made by me that can manage tasks, read and respond to messages, and proactively interact with devices. It acts like a digital assistant on my each device doing my work on its own, capable of handling multiple operations automatically while learning and adapting to user behavior and doing task how the user would with same behaviour and style.",
      icon: Brain,
      color: "primary",
      features: [
        "Automates task management and communication",
        "Proactively monitors devices and executes commands",
        "Learns and adapts to user preferences over time",
        "Centralized control of multiple devices",
        "Privacy-focused and secure"
      ],
      status: "Active Development",
      tech: ["Python", "AI/ML", "TensorFlow", "PyTorch", "Neural Networks", "Automation Tools"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "quantum":
        return {
          border: "border-quantum/30",
          bg: "bg-quantum/10",
          text: "text-quantum",
          badge: "bg-quantum/20 text-quantum border-quantum"
        };
      case "cyber":
        return {
          border: "border-cyber/30",
          bg: "bg-cyber/10", 
          text: "text-cyber",
          badge: "bg-cyber/20 text-cyber border-cyber"
        };
      default:
        return {
          border: "border-primary/30",
          bg: "bg-primary/10",
          text: "text-primary", 
          badge: "bg-primary/20 text-primary border-primary"
        };
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          ref={titleRef}
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
            <Beaker className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-muted-foreground" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
              <TypewriterText text="Research Projects" speed={50} />
            </h2>
          </div>
          <TypewriterText 
            text="Patent-pending innovations at the intersection of quantum computing, cybersecurity, and artificial intelligence"
            as="p"
            className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto font-light px-2 sm:px-4 lg:px-0"
            speed={25}
          />
        </motion.div>

        <motion.div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          animate={projectsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const IconComponent = project.icon;
            
            return (
                  <Card 
                    key={index} 
                    className={`p-3 sm:p-4 md:p-6 bg-card/50 backdrop-blur-sm border ${colors.border} hover:shadow-lg transition-all duration-300 group`}
                  >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <div className={`p-2 sm:p-3 rounded-lg ${colors.bg} w-fit`}>
                    <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 ${colors.text}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <TypewriterText 
                      text={project.title}
                      as="h3"
                      className="text-lg sm:text-xl font-bold break-words"
                      speed={60}
                    />
                    <Badge className={`${colors.badge} text-xs w-fit`}>{project.status}</Badge>
                  </div>
                </div>

                <TypewriterText 
                  text={project.subtitle}
                  as="p"
                  className={`font-medium text-xs sm:text-sm ${colors.text} mb-3`}
                  speed={40}
                />

                <TypewriterText 
                  text={project.description}
                  as="p"
                  className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed"
                  speed={20}
                />

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Key Features</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('/10', '')} flex-shrink-0 mt-1.5`} />
                          <span className="break-words">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
