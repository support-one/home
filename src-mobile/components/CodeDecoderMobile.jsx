import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CodeDecoderMobile = () => {
  const genericCodes = [
    '<Template name="SaaS" limit="strict" />',
    'if (user.needsCustom) { return false; }',
    'import { genericDashboard } from "bloat";',
    '// TODO: Find workarounds for business logic'
  ];
  
  const customCodes = [
    'engine.build(customWorkflow);',
    'nativePerformance.enable(true);',
    'business.integrate([Payments, CRM]);',
    '// Architecture precisely aligned to goals'
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
    <section className="py-16 px-6">
      <div className="material-thick glass-edge p-6 rounded-[32px] overflow-hidden relative">
        <h3 className="text-2xl font-bold tracking-tight mb-2">No Templates</h3>
        <p className="text-white/60 text-sm mb-6">Just code written for your exact needs.</p>
        
        <div className="font-mono text-xs p-4 bg-black/50 rounded-2xl border border-white/5 relative min-h-[100px] flex items-center">
          <AnimatePresence mode="wait">
             <motion.div
               key={isDecoded ? 'custom' : 'generic'}
               initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
               animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
               exit={{ opacity: 0, filter: "blur(10px)", y: -10 }}
               transition={{ duration: 0.3 }}
               className={isDecoded ? "text-green-400" : "text-red-400 opacity-60 line-through decoration-red-500/50"}
             >
               {isDecoded ? customCodes[index] : genericCodes[index]}
             </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-6 flex items-center justify-between">
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
            <span className="text-xs uppercase tracking-widest text-white/50 font-bold">
              {isDecoded ? 'Bespoke Logic Validated' : 'Parsing Generic Bloat...'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CodeDecoderMobile;
