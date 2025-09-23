import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Calendar, Target, Rocket, Brain } from "lucide-react";

const ContactSection = () => {
  const ambitions = [
    {
      title: "Quantum Computing",
      description: "Developing quantum algorithms that break cryptographic standards",
      icon: Brain,
      color: "quantum"
    },
    {
      title: "Cybersecurity Innovation", 
      description: "Building proactive, self-healing defense systems",
      icon: Target,
      color: "cyber"
    },
    {
      title: "AI & Robotics Integration",
      description: "Creating synergistic solutions for complex real-world problems", 
      icon: Rocket,
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "quantum":
        return "text-quantum bg-quantum/10 border-quantum/30";
      case "cyber":
        return "text-cyber bg-cyber/10 border-cyber/30";
      default:
        return "text-primary bg-primary/10 border-primary/30";
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide">
            Academic <span className="font-mono text-muted-foreground">Trajectory</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto font-light px-4 sm:px-0">
            Charting a course toward groundbreaking research in quantum computation and cybersecurity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Ambitions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Academic Ambitions</h3>
            <div className="space-y-3 sm:space-y-4">
              {ambitions.map((ambition, index) => {
                const IconComponent = ambition.icon;
                const colorClasses = getColorClasses(ambition.color);
                
                return (
                  <Card key={index} className={`p-3 sm:p-4 border ${colorClasses}`}>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`p-2 rounded-lg ${colorClasses} flex-shrink-0`}>
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-sm sm:text-base break-words">{ambition.title}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">{ambition.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-6 sm:mt-8">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Intended Academic Path</h4>
              <div className="space-y-2">
                <div>
                  <span className="text-xs sm:text-sm text-muted-foreground">Majors:</span>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-1">
                    <Badge className="bg-quantum/20 text-quantum border-quantum text-xs">Quantum Computing</Badge>
                    <Badge className="bg-cyber/20 text-cyber border-cyber text-xs">Cybersecurity</Badge>
                  </div>
                </div>
                <div>
                  <span className="text-xs sm:text-sm text-muted-foreground">Minors:</span>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">AI</Badge>
                    <Badge variant="outline" className="text-xs">Robotics</Badge>
                    <Badge variant="outline" className="text-xs">Software Engineering</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <Card className="p-4 sm:p-6 bg-gradient-to-br from-card/80 to-secondary/50 backdrop-blur-sm border-border/50">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Get In Touch</h3>
            
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base break-words">Ahmedabad, India</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-cyber flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">hriday_patel@hotmail.com</span>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                Interested in quantum computing research, cybersecurity innovation, 
                or collaborative projects in emerging technologies
              </p>
            </div>
          </Card>
        </div>

        {/* Vision Statement */}
        <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-quantum/5 to-cyber/5 border-primary/20">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">My Commitment</h3>
          <blockquote className="text-sm sm:text-base lg:text-lg text-center text-muted-foreground leading-relaxed italic">
            "To architect solutions that don't just solve today's problems, but anticipate tomorrow's challenges. 
            Through the convergence of quantum computing, cybersecurity, and AI, I aim to build a future where 
            technology empowers and protects, rather than compromises."
          </blockquote>
          <div className="text-center mt-3 sm:mt-4">
            <span className="text-primary font-semibold text-sm sm:text-base">— Hriday H Patel</span>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;