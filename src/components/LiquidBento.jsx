import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Shield, Zap, Lock } from 'lucide-react';

function GlassCard({ title, desc, icon: Icon, span }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      className={`relative group bg-white/[0.02] border border-white/10 rounded-3xl p-8 overflow-hidden backdrop-blur-xl transition-colors hover:border-white/20 ${span}`}
      onMouseMove={handleMouseMove}
    >
      {/* Refractive Spotlight underneath the card */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 255, 204, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 mix-blend-overlay"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.8),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <Icon className="w-10 h-10 text-cyan-400 mb-6 drop-shadow-[0_0_15px_rgba(0,255,204,0.5)]" />
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function LiquidBento() {
  return (
    <section className="w-full py-32 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Uncompromising Quality.</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Discover the foundational pillars of our custom software. We build systems designed to scale with your ambition, completely free from the limits of off-the-shelf templates.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full">
        <GlassCard 
          span="md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-0 flex flex-col justify-end" 
          title="100% Data Ownership" 
          desc="Your custom software stores data on dedicated private servers that you exclusively control. No shared databases with competitors. No slow-downs from crowded networks. You own the system unconditionally." 
          icon={Lock} 
        />
        <GlassCard 
          span="md:col-span-1 min-h-[250px] md:h-auto" 
          title="Iron-Clad Security" 
          desc="Your business isn't standard, and neither is your safety. We implement top-tier protective measures tailored precisely to your industry compliance needs." 
          icon={Shield} 
        />
        <GlassCard 
          span="md:col-span-1 min-h-[250px] md:h-auto" 
          title="Lightning Fast" 
          desc="No bloatware. No unnecessary features weighing you down. Every line of code is optimized strictly for your specific daily workflow, resulting in blazing fast performance." 
          icon={Zap} 
        />
      </div>
    </section>
  );
}
