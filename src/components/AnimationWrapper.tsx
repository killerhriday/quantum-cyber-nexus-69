import { useEffect, useRef, ReactNode } from "react";

interface AnimationWrapperProps {
  children: ReactNode;
  animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale-in";
  delay?: number;
  duration?: number;
  className?: string;
}

const AnimationWrapper = ({ 
  children, 
  animation = "fade-in", 
  delay = 0, 
  duration = 600,
  className = ""
}: AnimationWrapperProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out opacity-0";
    const animateClasses = "animate-in:opacity-100";
    
    switch (animation) {
      case "fade-in":
        return `${baseClasses} ${animateClasses}`;
      case "slide-up":
        return `${baseClasses} translate-y-8 ${animateClasses} animate-in:translate-y-0`;
      case "slide-left":
        return `${baseClasses} translate-x-8 ${animateClasses} animate-in:translate-x-0`;
      case "slide-right":
        return `${baseClasses} -translate-x-8 ${animateClasses} animate-in:translate-x-0`;
      case "scale-in":
        return `${baseClasses} scale-95 ${animateClasses} animate-in:scale-100`;
      default:
        return baseClasses;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimationWrapper;