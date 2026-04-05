import React from 'react';
import { motion } from 'framer-motion';

export default function EfficiencyGraph() {
  return (
    <section className="w-full py-32 px-6 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Stop Paying Rent. Own the Land.</h2>
        <p className="text-gray-400">Renting generic software means coins dropping out of your wallet endlessly every single month. Building custom software means a single investment for an asset you own forever.</p>
      </div>

      <div className="w-full max-w-4xl h-80 bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 relative flex items-end overflow-hidden group">
        
        {/* Y-Axis Label */}
        <div className="absolute left-4 top-4 text-xs font-mono text-gray-600 uppercase">Cumulative Cost ($)</div>
        
        {/* Generic Renting Line (Shooting Up Forever) */}
        <svg className="absolute inset-0 w-full h-full preserve-3d" preserveAspectRatio="none" viewBox="0 0 100 100">
           <motion.path 
             d="M0,100 L100,0" // Linear extreme growth
             fill="none"
             stroke="var(--color-red-500, #ef4444)"
             strokeWidth="2"
             strokeDasharray="141"
             initial={{ strokeDashoffset: 141 }}
             whileInView={{ strokeDashoffset: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 3, ease: "linear" }}
           />
        </svg>

        {/* Custom App Line (One spike, then totally flat) */}
        <svg className="absolute inset-0 w-full h-full preserve-3d" preserveAspectRatio="none" viewBox="0 0 100 100">
           <defs>
             <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
               <stop offset="0%" stopColor="#00ffcc" stopOpacity="0.2"/>
               <stop offset="100%" stopColor="#00ffcc" stopOpacity="0"/>
             </linearGradient>
           </defs>
           <motion.path 
             d="M0,100 L0,30 L100,30 L100,100 Z"
             fill="url(#cyanGrad)"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 2, delay: 1 }}
           />
           <motion.path 
             d="M0,100 L0,30 L100,30"
             fill="none"
             stroke="#00ffcc"
             strokeWidth="3"
             strokeDasharray="300"
             initial={{ strokeDashoffset: 300 }}
             whileInView={{ strokeDashoffset: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
           />
        </svg>

        {/* Legend */}
        <div className="absolute top-4 right-8 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 flex flex-col space-y-2">
           <div className="flex items-center text-xs text-red-500 font-bold uppercase"><span className="w-3 h-[2px] bg-red-500 mr-2" /> SaaS Endless Rentals</div>
           <div className="flex items-center text-xs text-cyan-400 font-bold uppercase"><span className="w-3 h-1 bg-cyan-400 mr-2" /> One-Time Custom Ownership</div>
        </div>

      </div>
    </section>
  );
}
