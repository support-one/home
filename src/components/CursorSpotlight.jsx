import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorSpotlight() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] z-50 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
}
