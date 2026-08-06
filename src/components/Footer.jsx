import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-white/5 relative overflow-hidden">
      {/* Subtle blue glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-apple-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 py-16 relative z-10">

        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          {/* Left: Branding */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}support-one-logo.png`}
              alt="Support One"
              className="w-10 h-10 rounded-2xl flex-shrink-0"
            />
            <div className="whitespace-nowrap">
              <h4 className="text-base font-bold tracking-tight text-white leading-tight">Support One</h4>
              <p className="text-[9px] text-white/30 uppercase font-bold tracking-wider">Custom Software Studio</p>
            </div>
          </div>

          {/* Center: Nav Links */}
          <nav className="flex flex-nowrap gap-x-6 lg:justify-center items-center">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Dashboard', id: 'dashboard' },
              { label: 'Ecosystem', id: 'ecosystem' },
              { label: 'Difference', id: 'difference' },
              { label: 'Platforms', id: 'multiplatform' },
              { label: 'Technology', id: 'technology' },
              { label: 'Developer', id: 'developer' },
            ].map(link => (
              <button
                key={link.id}
                onClick={() => {
                  const el = document.getElementById(link.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-[10px] text-white/40 hover:text-white transition-colors font-semibold tracking-wider uppercase whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: Contact */}
          <a
            href="mailto:business.hemishvora@gmail.com"
            className="text-xs font-bold text-apple-blue hover:text-white transition-colors tracking-widest uppercase whitespace-nowrap"
          >
            business.hemishvora@gmail.com
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 my-10" />

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-center lg:text-left">
          <p className="text-[10px] text-white/20 tracking-widest">
            Hand-crafted in Mumbai, India. Built for performance, ownership, and scale.
          </p>
          <p className="text-[10px] text-white/15 uppercase tracking-widest font-bold">
            © {currentYear} Support One. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
