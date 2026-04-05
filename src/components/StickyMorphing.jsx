import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

export default function StickyMorphing() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Use progress (0 to 1) to determine border radius (Square -> Circle -> Thin Pill)
  const borderRadius = useTransform(smoothProgress, [0, 0.5, 1], ["24px", "50%", "100px"]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  const width = useTransform(smoothProgress, [0, 0.5, 1], ["200px", "300px", "100px"]);
  const height = useTransform(smoothProgress, [0, 0.5, 1], ["200px", "300px", "400px"]);
  const borderColor = useTransform(smoothProgress, [0, 0.5, 1], ["rgba(0,255,204,0.3)", "rgba(167,139,250,0.5)", "rgba(236,72,153,0.3)"]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-black">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Text that scrolls by */}
        <div className="absolute inset-0 flex flex-col items-center justify-between py-40 pointer-events-none opacity-20">
          <h2 className="text-[10vw] font-black uppercase text-transparent bg-clip-text bg-white outline-text">Define</h2>
          <h2 className="text-[10vw] font-black uppercase text-white">Execute</h2>
          <h2 className="text-[10vw] font-black uppercase text-transparent bg-clip-text bg-white outline-text">Scale</h2>
        </div>

        {/* Morphing Centerpiece */}
        <motion.div 
          className="relative z-10 flex items-center justify-center bg-black/40 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,255,204,0.1)] border-4"
          style={{ 
            width, height, borderRadius, rotate, borderColor,
            boxShadow: "inset 0 0 50px rgba(255,255,255,0.05)"
          }}
        >
          {/* Inner pulsating core */}
          <motion.div 
            className="w-1/2 h-1/2 bg-white/10 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
      </div>
    </section>
  );
}
