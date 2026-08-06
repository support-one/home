import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Card Component for Perfect Consistency ---
const BentoCard = ({ className, children, colSpan }) => (
  <div className={`bg-[#0a0a0a] border border-white/10 rounded-[28px] overflow-hidden relative group transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col ${className} ${colSpan}`}>
    {children}
  </div>
);

const DesktopCommandCenter = () => {
  // Terminal Logic
  const terminalLines = [
    { type: 'cmd', text: '$ supportone init --business "Sharma Textiles"' },
    { type: 'out', text: '✓ Analyzing workflows...' },
    { type: 'cmd', text: '$ supportone build --platform native' },
    { type: 'success', text: '✓ 3 platforms ready' },
  ];
  const [visibleLines, setVisibleLines] = useState(0);

  // Decoder Logic
  const customCodes = [
    'engine.build(customWorkflow);',
    'nativePerformance.enable(true);',
    'business.integrate([Payments, CRM]);'
  ];
  const [isDecoded, setIsDecoded] = useState(false);
  
  useEffect(() => {
    const tTimer = setInterval(() => {
      setVisibleLines(prev => (prev >= terminalLines.length ? 0 : prev + 1));
    }, 1200);
    const dTimer = setInterval(() => setIsDecoded(prev => !prev), 2500);
    return () => { clearInterval(tTimer); clearInterval(dTimer); };
  }, []);

  return (
    <section className="w-full min-h-screen py-20 px-6 lg:px-8 flex flex-col justify-center max-w-[1600px] mx-auto">
      <div className="mb-12">
        <span className="text-xs font-bold tracking-widest text-apple-blue uppercase mb-4 block">Command Center</span>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">Everything, Everywhere.</h2>
        <p className="text-white/50 text-lg max-w-2xl">
          A unified view of your entire technical stack. Native performance, bespoke business logic, and multi-platform reach.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[750px]">
        
        {/* Cell 1: Billing (3 cols, 1 row) */}
        <BentoCard colSpan="lg:col-span-3 lg:row-span-1" className="p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 mb-auto relative z-10">
            <span className="text-blue-400 font-bold">$</span>
          </div>
          <div className="relative z-10 mt-6">
            <h3 className="text-xl font-bold mb-2 text-white">Billing & ERPs</h3>
            <p className="text-sm text-white/50">Dashboards built just for your workflow.</p>
          </div>
        </BentoCard>

        {/* Cell 2: Mobile Apps (3 cols, 1 row) */}
        <BentoCard colSpan="lg:col-span-3 lg:row-span-1" className="p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none" />
          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 mb-auto relative z-10">
             <div className="w-3 h-5 rounded-sm border-2 border-green-400" />
          </div>
          <div className="relative z-10 mt-6">
            <h3 className="text-xl font-bold mb-2 text-white">Mobile Apps</h3>
            <p className="text-sm text-white/50">Direct to consumer mobile apps.</p>
          </div>
        </BentoCard>

        {/* Cell 3: Terminal (6 cols, 2 rows) */}
        <BentoCard colSpan="lg:col-span-6 lg:row-span-2" className="bg-[#050505]">
          {/* macOS Title Bar */}
          <div className="flex items-center gap-2 px-6 py-4 bg-[#111] border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            <div className="flex-1 text-center pr-10">
              <span className="text-xs text-white/30 font-mono">support-one — deploy.sh</span>
            </div>
          </div>
          <div className="flex flex-1 overflow-hidden">
            <div className="hidden lg:flex w-[180px] bg-[#0c0c0c] border-r border-white/5 flex-col py-6">
               <div className="text-[10px] text-white/30 uppercase tracking-widest px-6 mb-4 font-bold">Explorer</div>
               <div className="flex flex-col text-xs font-mono text-white/50 space-y-2">
                 <div className="px-6 py-1 cursor-pointer flex items-center gap-2"><span className="text-apple-blue text-[8px]">▶</span> src</div>
                 <div className="px-6 py-1 bg-white/5 text-white border-l-[2px] border-apple-blue ml-4 flex items-center gap-2">deploy.sh</div>
                 <div className="px-6 py-1 cursor-pointer ml-4 flex items-center gap-2">build.js</div>
               </div>
            </div>
            <div className="flex-1 p-6 font-mono text-sm leading-relaxed overflow-hidden bg-[#030303]">
              <AnimatePresence>
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                    className={`mb-2 ${line.type === 'cmd' ? 'text-white mt-4 font-bold' : line.type === 'success' ? 'text-green-400' : 'text-white/40'}`}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </AnimatePresence>
              <motion.span className="inline-block w-2.5 h-4 bg-apple-blue mt-2 align-middle" animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
            </div>
          </div>
        </BentoCard>

        {/* Cell 4: Dashboards (6 cols, 1 row) */}
        <BentoCard colSpan="lg:col-span-6 lg:row-span-1" className="p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />
          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 mb-auto relative z-10">
             <div className="w-4 h-4 rounded-[4px] border-2 border-purple-400 grid grid-cols-2 gap-0.5 p-0.5"><div className="bg-purple-400 rounded-[1px]"/><div className="bg-purple-400 rounded-[1px]"/><div className="bg-purple-400 rounded-[1px]"/><div className="bg-purple-400 rounded-[1px]"/></div>
          </div>
          <div className="relative z-10 mt-6">
            <h3 className="text-xl font-bold mb-2 text-white">Internal Dashboards</h3>
            <p className="text-sm text-white/50">Frictionless UX. Tools your team actually wants to use.</p>
          </div>
        </BentoCard>

        {/* Cell 5: Hardware (6 cols, 1 row) */}
        <BentoCard colSpan="lg:col-span-6 lg:row-span-1" className="p-8 flex flex-row items-center justify-between">
          <div>
             <h3 className="text-xl font-bold mb-2 text-white">Hardware Telemetry</h3>
             <p className="text-sm text-white/50 max-w-[200px]">Native performance across iOS, Android, Mac, and Windows.</p>
          </div>
          <div className="flex gap-4">
             {['Mobile', 'Desktop', 'Systems'].map((hw, i) => (
                <div key={hw} className="w-20 h-20 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-white/20 transition-colors">
                   <div className={`absolute top-0 right-0 w-10 h-10 rounded-full blur-[15px] opacity-20 ${i===0?'bg-blue-500':i===1?'bg-purple-500':'bg-green-500'}`} />
                   <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider">{hw}</span>
                </div>
             ))}
          </div>
        </BentoCard>

        {/* Cell 6: Decoder (6 cols, 1 row) */}
        <BentoCard colSpan="lg:col-span-6 lg:row-span-1" className="p-8 flex flex-row items-center justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-white">No Templates</h3>
            <p className="text-sm text-white/50 mb-4">Just code written for your exact needs.</p>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isDecoded ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                {isDecoded ? 'Logic Validated' : 'Parsing Bloat...'}
              </span>
            </div>
          </div>
          <div className="w-[280px] h-[100px] bg-[#050505] rounded-xl border border-white/10 p-4 font-mono text-[10px] flex items-center shadow-inner">
            <AnimatePresence mode="wait">
               <motion.div key={isDecoded ? 'custom' : 'generic'} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className={isDecoded ? "text-green-400" : "text-red-400 opacity-60 line-through"}>
                 {isDecoded ? customCodes[0] : '<Template name="SaaS" />'}
               </motion.div>
            </AnimatePresence>
          </div>
        </BentoCard>

      </div>
    </section>
  );
};

export default DesktopCommandCenter;
