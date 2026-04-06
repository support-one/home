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
    <section className="relative pt-[calc(env(safe-area-inset-top)+80px)] px-6 pb-12 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Wave 1: Particle Mesh Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-apple-blue/20 rounded-full transform-gpu"
            style={{ willChange: "transform" }}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50 + "px"],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </div>

      {/* Deep Vantablack radial frost behind hero */}
      <div className="absolute top-0 w-full h-[60vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-apple-blue/15 via-black to-black -z-10 pointer-events-none" />

      {/* Wave 1: Animated Logo Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, blur: "10px" }}
        animate={{ opacity: 1, scale: 1, blur: "0px" }}
        transition={{ duration: 1, type: "spring" }}
        className="mb-8 relative"
      >
        <div className="absolute inset-0 bg-apple-blue/40 blur-2xl rounded-full scale-150 opacity-20" />
        <img src={`${import.meta.env.BASE_URL}support-one-logo.png`} alt="S1" className="w-16 h-16 rounded-2xl relative z-10 shadow-2xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
        className="inline-flex material-thin px-4 py-1.5 mb-10 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase text-white/70 glare-edge"
      >
        No Generic Software.
      </motion.div>

      <motion.h1 
        className="text-[42px] xs:text-5xl font-black tracking-tighter leading-[1.05] mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.2 }}
      >
        We Build Your <br/> 
        <AnimatePresence mode="wait">
          <motion.span 
            key={typeIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
            transition={{ duration: 0.4 }}
            className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/30 block mt-1"
          >
            {customTypes[typeIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.h1>

      <motion.p 
        className="text-lg text-white/50 font-medium leading-[1.4] mb-12 max-w-[280px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.3 }}
      >
        Software built purely for your business. No fluff, no limitations.
      </motion.p>
      <div className="relative w-full max-w-[320px] mt-4 mb-16">
        <motion.div 
          className="absolute inset-0 rounded-[32px] border-2 border-apple-blue/30"
          animate={{ scale: [1, 1.15], opacity: [0.8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
        <motion.button 
          onClick={() => {
            const el = document.getElementById('developer');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.dispatchEvent(new CustomEvent('flip-visiting-card'));
          }}
          className="w-full material-thick py-6 px-6 text-white text-lg font-semibold flex justify-between items-center transition-all overflow-hidden relative group"
          whileTap={{ scale: 0.94, opacity: 0.8 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 150, damping: 25, delay: 0.4 }}
          style={{ WebkitTapHighlightColor: 'transparent', borderRadius: '32px' }}
        >
          <span className="relative z-10 px-2 text-white font-black tracking-tight uppercase text-xs">Start Custom Build</span>
          <span className="relative z-10 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </motion.button>
      </div>



      {/* Premium Mouse Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-apple-blue/80 mb-4 animate-pulse">Explore</span>
        
        {/* Mouse Body */}
        <div className="w-[28px] h-[48px] rounded-full border-2 border-white/10 flex justify-center p-1.5 relative shadow-[0_0_20px_rgba(10,132,255,0.1)]">
           {/* Scroll Wheel Dot */}
           <motion.div 
             className="w-1.5 h-3 bg-apple-blue rounded-full shadow-[0_0_15px_rgba(10,132,255,0.8)]"
             animate={{ 
               y: [0, 16, 0],
               opacity: [1, 0.4, 1]
             }}
             transition={{ 
               duration: 2, 
               repeat: Infinity, 
               ease: "easeInOut" 
             }}
           />
           
           {/* Inner Glow */}
           <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-apple-blue/10 to-transparent rounded-t-full pointer-events-none" />
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
