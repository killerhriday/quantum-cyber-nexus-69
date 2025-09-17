import { useState, useEffect } from "react";
import { Brain, Zap } from "lucide-react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random particles
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(particleArray);

    // Stage progression
    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 2000);
    const timer3 = setTimeout(() => setStage(3), 3500);
    const timer4 = setTimeout(() => setStage(4), 4500);
    const timer5 = setTimeout(() => onComplete(), 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black overflow-hidden">
      {/* Quantum Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              style={{
                top: `${i * 5}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`
            absolute w-1 h-1 bg-primary/60 rounded-full
            transition-all duration-2000 ease-out
            ${stage >= 3 ? "animate-ping opacity-0" : "animate-pulse"}
          `}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            transform: stage >= 3 
              ? `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(3)`
              : "translate(0, 0) scale(1)",
          }}
        />
      ))}

      {/* Central AI Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Quantum Computer Core */}
          <div
            className={`
              relative w-32 h-32 border-2 border-primary/50 rounded-full
              transition-all duration-1000 ease-out
              ${stage >= 1 ? "scale-100 opacity-100" : "scale-0 opacity-0"}
              ${stage >= 2 ? "animate-spin" : ""}
              ${stage >= 3 ? "scale-150 border-primary" : ""}
            `}
          >
            {/* Inner rings */}
            <div className="absolute inset-4 border border-primary/30 rounded-full animate-pulse" />
            <div className="absolute inset-8 border border-primary/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
            
            {/* AI Brain Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Brain 
                className={`
                  h-12 w-12 text-primary
                  transition-all duration-1000
                  ${stage >= 2 ? "animate-pulse text-white" : ""}
                  ${stage >= 3 ? "scale-125" : ""}
                `} 
              />
            </div>

            {/* Energy Rings */}
            {stage >= 2 && (
              <>
                <div className="absolute inset-0 border-2 border-primary/40 rounded-full animate-ping" />
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
              </>
            )}

            {/* Lightning Effects */}
            {stage >= 2 && (
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px h-8 bg-gradient-to-b from-primary to-transparent"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `rotate(${i * 45}deg) translateY(-40px)`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    <Zap className="h-3 w-3 text-primary animate-pulse" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Welcome Text */}
          <div
            className={`
              absolute -bottom-20 left-1/2 -translate-x-1/2
              transition-all duration-1000 ease-out
              ${stage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-2 tracking-wider">
                WELCOME
              </h1>
              <div className="flex items-center justify-center gap-2 text-primary/80 text-sm">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/50" />
                <span className="font-mono">HRIDAY.H.PATEL</span>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary/50" />
              </div>
            </div>
          </div>

          {/* Loading Progress */}
          <div
            className={`
              absolute -bottom-32 left-1/2 -translate-x-1/2 w-64
              transition-all duration-500 ease-out
              ${stage >= 1 ? "opacity-100" : "opacity-0"}
            `}
          >
            <div className="h-px bg-primary/20 rounded-full overflow-hidden">
              <div
                className={`
                  h-full bg-gradient-to-r from-primary to-white
                  transition-all duration-3000 ease-out
                  ${stage >= 1 ? "w-full" : "w-0"}
                `}
                style={{ 
                  boxShadow: "0 0 10px hsl(var(--primary))",
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-primary/60 mt-2 font-mono">
              <span>portfolio</span>
              <span>LOADING...</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Explosion Effect */}
      {stage >= 4 && (
        <div className="absolute inset-0 bg-white/10 animate-pulse">
          <div className="absolute inset-0 bg-gradient-radial from-white/20 via-primary/10 to-transparent animate-ping" />
        </div>
      )}

      {/* Fade Out */}
      <div
        className={`
          absolute inset-0 bg-black
          transition-opacity duration-1000 ease-out
          ${stage >= 4 ? "opacity-0" : "opacity-0"}
        `}
      />
    </div>
  );
};

export default LoadingScreen;
