import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { step: '1. Audit', desc: 'We tear down your current generic software and map exact inefficiencies.' },
  { step: '2. Architect', desc: 'Custom native interfaces are designed avoiding standard templated clunkiness.' },
  { step: '3. Engineering', desc: 'Built strictly around your business workflows.' },
  { step: '4. Deployment', desc: 'Seamless rollout across desktop and mobile ecosystems.' }
];

const ProcessTimelineMobile = () => {
  const { scrollYProgress } = useScroll();

  return (
    <section className="py-16 px-6 relative">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">How We Build</h2>
        <p className="text-white/60">A bespoke process for custom software.</p>
      </div>

      <div className="relative border-l border-white/20 ml-4 space-y-12 pb-8">
        {steps.map((item, index) => {
          return (
            <motion.div 
              key={index} 
              className="relative pl-8 transform-gpu"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 150, damping: 25 }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Timeline dot */}
              <div className="absolute top-1 -left-[9px] w-4 h-4 rounded-full bg-black border-2 border-apple-blue shadow-[0_0_8px_rgba(10,132,255,0.4)] transform-gpu" />
              
              <h3 className="text-xl font-bold tracking-tight mb-2 text-white">{item.step}</h3>
              <p className="text-white/60 leading-relaxed text-sm bg-[#080808] p-4 rounded-2xl border border-white/5 transform-gpu">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessTimelineMobile;
