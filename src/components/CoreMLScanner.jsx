import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CoreMLScanner = () => {
  const [showManual, setShowManual] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowManual(prev => !prev);
    }, 3000); // Toggle every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-[28px] p-8 flex flex-col items-center justify-center hover:bg-[#0c0c0c] transition-colors duration-300">
      <div className="text-center mb-8">
        <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2">Zero Onboarding</h3>
        <p className="text-white/60 text-xs px-2 leading-relaxed">Built around how you already work. No manuals needed.</p>
      </div>

      <div className="relative w-full aspect-[4/5] flex items-center justify-center">
        {/* Massive Confusing Manual */}
        <AnimatePresence>
          {showManual && (
            <motion.div 
              className="w-48 h-64 bg-white rounded-lg shadow-2xl flex flex-col items-center p-6 absolute z-20"
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.4, opacity: 0, rotate: 15 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
               <h3 className="text-black font-black text-sm text-center uppercase tracking-tighter mb-4">Generic App Manual</h3>
               <div className="w-full h-1 bg-gray-200 mb-2 rounded" />
               <div className="w-3/4 h-1 bg-gray-200 mb-2 rounded" />
               <div className="w-full h-1 bg-gray-200 mb-2 rounded" />
               <div className="w-1/2 h-1 bg-gray-200 mb-2 rounded" />
               <span className="mt-auto text-red-600 font-bold text-[8px] border-2 border-red-600 px-3 py-1 rounded-full rotate-12 scale-125">READ FIRST</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Revealed Custom App */}
        <div className="w-56 h-80 border-4 border-white/5 bg-black rounded-[2.5rem] p-3 flex flex-col glass-edge relative z-10 overflow-hidden shadow-2xl">
           <div className="w-16 h-4 bg-white/5 mx-auto rounded-b-xl mb-4" />
           <div className="flex-1 w-full bg-gradient-to-br from-white/5 to-transparent rounded-2xl flex flex-col items-center justify-center border border-cyan-400/10">
              <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-cyan-400 font-bold uppercase tracking-widest text-center text-[10px] px-4 leading-normal">
                 Instantly Familiar
                 <br /><span className="text-[8px] text-white/30 mt-1 block">Your Workflow, Native.</span>
              </span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CoreMLScanner;
