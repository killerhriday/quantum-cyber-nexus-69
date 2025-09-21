import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Terminal, Brain, ExternalLink, Github, Beaker } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
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

  const { elementRef, visibleItems } = useStaggeredAnimation(projects.length, 200);

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
    <motion.section 
      ref={elementRef}
      id="projects" 
      className="py-20 px-6 bg-secondary/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: visibleItems.length > 0 ? 1 : 0, y: visibleItems.length > 0 ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Beaker className="h-8 w-8 text-muted-foreground" />
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              Research <span className="font-mono text-muted-foreground">Projects</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Patent-pending innovations at the intersection of quantum computing, cybersecurity, and artificial intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const IconComponent = project.icon;
            const isVisible = visibleItems.includes(index);
            
            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  y: 100,
                  rotateX: 45,
                  scale: 0.8
                }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 100,
                  rotateX: isVisible ? 0 : 45,
                  scale: isVisible ? 1 : 0.8
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: -5
                }}
              >
                <Card 
                  className={`p-6 bg-card/50 backdrop-blur-sm border ${colors.border} hover:shadow-lg transition-all duration-300 group h-full`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg ${colors.bg}`}>
                      <IconComponent className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <Badge className={colors.badge}>{project.status}</Badge>
                    </div>
                  </div>

                  <p className={`font-medium text-sm ${colors.text} mb-3`}>
                    {project.subtitle}
                  </p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('/10', '')}`} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Technologies</h4>
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;