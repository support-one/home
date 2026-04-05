import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Dr. Rajesh Mehta',
    role: 'Hospital Director',
    quote: 'Support One replaced 4 separate apps with one custom system. Our staff onboarded in 2 days.',
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Textile Business Owner',
    quote: 'The billing system they built paid for itself in the first month. Absolutely worth it.',
    stars: 5,
  },
  {
    name: 'Vikram Desai',
    role: 'Restaurant Chain CEO',
    quote: 'We went from pen-and-paper to a fully digital operation across all 12 locations.',
    stars: 5,
  },
];

const TestimonialCards = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="text-center mb-14 px-6">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">Client Trust</span>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Real Results</h2>
        <p className="text-white/60">Businesses that grew with us.</p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory pl-6 pr-6 gap-4 pb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="min-w-[85vw] snap-center material-thick glare-edge p-6 flex flex-col justify-between"
            style={{ borderRadius: '28px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.stars }).map((_, s) => (
                <motion.svg 
                  key={s} 
                  width="18" height="18" viewBox="0 0 24 24" fill="#FFD60A"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + s * 0.1, type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </motion.svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg text-white/80 leading-relaxed font-medium mb-8 flex-1">
              "{t.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-apple-blue/30 to-purple-500/30 border border-white/10 flex items-center justify-center text-sm font-bold text-white">
                {t.name[0]}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{t.name}</p>
                <p className="text-[11px] text-white/40">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbars::-webkit-scrollbar { display: none; }
      `}} />
    </section>
  );
};

export default TestimonialCards;
