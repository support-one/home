import React from 'react';
import { motion } from 'framer-motion';

const bentoItems = [
  {
    title: 'Billing & ERPs',
    description: 'Dashboards built just for your workflow.',
    color: 'from-blue-500/20 to-blue-600/5',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    title: 'Internal Dashboards',
    description: 'Tools your team actually wants to use.',
    color: 'from-purple-500/20 to-purple-600/5',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#AF52DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    title: 'Mobile Apps',
    description: 'Direct to consumer mobile apps for your brand.',
    color: 'from-green-500/20 to-green-600/5',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34C759" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  }
];

const LiquidBentoMobile = () => {
  return (
    <section className="py-24 w-full overflow-hidden">
      <div className="px-6 mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-2">What We Build</h2>
        <p className="text-white/60">If you need it, we map it.</p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbars pl-6 pr-6 gap-4 pb-8 transform-gpu" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {bentoItems.map((item, i) => (
          <motion.div
            key={i}
            className={`min-w-[85vw] snap-center bg-[#080808] border border-white/5 p-8 flex flex-col justify-between h-[320px] bg-gradient-to-br ${item.color} relative overflow-hidden transform-gpu`}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{ borderRadius: '32px', borderTopColor: 'rgba(255,255,255,0.1)', willChange: 'transform' }}
          >
            {/* Shimmer Ambient Data Layer */}
            <motion.div 
              className="absolute inset-x-[-100%] inset-y-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]"
              animate={{ x: ['-20%', '120%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
            />
            
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/10 mb-8 z-10 relative shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              {item.icon}
            </div>
            
            <div className="z-10 relative">
              <h3 className="text-2xl font-bold mb-3 tracking-tight">{item.title}</h3>
              <p className="text-lg text-white/70 leading-snug">{item.description}</p>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-xl pointer-events-none" />
          </motion.div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbars::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default LiquidBentoMobile;
