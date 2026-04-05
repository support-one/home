import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Terminal, Box, Globe, ChevronRight } from 'lucide-react';

export default function MagneticDock() {
  const [hovered, setHovered] = useState(null);

  const icons = [
    { id: 'top', icon: ArrowUp, label: "Top" },
    { id: 'stack', icon: Terminal, label: "Stack" },
    { id: 'cases', icon: Box, label: "Cases" },
    { id: 'contact', icon: Globe, label: "Initialize" }
  ];

  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center bg-black/60 backdrop-blur-xl border border-white/20 p-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", damping: 20 }}
    >
      {icons.map((item) => (
        <motion.button
          key={item.id}
          className="relative group p-3 mx-1 rounded-full text-white cursor-pointer"
          onHoverStart={() => setHovered(item.id)}
          onHoverEnd={() => setHovered(null)}
          whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            if(item.id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
            else if(item.id === 'contact') window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          }}
        >
          {hovered === item.id && (
            <motion.div 
              layoutId="dock-glow" 
              className="absolute inset-0 bg-cyan-400/20 rounded-full blur-[4px] -z-10"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <item.icon className={`w-5 h-5 transition-colors ${hovered === item.id ? 'text-cyan-400' : 'text-gray-400'}`} />
          
          {/* Tooltip */}
          {hovered === item.id && (
            <motion.div 
              className="absolute -top-12 left-1/2 -translate-x-1/2 text-xs font-bold tracking-widest uppercase bg-black text-white px-3 py-1 rounded border border-white/20 pointer-events-none whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {item.label}
            </motion.div>
          )}
        </motion.button>
      ))}
      <div className="w-[1px] h-6 bg-white/20 mx-2" />
      <button 
        className="flex items-center px-4 py-2 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full ml-1 hover:bg-cyan-400 transition-colors"
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
      >
        Engage <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </motion.div>
  );
}
