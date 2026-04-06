import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FounderCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  React.useEffect(() => {
    const handleFlip = () => {
      setTimeout(() => setIsFlipped(true), 800); // Delayed flip for "WOW" effect after scroll
    };
    window.addEventListener('flip-visiting-card', handleFlip);
    return () => window.removeEventListener('flip-visiting-card', handleFlip);
  }, []);

  return (
    <section className="py-16 px-6 overflow-hidden">
      <div className="text-center mb-10">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">The Developer</span>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Meet the Builder</h2>
        <p className="text-white/60 text-sm">The person behind every line of code.</p>
      </div>

      {/* Photo + Name - Static, not flipped */}
      <motion.div
        className="max-w-[280px] mx-auto mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 150, damping: 25 }}
      >
        <div className="relative rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/5">
          <img src={`${import.meta.env.BASE_URL}hemish-photo.jpg`} 
            alt="Hemish Vora — Founder, Support One" 
            className="w-full aspect-[4/5] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/10">
            <div className="relative w-2 h-2">
              <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(52,199,89,0.8)]" />
              <motion.div 
                className="absolute inset-0 rounded-full bg-green-400"
                animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-[9px] font-bold text-green-400 uppercase tracking-widest">Available</span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-black tracking-tighter text-white">Hemish Vora</h3>
            <p className="text-[11px] text-apple-blue font-bold tracking-widest uppercase mt-1">Systems Developer</p>
          </div>
        </div>
      </motion.div>

      {/* Visiting Card — Landscape flip interaction */}
      <div className="text-center mb-4">
        <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/20">Visiting Card</p>
      </div>
      
      <motion.div
        className="max-w-xs mx-auto cursor-pointer transform-gpu"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ WebkitTapHighlightColor: 'transparent', perspective: '1200px', willChange: 'transform, opacity' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: 'spring' }}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 180, damping: 25 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-full transform-gpu"
        >
          {/* Front Side */}
          <div 
            className="relative w-full rounded-[16px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform-gpu"
            style={{ backfaceVisibility: 'hidden', aspectRatio: '1.78 / 1', willChange: 'transform' }}
          >
            <img 
              src={`${import.meta.env.BASE_URL}hemish-card.png`} 
              alt="Hemish Vora Visiting Card" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Back Side */}
          <div 
            className="absolute inset-0 w-full rounded-[16px] overflow-hidden transform-gpu"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', aspectRatio: '1.78 / 1', willChange: 'transform' }}
          >
            <div className="w-full h-full bg-[#0a0e1a] p-6 flex flex-col justify-between border border-white/10 rounded-[16px]">
              <div className="flex items-center gap-3">
                <img src={`${import.meta.env.BASE_URL}support-one-logo.png`} alt="S1" className="w-9 h-9 rounded-lg" />
                <div>
                  <p className="text-base font-black text-white leading-tight">Hemish Vora</p>
                  <p className="text-[9px] text-apple-blue font-bold uppercase tracking-widest">Connect Directly</p>
                </div>
              </div>

              <div className="space-y-2 mt-2">
                <a href="tel:9423372342" className="flex items-center gap-3 text-xs text-white/50 font-medium">
                  <span className="text-white/20 text-sm">📞</span> 9423372342
                </a>
                <a href="https://www.hemishvora.com" className="flex items-center gap-3 text-xs text-white/50 font-medium font-mono">
                  <span className="text-white/20 text-sm">🌐</span> hemishvora.com
                </a>
                <a href="mailto:business.hemishvora@gmail.com" className="flex items-center gap-3 text-xs text-white/50 font-medium">
                  <span className="text-white/20 text-sm">✉️</span> business.hemishvora@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-[8px] text-white/20 uppercase tracking-[0.2em] font-bold mt-4 animate-pulse">Tap Card To Flip</p>
      </motion.div>
    </section>
  );
};

export default FounderCard;
