import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ExternalLink, Award, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import profileNew from "@/assets/profile-new.jpg";

interface MobileHeroProps {
  onNavigate: (section: string) => void;
}

const MobileHero = ({ onNavigate }: MobileHeroProps) => {
  return (
    <motion.div 
      className="relative p-4 bg-gradient-to-b from-background to-secondary/20 border-b border-border/50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-muted/30 flex-shrink-0">
          <img 
            src={profileNew} 
            alt="Hriday H Patel" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-light tracking-tight">
            <span className="block text-foreground">Hriday H.</span>
            <span className="block text-sm text-muted-foreground font-mono">PATEL</span>
          </h1>
          <div className="flex items-center gap-1 mt-1">
            <Award className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground tracking-wider">
              RESEARCH FELLOW
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <p className="text-sm font-medium text-muted-foreground">IBDP-2 Student</p>
        <p className="text-xs text-muted-foreground/80">
          Quantum Computing & Cybersecurity • AI Systems Developer
        </p>
      </div>

      <div className="flex gap-2 mb-4">
        <Button 
          variant="outline" 
          size="sm"
          className="flex-1"
          onClick={() => onNavigate('about')}
        >
          Research Profile
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => window.open('mailto:hriday_patel@hotmail.com')}
        >
          <Mail className="h-3 w-3" />
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => window.open('https://www.linkedin.com/in/hriday-patel-64a04b316/')}
        >
          <Linkedin className="h-3 w-3" />
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-card/30 rounded-lg p-2">
          <div className="text-sm font-mono text-foreground">CS50</div>
          <div className="text-xs text-muted-foreground">Harvard</div>
        </div>
        <div className="bg-card/30 rounded-lg p-2">
          <div className="text-sm font-mono text-foreground">CORE</div>
          <div className="text-xs text-muted-foreground">Purdue</div>
        </div>
        <div className="bg-card/30 rounded-lg p-2">
          <div className="text-sm font-mono text-foreground">Quantum</div>
          <div className="text-xs text-muted-foreground">TU Delft</div>
        </div>
        <div className="bg-card/30 rounded-lg p-2">
          <div className="text-sm font-mono text-foreground">Patent</div>
          <div className="text-xs text-muted-foreground">Process</div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileHero;