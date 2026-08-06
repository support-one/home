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
    <section className="py-20 lg:py-24 px-6 lg:px-0 overflow-hidden">
      <div className="text-center mb-10 lg:mb-20">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">The Developer</span>
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-2">Meet the Builder</h2>
        <p className="text-white/60 text-sm lg:text-xl">The person behind every line of code.</p>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-16 lg:max-w-[1400px] lg:mx-auto lg:px-8 lg:items-center">
        
        {/* LEFT COLUMN: Photo ID Card (5 columns) */}
        <motion.div
          className="lg:col-span-5 max-w-[320px] lg:max-w-none mx-auto w-full mb-12 lg:mb-0"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 25 }}
        >
          <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/5 bg-[#0a0a0a] group">
            <img src={`${import.meta.env.BASE_URL}hemish-photo.jpg`} 
              alt="Hemish Vora — Founder, Support One" 
              className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
              <div className="relative w-2 h-2">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(52,199,89,0.8)]" />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-green-400 transform-gpu"
                  style={{ willChange: 'transform, opacity' }}
                  animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="text-[9px] lg:text-[10px] font-bold text-green-400 uppercase tracking-widest">Available</span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl lg:text-4xl font-black tracking-tighter text-white">Hemish Vora</h3>
              <p className="text-xs lg:text-sm text-apple-blue font-bold tracking-widest uppercase mt-2">Systems Developer</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Visiting Card (7 columns) */}
        <div className="lg:col-span-7">
          <div className="text-center lg:text-left mb-6 lg:mb-10">
             <h3 className="text-2xl lg:text-4xl font-bold tracking-tight mb-3 hidden lg:block">Connect Directly.</h3>
             <p className="text-white/50 lg:text-lg hidden lg:block">Skip the sales team. Talk straight to the engineer building your system.</p>
             <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/20 block lg:hidden">Visiting Card</p>
          </div>
          
          <motion.div
            className="max-w-xs lg:max-w-full mx-auto cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ WebkitTapHighlightColor: 'transparent', perspective: '2000px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring' }}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-full shadow-[0_20px_50px_rgba(0,0,0,0.6)] lg:shadow-[0_40px_100px_rgba(0,0,0,0.8)] rounded-[16px] lg:rounded-[32px] hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Front Side */}
              <div 
                className="relative w-full rounded-[16px] lg:rounded-[32px] overflow-hidden"
                style={{ backfaceVisibility: 'hidden', aspectRatio: '1.78 / 1' }}
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
                className="absolute inset-0 w-full rounded-[16px] lg:rounded-[32px] overflow-hidden"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', aspectRatio: '1.78 / 1' }}
              >
                <div className="w-full h-full bg-[#0a0e1a] p-6 lg:p-12 flex flex-col justify-between border border-white/10 rounded-[16px] lg:rounded-[32px]">
                  <div className="flex items-center gap-4 lg:gap-6">
                    <img src={`${import.meta.env.BASE_URL}support-one-logo.png`} alt="S1" className="w-10 h-10 lg:w-16 lg:h-16 rounded-lg lg:rounded-2xl shadow-lg" />
                    <div>
                      <p className="text-lg lg:text-3xl font-black text-white leading-tight">Hemish Vora</p>
                      <p className="text-[10px] lg:text-sm text-apple-blue font-bold uppercase tracking-widest mt-1">Connect Directly</p>
                    </div>
                  </div>

                  <div className="space-y-3 lg:space-y-6 mt-4">
                    <a href="tel:9423372342" className="flex items-center gap-3 lg:gap-5 text-xs lg:text-lg text-white/60 font-medium hover:text-white transition-colors">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40">📞</div> 
                      9423372342
                    </a>
                    <a href="https://www.hemishvora.com" className="flex items-center gap-3 lg:gap-5 text-xs lg:text-lg text-white/60 font-medium hover:text-white transition-colors">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40">🌐</div> 
                      hemishvora.com
                    </a>
                    <a href="mailto:business.hemishvora@gmail.com" className="flex items-center gap-3 lg:gap-5 text-xs lg:text-lg text-white/60 font-medium hover:text-white transition-colors">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40">✉️</div> 
                      business.hemishvora.gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <p className="text-center text-[8px] lg:text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mt-6 animate-pulse">Tap Card To Flip</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderCard;
