import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuantumLoadingScreenProps {
  onComplete: () => void;
}

const QuantumLoadingScreen = ({ onComplete }: QuantumLoadingScreenProps) => {
  const [stage, setStage] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate quantum particles
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 2
      }));
      setParticles(newParticles);
    };

    generateParticles();

    // Animation sequence timing
    const timers = [
      setTimeout(() => setStage(1), 500),  // Quantum field activation
      setTimeout(() => setStage(2), 1200), // AI consciousness awakening
      setTimeout(() => setStage(3), 2000), // Cybersecurity protocols loading
      setTimeout(() => setStage(4), 2800), // System synchronization
      setTimeout(() => setStage(5), 3600), // Website materialization
      setTimeout(() => onComplete(), 4000) // Complete
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      >
        {/* Quantum Grid Background */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 1 ? 0.3 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'pulse 2s ease-in-out infinite alternate'
            }}
          />
        </div>

        {/* Floating Quantum Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: stage >= 1 ? [0, 1, 0] : 0,
              scale: stage >= 1 ? [0, 1, 0] : 0,
              x: [particle.x, particle.x + (Math.random() - 0.5) * 200],
              y: [particle.y, particle.y + (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: 3,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#00ffff]"
            style={{ left: particle.x, top: particle.y }}
          />
        ))}

        {/* Central Quantum Core */}
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0, rotateY: 0 }}
            animate={{
              scale: stage >= 1 ? 1 : 0,
              rotateY: stage >= 1 ? 360 : 0,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mb-8"
          >
            {/* Quantum Core Rings */}
            <div className="relative w-32 h-32 mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-cyan-400 rounded-full shadow-[0_0_20px_#00ffff]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border border-purple-400 rounded-full shadow-[0_0_15px_#a855f7]"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-green-400 rounded-full shadow-[0_0_10px_#22c55e]"
              />
              
              {/* Core Center */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 m-auto w-8 h-8 bg-white rounded-full shadow-[0_0_30px_#ffffff]"
              />
            </div>
          </motion.div>

          {/* Status Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: stage >= 1 ? 1 : 0 }}
              className="text-4xl font-mono text-cyan-400 mb-4 tracking-wider"
            >
              QUANTUM INITIALIZING
            </motion.h1>

            <div className="space-y-2 font-mono text-sm">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: stage >= 1 ? 1 : 0,
                  x: stage >= 1 ? 0 : -50
                }}
                transition={{ delay: 0.5 }}
                className="text-cyan-300"
              >
                {stage >= 1 && "▶ Quantum field activated..."}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: stage >= 2 ? 1 : 0,
                  x: stage >= 2 ? 0 : -50
                }}
                transition={{ delay: 1.2 }}
                className="text-purple-300"
              >
                {stage >= 2 && "▶ AI consciousness awakening..."}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: stage >= 3 ? 1 : 0,
                  x: stage >= 3 ? 0 : -50
                }}
                transition={{ delay: 2 }}
                className="text-green-300"
              >
                {stage >= 3 && "▶ Cybersecurity protocols loading..."}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: stage >= 4 ? 1 : 0,
                  x: stage >= 4 ? 0 : -50
                }}
                transition={{ delay: 2.8 }}
                className="text-yellow-300"
              >
                {stage >= 4 && "▶ System synchronization complete..."}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: stage >= 5 ? 1 : 0,
                  x: stage >= 5 ? 0 : -50
                }}
                transition={{ delay: 3.6 }}
                className="text-white font-bold"
              >
                {stage >= 5 && "▶ Reality materializing..."}
              </motion.div>
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(stage / 5) * 100}%` }}
              transition={{ duration: 0.3 }}
              className="h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 rounded-full mx-auto mt-8 shadow-[0_0_10px_currentColor]"
              style={{ maxWidth: '300px' }}
            />
          </motion.div>
        </div>

        {/* Binary Rain Effect */}
        {stage >= 3 && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }, (_, i) => (
              <motion.div
                key={`binary-${i}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{
                  y: window.innerHeight + 100,
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute text-green-400 font-mono text-xs"
                style={{ left: `${(i / 20) * 100}%` }}
              >
                {Array.from({ length: 10 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default QuantumLoadingScreen;