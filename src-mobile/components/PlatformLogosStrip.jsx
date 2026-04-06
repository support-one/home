import React from 'react';
import { motion } from 'framer-motion';

const platforms = [
  { name: 'Apple', svg: <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> },
  { name: 'Android', svg: <svg viewBox="0 0 24 24" fill="#34C759" className="w-6 h-6"><path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.27-.86-.31-.16-.69-.04-.86.27l-1.87 3.23C14.87 8.34 13.47 8 12 8c-1.47 0-2.87.34-4.44.94L5.69 5.71c-.16-.31-.54-.43-.86-.27-.31.16-.43.55-.27.86l1.84 3.18C3.67 10.91 1.82 13.53 1.5 16.5h21c-.32-2.97-2.17-5.59-4.9-7.02M8.5 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m7 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"/></svg> },
  { name: 'Windows', svg: <svg viewBox="0 0 24 24" fill="#0A84FF" className="w-6 h-6"><path d="M3 5.548l7.207-1.003v6.924H3V5.548zm0 12.904l7.207 1.003V12.73H3v5.722zM11.207 4.39L22 3v8.469h-10.793V4.39zm0 15.22L22 21V12.73H11.207v6.88z"/></svg> },
  { name: 'macOS', svg: <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6"><path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm4 16h8m-4-2v2" stroke="white" fill="none" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { name: 'React', svg: <svg viewBox="0 0 24 24" fill="#5AC8FA" className="w-6 h-6"><circle cx="12" cy="12" r="2.05"/><path d="M12 21.5C6.75 21.5 2.5 17.25 2.5 12S6.75 2.5 12 2.5 21.5 6.75 21.5 12 17.25 21.5 12 21.5z" fill="none" stroke="#5AC8FA" strokeWidth="1"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#5AC8FA" strokeWidth="1" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#5AC8FA" strokeWidth="1" transform="rotate(-30 12 12)"/></svg> },
  { name: 'Node.js', svg: <svg viewBox="0 0 24 24" fill="#34C759" className="w-6 h-6"><path d="M12 2l9.2 5.3v10.4L12 23l-9.2-5.3V7.3z" fill="none" stroke="#34C759" strokeWidth="1.5"/><text x="8" y="15" fontSize="7" fill="#34C759" fontWeight="bold">JS</text></svg> },
  { name: 'Flutter', svg: <svg viewBox="0 0 24 24" fill="#5AC8FA" className="w-6 h-6"><path d="M14.314 0L2.3 12L6 15.7L21 0H14.314ZM12.5 24L24 12L20.3 8.3L7 21.6L12.5 24ZM1 12L5 16L1 20L0 19L3 16L0 13L1 12Z"/></svg> },
  { name: 'Next.js', svg: <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.12 15.545l-4.595-5.903V16H11V8.5h1.5l4.312 5.567V8.5h1.308v7.045z"/></svg> },
  { name: 'Tailwind', svg: <svg viewBox="0 0 24 24" fill="#38BDF8" className="w-6 h-6"><path d="M12 6.036c-2.667 0-4 1.333-4 4 0 2.667 1.333 4 4 4 2.667 0 4-1.333 4-4 0-2.667-1.333-4-4-4zm0 10c-2.667 0-4 1.333-4 4 0 2.667 1.333 4 4 4 2.667 0 4-1.333 4-4 0-2.667-1.333-4-4-4z"/></svg> },
  { name: 'Firebase', svg: <svg viewBox="0 0 24 24" fill="#FFCA28" className="w-6 h-6"><path d="M3.89 15.67L4 15.56V4.28a1 1 0 011.63-.82L8 5.34l5.76-11.23a1 1 0 011.81.04l8.36 17.15a1 1 0 01-.93 1.51H1.01a1 1 0 01-.93-1.51l3.81-7.64z"/></svg> },
  { name: 'MongoDB', svg: <svg viewBox="0 0 24 24" fill="#47A248" className="w-6 h-6"><path d="M12 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zM12 4.5l-2.121 2.121C9.336 7.164 9 7.919 9 8.747c0 1.657 1.343 3 3 3s3-1.343 3-3c0-.828-.336-1.583-.879-2.121L12 4.5zM12 24c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"/></svg> },
  { name: 'TypeScript', svg: <svg viewBox="0 0 24 24" fill="#3178C6" className="w-6 h-6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM20.25 18.75h-3.375c-.623 0-1.125-.502-1.125-1.125V13.5h4.5v4.125c0 .623-.502 1.125-1.125 1.125zM15 11.25H10.5V6.75h3.375c.623 0 1.125.502 1.125 1.125v3.375z"/></svg> },
];

const doubled = [...platforms, ...platforms];

const PlatformLogosStrip = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="text-center mb-10 px-6">
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-2">Powered by React, Node.js, Flutter</p>
        <h2 className="text-lg font-bold text-white tracking-widest uppercase">Multi-Platform Support</h2>
        <p className="text-[9px] text-white/40 mt-2 tracking-widest">macOS • WINDOWS • iOS • ANDROID & MORE</p>
      </div>
      
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-12 items-center w-max"
          animate={{ x: [0, -100 * platforms.length] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              {p.svg}
              <span className="text-[9px] uppercase tracking-[0.15em] text-white/40 font-bold">{p.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformLogosStrip;
