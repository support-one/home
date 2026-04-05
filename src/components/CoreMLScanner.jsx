import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CoreMLScanner() {
  const { scrollYProgress } = useScroll();
  // As user scrolls down, the manual shrinks and vanishes
  const manualScale = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);
  const manualOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);

  return (
    <section className="w-full py-40 px-6 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">No More Training Manuals.</h2>
        <p className="text-gray-400">Generic software forces your employees to read massive rulebooks to learn how to use it. Custom software is built exactly around how your employees already work. Scroll down to watch the manual disappear.</p>
      </div>

      <div className="relative w-full max-w-2xl h-96 flex items-center justify-center">
        
        {/* Massive Confusing Manual */}
        <motion.div 
          className="w-80 h-96 bg-gray-200 rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.2)] flex flex-col items-center justify-center p-8 absolute z-10"
          style={{ scale: manualScale, opacity: manualOpacity }}
        >
           <h3 className="text-black font-black text-2xl text-center uppercase tracking-tighter">Generic App Manual</h3>
           <div className="w-full h-2 bg-gray-400 mt-4 rounded" />
           <div className="w-3/4 h-2 bg-gray-400 mt-2 rounded" />
           <div className="w-full h-2 bg-gray-400 mt-2 rounded" />
           <span className="mt-8 text-red-600 font-bold text-sm border-2 border-red-600 px-4 py-1 rounded-full rotate-12">"Read this first"</span>
        </motion.div>

        {/* Revealed Custom App */}
        <div className="absolute w-80 h-[400px] border-4 border-gray-800 bg-black rounded-[3rem] p-4 flex flex-col">
           <div className="w-32 h-6 bg-gray-800 mx-auto rounded-b-xl mb-8" />
           <div className="flex-1 w-full bg-[#0a0a0a] rounded-xl flex items-center justify-center border border-cyan-400/20 shadow-[inset_0_0_30px_rgba(0,255,204,0.1)]">
              <span className="text-cyan-400 font-bold uppercase tracking-widest text-center text-sm px-4">
                 Instantly Familiar
                 <br /><span className="text-[10px] text-gray-500 mt-2 block">Zero Onboarding Required</span>
              </span>
           </div>
        </div>

      </div>
    </section>
  );
}
