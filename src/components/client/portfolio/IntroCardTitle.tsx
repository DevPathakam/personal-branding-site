"use client";
import { animate } from "motion";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useMemo, useState } from "react";

export const IntroCardTitle = () => {
  const phrases = useMemo(
    () => [
      "Frontend Developer",
      "Software Engineer",
      "Critical Thinker",
      "Tech Builder",
    ],
    [],
  );

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const count = useMotionValue(0);
  // Safely grab characters up to the current count value
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    phrases[currentPhraseIndex].slice(0, latest),
  );

  useEffect(() => {
    const currentLength = phrases[currentPhraseIndex].length;
    const typingSpeed = currentLength * 0.1;
    const erasingSpeed = currentLength * 0.1;
    const controls = animate(count, currentLength, {
      type: "tween",
      duration: typingSpeed,
      ease: "linear",
      onComplete: () => {
        setTimeout(() => {
          const eraseControls = animate(count, 0, {
            type: "tween",
            duration: erasingSpeed, 
            ease: "linear",
            onComplete: () => {
              // Move to the next phrase and loop back around
              setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            },
          });
          return () => eraseControls.stop();
        }, 1000); // Wait 1 seconds before starting to erase
      },
    });

    return () => controls.stop();
  }, [count, currentPhraseIndex, phrases]);

  return (
    <h2 className="text-xl md:text-4xl font-bold text-brand-secondary">
      <motion.span>{displayText}</motion.span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="inline-block w-1 h-6 md:h-8 ml-1 text-brand-secondary"
      >
        |
      </motion.span>
    </h2>
  );
};
