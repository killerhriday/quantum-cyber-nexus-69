import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, School, Clock, Coffee, Brain, Target, Microscope } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Microscope className="h-8 w-8 text-muted-foreground" />
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              Research <span className="font-mono text-muted-foreground">Profile</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Bridging theoretical foundations with practical innovation in quantum computation and cybersecurity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Research Philosophy */}
          <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="h-6 w-6 text-muted-foreground" />
              <h3 className="text-xl font-medium">Research Philosophy</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Ahmedabad, India</span>
              </div>
              <div className="flex items-center gap-3">
                <School className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Ahmedabad International School</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">IB Diploma Programme, Grade 12</span>
              </div>
            </div>

            <blockquote className="text-muted-foreground leading-relaxed font-light italic border-l-2 border-muted/30 pl-4">
              "I investigate how quantum mechanics and cybersecurity can work together, 
              turning theoretical ideas into practical student projects. Each algorithm or 
              system I develop helps me learn how future digital security solutions might be designed."
            </blockquote>
          </Card>

          {/* Academic Excellence */}
          <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <School className="h-6 w-6 text-muted-foreground" />
              <h3 className="text-xl font-medium">Academic Excellence</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h4 className="font-medium text-lg">IB Diploma Programme</h4>
                  <Badge variant="outline" className="text-xs font-mono">Grade 12</Badge>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2 font-mono uppercase tracking-wider">Higher Level</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-muted text-muted-foreground">Economics</Badge>
                      <Badge variant="outline" className="border-muted text-muted-foreground">Hindi</Badge>
                      <Badge variant="outline" className="border-muted text-muted-foreground">Business Studies</Badge>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2 font-mono uppercase tracking-wider">Standard Level</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-muted text-muted-foreground">Physics</Badge>
                      <Badge variant="outline" className="border-muted text-muted-foreground">Mathematics AA</Badge>
                      <Badge variant="outline" className="border-muted text-muted-foreground">English</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-lg mb-3">Advanced Placement</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-muted/30 text-foreground border-muted font-mono">Calculus AB: Score 3</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Research Vision */}
        <Card className="p-8 bg-gradient-to-r from-muted/10 to-muted/5 border-muted/30">
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">Research Vision</h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
              Through projects like CRYPTECH, I investigate ways AI can improve cybersecurity. 
              My work focuses on experimenting with privacy-preserving protocols and autonomous 
              security systems, helping me learn and develop skills in this emerging field.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;