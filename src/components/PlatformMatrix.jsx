import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, Smartphone, Monitor, Command } from 'lucide-react';

const platforms = [
  {
    id: "ios",
    title: "iOS",
    subtitle: "Apple-grade Polish.",
    desc: "Liquid-smooth gestures and uncompromising Swift architecture for the iPhone.",
    icon: Apple,
    color: "from-blue-500/20 to-purple-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: "android",
    title: "Android",
    subtitle: "Infinite Reach.",
    desc: "Bulletproof Kotlin engineering optimized flawlessly across the entire hardware spectrum.",
    icon: Smartphone,
    color: "from-green-500/20 to-emerald-500/20",
    border: "group-hover:border-green-500/50"
  },
  {
    id: "macos",
    title: "macOS",
    subtitle: "Desktop Supremacy.",
    desc: "Deep, system-level integrations that supercharge professional workflows on Mac.",
    icon: Command,
    color: "from-white/20 to-gray-500/20",
    border: "group-hover:border-white/50"
  },
  {
    id: "windows",
    title: "Windows",
    subtitle: "Uncompromising Power.",
    desc: "Enterprise-tier desktop solutions engineered to handle heavy business operations at scale.",
    icon: Monitor,
    color: "from-cyan-500/20 to-blue-500/20",
    border: "group-hover:border-cyan-500/50"
  }
];

export default function PlatformMatrix() {
  const [selectedId, setSelectedId] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="relative w-full min-h-screen py-32 px-6 flex flex-col items-center">
      
      <div className="max-w-6xl w-full z-10 flex flex-col items-center">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Native Dominance.
        </motion.h2>

        {/* Bento Grid using layoutId for expansion */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <motion.div
                layoutId={platform.id}
                key={platform.id}
                onClick={() => setSelectedId(platform.id)}
                variants={item}
                className={`group relative flex flex-col justify-end p-8 h-80 rounded-3xl bg-[#0a0a0a] border border-white/5 cursor-pointer overflow-hidden transition-colors duration-500 ${platform.border}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background Glass Glare effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl`} />
                <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity">
                  <Icon className="w-12 h-12 text-white" />
                </div>
                
                <motion.h3 className="text-2xl font-bold z-10">{platform.title}</motion.h3>
                <motion.p className="text-gray-400 mt-2 font-medium z-10">{platform.subtitle}</motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            {platforms.filter(p => p.id === selectedId).map(platform => {
              const Icon = platform.icon;
              return (
                <motion.div
                  layoutId={selectedId}
                  key="modal"
                  className="bg-[#111] border border-white/10 rounded-3xl w-full max-w-4xl min-h-[50vh] p-8 md:p-16 flex flex-col justify-center relative overflow-hidden"
                  onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
                >
                  <div className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br ${platform.color} opacity-20 blur-[100px] pointer-events-none`} />
                  
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                  >
                    Close
                  </button>

                  <Icon className="w-20 h-20 text-white mb-8" />
                  <motion.h2 className="text-4xl md:text-6xl font-bold mb-4">{platform.title}</motion.h2>
                  <motion.h3 className="text-2xl text-cyan-400 mb-6">{platform.subtitle}</motion.h3>
                  <motion.p 
                    className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {platform.desc}
                  </motion.p>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
