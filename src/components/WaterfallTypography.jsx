import React from 'react';
import { motion } from 'framer-motion';

export default function WaterfallTypography() {
  const text = "Architectural Dominance.";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const letterAnim = {
    hidden: { opacity: 0, y: -50, rotateX: 90, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 12, stiffness: 100 }
    }
  };

  return (
    <section className="w-full py-40 flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        className="max-w-6xl w-full flex flex-wrap justify-center text-center px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {words.map((word, wordIdx) => (
          <span key={wordIdx} className="inline-block mr-4 md:mr-8 mb-4">
            {word.split("").map((letter, letterIdx) => (
              <motion.span 
                key={letterIdx} 
                className="inline-block text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-2xl"
                variants={letterAnim}
                style={{ transformStyle: "preserve-3d" }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.div>
      <motion.div 
        className="w-[1px] h-32 bg-gradient-to-b from-cyan-400 to-transparent mt-12"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1 }}
        style={{ originY: 0 }}
      />
    </section>
  );
}
