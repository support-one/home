import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stackItems = [
  { platform: 'Mobile', core: 'iOS & Android Native', performance: 'Consumer-grade fluidity' },
  { platform: 'Desktop', core: 'macOS & Windows', performance: 'Deep OS integration' },
  { platform: 'Backend', core: 'Custom Workflows', performance: 'Built strictly for you' },
  { platform: 'Systems', core: 'Payment & Reports', performance: 'Zero bloat automation' }
];

const HardwareStackMobile = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="mb-14 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">Deployment Telemetry</span>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Works on Every Device</h2>
        <p className="text-white/60">Mac, Windows, iOS, and Android.</p>
      </div>

      <div className="relative space-y-4 max-w-sm mx-auto perspective-1000">
        {stackItems.map((item, index) => (
          <motion.div
            key={item.platform}
            className="material-regular p-5 glass-edge flex flex-col relative overflow-hidden group"
            whileTap={{ scale: 0.95, rotateX: 5, z: -10 }}
            style={{ 
              borderRadius: '24px', 
              y: useTransform(scrollYProgress, [0.2, 0.8], [index * 20, -(index * 10)]) 
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[40px] opacity-20 -z-10
              ${item.platform === 'Mobile' ? 'bg-blue-500' : 
                item.platform === 'Desktop' ? 'bg-purple-500' : 
                item.platform === 'Backend' ? 'bg-green-500' : 'bg-orange-400'}`} 
            />

            <div className="flex justify-between items-end mb-4">
              <span className="text-2xl font-bold tracking-tight text-white">{item.platform}</span>
              <span className="text-[10px] font-mono tracking-widest text-apple-blue uppercase text-right max-w-[120px]">{item.performance}</span>
            </div>
            
            <div className="w-full h-[1px] bg-white/10 mb-4" />
            
            <span className="text-sm font-medium text-white/70">{item.core}</span>
            
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors rounded-[24px] pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HardwareStackMobile;
