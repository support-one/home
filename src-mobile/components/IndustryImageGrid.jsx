import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  { name: 'Healthcare', img: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Retail', img: 'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Manufacturing', img: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Hospitality', img: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Logistics', img: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Real Estate', img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const IndustryImageGrid = () => {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="text-center mb-14">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">Industry Coverage</span>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Built For Every Business</h2>
        <p className="text-white/60">Healthcare to Hospitality. We map it.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full mx-auto">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.name}
            className={`relative overflow-hidden group ${i === 0 || i === 5 ? 'col-span-2 h-[180px]' : 'h-[160px]'}`}
            style={{ borderRadius: '20px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 200, damping: 20 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={ind.img} 
              alt={ind.name}
              className="w-full h-full object-cover transition-transform duration-700 group-active:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-4 z-10">
              <span className="text-xs font-bold text-white tracking-wide">{ind.name}</span>
            </div>
            <div className="absolute top-3 right-3 z-10">
              <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(52,199,89,1)]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IndustryImageGrid;
