import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { step: '1. Audit', desc: 'We tear down your current generic software and map exact inefficiencies.' },
  { step: '2. Architect', desc: 'Custom native interfaces are designed avoiding standard templated clunkiness.' },
  { step: '3. Engineering', desc: 'Built strictly around your business workflows.' },
  { step: '4. Deployment', desc: 'Seamless rollout across desktop and mobile ecosystems.' }
];

const ProcessTimeline = ({ hideHeader = false, isDesktop = false, className = "" }) => {
  return (
    <div className={`w-full relative ${className}`}>
      {!hideHeader && (
        <div className="mb-12 lg:mb-20 text-center px-6">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-2">How We Build</h2>
          <p className="text-white/60 lg:text-xl">A bespoke process for custom software.</p>
        </div>
      )}

      <div className="relative border-l lg:border-l-0 lg:border-t border-white/20 ml-6 lg:ml-0 lg:mt-16 space-y-12 lg:space-y-0 pb-8 lg:pb-0 lg:flex lg:flex-row lg:justify-between w-full mx-auto">
        {steps.map((item, index) => {
          return (
            <motion.div 
              key={index} 
              className="relative pl-8 lg:pl-0 lg:pt-8 lg:w-1/4 lg:px-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Mobile Timeline dot */}
              <div className="lg:hidden absolute top-1 -left-[9px] w-4 h-4 rounded-full bg-black border-2 border-apple-blue shadow-[0_0_10px_rgba(10,132,255,0.8)]" />
              
              {/* Desktop Timeline dot */}
              <div className="hidden lg:flex absolute -top-[9px] left-0 w-full justify-center">
                <div className="w-4 h-4 rounded-full bg-black border-2 border-apple-blue shadow-[0_0_10px_rgba(10,132,255,0.8)]" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-white lg:text-center">{item.step}</h3>
              <p className="text-white/60 leading-relaxed text-sm lg:text-base bg-white/5 p-4 lg:p-6 rounded-2xl border border-white/10 glass-edge lg:text-center">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessTimeline;
