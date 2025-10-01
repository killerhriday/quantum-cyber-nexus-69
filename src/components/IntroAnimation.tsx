import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"code" | "html" | "styled" | "complete">("code");

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("html"), 2000);
    const timer2 = setTimeout(() => setPhase("styled"), 4000);
    const timer3 = setTimeout(() => {
      setPhase("complete");
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  const codeText = `const Portfolio = () => {
  return (
    <div className="hero">
      <h1>Arush Gupta</h1>
      <p>AI Researcher & Developer</p>
      <section>Research Projects</section>
      <section>Publications</section>
    </div>
  );
};`;

  const htmlText = `<div class="hero">
  <h1>Arush Gupta</h1>
  <p>AI Researcher & Developer</p>
  <section>Research Projects</section>
  <section>Publications</section>
  <section>Contact</section>
</div>`;

  const styledText = `Arush Gupta
AI Researcher & Developer

Research Projects
Publications
Skills & Expertise
Contact`;

  return (
    <AnimatePresence mode="wait">
      {phase !== "complete" && (
        <motion.div
          key={phase}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <motion.div
            key={`content-${phase}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-8"
          >
            {phase === "code" && (
              <pre className="font-mono text-sm md:text-base text-green-400 whitespace-pre-wrap overflow-auto">
                <motion.code
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, staggerChildren: 0.01 }}
                >
                  {codeText.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.01 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.code>
              </pre>
            )}

            {phase === "html" && (
              <pre className="font-mono text-sm md:text-base text-blue-400 whitespace-pre-wrap overflow-auto">
                <motion.code
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {htmlText}
                </motion.code>
              </pre>
            )}

            {phase === "styled" && (
              <div className="text-foreground space-y-6 text-center">
                <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-6xl font-bold"
                >
                  Arush Gupta
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-xl md:text-2xl text-muted-foreground"
                >
                  AI Researcher & Developer
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="space-y-2 text-lg"
                >
                  <p>Research Projects</p>
                  <p>Publications</p>
                  <p>Skills & Expertise</p>
                  <p>Contact</p>
                </motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
