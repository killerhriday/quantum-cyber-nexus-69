import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WebsitePhaseAnimationProps {
  children: ReactNode;
}

type Phase = 'developer' | 'html' | 'final';

const WebsitePhaseAnimation = ({ children }: WebsitePhaseAnimationProps) => {
  const [phase, setPhase] = useState<Phase>('developer');
  const [showSwoop, setShowSwoop] = useState(false);

  useEffect(() => {
    // Phase 1 (developer) → show for 2.5 seconds
    const timer1 = setTimeout(() => {
      setShowSwoop(true);
      setTimeout(() => {
        setPhase('html');
        setShowSwoop(false);
      }, 800); // Swoop animation duration
    }, 2500);

    // Phase 2 (html) → show for 2.5 seconds
    const timer2 = setTimeout(() => {
      setShowSwoop(true);
      setTimeout(() => {
        setPhase('final');
        setShowSwoop(false);
      }, 800);
    }, 5800); // 2500 + 800 + 2500

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {/* Swoop overlay animation */}
      <AnimatePresence>
        {showSwoop && (
          <motion.div
            className="fixed inset-0 z-[100] bg-foreground"
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            exit={{ y: "100%" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.65, 0, 0.35, 1] // Custom easing for smooth swoop
            }}
          />
        )}
      </AnimatePresence>

      {/* Content with phase-based styling */}
      <div
        className={`
          transition-all duration-500
          ${phase === 'developer' ? 'font-mono text-[#00ff00] bg-[#0a0a0a]' : ''}
          ${phase === 'html' ? 'font-mono text-[#ff6b35] bg-[#1a1a1a]' : ''}
          ${phase === 'final' ? '' : ''}
        `}
        style={{
          ...(phase === 'developer' && {
            filter: 'contrast(1.2)',
            letterSpacing: '0.05em',
          }),
          ...(phase === 'html' && {
            filter: 'contrast(1.1)',
          }),
        }}
      >
        {/* Developer Phase - Wrap text in code-like syntax */}
        {phase === 'developer' && (
          <div className="relative">
            <div className="absolute top-0 left-0 p-4 text-xs opacity-50">
              {'// Building website...'}
            </div>
            <div className="pt-12">
              {children}
            </div>
          </div>
        )}

        {/* HTML Phase - Show HTML-like tags around content */}
        {phase === 'html' && (
          <div className="relative">
            <style>{`
              ${phase === 'html' ? `
                h1::before { content: '<h1>'; opacity: 0.5; margin-right: 0.5rem; }
                h1::after { content: '</h1>'; opacity: 0.5; margin-left: 0.5rem; }
                h2::before { content: '<h2>'; opacity: 0.5; margin-right: 0.5rem; }
                h2::after { content: '</h2>'; opacity: 0.5; margin-left: 0.5rem; }
                h3::before { content: '<h3>'; opacity: 0.5; margin-right: 0.5rem; }
                h3::after { content: '</h3>'; opacity: 0.5; margin-left: 0.5rem; }
                p::before { content: '<p>'; opacity: 0.3; margin-right: 0.25rem; font-size: 0.75em; }
                p::after { content: '</p>'; opacity: 0.3; margin-left: 0.25rem; font-size: 0.75em; }
                button::before { content: '<button>'; opacity: 0.4; margin-right: 0.25rem; font-size: 0.7em; }
                button::after { content: '</button>'; opacity: 0.4; margin-left: 0.25rem; font-size: 0.7em; }
              ` : ''}
            `}</style>
            {children}
          </div>
        )}

        {/* Final Phase - Normal website */}
        {phase === 'final' && children}
      </div>
    </>
  );
};

export default WebsitePhaseAnimation;