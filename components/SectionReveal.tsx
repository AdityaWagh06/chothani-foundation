"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "none";
  duration?: number;
}

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: SectionRevealProps) {
  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 35 };
      case "down":
        return { opacity: 0, y: -35 };
      case "left":
        return { opacity: 0, x: -40 };
      case "right":
        return { opacity: 0, x: 40 };
      case "zoom":
        return { opacity: 0, scale: 0.92 };
      case "none":
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 35 };
    }
  };

  const getFinal = () => {
    switch (direction) {
      case "zoom":
        return { opacity: 1, scale: 1 };
      default:
        return { opacity: 1, x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getFinal()}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
