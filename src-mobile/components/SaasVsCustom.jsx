import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const comparisonData = [
  { 
    saas: 'Same dashboard for everyone', 
    custom: 'Built around your exact workflow',
    icon: '🖥️',
    metric: { label: 'Efficiency', saasVal: '34%', customVal: '97%' }
  },
  { 
    saas: 'Monthly subscription forever', 
    custom: 'You own it. Full ownership.',
    icon: '💰',
    metric: { label: 'Lifetime Cost', saasVal: '₹18L+', customVal: '₹3.5L' }
  },
  { 
    saas: 'Their servers, their rules', 
    custom: 'Your infrastructure, your data',
    icon: '🔒',
    metric: { label: 'Data Control', saasVal: '0%', customVal: '100%' }
  },
  { 
    saas: 'Waiting on their roadmap', 
    custom: 'Updates ship when you need them',
    icon: '⚡',
    metric: { label: 'Response Time', saasVal: '90 days', customVal: '48 hrs' }
  },
];

const SaasVsCustom = () => {
  const [mode, setMode] = useState('saas'); // 'saas' or 'custom'
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setMode(m => m === 'saas' ? 'custom' : 'saas');
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const isCustom = mode === 'custom';

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="text-center mb-10">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">The Difference</span>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Not A SaaS</h2>
        <p className="text-white/60">See why custom-built wins.</p>
      </div>

      {/* Toggle Switch */}
      <div className="w-full mx-auto mb-8">
        <div 
          className="relative bg-[#111] rounded-full p-1 flex border border-white/5 cursor-pointer"
          onClick={() => { setAutoPlay(false); setMode(m => m === 'saas' ? 'custom' : 'saas'); }}
        >
          <motion.div 
            className="absolute top-1 bottom-1 rounded-full"
            animate={{ 
              left: isCustom ? '50%' : '4px',
              right: isCustom ? '4px' : '50%',
              backgroundColor: isCustom ? 'rgba(10,132,255,0.2)' : 'rgba(255,59,48,0.15)'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ position: 'absolute' }}
          />
          <div className="flex-1 text-center py-2 z-10">
            <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${!isCustom ? 'text-red-400' : 'text-white/25'}`}>
              Generic SaaS
            </span>
          </div>
          <div className="flex-1 text-center py-2 z-10">
            <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${isCustom ? 'text-apple-blue' : 'text-white/25'}`}>
              Support One
            </span>
          </div>
        </div>
        
        {/* Auto-play indicator */}
        {autoPlay && (
          <div className="flex justify-center mt-3">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-1 h-1 rounded-full"
                animate={{ backgroundColor: isCustom ? '#0A84FF' : '#FF3B30' }}
              />
              <div className="w-20 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full transform-gpu origin-left"
                  style={{ willChange: 'transform' }}
                  animate={{ 
                    scaleX: [0, 1],
                    backgroundColor: isCustom ? '#0A84FF' : '#FF3B30'
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Comparison Cards */}
      <div className="w-full mx-auto space-y-3">
        {comparisonData.map((row, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-[20px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 200, damping: 25 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                className={`p-5 border ${isCustom 
                  ? 'bg-gradient-to-r from-apple-blue/8 via-[#111] to-[#111] border-apple-blue/15' 
                  : 'bg-[#111] border-white/5'
                }`}
                style={{ borderRadius: '20px' }}
                initial={{ opacity: 0, x: isCustom ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isCustom ? -20 : 20 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div className="flex items-start gap-3.5">
                  {/* Icon */}
                  <motion.div 
                    className={`w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0 ${
                      isCustom ? 'bg-apple-blue/15 border border-apple-blue/20' : 'bg-red-500/10 border border-red-500/15'
                    }`}
                    animate={{ rotate: isCustom ? [0, -5, 5, 0] : 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <span className="text-base">{row.icon}</span>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className={`text-[9px] uppercase tracking-widest font-bold mb-1.5 ${
                      isCustom ? 'text-apple-blue/70' : 'text-red-400/50'
                    }`}>
                      {isCustom ? 'Support One' : 'Generic SaaS'}
                    </p>
                    <p className={`text-sm font-semibold leading-relaxed ${
                      isCustom ? 'text-white' : 'text-white/40'
                    }`}>
                      {isCustom ? row.custom : row.saas}
                    </p>

                    {/* Metric Bar */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[8px] text-white/25 font-bold">{row.metric.label}</span>
                      <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ 
                            width: isCustom ? '95%' : '30%',
                            backgroundColor: isCustom ? '#0A84FF' : '#FF3B30'
                          }}
                          transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.05 }}
                        />
                      </div>
                      <motion.span 
                        className={`text-[9px] font-black ${isCustom ? 'text-apple-blue' : 'text-red-400/60'}`}
                        key={mode + i}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                      >
                        {isCustom ? row.metric.customVal : row.metric.saasVal}
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Bottom Verdict */}
      <motion.div 
        className="w-full mx-auto mt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={mode}
            className={`text-xs font-bold ${isCustom ? 'text-apple-blue/60' : 'text-red-400/40'}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {isCustom ? '✓ Built to fit. Not forced to conform.' : '✕ One size fits none.'}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default SaasVsCustom;
