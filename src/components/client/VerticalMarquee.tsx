"use client";

import { motion, MotionStyle } from "motion/react";
import { ReactNode } from "react";

interface VerticalMarqueeProps {
  className?: string;
  containerStyle?: MotionStyle;
  children: ReactNode;
}
export const VerticalMarquee = ({
  children,
  className,
  containerStyle,
}: VerticalMarqueeProps) => {
  return (
    <motion.div
      animate={{ y: ["0%", "-50%"] }} // Only needs to move half the total combined height
      transition={{
        ease: "linear",
        duration: 40,
        repeat: Infinity,
        repeatType: "loop"
      }}
      className={className}
      style={containerStyle}
    >
      {children}
    </motion.div>
  );
};
