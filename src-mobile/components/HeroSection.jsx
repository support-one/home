import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const customTypes = ["Custom Apps", "Native Tools", "System Logic", "Client Portals"];

const HeroSection = () => {
  const [typeIndex, setTypeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTypeIndex(prev => (prev + 1) % customTypes.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative pt-[calc(env(safe-area-inset-top)+80px)] px-6 pb-12 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden transform-gpu" style={{ willChange: 'transform' }}>
      
      {/* Wave 1: Particle Mesh Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none transform-gpu">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-apple-blue/20 rounded-full transform-gpu"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.4
            }}
            animate={{ 
              y: [null, Math.random() * -80 - 40 + "px"],
              opacity: [0, 0.4, 0]
            }}
            transition={{ 
              duration: Math.random() * 8 + 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ willChange: 'transform' }}
          />
        ))}
      </div>

      {/* Deep Vantablack radial frost behind hero */}
      <div className="absolute top-0 w-full h-[60vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-apple-blue/10 via-black to-black -z-10 pointer-events-none" />

      {/* Wave 1: Animated Logo Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-8 relative transform-gpu"
      >
        <div className="absolute inset-0 bg-apple-blue/30 blur-xl rounded-full scale-125 opacity-10" />
        <img src={`${import.meta.env.BASE_URL}support-one-logo.png`} alt="S1" className="w-16 h-16 rounded-2xl relative z-10 shadow-xl transform-gpu" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
        className="inline-flex material-thin px-4 py-1.5 mb-10 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase text-white/70 glare-edge transform-gpu"
        style={{ willChange: 'transform, opacity' }}
      >
        No Generic Software.
      </motion.div>

      <motion.h1 
        className="text-[42px] xs:text-5xl font-black tracking-tighter leading-[1.05] mb-6 transform-gpu"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.2 }}
        style={{ willChange: 'transform, opacity' }}
      >
        We Build Your <br/> 
        <AnimatePresence mode="wait">
          <motion.span 
            key={typeIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 block mt-1"
          >
            {customTypes[typeIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.h1>

      <motion.p 
        className="text-lg text-white/50 font-medium leading-[1.4] mb-12 max-w-[280px] transform-gpu"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.3 }}
        style={{ willChange: 'transform, opacity' }}
      >
        Software built purely for your business. No fluff, no limitations.
      </motion.p>
      <div className="relative w-full max-w-[320px] mt-4 mb-16 transform-gpu">
        <motion.div 
          className="absolute inset-0 rounded-[32px] border-2 border-apple-blue/20 transform-gpu"
          animate={{ scale: [1, 1.1], opacity: [0.6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        />
        <motion.button 
          onClick={() => {
            const el = document.getElementById('developer');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.dispatchEvent(new CustomEvent('flip-visiting-card'));
          }}
          className="w-full material-thick py-6 px-6 text-white text-lg font-semibold flex justify-between items-center overflow-hidden relative transform-gpu"
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 150, damping: 25, delay: 0.4 }}
          style={{ WebkitTapHighlightColor: 'transparent', borderRadius: '32px', willChange: 'transform' }}
        >
          <span className="relative z-10 px-2 text-white font-black tracking-tight uppercase text-xs">Start Custom Build</span>
          <span className="relative z-10 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </motion.button>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-40 transform-gpu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1 }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold mb-3">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
           <motion.div 
             className="w-full h-1/2 bg-apple-blue transform-gpu"
             animate={{ y: [ -24, 48 ] }}
             transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
             style={{ willChange: 'transform' }}
           />
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
