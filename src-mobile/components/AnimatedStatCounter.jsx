import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 240, suffix: '+', label: 'Businesses Served', color: '#0A84FF' },
  { value: 99.9, suffix: '%', label: 'Uptime Guaranteed', color: '#34C759' },
  { value: 4, suffix: ' Platforms', label: 'Native Coverage', color: '#AF52DE' },
  { value: 48, suffix: 'hr', label: 'Avg Delivery', color: '#FF9500' },
];

const Counter = ({ target, suffix, color, inView }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const isDecimal = target % 1 !== 0;
    const duration = 2000;
    const step = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="text-4xl font-black tracking-tighter" style={{ color }}>
      {count}{suffix}
    </span>
  );
};

const AnimatedStatCounter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="text-center mb-14">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">By The Numbers</span>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Proven Scale</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="material-thick glare-edge p-5 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
            style={{ borderRadius: '24px' }}
          >
            <Counter target={stat.value} suffix={stat.suffix} color={stat.color} inView={inView} />
            <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold mt-2">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedStatCounter;
