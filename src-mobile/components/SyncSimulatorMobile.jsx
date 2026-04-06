import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SyncSimulatorMobile = () => {
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
    <section className="py-16 px-6 transform-gpu">
      <div className="material-regular glass-edge p-8 flex flex-col items-center max-w-sm mx-auto transform-gpu" style={{ borderRadius: '32px', willChange: 'transform' }}>
        
        <div className="text-center mb-8 transform-gpu">
          <h3 className="text-2xl font-bold tracking-tight mb-2">Integration Engine</h3>
          <p className="text-white/60 text-sm">Real-time resolution of complex data.</p>
        </div>

        <div className="relative w-40 h-40 flex items-center justify-center transform-gpu">
          {/* Background Track */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 transform-gpu" style={{ willChange: 'transform' }}>
            <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
            <motion.circle 
              cx="80" cy="80" r="70" 
              fill="none" 
              stroke="#0A84FF" 
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="439.8"
              animate={{ strokeDashoffset: 439.8 - ((progress > 100 ? 100 : progress) / 100) * 439.8 }}
              transition={{ type: 'spring', stiffness: 50, damping: 15 }}
            />
          </svg>
          
          <div className="text-center flex flex-col items-center transform-gpu">
            <span className="text-3xl font-black tracking-tighter tabular-nums text-white">
              {progress > 100 ? 100 : progress}%
            </span>
            <span className="text-[10px] text-white/50 tracking-widest uppercase font-semibold">
              {progress >= 100 ? 'Synced' : 'Resolving'}
            </span>
          </div>
        </div>
        
        <div className="w-full flex justify-between mt-8 text-xs font-mono text-white/40 transform-gpu">
          <span>Local DB</span>
          <motion.div 
            className="flex gap-1 transform-gpu"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <span>•</span><span>•</span><span>•</span>
          </motion.div>
          <span>Cloud Core</span>
        </div>
      </div>
    </section>
  );
};

export default SyncSimulatorMobile;
