import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StickyMorphingMobile = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <section className="py-24 px-6 relative h-[250vh]">
      <div className="sticky top-24 flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Why Custom?</h2>
          <p className="text-white/60">The edge over generic software.</p>
        </div>

        <div className="relative w-full max-w-sm h-[380px]">
          {/* Card 1 */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-[320px] material-regular p-8 rounded-[32px] bg-gradient-to-br from-blue-500/20 to-transparent"
            style={{ 
              scale: useTransform(scrollYProgress, [0, 0.3], [1, 0.9]),
              opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0.5])
            }}
          >
            <h3 className="text-2xl font-bold mb-4">Work Faster</h3>
            <p className="text-white/70">No bloated menus. Your team uses exactly what they need.</p>
            <div className="absolute bottom-8 right-8 text-5xl font-black text-white/20">Speed</div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-[320px] material-regular border-white/20 p-8 rounded-[32px] bg-gradient-to-br from-purple-500/20 to-transparent shadow-2xl"
            style={{ 
              y: useTransform(scrollYProgress, [0.2, 0.5], [400, 30]),
              scale: useTransform(scrollYProgress, [0.4, 0.7], [1, 0.95]),
            }}
          >
            <h3 className="text-2xl font-bold mb-4">Own Your Code</h3>
            <p className="text-white/70">Stop paying per-seat subscriptions blindly. It's your asset.</p>
            <div className="absolute bottom-8 right-8 text-5xl font-black text-white/20">Asset</div>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-[320px] material-thick p-8 rounded-[32px] bg-gradient-to-br from-green-500/20 to-transparent shadow-2xl border-white/30"
            style={{ 
              y: useTransform(scrollYProgress, [0.6, 0.9], [400, 60]),
            }}
          >
            <h3 className="text-2xl font-bold mb-4">Grow Easily</h3>
            <p className="text-white/70">As your business pivots, your custom software pivots with you.</p>
            <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-apple-blue/20 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StickyMorphingMobile;
