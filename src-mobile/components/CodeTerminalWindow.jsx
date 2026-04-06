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

const CodeTerminalWindow = () => {
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
    <section className="py-24 px-6">
      <div className="text-center mb-14">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">Build Pipeline</span>
        <h2 className="text-3xl font-bold tracking-tight mb-2">From Zero to Deploy</h2>
        <p className="text-white/60">Watch the magic happen.</p>
      </div>

      <motion.div
        className="max-w-sm mx-auto rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 150, damping: 25 }}
      >
        {/* macOS Title Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="text-[10px] text-white/30 ml-2 font-mono">support-one — terminal</span>
        </div>

        {/* Terminal Body */}
        <div className="bg-[#0a0a0a] p-4 h-[380px] font-mono text-xs leading-relaxed overflow-hidden">
          <AnimatePresence>
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`mb-1 ${
                  line.type === 'cmd' ? 'text-white/90 font-bold' :
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
            className="inline-block w-2 h-4 bg-apple-blue"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CodeTerminalWindow;
