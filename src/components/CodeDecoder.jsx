import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CodeDecoder = ({ className = "" }) => {
  const genericCodes = [
    '<Template name="SaaS" limit="strict" />',
    'if (user.needsCustom) { return false; }',
    'import { genericDashboard } from "bloat";',
    '// TODO: Find workarounds for logic'
  ];
  
  const customCodes = [
    'engine.build(customWorkflow);',
    'nativePerformance.enable(true);',
    'business.integrate([Payments, CRM]);',
    '// Architecture aligned to goals'
  ];

  const [index, setIndex] = useState(0);
  const [isDecoded, setIsDecoded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsDecoded(prev => !prev);
      if (isDecoded) {
        setIndex(i => (i + 1) % genericCodes.length);
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [isDecoded, genericCodes.length]);

  return (
    <div className={`w-full h-full material-thick glass-edge p-6 lg:p-8 rounded-[32px] lg:rounded-xl overflow-hidden relative flex flex-col lg:flex-row lg:items-center justify-between gap-6 ${className}`}>
      
      <div className="flex-1">
        <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2">No Templates</h3>
        <p className="text-white/60 text-sm lg:text-base mb-6">Just code written for your exact needs.</p>
        
        <div className="hidden lg:flex items-center gap-3">
          <motion.div 
             animate={{ backgroundColor: isDecoded ? '#34C759' : '#FF3B30' }} 
             className="w-2.5 h-2.5 rounded-full relative" 
          >
             {!isDecoded && (
               <motion.div 
                 className="absolute -inset-1.5 border border-[#FF3B30] rounded-full border-t-transparent transform-gpu"
                 style={{ willChange: 'transform' }}
                 animate={{ rotate: 360 }}
                 transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
               />
             )}
          </motion.div>
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">
            {isDecoded ? 'Logic Validated' : 'Parsing Bloat...'}
          </span>
        </div>
      </div>
      
      <div className="font-mono text-xs p-4 lg:p-5 bg-[#050505] rounded-xl lg:rounded-lg border border-white/5 relative min-h-[100px] lg:min-h-[120px] flex items-center flex-1 w-full lg:w-auto shadow-inner">
        <AnimatePresence mode="wait">
           <motion.div
             key={isDecoded ? 'custom' : 'generic'}
             initial={{ opacity: 0, filter: "blur(10px)", y: 5 }}
             animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
             exit={{ opacity: 0, filter: "blur(10px)", y: -5 }}
             transition={{ duration: 0.3 }}
             className={isDecoded ? "text-green-400" : "text-red-400 opacity-60 line-through decoration-red-500/50"}
           >
             {isDecoded ? customCodes[index] : genericCodes[index]}
           </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="mt-2 flex items-center justify-between lg:hidden">
        <div className="flex items-center gap-3">
          <motion.div 
             animate={{ backgroundColor: isDecoded ? '#34C759' : '#FF3B30' }} 
             className="w-2 h-2 rounded-full relative" 
          >
             {!isDecoded && (
               <motion.div 
                 className="absolute -inset-2 border border-[#FF3B30] rounded-full border-t-transparent transform-gpu"
                 style={{ willChange: 'transform' }}
                 animate={{ rotate: 360 }}
                 transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
               />
             )}
          </motion.div>
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">
            {isDecoded ? 'Logic Validated' : 'Parsing Bloat...'}
          </span>
        </div>
      </div>

    </div>
  );
};

export default CodeDecoder;
