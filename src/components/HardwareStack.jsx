import React from 'react';
import { motion } from 'framer-motion';

const stackItems = [
  { platform: 'Mobile', core: 'iOS & Android Native', performance: 'Consumer-grade fluidity' },
  { platform: 'Desktop', core: 'macOS & Windows', performance: 'Deep OS integration' },
  { platform: 'Backend', core: 'Custom Workflows', performance: 'Built strictly for you' },
  { platform: 'Systems', core: 'Payment & Reports', performance: 'Zero bloat automation' }
];

const HardwareStack = ({ hideHeader = false, className = "" }) => {
  return (
    <div className={`w-full ${className}`}>
      {!hideHeader && (
        <div className="mb-14 lg:mb-20 text-center px-6">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">Deployment Telemetry</span>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-2">Works on Every Device</h2>
          <p className="text-white/60 lg:text-xl">Mac, Windows, iOS, and Android.</p>
        </div>
      )}

      <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-4 w-full h-full lg:min-h-[160px] perspective-1000">
        {stackItems.map((item, index) => (
          <motion.div
            key={item.platform}
            className="bg-[#0c0c0c] p-5 lg:p-6 border border-white/10 flex flex-col relative overflow-hidden group justify-between rounded-[24px] lg:rounded-xl shadow-lg"
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-[30px] opacity-20 pointer-events-none transition-opacity group-hover:opacity-40
              ${item.platform === 'Mobile' ? 'bg-blue-500' : 
                item.platform === 'Desktop' ? 'bg-purple-500' : 
                item.platform === 'Backend' ? 'bg-green-500' : 'bg-orange-400'}`} 
            />

            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-xl lg:text-lg font-bold tracking-tight text-white">{item.platform}</span>
              </div>
              <div className="text-[9px] font-mono tracking-widest text-apple-blue uppercase mb-4 leading-tight max-w-[100px]">
                {item.performance}
              </div>
            </div>
            
            <div>
              <div className="w-full h-[1px] bg-white/10 mb-3" />
              <span className="text-sm lg:text-xs font-medium text-white/70">{item.core}</span>
            </div>
            
            <div className="absolute inset-0 border border-transparent group-hover:border-white/20 transition-colors rounded-[24px] lg:rounded-xl pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HardwareStack;
