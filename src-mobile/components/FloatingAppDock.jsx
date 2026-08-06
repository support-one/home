import React from 'react';
import { motion } from 'framer-motion';

const apps = [
  { name: 'Billing', color: '#0A84FF', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  )},
  { name: 'CRM', color: '#AF52DE', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )},
  { name: 'Analytics', color: '#FF9500', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  )},
  { name: 'Reports', color: '#34C759', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  )},
  { name: 'Inventory', color: '#FF3B30', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>
    </svg>
  )},
  { name: 'Payments', color: '#5AC8FA', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  )},
];

const FloatingAppDock = () => {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="text-center mb-14">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">App Ecosystem</span>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Your Apps. Your Rules.</h2>
        <p className="text-white/60">Every tool custom-built for your workflow.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full mx-auto">
        {apps.map((app, i) => (
          <motion.div
            key={app.name}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 200, damping: 20 }}
          >
            <motion.div
              className="w-[72px] h-[72px] rounded-[20px] flex items-center justify-center shadow-lg relative overflow-hidden transform-gpu"
              style={{ backgroundColor: app.color, willChange: 'transform' }}
              whileTap={{ scale: 0.85, rotate: -5 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ 
                y: { duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 },
              }}
            >
              {/* Gloss layer */}
              <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-[20px] pointer-events-none" />
              {app.icon}
            </motion.div>
            <span className="text-[11px] text-white/60 font-medium">{app.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FloatingAppDock;
