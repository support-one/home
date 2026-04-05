import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FounderCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="text-center mb-14">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">The Developer</span>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Meet the Builder</h2>
        <p className="text-white/60">The person behind every line of code.</p>
      </div>

      {/* Photo + Name */}
      <motion.div
        className="max-w-xs mx-auto mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 150, damping: 25 }}
      >
        <div className="relative rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
          <img src={`${import.meta.env.BASE_URL}hemish-photo.jpg`} 
            alt="Hemish Vora — Founder, Support One" 
            className="w-full aspect-[4/5] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          
          {/* Live badge */}
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

          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-black tracking-tighter text-white leading-tight">Hemish Vora</h3>
            <p className="text-sm text-apple-blue font-bold tracking-wide mt-1">Systems & App Developer</p>
          </div>
        </div>
      </motion.div>

      {/* Business Card — proper landscape ratio */}
      <motion.div
        className="max-w-sm mx-auto cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ WebkitTapHighlightColor: 'transparent', perspective: '1200px' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 150, damping: 25 }}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-full"
        >
          {/* Front — Business Card Image */}
          <div 
            className="relative w-full rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            style={{ backfaceVisibility: 'hidden', aspectRatio: '1.78 / 1' }}
          >
            <img 
              src={`${import.meta.env.BASE_URL}hemish-card.png`} 
              alt="Hemish Vora — Business Card" 
              className="w-full h-full object-cover"
            />
            {/* Subtle gloss shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Back — Contact Details */}
          <div 
            className="absolute inset-0 w-full rounded-[16px] overflow-hidden"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', aspectRatio: '1.78 / 1' }}
          >
            <div className="w-full h-full bg-gradient-to-br from-[#0a1628] to-[#0a0e1a] p-6 flex flex-col justify-between border border-white/10 rounded-[16px]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-apple-blue/10 rounded-full blur-[60px] pointer-events-none" />
              
              <div className="flex items-center gap-3">
                <img src={`${import.meta.env.BASE_URL}support-one-logo.png`} alt="Support One" className="w-10 h-10 rounded-xl" />
                <div>
                  <p className="text-lg font-black text-white tracking-tight">Hemish Vora</p>
                  <p className="text-[10px] text-apple-blue uppercase tracking-widest font-bold">Systems & App Developer</p>
                </div>
              </div>

              <div className="space-y-2">
                <a href="tel:9423372342" className="flex items-center gap-3 text-sm text-white/70 font-medium">
                  <span className="text-white/30">📞</span> 9423372342
                </a>
                <a href="https://www.hemishvora.com" className="flex items-center gap-3 text-sm text-white/70 font-medium">
                  <span className="text-white/30">🌐</span> hemishvora.com
                </a>
                <a href="mailto:business.hemishvora@gmail.com" className="flex items-center gap-3 text-sm text-white/70 font-medium">
                  <span className="text-white/30">✉️</span> business.hemishvora@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-[9px] text-white/20 uppercase tracking-[0.2em] font-bold mt-4">Tap card to flip</p>
      </motion.div>
    </section>
  );
};

export default FounderCard;
