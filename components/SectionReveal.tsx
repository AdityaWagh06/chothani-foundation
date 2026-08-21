"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "none";
  duration?: number;
  blur?: boolean;
}

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.75,
  blur = true,
}: SectionRevealProps) {
  const getInitial = () => {
    const blurStyle = blur ? "blur(6px)" : "blur(0px)";
    switch (direction) {
      case "up":
        return { opacity: 0, y: 35, filter: blurStyle };
      case "down":
        return { opacity: 0, y: -35, filter: blurStyle };
      case "left":
        return { opacity: 0, x: -45, filter: blurStyle };
      case "right":
        return { opacity: 0, x: 45, filter: blurStyle };
      case "zoom":
        return { opacity: 0, scale: 0.94, filter: blurStyle };
      case "none":
        return { opacity: 0, filter: blurStyle };
      default:
        return { opacity: 0, y: 35, filter: blurStyle };
    }
  };

  const getFinal = () => {
    switch (direction) {
      case "zoom":
        return { opacity: 1, scale: 1, filter: "blur(0px)" };
      default:
        return { opacity: 1, x: 0, y: 0, filter: "blur(0px)" };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getFinal()}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Ultra-smooth Apple-grade cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
