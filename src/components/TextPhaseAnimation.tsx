import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, ReactNode } from "react";

interface TextPhaseAnimationProps {
  children: ReactNode;
  delay?: number;
}

export const TextPhaseAnimation = ({ children, delay = 0 }: TextPhaseAnimationProps) => {
  const [phase, setPhase] = useState<'code' | 'html' | 'final'>('code');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start showing content after delay
    const showTimer = setTimeout(() => {
      setShowContent(true);
    }, delay);

    // Transition to HTML phase
    const htmlTimer = setTimeout(() => {
      setPhase('html');
    }, delay + 2000);

    // Transition to final phase
    const finalTimer = setTimeout(() => {
      setPhase('final');
    }, delay + 4000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(htmlTimer);
      clearTimeout(finalTimer);
    };
  }, [delay]);

  const getPhaseStyles = () => {
    switch (phase) {
      case 'code':
        return {
          fontFamily: 'monospace',
          color: '#00ff00',
          fontSize: '0.9em',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          padding: '2px 4px',
        };
      case 'html':
        return {
          fontFamily: 'monospace',
          color: '#4a9eff',
          fontSize: '0.95em',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '2px 4px',
        };
      case 'final':
        return {};
    }
  };

  if (!showContent) {
    return <div style={{ opacity: 0 }}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={getPhaseStyles()}
    >
      {children}
    </motion.div>
  );
};

interface PageAnimationWrapperProps {
  children: ReactNode;
}

export const PageAnimationWrapper = ({ children }: PageAnimationWrapperProps) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 6000); // Complete after all phases

    return () => clearTimeout(timer);
  }, []);

  if (animationComplete) {
    return <>{children}</>;
  }

  return <TextPhaseAnimation>{children}</TextPhaseAnimation>;
};