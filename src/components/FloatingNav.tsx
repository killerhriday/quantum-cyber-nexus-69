import { useState, useEffect } from "react";
import { Menu, X, Brain, Shield, Terminal, Beaker, User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { id: "hero", label: "Home", icon: Brain, color: "primary" },
    { id: "about", label: "About", icon: User, color: "quantum" },
    { id: "projects", label: "Projects", icon: Terminal, color: "cyber" },
    { id: "research", label: "Research", icon: Beaker, color: "primary" },
    { id: "skills", label: "Skills", icon: Shield, color: "quantum" },
    { id: "contact", label: "Contact", icon: Mail, color: "cyber" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const getColorClasses = (color: string, isActive: boolean) => {
    const baseClasses = "transition-all duration-300";
    
    if (isActive) {
      switch (color) {
        case "quantum":
          return `${baseClasses} bg-quantum/20 text-quantum border-quantum/50 shadow-quantum`;
        case "cyber":
          return `${baseClasses} bg-cyber/20 text-cyber border-cyber/50 shadow-cyber`;
        default:
          return `${baseClasses} bg-primary/20 text-primary border-primary/50`;
      }
    }
    
    return `${baseClasses} hover:bg-muted/50 text-muted-foreground hover:text-foreground`;
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40">
      {/* Floating Menu Button */}
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-14 h-14 rounded-full bg-card/80 backdrop-blur-md border border-border/50
            hover:bg-card/90 hover:scale-110 transition-all duration-300
            shadow-lg hover:shadow-glow group
            ${isOpen ? 'rotate-180' : ''}
          `}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground group-hover:text-primary" />
          )}
          
          {/* Quantum particles effect */}
          <div className="absolute inset-0 rounded-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`
                  absolute w-1 h-1 bg-primary/60 rounded-full
                  animate-pulse opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                `}
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-20px)`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </Button>

        {/* Navigation Menu */}
        <div
          className={`
            absolute right-16 top-1/2 -translate-y-1/2
            transition-all duration-500 ease-out z-50
            ${
              isOpen
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-8 scale-90 pointer-events-none"
            }
          `}
        >
          <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl p-2 shadow-xl">
            <div className="space-y-1">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <div
                    key={item.id}
                    className={`
                      transition-all duration-300 ease-out
                      ${isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}
                    `}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        w-full justify-start gap-3 px-4 py-3 h-auto
                        rounded-xl border border-transparent
                        ${getColorClasses(item.color, isActive)}
                        hover:scale-105 active:scale-95
                        group/item
                      `}
                    >
                      <div className="relative">
                        <IconComponent className="h-5 w-5" />
                        {isActive && (
                          <div className="absolute inset-0 animate-ping">
                            <IconComponent className="h-5 w-5 opacity-30" />
                          </div>
                        )}
                      </div>
                      <span className="font-medium text-sm">{item.label}</span>
                      
                      {/* Connection line effect */}
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-transparent via-current to-transparent rounded-full" />
                      )}
                    </Button>
                  </div>
                );
              })}
            </div>
            
            {/* Neural network connecting lines */}
            <div className="absolute inset-0 pointer-events-none">
              {navItems.map((_, index) => (
                <div
                  key={index}
                  className={`
                    absolute left-8 w-px bg-gradient-to-b from-primary/20 to-transparent
                    transition-all duration-1000
                    ${isOpen ? "opacity-100 h-12" : "opacity-0 h-0"}
                  `}
                  style={{
                    top: `${12 + index * 56}px`,
                    transitionDelay: `${(navItems.length - index) * 100}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingNav;