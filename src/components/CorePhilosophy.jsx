import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function CorePhilosophy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rawScale = useTransform(scrollYProgress, [0.2, 0.8], [0.8, 1.3]);
  const scale = useSpring(rawScale, { stiffness: 100, damping: 30 });
  
  const blurValue = useTransform(scrollYProgress, [0.3, 0.5, 0.6], [20, 0, 20]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-[#000] flex items-center justify-center overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background glow syncing with scroll */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/30 via-black to-black"
          style={{ opacity }}
        />

        {/* Massive Liquid Text */}
        <motion.h1 
          className="text-[12vw] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-gray-500 drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
          style={{ 
            scale, 
            opacity, 
            filter: `blur(${blurValue.get()}px)`
          }}
        >
          CUSTOM
        </motion.h1>

        {/* Subtext cutting through the glow */}
        <motion.p 
          className="absolute bottom-20 text-gray-400 tracking-[0.5em] text-xs uppercase font-bold"
          style={{ opacity }}
        >
          No Templates. No Limits.
        </motion.p>
      </div>
    </section>
  );
}
