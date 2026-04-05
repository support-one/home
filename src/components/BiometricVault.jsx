import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BiometricVault() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <section className="w-full py-32 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-16">
         <h2 className="text-4xl font-bold mb-4">The VIP Hotline.</h2>
         <p className="text-gray-400">When you buy a mass-market SaaS license, you are put in a queue with 100,000 other people. With custom software, you get direct access to the team who built it. Hover for VIP access.</p>
      </div>

      <motion.div 
        className="w-80 h-80 rounded-full border-2 border-white/10 flex items-center justify-center relative cursor-pointer overflow-hidden group"
        onHoverStart={() => setUnlocked(true)}
        onHoverEnd={() => setUnlocked(false)}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/40 via-red-900/20 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        

        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.div 
              key="locked"
              className="z-10 flex flex-col items-center text-gray-500 px-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <svg className="w-16 h-16 mb-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-sm font-bold tracking-widest text-red-500 mb-2 uppercase">Please stay on the line.</span>
              <span className="text-xs">Your call is very important to us...</span>
            </motion.div>
          ) : (
            <motion.div 
              key="unlocked"
              className="z-10 flex flex-col items-center text-white"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <svg className="w-20 h-20 mb-4 stroke-current text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,204,0.5)]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="text-xl font-bold tracking-widest text-center shadow-black">Direct Access</span>
              <span className="text-xs text-cyan-200 mt-2">Connecting to your Lead Architect...</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
