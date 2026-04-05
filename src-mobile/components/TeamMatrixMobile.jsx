import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const profiles = [
  { role: 'Systems Architect', detail: 'Maps existing bloated software workflows.' },
  { role: 'Native Engineer', detail: 'Builds from scratch without templates.' },
  { role: 'UI/UX Designer', detail: 'Creates frictionless business interfaces.' }
];

const TeamMatrixMobile = () => {
  return (
    <section className="py-16 px-6 overflow-hidden">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Who Builds It</h2>
        <p className="text-white/60">A dedicated team mapping your exact needs.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
        {profiles.map((p, i) => (
          <motion.div
            key={i}
            className="material-thin glass-edge p-6 rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-apple-blue/20 flex items-center justify-center border border-apple-blue/50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="font-bold text-lg">{p.role}</h3>
            </div>
            <p className="text-white/60 text-sm">{p.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamMatrixMobile;
