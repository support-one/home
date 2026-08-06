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

// Helper to render a single card (either SaaS or Custom)
const ComparisonCard = ({ row, isCustom, i }) => {
  return (
    <div
      className={`p-5 lg:p-6 border h-full flex flex-col justify-center ${isCustom 
        ? 'bg-gradient-to-r from-apple-blue/10 via-[#111] to-[#0a0a0a] border-apple-blue/20 shadow-[0_0_20px_rgba(10,132,255,0.05)]' 
        : 'bg-[#0a0a0a] border-white/5 opacity-60 hover:opacity-100 transition-opacity'
      }`}
      style={{ borderRadius: '16px' }}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div 
          className={`w-10 h-10 lg:w-12 lg:h-12 rounded-[10px] flex items-center justify-center flex-shrink-0 ${
            isCustom ? 'bg-apple-blue/15 border border-apple-blue/30' : 'bg-red-500/10 border border-red-500/15'
          }`}
        >
          <span className="text-base">{row.icon}</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className={`text-[9px] lg:text-[10px] uppercase tracking-widest font-bold mb-1.5 ${
            isCustom ? 'text-apple-blue/70' : 'text-red-400/50'
          }`}>
            {isCustom ? 'Support One' : 'Generic SaaS'}
          </p>
          <p className={`text-sm lg:text-base font-semibold leading-relaxed ${
            isCustom ? 'text-white' : 'text-white/40'
          }`}>
            {isCustom ? row.custom : row.saas}
          </p>

          {/* Metric Bar */}
          <div className="mt-3 lg:mt-4 flex items-center gap-2 lg:gap-3">
            <span className="text-[8px] lg:text-[9px] text-white/30 font-bold w-20">{row.metric.label}</span>
            <div className="flex-1 h-1 lg:h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full rounded-full"
                initial={{ width: '0%' }}
                whileInView={{ 
                  width: isCustom ? '95%' : '30%',
                  backgroundColor: isCustom ? '#0A84FF' : '#FF3B30'
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.1 }}
              />
            </div>
            <span 
              className={`text-[9px] lg:text-[10px] font-black tabular-nums ${isCustom ? 'text-apple-blue' : 'text-red-400/60'}`}
            >
              {isCustom ? row.metric.customVal : row.metric.saasVal}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SaasVsCustom = () => {
  const [mode, setMode] = useState('saas'); // Mobile only toggle
  const [autoPlay, setAutoPlay] = useState(true);

  // Mobile autoplay
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setMode(m => m === 'saas' ? 'custom' : 'saas');
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const isCustom = mode === 'custom';

  return (
    <section className="pt-8 pb-16 lg:pt-8 lg:pb-24 px-6 lg:px-0 overflow-hidden">
      <div className="text-center mb-10 lg:mb-20">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">The Difference</span>
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-2">Not A SaaS</h2>
        <p className="text-white/60 lg:text-xl">See why custom-built wins.</p>
      </div>

      {/* ========================================================= */}
      {/* MOBILE LAYOUT: Interactive Toggle                         */}
      {/* ========================================================= */}
      <div className="block lg:hidden">
        {/* Toggle Switch */}
        <div className="max-w-xs mx-auto mb-8">
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
        </div>

        {/* Comparison Cards (Mobile) */}
        <div className="max-w-sm mx-auto space-y-3">
          {comparisonData.map((row, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, x: isCustom ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isCustom ? -20 : 20 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <ComparisonCard row={row} isCustom={isCustom} i={i} />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP LAYOUT: Side-by-Side Matrix                       */}
      {/* ========================================================= */}
      <div className="hidden lg:flex flex-col gap-6 max-w-[1400px] mx-auto px-8">
        {/* Table Headers */}
        <div className="grid grid-cols-2 gap-8 px-6 mb-2">
           <div className="text-center">
              <h3 className="text-red-400/60 font-black tracking-widest uppercase text-sm">The Generic SaaS Way</h3>
           </div>
           <div className="text-center">
              <h3 className="text-apple-blue font-black tracking-widest uppercase text-sm">The Support One Way</h3>
           </div>
        </div>

        {/* Matrix Rows */}
        {comparisonData.map((row, i) => (
          <div key={i} className="grid grid-cols-2 gap-8 items-stretch group">
             {/* SaaS Column */}
             <div className="transform-gpu transition-all duration-300 group-hover:opacity-50">
                <ComparisonCard row={row} isCustom={false} i={i} />
             </div>
             
             {/* Custom Column */}
             <div className="transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <ComparisonCard row={row} isCustom={true} i={i} />
             </div>
          </div>
        ))}
      </div>

      {/* Bottom Verdict */}
      <motion.div 
        className="max-w-sm mx-auto mt-12 text-center block lg:hidden"
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
      
      <div className="hidden lg:block text-center mt-16">
         <p className="text-lg font-bold text-apple-blue/80">✓ Built to fit your business. Not forced to conform.</p>
      </div>

    </section>
  );
};

export default SaasVsCustom;
