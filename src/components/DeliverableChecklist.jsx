import React from 'react';
import { motion } from 'framer-motion';

const deliverables = [
  { text: 'Business Workflow Audit', delay: 0 },
  { text: 'UI/UX Design Prototype', delay: 0.3 },
  { text: 'Native App Development', delay: 0.6 },
  { text: 'Payment & API Integration', delay: 0.9 },
  { text: 'Testing & QA', delay: 1.2 },
  { text: 'Production Deployment', delay: 1.5 },
];

const checkPath = "M20 6L9 17l-5-5";

const DeliverableChecklist = ({ hideHeader = false, className = "" }) => {
  return (
    <div className={`w-full ${className}`}>
      {!hideHeader && (
        <div className="text-center mb-14 lg:mb-20 px-6">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">Deliverables</span>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-2">What You Get</h2>
          <p className="text-white/60 lg:text-xl">Every project. Every time.</p>
        </div>
      )}

      <div className="w-full space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
        {deliverables.map((item, i) => (
          <motion.div
            key={i}
            className="material-regular glare-edge p-4 flex items-center gap-4"
            style={{ borderRadius: '16px' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Animated SVG Checkmark */}
            <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
              <motion.svg 
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34C759" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              >
                <motion.path
                  d={checkPath}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.4, ease: 'easeOut' }}
                />
              </motion.svg>
            </div>

            <span className="text-sm lg:text-lg font-semibold text-white/80">{item.text}</span>

            {/* Status badge */}
            <motion.span 
              className="ml-auto text-[8px] uppercase tracking-widest text-green-400 font-bold bg-green-500/10 px-2 py-1 rounded-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.15 }}
            >
              Included
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DeliverableChecklist;
