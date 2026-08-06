import React from 'react';
import { motion } from 'framer-motion';

const techs = ['SwiftUI', 'Kotlin Flow', 'Metal', 'CoreML', 'Jetpack', 'Combine', 'ARKit'];

const TechMarquee = () => {
  return (
    <section className="py-12 w-full overflow-hidden relative">
      {/* Edge blur masks */}
      <div className="absolute top-0 left-0 w-12 lg:w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute top-0 right-0 w-12 lg:w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
      
      <div className="flex w-[200vw]">
        <motion.div 
          className="flex whitespace-nowrap gap-6 items-center transform-gpu"
          style={{ willChange: 'transform' }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          {/* Double array for seamless loop */}
          {[...techs, ...techs].map((tech, i) => (
            <div key={i} 
              className="px-5 py-2.5 lg:px-8 lg:py-4 lg:rounded-xl rounded-full bg-white/10 border border-white/5 text-sm lg:text-xl font-semibold tracking-wide text-white/80"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Reverse Marquee */}
      <div className="flex w-[200vw] mt-4">
        <motion.div 
          className="flex whitespace-nowrap gap-6 items-center transform-gpu"
          style={{ willChange: 'transform' }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {[...techs, ...techs].reverse().map((tech, i) => (
            <div key={i} 
              className="px-5 py-2.5 lg:px-8 lg:py-4 lg:rounded-xl rounded-full bg-white/10 border border-white/5 text-sm lg:text-xl font-semibold tracking-wide text-white/60"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechMarquee;
