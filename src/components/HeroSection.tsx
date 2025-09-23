import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Award, Code2, ExternalLink } from "lucide-react";
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
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6 lg:mb-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto lg:mx-0 mb-4 sm:mb-6 rounded-full overflow-hidden border-2 border-muted/30">
                <img 
                  src={profileNew} 
                  alt="Hriday H Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <span className="text-xs sm:text-sm font-mono text-muted-foreground tracking-wider">
                  RESEARCH FELLOW
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="animate-fade-in-up">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight mb-4 sm:mb-6">
                <span className="block text-foreground">Hriday H.</span>
                <span className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-mono">
                  PATEL
                </span>
              </h1>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground">
                  IBDP-2 student
                </h2>
                <h3 className="text-base sm:text-lg md:text-xl font-light text-muted-foreground/80">
                  intended majors in quantum computing and cybersecurity
                </h3>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Code2 className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                  <span className="font-mono text-xs sm:text-sm text-muted-foreground">
                    AI Systems Developer
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                Pioneering the intersection of quantum mechanics and cybersecurity. 
                Currently developing patent-pending solutions that redefine digital security 
                architecture for the next generation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up animation-delay-500 items-center lg:items-start">
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
            </div>
          </div>
        </div>

        {/* Achievement Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mt-12 sm:mt-16 animate-fade-in-up animation-delay-1000">
          <div className="text-center">
            <div className="text-lg sm:text-2xl font-light font-mono text-foreground mb-1 sm:mb-2">CS50</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Harvard</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl font-light font-mono text-foreground mb-1 sm:mb-2">CORE 140</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Purdue</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl font-light font-mono text-foreground mb-1 sm:mb-2">Quantum</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">TU Delft</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl font-light font-mono text-foreground mb-1 sm:mb-2">Patent</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">In Process</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;