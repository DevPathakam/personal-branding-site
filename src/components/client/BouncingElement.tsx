"use client";

import { motion, MotionStyle } from "motion/react";
import { ReactNode } from "react";

interface BouncingElementProps {
  className?: string;
  containerStyle?: MotionStyle;
  children: ReactNode;
}
export const BouncingElement = ({
  children,
  className,
  containerStyle,
}: BouncingElementProps) => {
  return (
    <motion.div
      animate={{
        y: [0, -40, 0], // Keyframes: Start at 0, move up by 40px, return to 0
      }}
      transition={{
        duration: 0.8, // Time taken for one complete cycle (seconds)
        ease: "easeInOut", // Smooth easing for natural movement
        repeat: Infinity, // Loop the animation indefinitely
        repeatType: "loop", // Restarts the array keyframes sequentially
      }}
      className={className}
      style={containerStyle}
    >
      {children}
    </motion.div>
  );
};
