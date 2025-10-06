import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Code2, Brain, Lock, Cpu, Settings } from "lucide-react";

const SkillsSection = () => {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "primary",
      tools: ["Python", "C++", "SQL", "JavaScript", "ruby"]
    },
    {
      title: "AI / Machine Learning / Neural Networks",
      icon: Brain,
      color: "primary",
      tools: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Neural Network Frameworks"]
    },
    {
      title: "Quantum Computing / Simulation",
      icon: Cpu,
      color: "quantum",
      tools: ["Qiskit", "Cirq", "Pennylane", "Quantum Simulators from TU Delft Coursework"]
    },
    {
      title: "Cybersecurity / Ethical Hacking Tools",
      icon: Lock,
      color: "cyber",
      tools: ["Burp Suite", "Ghidra", "IDA", "Linux Tools (nmap, netcat, Wireshark, etc.)", "CTF Platforms / Hacking Frameworks"]
    },
    {
      title: "Software Development / Automation",
      icon: Settings,
      color: "primary",
      tools: ["Git / GitHub", "Docker", "Linux Shell / Terminal scripting", "Automation Tools (for Patel AI, HP19)"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "quantum":
        return {
          border: "border-quantum/30",
          bg: "bg-quantum/10",
          text: "text-quantum"
        };
      case "cyber":
        return {
          border: "border-cyber/30",
          bg: "bg-cyber/10", 
          text: "text-cyber"
        };
      default:
        return {
          border: "border-primary/30",
          bg: "bg-primary/10",
          text: "text-primary"
        };
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide">
              Technical <span className="font-mono text-muted-foreground">Knowledge</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto font-light px-4 sm:px-0">
            Tools and technologies used across quantum computing, cybersecurity, and AI development
          </p>
        </div>

        {/* Technical Knowledge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {techCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <Card 
                key={index}
                className={`p-4 sm:p-6 bg-card/50 backdrop-blur-md border ${colors.border} hover:shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300`}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-3 rounded-lg ${colors.bg}`}>
                    <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium break-words">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {category.tools.map((tool, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs break-words">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Professional Certifications */}
        <Card className="p-4 sm:p-6 lg:p-8 bg-card/60 backdrop-blur-md border-primary/30 hover:border-primary/40 transition-all shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
            <h3 className="text-lg sm:text-xl font-medium text-center">
              Professional <span className="font-mono text-muted-foreground">Certifications</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-lg bg-card/40 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-2">
                <h4 className="font-medium text-xs sm:text-sm break-words">CS50: Introduction to Computer Science</h4>
                <Badge variant="outline" className="text-xs font-mono w-fit">Foundational</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Harvard University</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">2024</span>
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-card/40 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-2">
                <h4 className="font-medium text-xs sm:text-sm break-words">Ethical Hacking & Penetration Testing</h4>
                <Badge variant="outline" className="text-xs font-mono w-fit">Specialized</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Purdue University</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">2024</span>
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-card/40 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-2">
                <h4 className="font-medium text-xs sm:text-sm break-words">Quantum Computing & Quantum Internet</h4>
                <Badge variant="outline" className="text-xs font-mono w-fit">Research</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Delft University of Technology</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">2024</span>
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-card/40 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-2">
                <h4 className="font-medium text-xs sm:text-sm break-words">AP Calculus AB</h4>
                <Badge variant="outline" className="text-xs font-mono w-fit">Academic</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">College Board</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">2024</span>
                <Badge variant="outline" className="text-xs font-mono">Score: 3</Badge>
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-card/40 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-2">
                <h4 className="font-medium text-xs sm:text-sm break-words">Software Development Internship</h4>
                <Badge variant="outline" className="text-xs font-mono w-fit">Professional</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Certificate</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">2024</span>
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-card/40 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-2">
                <h4 className="font-medium text-xs sm:text-sm break-words">CTF Hacking Tournament - 7th Place</h4>
                <Badge variant="outline" className="text-xs font-mono w-fit">Competition</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Solo participant</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">220 teams</span>
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-card/40 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-2">
                <h4 className="font-medium text-xs sm:text-sm break-words">C++ Hacking Competition - 3rd Place</h4>
                <Badge variant="outline" className="text-xs font-mono w-fit">Competition</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Programming Contest</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">783 participants</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
