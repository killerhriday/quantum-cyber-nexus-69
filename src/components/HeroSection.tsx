import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Award, Code2, ExternalLink } from "lucide-react";
import sophisticatedHero from "@/assets/sophisticated-hero.jpg";
import profileElegant from "@/assets/profile-elegant.jpg";

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
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Profile */}
          <div className="text-center lg:text-left">
            <div className="mb-8 lg:mb-0">
              <div className="w-32 h-32 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-2 border-muted/30">
                <img 
                  src={profileElegant} 
                  alt="Hriday H Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                <Award className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-mono text-muted-foreground tracking-wider">
                  RESEARCH FELLOW
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
                <span className="block text-foreground">Hriday H.</span>
                <span className="block text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-mono">
                  PATEL
                </span>
              </h1>
              
              <div className="space-y-4 mb-8">
                <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                  IBDP-2 student
                </h2>
                <h3 className="text-lg md:text-xl font-light text-muted-foreground/80">
                  intended majors
                </h3>
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-muted-foreground" />
                  <span className="font-mono text-sm text-muted-foreground">
                    AI Systems Developer
                  </span>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                Pioneering the intersection of quantum mechanics and cybersecurity. 
                Currently developing patent-pending solutions that redefine digital security 
                architecture for the next generation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-500">
              <Button 
                variant="default" 
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 font-medium"
                onClick={scrollToAbout}
              >
                Research Portfolio
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="flex gap-3">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16 animate-fade-in-up animation-delay-1000">
          <div className="text-center">
            <div className="text-2xl font-light font-mono text-foreground mb-2">CS50</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Harvard</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light font-mono text-foreground mb-2">CORE 140</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Purdue</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light font-mono text-foreground mb-2">Quantum</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">TU Delft</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light font-mono text-foreground mb-2">Patent</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">In Process</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;