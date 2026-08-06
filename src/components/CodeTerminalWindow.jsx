import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const terminalLines = [
  { type: 'cmd', text: '$ supportone init --business "Sharma Textiles"' },
  { type: 'out', text: '✓ Analyzing business workflows...' },
  { type: 'out', text: '✓ Mapping: Inventory → Billing → CRM' },
  { type: 'cmd', text: '$ supportone build --platform native' },
  { type: 'out', text: '✓ Compiling iOS target (arm64)...' },
  { type: 'out', text: '✓ Compiling Android target (aarch64)...' },
  { type: 'out', text: '✓ Compiling Windows target (x86_64)...' },
  { type: 'success', text: '✓ BUILD SUCCESSFUL — 3 platforms ready' },
  { type: 'cmd', text: '$ supportone deploy --mode production' },
  { type: 'success', text: '✓ DEPLOYED at sharma-textiles.app' },
];

const CodeTerminalWindow = ({ hideHeader = false, className = "" }) => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= terminalLines.length) {
          return 0;
        }
        return prev + 1;
      });
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`w-full ${className}`}>
      {!hideHeader && (
        <div className="text-center mb-14 lg:mb-20 px-6">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">Build Pipeline</span>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-2">From Zero to Deploy</h2>
          <p className="text-white/60 lg:text-xl">Watch the magic happen.</p>
        </div>
      )}

      <motion.div
        className="w-full max-w-sm lg:max-w-full mx-auto rounded-[20px] lg:rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col lg:flex-row h-[420px] lg:h-full lg:min-h-[300px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 150, damping: 25 }}
      >
        {/* Desktop Sidebar Explorer */}
        <div className="hidden lg:flex w-[220px] bg-[#0c0c0c] border-r border-white/5 flex-col py-4">
           <div className="text-[10px] text-white/40 uppercase tracking-widest px-4 mb-4 font-bold">Explorer</div>
           <div className="flex flex-col text-xs font-mono text-white/60 space-y-1">
             <div className="px-4 py-1.5 hover:bg-white/5 cursor-pointer flex items-center gap-2">
               <span className="text-apple-blue text-[8px]">▶</span> src
             </div>
             <div className="px-4 py-1.5 hover:bg-white/5 cursor-pointer flex items-center gap-2">
               <span className="text-apple-blue text-[8px]">▼</span> scripts
             </div>
             <div className="px-4 py-1.5 bg-white/5 text-white cursor-pointer border-l-[3px] border-apple-blue ml-4 flex items-center gap-2">
               deploy.sh
             </div>
             <div className="px-4 py-1.5 hover:bg-white/5 cursor-pointer ml-4 flex items-center gap-2">
               build.config.js
             </div>
             <div className="px-4 py-1.5 hover:bg-white/5 cursor-pointer flex items-center gap-2">
               <span className="text-white/30 text-[8px]">▶</span> .github
             </div>
           </div>
        </div>

        <div className="flex-1 flex flex-col">
          {/* macOS Title Bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            <div className="flex-1 text-center pr-8">
              <span className="text-[10px] text-white/30 font-mono">deploy.sh — support-one</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="bg-[#0a0a0a] p-4 lg:p-6 flex-1 font-mono text-xs lg:text-sm xl:text-base leading-relaxed overflow-y-auto">
            <AnimatePresence>
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`mb-1.5 ${
                    line.type === 'cmd' ? 'text-white/90 font-bold mt-3' :
                    line.type === 'success' ? 'text-green-400 font-bold' :
                    'text-white/50'
                  }`}
                >
                  {line.text}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Blinking cursor */}
            <motion.span
              className="inline-block w-2.5 h-4 lg:h-5 bg-apple-blue ml-1 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CodeTerminalWindow;
