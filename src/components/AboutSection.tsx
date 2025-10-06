import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, School, Clock, Coffee, Brain, Target, Microscope } from "lucide-react";
import { motion } from "framer-motion";
import { useAppleScrollAnimation } from "@/hooks/useAppleScrollAnimation";

const AboutSection = () => {
  const { ref: titleRef, isInView: titleInView } = useAppleScrollAnimation();
  const { ref: cardsRef, isInView: cardsInView } = useAppleScrollAnimation();
  const { ref: visionRef, isInView: visionInView } = useAppleScrollAnimation();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          ref={titleRef}
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
            <Microscope className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-muted-foreground" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
              Research <span className="font-mono text-muted-foreground">Profile</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto font-light px-2 sm:px-4 lg:px-0">
            Bridging theoretical foundations with practical innovation in quantum computation and cybersecurity
          </p>
        </motion.div>

        <motion.div 
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={cardsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, staggerChildren: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Research Philosophy */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={cardsInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="p-3 sm:p-4 md:p-6 lg:p-8 bg-card/50 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-[var(--shadow-glow)] h-full">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                <Brain className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-muted-foreground" />
                <h3 className="text-base sm:text-lg md:text-xl font-medium">Research Philosophy</h3>
              </div>
              
              <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 md:mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Ahmedabad, India</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <School className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Ahmedabad International School</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Target className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-xs sm:text-sm">IB Diploma Programme, Grade 12</span>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed font-light italic border-l-2 border-muted/30 pl-2 sm:pl-3 md:pl-4">
                "I investigate how quantum mechanics and cybersecurity can work together, 
                turning theoretical ideas into practical student projects. Each algorithm or 
                system I develop helps me learn how future digital security solutions might be designed."
              </blockquote>
            </Card>
          </motion.div>

          {/* Academic Excellence */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={cardsInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="p-3 sm:p-4 md:p-6 lg:p-8 bg-card/50 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-[var(--shadow-glow)] h-full">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                <School className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-muted-foreground" />
                <h3 className="text-base sm:text-lg md:text-xl font-medium">Academic Excellence</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-3">
                    <h4 className="font-medium text-sm sm:text-base md:text-lg">IB Diploma Programme</h4>
                    <Badge variant="outline" className="text-xs font-mono w-fit">Grade 12</Badge>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2 font-mono uppercase tracking-wider">Higher Level</div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <Badge variant="outline" className="border-muted text-muted-foreground text-xs">Economics</Badge>
                        <Badge variant="outline" className="border-muted text-muted-foreground text-xs">Hindi</Badge>
                        <Badge variant="outline" className="border-muted text-muted-foreground text-xs">Business Studies</Badge>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2 font-mono uppercase tracking-wider">Standard Level</div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <Badge variant="outline" className="border-muted text-muted-foreground text-xs">Physics</Badge>
                        <Badge variant="outline" className="border-muted text-muted-foreground text-xs">Mathematics AA</Badge>
                        <Badge variant="outline" className="border-muted text-muted-foreground text-xs">English</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm sm:text-base md:text-lg mb-2 sm:mb-3">Advanced Placement</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <Badge className="bg-muted/30 text-foreground border-muted font-mono text-xs">Calculus AB: Score 3</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Research Vision */}
        <motion.div
          ref={visionRef}
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={visionInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 40 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-br from-primary/10 via-card/60 to-accent/10 border-primary/30 backdrop-blur-md shadow-xl">
            <div className="text-center">
              <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2 sm:mb-3 md:mb-4">Research Vision</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light px-2 sm:px-0">
                Through projects like CRYPTECH, I investigate ways AI can improve cybersecurity. 
                My work focuses on experimenting with privacy-preserving protocols and autonomous 
                security systems, helping me learn and develop skills in this emerging field.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;