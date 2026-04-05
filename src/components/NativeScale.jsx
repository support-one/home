import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function NativeScale() {
  const x = useMotionValue(0);
  const opacityLeft = useTransform(x, [-100, 0], [1, 0.3]);
  const opacityRight = useTransform(x, [0, 100], [0.3, 1]);
  const scaleLeft = useTransform(x, [-100, 0], [1.1, 0.9]);
  const scaleRight = useTransform(x, [0, 100], [0.9, 1.1]);

  return (
    <section className="w-full py-32 flex flex-col items-center select-none overflow-hidden mt-60">
      <div className="max-w-4xl text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">The Tailored Suit vs Generic Fit.</h2>
        <p className="text-gray-400">Drag the slider. Would you rather force your business into an ill-fitting generic template, or wear an application tailored perfectly to your measurements?</p>
      </div>

      <div className="w-full max-w-4xl flex items-center justify-center space-x-12 relative px-6">
         {/* Generic Suit Node */}
         <motion.div 
           className="w-[300px] h-64 bg-[#111] border border-gray-600 rounded-3xl flex flex-col items-center justify-center p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
           style={{ opacity: opacityLeft, scale: scaleLeft }}
         >
           <h3 className="text-gray-400 font-bold text-xl mb-4 text-center">Mass-Market "One-Size-Fits-All"</h3>
           <ul className="text-sm text-gray-500 space-y-2 text-center">
             <li>Baggy, confusing interface</li>
             <li>Full of pockets you never use</li>
             <li>Restricts your natural movement</li>
             <li>You look like everyone else</li>
           </ul>
         </motion.div>

         {/* Draggable Scale Slider */}
         <div className="w-48 h-2 bg-gray-800 rounded-full relative flex items-center shrink-0">
           <div className="absolute left-1/2 w-1 h-4 bg-gray-600 -translate-x-1/2 rounded-full" />
           <motion.div 
             drag="x"
             dragConstraints={{ left: -100, right: 100 }}
             dragElastic={0.2}
             style={{ x }}
             className="w-12 h-12 bg-cyan-400 rounded-full cursor-grab active:cursor-grabbing shadow-[0_0_20px_#00ffcc] flex items-center justify-center absolute left-1/2 -ml-6"
           >
             <div className="w-4 h-4 bg-black rounded-full" />
           </motion.div>
         </div>

         {/* Custom Suit Node */}
         <motion.div 
           className="w-[300px] h-64 bg-[#0a0a0a] border border-cyan-400/30 rounded-3xl flex flex-col items-center justify-center p-6 shadow-[0_0_40px_rgba(0,255,204,0.15)]"
           style={{ opacity: opacityRight, scale: scaleRight }}
         >
           <h3 className="text-cyan-400 font-bold text-xl mb-4 text-center">Support One Custom</h3>
           <ul className="text-sm text-gray-300 space-y-2 text-center">
             <li>Sleek, perfect measuring</li>
             <li>Only the exact pockets you need</li>
             <li>Moves effortlessly with your team</li>
             <li>Exclusively crafted for your brand</li>
           </ul>
         </motion.div>
      </div>
    </section>
  );
}
