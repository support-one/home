import React from 'react';
import { motion } from 'framer-motion';

const PremiumHeroVisual = () => {
  return (
    <div className="relative w-full aspect-[4/3] max-w-[700px] flex items-center justify-center">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-apple-blue/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#BF5AF2]/20 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Back Window - Abstract Code / Terminal */}
      <motion.div 
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] right-[5%] w-[60%] h-[55%] bg-[#1c1c1e]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl"
      >
        <div className="flex gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="space-y-4">
          <div className="w-3/4 h-2.5 bg-white/10 rounded-full" />
          <div className="w-1/2 h-2.5 bg-white/10 rounded-full" />
          <div className="w-5/6 h-2.5 bg-[#BF5AF2]/40 rounded-full" />
          <div className="w-1/3 h-2.5 bg-white/10 rounded-full" />
        </div>
      </motion.div>

      {/* Middle Window - Main Desktop Dashboard */}
      <motion.div 
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[0%] w-[75%] h-[65%] bg-[#0a0a0c]/90 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10 flex flex-col"
      >
         <div className="flex justify-between items-center mb-6">
           <div className="w-1/3 h-5 bg-white/20 rounded-lg" />
           <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-apple-blue to-[#BF5AF2]" />
         </div>
         <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
            <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
         </div>
         <div className="flex-1 bg-gradient-to-r from-apple-blue/10 to-transparent rounded-xl border border-apple-blue/20" />
      </motion.div>

      {/* Front Window - Mobile App Interface */}
      <motion.div 
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[0%] right-[15%] w-[32%] h-[75%] bg-black/95 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-4 shadow-[0_0_80px_rgba(0,0,0,0.8)] z-20 flex flex-col"
      >
        <div className="w-1/3 h-1.5 bg-white/20 rounded-full mx-auto mb-6 mt-2" />
        <div className="flex-1 rounded-2xl bg-white/5 mb-3 border border-white/5 flex flex-col p-4 gap-4">
           <div className="w-full h-2.5 bg-white/10 rounded-full" />
           <div className="w-2/3 h-2.5 bg-white/10 rounded-full" />
           <div className="w-full flex-1 bg-gradient-to-b from-[#BF5AF2]/20 to-transparent rounded-xl mt-2 border border-[#BF5AF2]/10" />
        </div>
        <div className="h-14 rounded-2xl bg-apple-blue/20 flex items-center justify-center border border-apple-blue/30">
           <div className="w-1/2 h-2.5 bg-apple-blue rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

const DesktopHero = () => {
  return (
    <section className="w-full min-h-[100dvh] lg:h-screen lg:min-h-[800px] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-24 pt-24 lg:pt-0 gap-12 lg:gap-0">
      {/* Left Text Pane */}
      <div className="w-full lg:w-[55%] z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          
          <h1 className="text-[5rem] xl:text-[6rem] leading-[0.95] font-black tracking-tighter mb-8">
            Stop Renting <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Generic SaaS.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-white/60 max-w-xl leading-relaxed mb-10 lg:mb-12">
            We engineer bespoke, multi-platform software systems tailored specifically for your business logic. Own your code, scale infinitely.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 w-full sm:w-auto">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-lets-talk'))}
              className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Book a Consultation
            </button>
            <button 
              onClick={() => document.getElementById('trust')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto justify-center px-8 py-4 rounded-full font-bold text-lg text-white/80 hover:text-white transition-colors flex items-center gap-3"
            >
              View Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Visual Pane */}
      <div className="w-full lg:w-[45%] h-full flex items-center justify-center relative pb-20 lg:pb-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative w-full flex items-center justify-center"
        >
          <PremiumHeroVisual />
        </motion.div>
      </div>
    </section>
  );
};

export default DesktopHero;
