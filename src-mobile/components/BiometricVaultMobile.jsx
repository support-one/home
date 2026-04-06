import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BiometricVaultMobile = () => {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <section className="w-full py-16 px-6 flex flex-col items-center overflow-hidden">
      <div className="text-center mb-10">
         <h2 className="text-2xl font-bold mb-3 tracking-tight">The VIP Hotline</h2>
         <p className="text-white/40 text-xs px-4 leading-relaxed">Generic SaaS leaves you in a queue. Custom software gives you direct access. Tap to request VIP access.</p>
      </div>

      <motion.div 
        className="w-64 h-64 rounded-full border border-white/5 flex items-center justify-center relative cursor-pointer overflow-hidden group glass-edge"
        onClick={() => setUnlocked(!unlocked)}
        whileTap={{ scale: 0.95 }}
      >
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${unlocked ? 'from-cyan-500/20 via-cyan-900/10 to-transparent' : 'from-red-500/10 via-red-900/5 to-transparent'} transition-all duration-700`} />
        
        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.div 
              key="locked"
              className="z-10 flex flex-col items-center text-white/30 px-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
            >
              <div className="w-16 h-16 mb-4 rounded-full border border-white/10 flex items-center justify-center">
                <svg className="w-8 h-8 stroke-current text-red-500/50" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-red-500 uppercase mb-1">Restricted Access</span>
              <span className="text-[9px] text-white/20">Authentication Required</span>
            </motion.div>
          ) : (
            <motion.div 
              key="unlocked"
              className="z-10 flex flex-col items-center text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-20 h-20 mb-4 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center relative">
                <motion.div 
                   className="absolute inset-0 rounded-full border border-cyan-400/50"
                   animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                   transition={{ duration: 2, repeat: Infinity }}
                />
                <svg className="w-10 h-10 stroke-current text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight">Direct Access</span>
              <span className="text-[10px] text-cyan-400/60 mt-1 uppercase tracking-widest">Connecting to Lead...</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default BiometricVaultMobile;
