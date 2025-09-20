import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import QuantumComputer3D from './QuantumComputer3D';
import BinaryParticleSystem from './BinaryParticleSystem';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'grid' | 'computer' | 'blast' | 'binary' | 'align' | 'fade'>('grid');
  const [overlayOpacity, setOverlayOpacity] = useState(1);
  const [sweepProgress, setSweepProgress] = useState(0);
  const [showParticles, setShowParticles] = useState(false);

  // Stage progression with realistic timing
  useEffect(() => {
    const timers = [
      setTimeout(() => setStage('computer'), 2000),    // Grid → Computer materialization
      setTimeout(() => setStage('blast'), 5000),       // Computer → Energy buildup
      setTimeout(() => {
        setStage('binary');
        setShowParticles(true);
      }, 6000),                                        // Blast → Binary particle creation
      setTimeout(() => setStage('align'), 8000),       // Binary → Intelligent targeting
      setTimeout(() => setStage('fade'), 11000),       // Align → Data sweep begins
      setTimeout(() => startDataSweep(), 11500),       // Begin data sweep effect
      setTimeout(() => onComplete(), 14000)            // Complete transition
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // Data sweep effect - transforms particles to website
  const startDataSweep = () => {
    const sweepDuration = 2000; // 2 seconds
    const startTime = Date.now();
    
    const sweep = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / sweepDuration, 1);
      
      setSweepProgress(progress);
      setOverlayOpacity(1 - progress);
      
      if (progress < 1) {
        requestAnimationFrame(sweep);
      }
    };
    
    requestAnimationFrame(sweep);
  };

  // Handle particle blast trigger
  const handleBlast = () => {
    setShowParticles(true);
  };

  // Handle particle morph completion
  const handleMorphComplete = () => {
    // Particles have completed their transformation
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black"
      style={{ opacity: overlayOpacity }}
    >
      {/* Quantum Grid Background */}
      <div 
        className="absolute inset-0 transition-opacity duration-2000"
        style={{ 
          opacity: stage === 'grid' || stage === 'computer' ? 0.2 : 0,
          backgroundImage: `
            linear-gradient(rgba(64, 224, 208, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(64, 224, 208, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: stage === 'grid' ? 'pulse 3s ease-in-out infinite' : 'none'
        }}
      />

      {/* Ambient Energy Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* 3D Quantum Computer Scene */}
      <div className="absolute inset-0">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 2, 8]} />
            
            {/* Lighting Setup */}
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <pointLight position={[-10, -10, -10]} intensity={0.4} color="#4f46e5" />
            <spotLight 
              position={[0, 5, 0]} 
              angle={Math.PI / 6} 
              intensity={1} 
              color="#06b6d4"
              castShadow 
            />

            {/* Quantum Computer Model */}
            <QuantumComputer3D 
              stage={stage} 
              onBlast={handleBlast}
            />

            {/* Binary Particle System */}
            {showParticles && (
              <BinaryParticleSystem 
                stage={stage}
                particleCount={300}
                onMorphComplete={handleMorphComplete}
              />
            )}

            <OrbitControls 
              enablePan={false} 
              enableZoom={false} 
              enableRotate={false}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Data Sweep Effect */}
      {stage === 'fade' && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          style={{
            transform: `translateY(${-100 + sweepProgress * 200}%)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      )}

      {/* Status Display */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-cyan-400 font-mono text-lg mb-2">
          {stage === 'grid' && 'Initializing Quantum Field Matrix...'}
          {stage === 'computer' && 'Quantum Processing Unit Online'}
          {stage === 'blast' && 'Engaging Quantum Superposition'}
          {stage === 'binary' && 'Processing Quantum Information'}
          {stage === 'align' && 'Resolving Quantum States'}
          {stage === 'fade' && 'Materializing Digital Architecture'}
        </div>
        
        {/* Progress Indicator */}
        <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
            style={{ 
              width: `${
                stage === 'grid' ? 20 : 
                stage === 'computer' ? 40 : 
                stage === 'blast' ? 60 : 
                stage === 'binary' ? 80 : 
                stage === 'align' ? 90 : 100
              }%` 
            }}
          />
        </div>
      </div>

      {/* Quantum Field Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Electric arcs during blast */}
        {stage === 'blast' && (
          <>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-px bg-gradient-to-t from-transparent via-cyan-400 to-transparent opacity-80"
                style={{
                  left: `${50 + Math.cos(i * Math.PI / 4) * 30}%`,
                  top: `${50 + Math.sin(i * Math.PI / 4) * 30}%`,
                  height: '200px',
                  transform: 'rotate(' + (i * 45) + 'deg)',
                  animation: 'pulse 0.3s ease-in-out infinite'
                }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;