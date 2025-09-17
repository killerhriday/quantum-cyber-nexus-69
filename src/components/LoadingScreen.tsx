import { useState, useEffect } from "react";
import { Brain, Zap, Cpu, Database, Wifi, User, Terminal, Mail } from "lucide-react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; angle: number }>>([]);
  const [quantumParts, setQuantumParts] = useState<Array<{ id: number; x: number; y: number; component: string; delay: number }>>([]);

  useEffect(() => {
    // Generate quantum computer parts
    const parts = [
      { id: 1, x: 50, y: 50, component: 'core', delay: 0 },
      { id: 2, x: 30, y: 40, component: 'processor', delay: 0.2 },
      { id: 3, x: 70, y: 45, component: 'memory', delay: 0.4 },
      { id: 4, x: 35, y: 65, component: 'quantum', delay: 0.6 },
      { id: 5, x: 65, y: 60, component: 'network', delay: 0.8 },
      { id: 6, x: 50, y: 30, component: 'ai', delay: 1.0 },
    ];
    setQuantumParts(parts);

    // Generate explosion particles
    const particleArray = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: 50 + (Math.random() - 0.5) * 20,
      y: 50 + (Math.random() - 0.5) * 20,
      delay: Math.random() * 0.5,
      angle: (i / 80) * 360,
    }));
    setParticles(particleArray);

    // Enhanced stage progression
    const timer1 = setTimeout(() => setStage(1), 800);  // Parts assembly
    const timer2 = setTimeout(() => setStage(2), 2500); // Quantum activation
    const timer3 = setTimeout(() => setStage(3), 4000); // Explosion
    const timer4 = setTimeout(() => setStage(4), 5000); // Reformation
    const timer5 = setTimeout(() => setStage(5), 6200); // Transform to website
    const timer6 = setTimeout(() => onComplete(), 7500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, [onComplete]);

  const getQuantumComponent = (component: string) => {
    switch (component) {
      case 'core': return <Brain className="h-8 w-8 text-primary" />;
      case 'processor': return <Cpu className="h-6 w-6 text-quantum" />;
      case 'memory': return <Database className="h-6 w-6 text-cyber" />;
      case 'quantum': return <Zap className="h-6 w-6 text-primary" />;
      case 'network': return <Wifi className="h-6 w-6 text-quantum" />;
      case 'ai': return <Zap className="h-6 w-6 text-cyber" />;
      default: return <Zap className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black overflow-hidden">
      {/* Quantum Circuit Board Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-opacity duration-2000 ${stage >= 1 ? 'opacity-30' : 'opacity-0'}`}>
          {/* Circuit patterns like the reference image */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`circuit-${i}`}
              className="absolute bg-gradient-to-r from-transparent via-primary/20 to-transparent"
              style={{
                width: `${20 + Math.random() * 60}%`,
                height: '2px',
                top: `${10 + i * 5}%`,
                left: `${Math.random() * 50}%`,
                transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
          {/* Vertical circuits */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`v-circuit-${i}`}
              className="absolute bg-gradient-to-b from-transparent via-quantum/20 to-transparent"
              style={{
                height: `${30 + Math.random() * 40}%`,
                width: '2px',
                left: `${15 + i * 8}%`,
                top: `${Math.random() * 30}%`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
          {/* Circuit nodes */}
          {[...Array(25)].map((_, i) => (
            <div
              key={`node-${i}`}
              className="absolute w-2 h-2 bg-primary/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 90 + 5}%`,
                top: `${Math.random() * 90 + 5}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Quantum Computer Parts Assembly */}
      <div className="absolute inset-0 flex items-center justify-center">
        {quantumParts.map((part) => (
          <div
            key={part.id}
            className={`
              absolute transition-all duration-1500 ease-out
              ${stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
              ${stage === 3 ? 'animate-ping' : ''}
              ${stage >= 4 ? (stage === 5 ? 'opacity-0' : 'opacity-100') : ''}
            `}
            style={{
              left: stage >= 4 ? `${part.x + (Math.random() - 0.5) * 5}%` : `${part.x}%`,
              top: stage >= 4 ? `${part.y + (Math.random() - 0.5) * 5}%` : `${part.y}%`,
              transitionDelay: `${part.delay}s`,
              transform: stage === 3 
                ? `translate(${(Math.random() - 0.5) * 400}px, ${(Math.random() - 0.5) * 400}px) rotate(${Math.random() * 720}deg) scale(0.5)`
                : stage >= 4 
                ? `translate(0, 0) rotate(0deg) scale(1.2)`
                : 'translate(0, 0) rotate(0deg) scale(1)',
            }}
          >
            <div className={`
              p-3 rounded-xl border-2 backdrop-blur-sm
              ${part.component === 'core' ? 'border-primary bg-primary/20' : 
                part.component === 'processor' || part.component === 'ai' ? 'border-quantum bg-quantum/20' :
                'border-cyber bg-cyber/20'}
              ${stage >= 2 ? 'animate-pulse shadow-lg' : ''}
            `}>
              {getQuantumComponent(part.component)}
            </div>
            
            {/* Connection lines between parts */}
            {stage >= 2 && stage < 3 && (
              <div className="absolute inset-0">
                <div className="absolute w-px h-16 bg-gradient-to-b from-current to-transparent -top-8 left-1/2 -translate-x-1/2 animate-pulse" />
                <div className="absolute w-16 h-px bg-gradient-to-r from-current to-transparent -left-8 top-1/2 -translate-y-1/2 animate-pulse" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Explosion Particles */}
      {stage >= 3 && stage < 5 && particles.map((particle) => (
        <div
          key={particle.id}
          className={`
            absolute w-1 h-1 bg-primary/80 rounded-full
            transition-all duration-2000 ease-out
            ${stage === 4 ? 'animate-pulse' : ''}
          `}
          style={{
            left: '50%',
            top: '50%',
            transform: stage === 3 
              ? `translate(${Math.cos(particle.angle * Math.PI / 180) * 300}px, ${Math.sin(particle.angle * Math.PI / 180) * 300}px) scale(2)`
              : stage === 4
              ? `translate(${Math.cos(particle.angle * Math.PI / 180) * 100}px, ${Math.sin(particle.angle * Math.PI / 180) * 100}px) scale(1)`
              : 'translate(0, 0) scale(0)',
            transitionDelay: `${particle.delay}s`,
            opacity: stage === 4 ? 0.8 : 0.4,
          }}
        />
      ))}

      {/* Welcome Text and Status */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`
            absolute -bottom-40 transition-all duration-1000 ease-out
            ${stage >= 1 && stage < 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4 tracking-wider">
              WELCOME
            </h1>
            <div className="flex items-center justify-center gap-2 text-primary/80 text-sm mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
              <span className="font-mono">
                {stage === 1 ? "ASSEMBLING.QUANTUM.CORE" :
                 stage === 2 ? "ACTIVATING.AI.SYSTEMS" :
                 stage === 3 ? "QUANTUM.DECOHERENCE" :
                 stage === 4 ? "REFORMING.MATRIX" : "INITIALIZING"}
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            
            {/* Progress Bar */}
            <div className="w-80 h-1 bg-primary/20 rounded-full overflow-hidden">
              <div
                className={`
                  h-full bg-gradient-to-r from-primary via-quantum to-cyber
                  transition-all duration-1000 ease-out
                `}
                style={{ 
                  width: `${(stage / 5) * 100}%`,
                  boxShadow: "0 0 15px hsl(var(--primary))",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Website Formation Effect */}
      {stage === 5 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-8 animate-fade-in-up">
            {/* Transform particles into website elements */}
            <div className="grid grid-cols-3 gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="bg-card/20 backdrop-blur-sm border border-primary/30 rounded-lg p-4 transform scale-0 animate-scale-in" style={{ animationDelay: '0.7s' }}>
                <User className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-xs text-muted-foreground">About</div>
              </div>
              <div className="bg-card/20 backdrop-blur-sm border border-quantum/30 rounded-lg p-4 transform scale-0 animate-scale-in" style={{ animationDelay: '0.9s' }}>
                <Terminal className="h-6 w-6 text-quantum mx-auto mb-2" />
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="bg-card/20 backdrop-blur-sm border border-cyber/30 rounded-lg p-4 transform scale-0 animate-scale-in" style={{ animationDelay: '1.1s' }}>
                <Mail className="h-6 w-6 text-cyber mx-auto mb-2" />
                <div className="text-xs text-muted-foreground">Contact</div>
              </div>
            </div>
            <div className="text-primary/80 font-mono text-sm opacity-0 animate-fade-in-up" style={{ animationDelay: '1.3s' }}>
              MATRIX.STABLE → ENTERING.PORTFOLIO
            </div>
          </div>
        </div>
      )}

      {/* Final Fade Out */}
      <div
        className={`
          absolute inset-0 bg-black
          transition-opacity duration-1500 ease-out
          ${stage >= 5 ? "opacity-0" : "opacity-100"}
        `}
      />
    </div>
  );
};

export default LoadingScreen;