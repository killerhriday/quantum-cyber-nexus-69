import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  char: string;
  opacity: number;
  size: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'grid' | 'computer' | 'blast' | 'binary' | 'align' | 'fade'>('grid');
  const [particles, setParticles] = useState<Particle[]>([]);
  const [gridOpacity, setGridOpacity] = useState(0);
  const [computerOpacity, setComputerOpacity] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(1);

  // Stage progression
  useEffect(() => {
    const timers = [
      setTimeout(() => setStage('computer'), 1500), // Grid appears
      setTimeout(() => setStage('blast'), 4000),    // Computer materializes
      setTimeout(() => setStage('binary'), 5000),   // Energy blast
      setTimeout(() => setStage('align'), 7000),    // Binary dance
      setTimeout(() => setStage('fade'), 9000),     // Alignment
      setTimeout(() => onComplete(), 10500)         // Fade complete
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // Grid lines animation
  useEffect(() => {
    if (stage === 'grid') {
      const fadeIn = setInterval(() => {
        setGridOpacity(prev => Math.min(prev + 0.02, 0.3));
      }, 50);
      return () => clearInterval(fadeIn);
    }
  }, [stage]);

  // Computer materialization
  useEffect(() => {
    if (stage === 'computer') {
      const fadeIn = setInterval(() => {
        setComputerOpacity(prev => Math.min(prev + 0.03, 1));
      }, 50);
      return () => clearInterval(fadeIn);
    }
  }, [stage]);

  // Particle blast and binary transformation
  useEffect(() => {
    if (stage === 'blast') {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const newParticles: Particle[] = [];

      // Create 200 particles blasting outward
      for (let i = 0; i < 200; i++) {
        const angle = (Math.PI * 2 * i) / 200;
        const speed = 5 + Math.random() * 10;
        newParticles.push({
          id: i,
          x: centerX,
          y: centerY,
          targetX: centerX + Math.cos(angle) * (200 + Math.random() * 300),
          targetY: centerY + Math.sin(angle) * (200 + Math.random() * 300),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          char: Math.random() > 0.5 ? '1' : '0',
          opacity: 1,
          size: 12 + Math.random() * 8
        });
      }
      setParticles(newParticles);
    }
  }, [stage]);

  // Binary alignment to website positions
  useEffect(() => {
    if (stage === 'align') {
      setParticles(prev => prev.map(particle => {
        // Calculate target positions based on typical website layout
        const layoutPositions = [
          // Header area
          { x: window.innerWidth * 0.5, y: window.innerHeight * 0.1 },
          // Navigation area
          { x: window.innerWidth * 0.2, y: window.innerHeight * 0.15 },
          { x: window.innerWidth * 0.8, y: window.innerHeight * 0.15 },
          // Hero section
          { x: window.innerWidth * 0.3, y: window.innerHeight * 0.3 },
          { x: window.innerWidth * 0.7, y: window.innerHeight * 0.3 },
          // Content sections
          { x: window.innerWidth * 0.25, y: window.innerHeight * 0.5 },
          { x: window.innerWidth * 0.75, y: window.innerHeight * 0.5 },
          { x: window.innerWidth * 0.4, y: window.innerHeight * 0.7 },
          { x: window.innerWidth * 0.6, y: window.innerHeight * 0.7 },
          // Footer area
          { x: window.innerWidth * 0.5, y: window.innerHeight * 0.9 }
        ];

        const targetPos = layoutPositions[particle.id % layoutPositions.length];
        return {
          ...particle,
          targetX: targetPos.x + (Math.random() - 0.5) * 100,
          targetY: targetPos.y + (Math.random() - 0.5) * 50
        };
      }));
    }
  }, [stage]);

  // Fade out overlay
  useEffect(() => {
    if (stage === 'fade') {
      const fadeOut = setInterval(() => {
        setOverlayOpacity(prev => Math.max(prev - 0.05, 0));
      }, 50);
      return () => clearInterval(fadeOut);
    }
  }, [stage]);

  // Particle animation loop
  useEffect(() => {
    if (particles.length === 0) return;

    const animate = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x;
        let newY = particle.y;

        if (stage === 'blast' || stage === 'binary') {
          // Explosive movement with quantum dance
          newX += particle.vx + Math.sin(Date.now() * 0.01 + particle.id) * 2;
          newY += particle.vy + Math.cos(Date.now() * 0.01 + particle.id) * 2;
          
          // Slow down particles
          particle.vx *= 0.98;
          particle.vy *= 0.98;
        } else if (stage === 'align') {
          // Move towards target positions
          const dx = particle.targetX - newX;
          const dy = particle.targetY - newY;
          newX += dx * 0.08;
          newY += dy * 0.08;
        }

        return {
          ...particle,
          x: newX,
          y: newY
        };
      }));
    };

    const interval = setInterval(animate, 16); // 60fps
    return () => clearInterval(interval);
  }, [particles.length, stage]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      style={{ opacity: overlayOpacity }}
    >
      {/* Quantum Grid Background */}
      <div 
        className="absolute inset-0"
        style={{ 
          opacity: gridOpacity,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating Energy Particles Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Quantum Computer */}
      <div 
        className="relative z-10"
        style={{ opacity: computerOpacity }}
      >
        {/* Qubit Core - Pulsing center */}
        <div className="relative">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-primary rounded-full animate-pulse" />
            <div className="absolute inset-2 bg-primary/50 rounded-full animate-ping" />
            <div className="absolute inset-4 bg-white rounded-full" />
          </div>
          
          {/* Control Unit - Spinning rings */}
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
            <div className="absolute inset-4 border-2 border-primary/50 rounded-full animate-spin" style={{ animationDuration: '6s' }} />
            <div className="absolute inset-8 border-2 border-primary rounded-full animate-spin" style={{ animationDuration: '4s' }} />
          </div>

          {/* CryoCooling Module - Icy glow */}
          <div className="flex justify-center space-x-4">
            <div className="w-6 h-12 bg-gradient-to-t from-cyan-400 to-blue-200 rounded opacity-80 animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="w-6 h-12 bg-gradient-to-t from-cyan-400 to-blue-200 rounded opacity-60 animate-pulse" style={{ animationDuration: '2.5s' }} />
            <div className="w-6 h-12 bg-gradient-to-t from-cyan-400 to-blue-200 rounded opacity-80 animate-pulse" style={{ animationDuration: '3.2s' }} />
          </div>
        </div>

        {/* Status Text */}
        <div className="text-center mt-8 text-primary font-mono">
          {stage === 'grid' && 'Initializing Quantum Field...'}
          {stage === 'computer' && 'Quantum Computer Online'}
          {stage === 'blast' && 'Quantum Superposition Activated'}
          {stage === 'binary' && 'Processing Quantum States...'}
          {stage === 'align' && 'Resolving Superposition...'}
          {stage === 'fade' && 'Welcome'}
        </div>
      </div>

      {/* Binary Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute font-mono font-bold text-primary pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            fontSize: particle.size,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            textShadow: '0 0 10px currentColor'
          }}
        >
          {particle.char}
        </div>
      ))}
    </div>
  );
};

export default LoadingScreen;