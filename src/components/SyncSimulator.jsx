import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SyncSimulator = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) return 0;
        return p + Math.floor(Math.random() * 20) + 5;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-[28px] p-8 flex flex-col items-center justify-center hover:bg-[#0c0c0c] transition-colors duration-300">
        <div className="text-center mb-8">
          <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2">Integration Engine</h3>
          <p className="text-white/60 text-xs lg:text-sm">Real-time resolution of complex data.</p>
        </div>

        <div className="relative w-40 h-40 lg:w-48 lg:h-48 flex items-center justify-center">
          {/* Background Track */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
            <motion.circle 
              cx="80" cy="80" r="70" 
              fill="none" 
              stroke="#0A84FF" 
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="439.8"
              animate={{ strokeDashoffset: 439.8 - ((progress > 100 ? 100 : progress) / 100) * 439.8 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            />
          </svg>
          
          <div className="text-center flex flex-col items-center">
            <span className="text-3xl font-black tracking-tighter tabular-nums">
              {progress > 100 ? 100 : progress}%
            </span>
            <span className="text-[10px] text-white/50 tracking-widest uppercase font-semibold">
              {progress >= 100 ? 'Synced' : 'Resolving'}
            </span>
          </div>
        </div>
        
        <div className="w-full flex justify-between mt-8 text-xs font-mono text-white/40">
          <span>Local DB</span>
          <motion.div 
            className="flex gap-1"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <span>•</span><span>•</span><span>•</span>
          </motion.div>
          <span>Cloud Core</span>
        </div>

    </div>
  );
};

export default SyncSimulator;
