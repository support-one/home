import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ from, to, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function SmallBusinessROI() {
  return (
    <section className="relative w-full py-32 px-6 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Don't adapt your business to software.</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Off-the-shelf SaaS products force you to change how you work to fit their templates. We study your localized business operations, uncover friction points, and hand-tool the exact digital solution you need. 
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8">
          <motion.div 
            className="p-8 border border-white/5 bg-[#111] rounded-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, borderColor: "rgba(0,255,204,0.3)" }}
          >
            <h3 className="text-5xl md:text-6xl font-black text-cyan-400 mb-2">
              <Counter from={0} to={100} suffix="%" />
            </h3>
            <p className="text-gray-400 font-medium">Tailored Architecture</p>
          </motion.div>

          <motion.div 
            className="p-8 border border-white/5 bg-[#111] rounded-3xl flex flex-col justify-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, borderColor: "rgba(0,255,204,0.3)" }}
          >
            <h3 className="text-5xl md:text-6xl font-black text-white mb-2">
              <Counter from={100} to={0} />
            </h3>
            <p className="text-gray-400 font-medium">Compromises Made</p>
          </motion.div>

          <motion.div 
            className="p-8 border border-white/5 bg-[#111] rounded-3xl col-span-2 relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl translate-x-[-100%] group-hover:translate-x-[100%]" />
            <h3 className="text-5xl md:text-6xl font-black text-white mb-2">
              <Counter from={0} to={120} suffix="Hz" />
            </h3>
            <p className="text-gray-400 font-medium">Silky Native Rendering</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
