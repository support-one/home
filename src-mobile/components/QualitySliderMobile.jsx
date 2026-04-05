import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QualitySliderMobile = () => {
  const [quality, setQuality] = useState(4); // Default to highest

  const labels = ['Templates', 'SaaS', 'Configured', 'Bespoke', 'Tailored Native'];
  const colors = ['#FF3B30', '#FF9500', '#FFCC00', '#34C759', '#0A84FF'];

  return (
    <section className="py-24 px-6">
      <div className="material-thick p-10 flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-10">Not A SaaS</h3>
        
        <motion.div 
          className="text-4xl text-center font-black mb-2 tracking-tighter leading-tight h-20 flex items-center justify-center"
          animate={{ color: colors[quality] }}
          transition={{ duration: 0.3 }}
        >
          {labels[quality]}
        </motion.div>
        
        <p className="text-white/50 text-sm mb-12 h-6 text-center">
          {quality === 4 ? "100% custom code written for your workflows." : 
           quality < 2 ? "Generic software forcing you to adapt." :
           "Scrub to see the difference."}
        </p>

        <div className="relative w-full h-8 flex items-center">
          <div className="absolute w-full h-1.5 bg-white/10 rounded-full" />
          
          <motion.div 
            className="absolute h-1.5 rounded-full"
            animate={{ 
              width: `${(quality / 4) * 100}%`,
              backgroundColor: colors[quality] 
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
          
          <motion.div
            className="absolute top-1/2 -ml-4 w-8 h-8 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.5)] flex items-center justify-center z-10 border-[0.5px] border-black/10"
            animate={{ left: `${(quality / 4) * 100}%` }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
          />
          
          <div className="absolute inset-0 flex justify-between z-20">
            {[0, 1, 2, 3, 4].map((idx) => (
              <div 
                key={idx} 
                className="w-1/5 h-full cursor-pointer flex justify-center items-center"
                onClick={() => setQuality(idx)}
              >
                <div className="w-1 h-1 rounded-full bg-white/30" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default QualitySliderMobile;
