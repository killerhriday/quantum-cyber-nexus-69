import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Award, Code2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import sophisticatedHero from "@/assets/sophisticated-hero.jpg";
import profileNew from "@/assets/profile-new.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sophisticated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sophisticatedHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background/90" />
      </div>
      
      
      {/* Sophisticated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Profile */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="mb-4 sm:mb-6 lg:mb-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto lg:mx-0 mb-3 sm:mb-4 lg:mb-6 rounded-full overflow-hidden border-2 border-muted/30">
                <img 
                  src={profileNew} 
                  alt="Hriday H Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-3 sm:mb-4">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-muted-foreground" />
                <span className="text-xs sm:text-sm font-mono text-muted-foreground tracking-wider">
                  RESEARCH FELLOW
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div>
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-3 sm:mb-4 md:mb-6">
                <span className="block text-foreground">Hriday H.</span>
                <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-mono">
                  PATEL
                </span>
              </h1>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <h2 className="text-base sm:text-lg md:text-xl font-medium text-muted-foreground">
                  IBDP-2 student
                </h2>
                <h3 className="text-sm sm:text-base md:text-lg font-light text-muted-foreground/80">
                  intended majors in quantum computing and cybersecurity
                </h3>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Code2 className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                  <span className="font-mono text-xs sm:text-sm text-muted-foreground">
                    AI Systems Developer
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-center lg:text-left px-2 sm:px-0">
                Pioneering the intersection of quantum mechanics and cybersecurity. 
                Currently developing patent-pending solutions that redefine digital security 
                architecture for the next generation.
              </p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12 items-center lg:items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                variant="default" 
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 font-medium w-full sm:w-auto"
                onClick={scrollToAbout}
              >
                Research Portfolio
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="flex gap-3 justify-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-muted hover:bg-muted/10"
                  onClick={() => window.open('https://orcid.org/0009-0005-9467-5379', '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-muted hover:bg-muted/10"
                  onClick={() => window.open('mailto:hriday_patel@hotmail.com', '_blank')}
                >
                  <Mail className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-muted hover:bg-muted/10"
                  onClick={() => window.open('https://www.linkedin.com/in/hriday-patel-64a04b316/', '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievement Metrics */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto mt-8 sm:mt-12 md:mt-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center">
            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light font-mono text-foreground mb-1">CS50</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Harvard</div>
          </div>
          <div className="text-center">
            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light font-mono text-foreground mb-1">CORE 140</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Purdue</div>
          </div>
          <div className="text-center">
            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light font-mono text-foreground mb-1">Quantum</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">TU Delft</div>
          </div>
          <div className="text-center">
            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light font-mono text-foreground mb-1">Patent</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">In Process</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;