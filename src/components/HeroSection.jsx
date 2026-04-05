import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const headline = "Your Business. Your Software.";
  
  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      
      {/* Background Morphing Shapes */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-purple-800/20 to-blue-600/10 rounded-full blur-3xl pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="z-10 max-w-4xl text-center space-y-8 flex flex-col items-center">
        {/* Animated Headline */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-balance leading-tight"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {headline.split(' ').map((word, idx) => (
            <motion.span key={idx} variants={wordAnimation} className="inline-block mr-[2vw]">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          We engineer custom, lightning-fast applications for iOS, Android, macOS, and Windows. Architected exclusively for your business. No generic SaaS templates. No compromises.
        </motion.p>
        
        {/* Magnetic CTA Button */}
        <motion.button
          className="relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Start Your Project</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>

    </section>
  );
}
