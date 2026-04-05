import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  { company: 'Retail Operations', metric: '100%', label: 'Automated Billing', color: 'from-green-500/20' },
  { company: 'Healthcare Clinic', metric: 'Custom', label: 'Patient Dashboards', color: 'from-blue-500/20' },
  { company: 'Logistics Pro', metric: '-40%', label: 'Admin Overhead', color: 'from-purple-500/20' }
];

const CaseStudiesMobile = () => {
  return (
    <section className="py-12 w-full overflow-hidden">
      <div className="px-6 mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Proven Impact</h2>
        <p className="text-white/60">Solving specific operations, not generic ones.</p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbars px-6 gap-4 pb-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {caseStudies.map((study, i) => (
          <motion.div
            key={i}
            className={`min-w-[70vw] snap-center material-regular glass-edge p-6 flex flex-col justify-end min-h-[220px] bg-gradient-to-tr ${study.color} to-transparent relative`}
            whileTap={{ scale: 0.98 }}
            style={{ borderRadius: '32px' }}
          >
            <div className="absolute top-6 left-6 text-xl tracking-tight font-semibold text-white/50">
              {study.company}
            </div>
            
            <div>
              <div className="text-4xl font-black tracking-tighter text-white mb-2 shadow-sm">{study.metric}</div>
              <div className="text-sm font-semibold tracking-wider text-vibrant uppercase">{study.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesMobile;
