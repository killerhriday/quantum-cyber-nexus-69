import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Calendar, Target, Rocket, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

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
    <motion.section 
      ref={elementRef}
      id="contact" 
      className="py-20 px-6 bg-secondary/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            Academic <span className="font-mono text-muted-foreground">Trajectory</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Charting a course toward groundbreaking research in quantum computation and cybersecurity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Ambitions */}
          <motion.div
            initial={{ 
              opacity: 0, 
              x: -100,
              rotateY: -15
            }}
            animate={{
              opacity: isVisible ? 1 : 0,
              x: isVisible ? 0 : -100,
              rotateY: isVisible ? 0 : -15
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <h3 className="text-2xl font-bold mb-6">Academic Ambitions</h3>
            <div className="space-y-4">
              {ambitions.map((ambition, index) => {
                const IconComponent = ambition.icon;
                const colorClasses = getColorClasses(ambition.color);
                
                return (
                  <motion.div
                    key={index}
                    initial={{ 
                      opacity: 0, 
                      x: -50,
                      scale: 0.9
                    }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      x: isVisible ? 0 : -50,
                      scale: isVisible ? 1 : 0.9
                    }}
                    transition={{
                      delay: 0.4 + (index * 0.1),
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      scale: 1.05,
                      x: 5
                    }}
                  >
                    <Card className={`p-4 border ${colorClasses}`}>
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
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
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
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ 
              opacity: 0, 
              x: 100,
              rotateY: 15,
              scale: 0.9
            }}
            animate={{
              opacity: isVisible ? 1 : 0,
              x: isVisible ? 0 : 100,
              rotateY: isVisible ? 0 : 15,
              scale: isVisible ? 1 : 0.9
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: "easeOut"
            }}
            whileHover={{
              scale: 1.02,
              rotateX: 2,
              rotateY: -2
            }}
          >
            <Card className="p-6 bg-gradient-to-br from-card/80 to-secondary/50 backdrop-blur-sm border-border/50 h-full">
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Ahmedabad, India</span>
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
          </motion.div>
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ 
            opacity: 0, 
            y: 50,
            scale: 0.9
          }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 50,
            scale: isVisible ? 1 : 0.9
          }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeOut"
          }}
          whileHover={{
            scale: 1.02
          }}
        >
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;