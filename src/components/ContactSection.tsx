import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Calendar, Target, Rocket, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TypewriterText } from "@/components/TypewriterText";

const ContactSection = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.2);
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation(0.1);
  const { ref: visionRef, isInView: visionInView } = useScrollAnimation(0.3);

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
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          ref={titleRef}
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
            <TypewriterText text="Academic Trajectory" speed={50} />
          </h2>
          <TypewriterText 
            text="Charting a course toward groundbreaking research in quantum computation and cybersecurity"
            as="p"
            className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto font-light px-2 sm:px-4 lg:px-0"
            speed={25}
          />
        </motion.div>

        <motion.div 
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={contentInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Ambitions */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6">Academic Ambitions</h3>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">{ambitions.map((ambition, index) => {
                const IconComponent = ambition.icon;
                const colorClasses = getColorClasses(ambition.color);
                
                return (
                  <Card key={index} className={`p-2 sm:p-3 md:p-4 border ${colorClasses}`}>
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                      <div className={`p-1.5 sm:p-2 rounded-lg ${colorClasses} flex-shrink-0`}>
                        <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                      </div>
                      <div className="min-w-0">
                        <TypewriterText 
                          text={ambition.title}
                          as="h4"
                          className="font-semibold text-xs sm:text-sm md:text-base break-words"
                          speed={50}
                        />
                        <TypewriterText 
                          text={ambition.description}
                          as="p"
                          className="text-xs sm:text-sm text-muted-foreground break-words"
                          speed={30}
                        />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-4 sm:mt-6 md:mt-8">
              <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Intended Academic Path</h4>
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
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-card/80 to-secondary/50 backdrop-blur-sm border-border/50 h-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">Get In Touch</h3>
              
              <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 md:mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base break-words">Ahmedabad, India</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-cyber flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base break-all">hriday_patel@hotmail.com</span>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <p className="text-xs text-muted-foreground text-center leading-relaxed px-2">
                  Interested in quantum computing research, cybersecurity innovation, 
                  or collaborative projects in emerging technologies
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          ref={visionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={visionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-r from-quantum/5 to-cyber/5 border-primary/20">
            <TypewriterText 
              text="My Commitment"
              as="h3"
              className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-center"
              speed={50}
            />
            <TypewriterText 
              text="To architect solutions that don't just solve today's problems, but anticipate tomorrow's challenges. Through the convergence of quantum computing, cybersecurity, and AI, I aim to build a future where technology empowers and protects, rather than compromises."
              as="blockquote"
              className="text-xs sm:text-sm md:text-base lg:text-lg text-center text-muted-foreground leading-relaxed italic px-2 sm:px-0"
              speed={18}
            />
            <div className="text-center mt-2 sm:mt-3 md:mt-4">
              <span className="text-primary font-semibold text-xs sm:text-sm md:text-base">— Hriday H Patel</span>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;