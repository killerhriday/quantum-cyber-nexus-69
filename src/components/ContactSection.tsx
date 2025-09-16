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
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            Academic <span className="font-mono text-muted-foreground">Trajectory</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Charting a course toward groundbreaking research in quantum computation and cybersecurity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Ambitions */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Academic Ambitions</h3>
            <div className="space-y-4">
              {ambitions.map((ambition, index) => {
                const IconComponent = ambition.icon;
                const colorClasses = getColorClasses(ambition.color);
                
                return (
                  <Card key={index} className={`p-4 border ${colorClasses}`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${colorClasses}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{ambition.title}</h4>
                        <p className="text-sm text-muted-foreground">{ambition.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Intended Academic Path</h4>
              <div className="space-y-2">
                <div>
                  <span className="text-sm text-muted-foreground">Majors:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge className="bg-quantum/20 text-quantum border-quantum">Quantum Computing</Badge>
                    <Badge className="bg-cyber/20 text-cyber border-cyber">Cybersecurity</Badge>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Minors:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge variant="outline">AI</Badge>
                    <Badge variant="outline">Robotics</Badge>
                    <Badge variant="outline">Software Engineering</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <Card className="p-8 bg-gradient-to-br from-card/80 to-secondary/50 backdrop-blur-sm border-border/50">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Ahmedabad, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-quantum" />
                <span>Available for collaborations & discussions</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyber" />
                <span>hriday_patel@hotmail.com</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-muted-foreground text-center">
                Interested in quantum computing research, cybersecurity innovation, 
                or collaborative projects in emerging technologies
              </p>
            </div>
          </Card>
        </div>

        {/* Vision Statement */}
        <Card className="p-8 bg-gradient-to-r from-quantum/5 to-cyber/5 border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-center">My Commitment</h3>
          <blockquote className="text-lg text-center text-muted-foreground leading-relaxed italic">
            "To architect solutions that don't just solve today's problems, but anticipate tomorrow's challenges. 
            Through the convergence of quantum computing, cybersecurity, and AI, I aim to build a future where 
            technology empowers and protects, rather than compromises."
          </blockquote>
          <div className="text-center mt-4">
            <span className="text-primary font-semibold">— Hriday H Patel</span>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;