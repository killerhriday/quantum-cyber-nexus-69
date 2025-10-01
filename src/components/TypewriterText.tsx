import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  transformDelay?: number;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "blockquote";
  children?: React.ReactNode;
}

export const TypewriterText = ({ 
  text, 
  className = "", 
  speed = 30,
  transformDelay = 800,
  as: Component = "span",
  children
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isTransformed, setIsTransformed] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    setDisplayedText("");
    setIsTypingComplete(false);
    setIsTransformed(false);

    const typeInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTypingComplete(true);
        
        // Transform to final style after delay
        setTimeout(() => {
          setIsTransformed(true);
        }, transformDelay);
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [isInView, text, speed, transformDelay]);

  const codeStyle = !isTransformed && isTypingComplete;
  const typing = !isTypingComplete;

  return (
    <Component
      ref={ref}
      className={`${className} transition-all duration-700 ${
        typing || codeStyle
          ? "font-mono text-green-400"
          : ""
      }`}
      style={{
        opacity: isInView ? 1 : 0
      }}
    >
      {displayedText || children}
      {typing && <span className="animate-pulse">▊</span>}
    </Component>
  );
};
