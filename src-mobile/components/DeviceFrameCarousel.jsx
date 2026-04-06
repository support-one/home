import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const devices = [
  {
    name: 'iPhone',
    frame: 'w-[180px] h-[360px] rounded-[36px] border-[5px]',
    notch: true,
    screens: [
      { title: 'Billing Dashboard', color: '#0A84FF' },
      { title: 'CRM Overview', color: '#AF52DE' },
    ],
  },
  {
    name: 'MacBook',
    frame: 'w-[280px] h-[180px] rounded-[12px] border-[4px]',
    notch: false,
    screens: [
      { title: 'Analytics Panel', color: '#34C759' },
      { title: 'Inventory Manager', color: '#FF9500' },
    ],
  },
  {
    name: 'iPad',
    frame: 'w-[240px] h-[320px] rounded-[24px] border-[5px]',
    notch: false,
    screens: [
      { title: 'Report Generator', color: '#5AC8FA' },
      { title: 'Order Tracker', color: '#FF3B30' },
    ],
  },
];

const DeviceFrameCarousel = () => {
  const [activeDevice, setActiveDevice] = useState(0);
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreen(prev => {
        const maxScreens = devices[activeDevice].screens.length;
        if (prev + 1 >= maxScreens) {
          setActiveDevice(d => (d + 1) % devices.length);
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [activeDevice]);

  const device = devices[activeDevice];
  const screen = device.screens[activeScreen];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="text-center mb-14">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">Multi-Platform</span>
        <h2 className="text-3xl font-bold tracking-tight mb-2">One Codebase. Every Screen.</h2>
        <p className="text-white/60">Phone. Tablet. Desktop.</p>
      </div>

      <div className="flex flex-col items-center">
        {/* Fixed height container prevents layout shift across different device sizes */}
        <div className="h-[380px] flex items-center justify-center relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDevice}
              className={`${device.frame} border-[#2a2a2a] bg-black relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9)]`}
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              transition={{ type: 'spring', stiffness: 150, damping: 25 }}
            >
              {/* Notch for iPhone */}
              {device.notch && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-black rounded-b-[14px] z-20" />
              )}
  
              {/* Screen content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeDevice}-${activeScreen}`}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6"
                  style={{ background: `radial-gradient(circle at center, ${screen.color}20, transparent)` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="w-12 h-12 rounded-[14px] mb-4 flex items-center justify-center shadow-lg transform-gpu"
                    style={{ backgroundColor: screen.color + '40', willChange: 'transform' }}
                  >
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: screen.color }} />
                  </div>
                  <span className="text-xs font-bold text-white/80 text-center">{screen.title}</span>
                  <span className="text-[9px] text-white/30 mt-1">Support One</span>
                  
                  {/* Fake UI lines */}
                  <div className="mt-4 space-y-2 w-full px-4">
                    {[0.8, 0.6, 0.7, 0.5].map((w, i) => (
                      <motion.div
                        key={i}
                        className="h-2 bg-white/10 rounded-full transform-gpu origin-left"
                        style={{ width: `${w * 100}%`, willChange: 'transform' }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
  
              {/* Home indicator */}
              {device.notch && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80px] h-[3px] bg-white/30 rounded-full z-20" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Device selector dots */}
        <div className="flex gap-3 mt-8">
          {devices.map((d, i) => (
            <button
              key={d.name}
              onClick={() => { setActiveDevice(i); setActiveScreen(0); }}
              className="flex flex-col items-center gap-1"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <motion.div
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activeDevice ? 'bg-apple-blue shadow-[0_0_10px_rgba(10,132,255,1)]' : 'bg-white/20'}`}
                animate={{ scale: i === activeDevice ? 1.3 : 1 }}
              />
              <span className={`text-[8px] font-bold uppercase tracking-wider ${i === activeDevice ? 'text-white/70' : 'text-white/30'}`}>
                {d.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeviceFrameCarousel;
