"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let isMounted = true;

    const updateMousePosition = (e: MouseEvent) => {
      if (!isMounted) return;
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we are hovering over an interactive element
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer Blob */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/80 pointer-events-none z-[100] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.5,
        }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[100] hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 20,
        }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
    </>
  );
}
