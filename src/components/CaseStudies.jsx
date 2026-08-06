import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  { company: 'Retail Operations', metric: '100%', label: 'Automated Billing', color: 'from-green-500/20' },
  { company: 'Healthcare Clinic', metric: 'Custom', label: 'Patient Dashboards', color: 'from-blue-500/20' },
  { company: 'Logistics Pro', metric: '-40%', label: 'Admin Overhead', color: 'from-purple-500/20' }
];

const CaseStudies = () => {
  return (
    <section className="py-12 w-full overflow-hidden">
      <div className="px-6 mb-8 lg:mb-16 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-2">Proven Impact</h2>
        <p className="text-white/60 lg:text-xl">Solving specific operations, not generic ones.</p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory lg:snap-none lg:grid lg:grid-cols-3 hide-scrollbars px-6 lg:max-w-6xl lg:mx-auto gap-4 lg:gap-8 pb-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {caseStudies.map((study, i) => (
          <motion.div
            key={i}
            className={`min-w-[70vw] lg:min-w-0 snap-center lg:snap-align-none material-regular glass-edge p-6 lg:p-10 flex flex-col justify-end min-h-[220px] lg:min-h-[350px] bg-gradient-to-tr ${study.color} to-transparent relative`}
            whileTap={{ scale: 0.98 }}
            style={{ borderRadius: '32px' }}
          >
            <div className="absolute top-6 left-6 text-xl lg:text-2xl tracking-tight font-semibold text-white/50">
              {study.company}
            </div>
            
            <div>
              <div className="text-4xl lg:text-6xl font-black tracking-tighter text-white mb-2 shadow-sm">{study.metric}</div>
              <div className="text-sm lg:text-base font-semibold tracking-wider text-vibrant uppercase">{study.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
