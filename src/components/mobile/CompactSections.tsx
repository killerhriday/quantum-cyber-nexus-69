import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, School, Brain, Target, Shield, Terminal, 
  Beaker, ExternalLink, Github, Mail, Rocket, Calendar,
  ChevronRight, Award, Users, FileText
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// About Section - Compact
export const CompactAbout = () => {
  return (
    <div className="p-4 space-y-4">
      <Card className="p-4 bg-card/30 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-medium">Research Philosophy</h3>
        </div>
        
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-muted-foreground" />
            <span>Ahmedabad, India</span>
          </div>
          <div className="flex items-center gap-2">
            <School className="h-3 w-3 text-muted-foreground" />
            <span>Ahmedabad International School</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-3 w-3 text-muted-foreground" />
            <span>IB Diploma Programme, Grade 12</span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed italic">
          "Investigating quantum mechanics and cybersecurity convergence through practical student projects."
        </p>
      </Card>

      <Card className="p-4 bg-card/30 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-3">
          <School className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-medium">Academic Excellence</h3>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium text-sm">IB Diploma Programme</span>
              <Badge variant="outline" className="text-xs">Grade 12</Badge>
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-xs text-muted-foreground font-mono">HIGHER LEVEL</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  <Badge variant="outline" className="text-xs">Economics</Badge>
                  <Badge variant="outline" className="text-xs">Hindi</Badge>
                  <Badge variant="outline" className="text-xs">Business</Badge>
                </div>
              </div>
              <div>
                <span className="text-xs text-muted-foreground font-mono">STANDARD LEVEL</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  <Badge variant="outline" className="text-xs">Physics</Badge>
                  <Badge variant="outline" className="text-xs">Math AA</Badge>
                  <Badge variant="outline" className="text-xs">English</Badge>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <span className="font-medium text-sm">Advanced Placement</span>
            <div className="mt-1">
              <Badge className="bg-muted/30 text-foreground text-xs">Calculus AB: Score 3</Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Projects Section - Compact
export const CompactProjects = () => {
  const projects = [
    {
      title: "CRYPTECH",
      description: "Quantum-resistant cryptographic protocol with AI-enhanced security monitoring",
      technologies: ["Quantum Computing", "Cryptography", "AI/ML"],
      status: "Patent Pending",
      icon: Shield,
      color: "cyber"
    },
    {
      title: "QUANTUM DEFENDER",
      description: "Autonomous cybersecurity system leveraging quantum algorithms",
      technologies: ["Quantum Algorithms", "Cybersecurity", "Automation"],
      status: "Active Development",
      icon: Terminal,
      color: "quantum"
    },
    {
      title: "AI SECURITY MESH",
      description: "Distributed AI network for predictive threat detection",
      technologies: ["Neural Networks", "Distributed Systems", "Security"],
      status: "Research Phase",
      icon: Brain,
      color: "primary"
    }
  ];

  return (
    <div className="p-4 space-y-4">
      {projects.map((project, index) => {
        const IconComponent = project.icon;
        return (
          <Card key={index} className="p-4 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-muted/20 flex-shrink-0">
                <IconComponent className="h-4 w-4" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-sm">{project.title}</h3>
                  <Badge variant="outline" className="text-xs flex-shrink-0">
                    {project.status}
                  </Badge>
                </div>
                
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

// Research Section - Compact
export const CompactResearch = () => {
  const achievements = [
    {
      title: "CS50 Certificate",
      institution: "Harvard University",
      description: "Computer Science Fundamentals",
      icon: Award
    },
    {
      title: "CORE 140 Certificate", 
      institution: "Purdue University",
      description: "Advanced Computing Concepts",
      icon: Award
    },
    {
      title: "Quantum Computing Course",
      institution: "TU Delft",
      description: "Quantum Algorithms & Applications",
      icon: Award
    }
  ];

  return (
    <div className="p-4 space-y-4">
      <Card className="p-4 bg-gradient-to-r from-muted/10 to-muted/5">
        <h3 className="font-medium mb-2">Research Focus</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Investigating quantum-classical hybrid systems for next-generation cybersecurity solutions, 
          with emphasis on privacy-preserving protocols and autonomous defense mechanisms.
        </p>
      </Card>

      <div className="space-y-3">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <Card key={index} className="p-3 bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <IconComponent className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-medium text-sm">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.institution}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

// Skills Section - Compact
export const CompactSkills = () => {
  const skillCategories = [
    {
      title: "Quantum Computing",
      skills: ["Qiskit", "Quantum Algorithms", "Quantum Cryptography", "Q# Programming"],
      icon: Beaker
    },
    {
      title: "Cybersecurity",
      skills: ["Penetration Testing", "Network Security", "Cryptographic Protocols", "Risk Assessment"],
      icon: Shield
    },
    {
      title: "AI & Machine Learning",
      skills: ["Neural Networks", "Deep Learning", "Computer Vision", "NLP"],
      icon: Brain
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "C++", "Rust", "Go"],
      icon: Terminal
    }
  ];

  return (
    <div className="p-4 space-y-4">
      {skillCategories.map((category, index) => {
        const IconComponent = category.icon;
        return (
          <Card key={index} className="p-4 bg-card/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <IconComponent className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-medium text-sm">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {category.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  );
};

// Contact Section - Compact
export const CompactContact = () => {
  const ambitions = [
    {
      title: "Quantum Computing",
      description: "Quantum algorithms for cryptography",
      icon: Brain,
    },
    {
      title: "Cybersecurity Innovation", 
      description: "Self-healing defense systems",
      icon: Target,
    },
    {
      title: "AI & Robotics Integration",
      description: "Synergistic real-world solutions", 
      icon: Rocket,
    }
  ];

  return (
    <div className="p-4 space-y-4">
      <Card className="p-4 bg-gradient-to-br from-card/80 to-secondary/50 backdrop-blur-sm">
        <h3 className="font-medium mb-3">Get In Touch</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
            <span className="text-sm">Ahmedabad, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-cyber flex-shrink-0" />
            <span className="text-sm break-all">hriday_patel@hotmail.com</span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          Interested in quantum computing research, cybersecurity innovation, 
          or collaborative projects in emerging technologies.
        </p>
      </Card>

      <div className="space-y-3">
        <h4 className="font-medium text-sm">Academic Ambitions</h4>
        {ambitions.map((ambition, index) => {
          const IconComponent = ambition.icon;
          return (
            <Card key={index} className="p-3 bg-card/30 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <IconComponent className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-medium text-sm">{ambition.title}</h5>
                  <p className="text-xs text-muted-foreground">{ambition.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-4 bg-gradient-to-r from-quantum/5 to-cyber/5 border-primary/20">
        <h4 className="font-medium text-sm mb-2 text-center">Academic Path</h4>
        <div className="space-y-2 text-center">
          <div>
            <span className="text-xs text-muted-foreground">Majors:</span>
            <div className="flex flex-wrap gap-1 justify-center mt-1">
              <Badge className="bg-quantum/20 text-quantum border-quantum text-xs">Quantum Computing</Badge>
              <Badge className="bg-cyber/20 text-cyber border-cyber text-xs">Cybersecurity</Badge>
            </div>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">Minors:</span>
            <div className="flex flex-wrap gap-1 justify-center mt-1">
              <Badge variant="outline" className="text-xs">AI</Badge>
              <Badge variant="outline" className="text-xs">Robotics</Badge>
              <Badge variant="outline" className="text-xs">Software Engineering</Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};