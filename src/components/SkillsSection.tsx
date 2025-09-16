import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Code2, Brain, Lock, Cpu, Settings } from "lucide-react";

const SkillsSection = () => {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "primary",
      tools: ["Python", "C++", "Java", "JavaScript"]
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
      tools: ["Burp Suite", "Ghidra", "IDA Free", "Linux Tools (nmap, netcat, Wireshark, etc.)", "CTF Platforms / Hacking Frameworks"]
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
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Code2 className="h-8 w-8 text-muted-foreground" />
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              Technical <span className="font-mono text-muted-foreground">Knowledge</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Tools and technologies used across quantum computing, cybersecurity, and AI development
          </p>
        </div>

        {/* Technical Knowledge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <Card 
                key={index}
                className={`p-6 bg-card/30 backdrop-blur-sm border ${colors.border} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${colors.bg}`}>
                    <IconComponent className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-medium">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Professional Certifications */}
        <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Shield className="h-6 w-6 text-muted-foreground" />
            <h3 className="text-xl font-medium text-center">
              Professional <span className="font-mono text-muted-foreground">Certifications</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-muted/10 border border-border/30 hover:border-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-sm">CS50: Introduction to Computer Science</h4>
                <Badge variant="outline" className="text-xs font-mono">Foundational</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Harvard University</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">2024</span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-muted/10 border border-border/30 hover:border-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-sm">Ethical Hacking & Penetration Testing</h4>
                <Badge variant="outline" className="text-xs font-mono">Specialized</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Purdue University</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">2024</span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-muted/10 border border-border/30 hover:border-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-sm">Quantum Computing & Quantum Internet</h4>
                <Badge variant="outline" className="text-xs font-mono">Research</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Delft University of Technology</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">2024</span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-muted/10 border border-border/30 hover:border-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-sm">AP Calculus AB</h4>
                <Badge variant="outline" className="text-xs font-mono">Academic</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">College Board</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">2024</span>
                <Badge variant="outline" className="text-xs font-mono">Score: 3</Badge>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-muted/10 border border-border/30 hover:border-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-sm">Software Development Internship</h4>
                <Badge variant="outline" className="text-xs font-mono">Professional</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Certificate</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">2024</span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-muted/10 border border-border/30 hover:border-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-sm">CTF Hacking Tournament - 7th Place</h4>
                <Badge variant="outline" className="text-xs font-mono">Competition</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Solo participant</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">220 teams</span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-muted/10 border border-border/30 hover:border-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-sm">C++ Hacking Competition - 3rd Place</h4>
                <Badge variant="outline" className="text-xs font-mono">Competition</Badge>
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