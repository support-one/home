import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CoreMLScannerMobile = () => {
  const { scrollYProgress } = useScroll();
  // Animation triggers as the user scrolls through the section
  const manualScale = useTransform(scrollYProgress, [0.75, 0.95], [1, 0.4]);
  const manualOpacity = useTransform(scrollYProgress, [0.75, 0.95], [1, 0]);
  const manualRotate = useTransform(scrollYProgress, [0.75, 0.95], [0, 15]);

  return (
    <section className="w-full py-20 px-6 flex flex-col items-center overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-3 tracking-tight">Zero Onboarding</h2>
        <p className="text-white/40 text-xs px-4 leading-relaxed line-clamp-3">Generic software forces rulebooks. Custom software is built exactly around how you already work. No manuals needed.</p>
      </div>

      <div className="relative w-full aspect-[4/5] flex items-center justify-center transform-gpu">
        {/* Massive Confusing Manual */}
        <motion.div 
          className="w-48 h-64 bg-white rounded-lg shadow-xl flex flex-col items-center p-6 absolute z-20 transform-gpu"
          style={{ 
            scale: manualScale, 
            opacity: manualOpacity, 
            rotate: manualRotate,
            willChange: 'transform, opacity'
          }}
        >
           <h3 className="text-black font-black text-sm text-center uppercase tracking-tighter mb-4">Generic App Manual</h3>
           <div className="w-full h-1 bg-gray-200 mb-2 rounded" />
           <div className="w-3/4 h-1 bg-gray-200 mb-2 rounded" />
           <div className="w-full h-1 bg-gray-200 mb-2 rounded" />
           <div className="w-1/2 h-1 bg-gray-200 mb-2 rounded" />
           <span className="mt-auto text-red-600 font-bold text-[8px] border-2 border-red-600 px-3 py-1 rounded-full rotate-12 scale-125">READ FIRST</span>
        </motion.div>

        {/* Revealed Custom App */}
        <div className="w-56 h-80 border-4 border-white/5 bg-[#050505] rounded-[2.5rem] p-3 flex flex-col glass-edge relative z-10 overflow-hidden shadow-2xl transform-gpu" style={{ willChange: 'transform' }}>
           <div className="w-16 h-4 bg-white/5 mx-auto rounded-b-xl mb-4" />
           <div className="flex-1 w-full bg-gradient-to-br from-white/5 to-transparent rounded-2xl flex flex-col items-center justify-center border border-cyan-400/10 transform-gpu">
              <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center mb-3 transform-gpu">
                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-cyan-400 font-bold uppercase tracking-widest text-center text-[10px] px-4 leading-normal">
                 Instantly Familiar
                 <br /><span className="text-[8px] text-white/30 mt-1 block tracking-normal">Your Workflow, Native.</span>
              </span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CoreMLScannerMobile;
