import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CoreMLScannerMobile = () => {
  const [scanPosition, setScanPosition] = useState(0);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    if (!isScanning) return;
    const interval = setInterval(() => {
      setScanPosition(p => (p >= 100 ? 0 : p + 2));
    }, 30);
    return () => clearInterval(interval);
  }, [isScanning]);

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="mb-8 text-center relative z-20">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Native Capabilities</h2>
        <p className="text-white/60 text-sm">Deep hardware access out of the box.</p>
      </div>

      <div 
        className="w-full max-w-[280px] h-[320px] mx-auto material-regular glass-edge rounded-[40px] relative overflow-hidden border border-white/20"
        onPointerDown={() => setIsScanning(false)}
        onPointerUp={() => setIsScanning(true)}
        style={{ touchAction: 'none' }}
      >
        {/* Abstract Data Representation */}
        <div className="w-full h-full flex flex-col justify-between p-8 opacity-40">
          <div className="w-full h-2 bg-white/20 rounded-full" />
          <div className="w-3/4 h-2 bg-white/20 rounded-full" />
          <div className="w-full h-24 bg-white/10 rounded-xl" />
          <div className="w-1/2 h-2 bg-white/20 rounded-full" />
          <div className="w-full h-2 bg-white/20 rounded-full" />
        </div>

        {/* Laser Scanner Line */}
        {isScanning && (
          <motion.div 
            className="absolute left-0 right-0 h-[2px] bg-apple-blue shadow-[0_0_20px_#0A84FF]"
            animate={{ top: `${scanPosition}%` }}
            transition={{ duration: 0 }}
          />
        )}
        
        {/* Scanning Gradient Overlay */}
        {isScanning && (
          <motion.div 
            className="absolute left-0 right-0 h-24 bg-gradient-to-t from-apple-blue/20 to-transparent pointer-events-none"
            animate={{ top: `calc(${scanPosition}% - 6rem)` }}
            transition={{ duration: 0 }}
          />
        )}

        <div className="absolute inset-0 border-[4px] border-transparent rounded-[40px] pointer-events-none" />

        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
           <div className={`w-2 h-2 rounded-full ${isScanning ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
           <span className="text-[10px] uppercase tracking-wider font-bold text-white/70">
             {isScanning ? 'Scanning...' : 'Locked'}
           </span>
        </div>
        
        <p className="absolute bottom-6 w-full text-center text-xs font-semibold text-white/50 tracking-widest uppercase">
          Hold to Freeze
        </p>

      </div>
    </section>
  );
};

export default CoreMLScannerMobile;
