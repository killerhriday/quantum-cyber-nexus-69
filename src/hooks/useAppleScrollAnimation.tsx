import { useInView } from "framer-motion";
import { useRef } from "react";

interface AppleScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export const useAppleScrollAnimation = ({
  threshold = 0.15,
  triggerOnce = true
}: AppleScrollAnimationOptions = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: triggerOnce, 
    amount: threshold,
    margin: "0px 0px -100px 0px"
  });

  return { ref, isInView };
};
