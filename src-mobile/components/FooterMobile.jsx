import React from 'react';
import { motion } from 'framer-motion';

const FooterMobile = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="w-full bg-black pt-20 pb-12 px-8 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-apple-blue/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-md mx-auto relative z-10 flex flex-col items-center">
        {/* Support One Logo and Branding */}
        <div className="flex items-center gap-3 mb-10">
          <img src={`${import.meta.env.BASE_URL}support-one-logo.png`} alt="S1" className="w-10 h-10 rounded-xl" />
          <div className="text-left">
            <h4 className="text-xl font-bold tracking-tight text-white">Support One</h4>
            <p className="text-[10px] text-white/30 uppercase font-black tracking-widest leading-none">Custom Software Studio</p>
          </div>
        </div>

        {/* Quick Links Menu */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-6 w-full mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] text-white/20 uppercase font-black tracking-widest mb-1">Company</span>
            <button onClick={() => handleScroll('home')} className="text-sm text-white/50 hover:text-white transition-colors text-left uppercase tracking-widest font-bold">Home</button>
            <button onClick={() => handleScroll('what-we-build')} className="text-sm text-white/50 hover:text-white transition-colors text-left uppercase tracking-widest font-bold">What We Build</button>
            <button onClick={() => handleScroll('industries')} className="text-sm text-white/50 hover:text-white transition-colors text-left uppercase tracking-widest font-bold">Industries</button>
          </div>
          <div className="flex flex-col gap-4 text-right">
            <span className="text-[10px] text-white/20 uppercase font-black tracking-widest mb-1 text-right">Connect</span>
            <button onClick={() => handleScroll('process')} className="text-sm text-white/50 hover:text-white transition-colors text-right uppercase tracking-widest font-bold">The Process</button>
            <button onClick={() => handleScroll('developer')} className="text-sm text-white/50 hover:text-white transition-colors text-right uppercase tracking-widest font-bold">The Builder</button>
            <a href="mailto:business.hemishvora@gmail.com" className="text-sm text-apple-blue transition-colors text-right uppercase tracking-widest font-black">Email Me</a>
          </div>
        </div>

        {/* Dividerline */}
        <div className="w-full h-px bg-white/5 mb-8" />

        {/* Legal and Copyright */}
        <div className="w-full text-center space-y-4">
          <p className="text-[10px] text-white/30 tracking-widest leading-loose">
            Built for extreme performance, ownership, and scale. <br />
            Hand-crafted in Mumbai, India.
          </p>
          <p className="text-[9px] text-white/10 uppercase tracking-[0.3em] font-black pt-4">
            © {currentYear} Support One. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
