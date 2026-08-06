import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const devices = [
  {
    name: 'iPhone',
    mobileFrame: 'w-[180px] h-[360px] rounded-[36px] border-[5px]',
    desktopFrame: 'w-[260px] h-[540px] rounded-[48px] border-[10px]',
    desktopPos: 'left-[2%] lg:left-8 top-[60px] z-20',
    notch: true,
    notchWidth: 'w-[90px] lg:w-[120px]',
    screens: [
      { title: 'Billing Dashboard', color: '#0A84FF' },
      { title: 'CRM Overview', color: '#AF52DE' },
    ],
  },
  {
    name: 'MacBook',
    mobileFrame: 'w-[320px] h-[220px] rounded-[12px] border-[4px]',
    desktopFrame: 'w-[860px] h-[540px] rounded-[24px] border-[12px] lg:border-b-[32px]',
    desktopPos: 'left-1/2 -translate-x-1/2 top-0 z-10',
    notch: false,
    screens: [
      { title: 'Analytics Panel', color: '#34C759' },
      { title: 'Inventory Manager', color: '#FF9500' },
    ],
  },
  {
    name: 'iPad',
    mobileFrame: 'w-[240px] h-[340px] rounded-[24px] border-[5px]',
    desktopFrame: 'w-[400px] h-[500px] rounded-[32px] border-[12px]',
    desktopPos: 'right-[2%] lg:right-8 top-[80px] z-20',
    notch: false,
    screens: [
      { title: 'Report Generator', color: '#5AC8FA' },
      { title: 'Order Tracker', color: '#FF3B30' },
    ],
  },
];

const ScreenContent = ({ screen }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center p-6" style={{ background: `radial-gradient(circle at center, ${screen.color}20, transparent)` }}>
    <motion.div 
      className="w-12 h-12 lg:w-16 lg:h-16 rounded-[14px] lg:rounded-2xl mb-4 flex items-center justify-center shadow-lg" 
      style={{ backgroundColor: screen.color + '40' }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="w-4 h-4 lg:w-6 lg:h-6 rounded-full" style={{ backgroundColor: screen.color }} />
    </motion.div>
    <span className="text-xs lg:text-base font-bold text-white/80 text-center">{screen.title}</span>
    <span className="text-[9px] lg:text-[11px] text-white/30 mt-1 uppercase tracking-widest">Support One</span>
    
    <div className="mt-6 space-y-3 w-full px-4 lg:px-8">
      {[0.8, 0.6, 0.7].map((w, i) => (
        <div key={i} className="h-2 lg:h-3 bg-white/10 rounded-full overflow-hidden">
           <motion.div 
             className="h-full rounded-full" 
             style={{ backgroundColor: screen.color, opacity: 0.3 }}
             animate={{ width: ['0%', `${w * 100}%`] }}
             transition={{ duration: 1, delay: i * 0.1 }}
           />
        </div>
      ))}
    </div>
  </div>
);

const DeviceFrameCarousel = () => {
  const [activeDevice, setActiveDevice] = useState(0);
  const [activeScreen, setActiveScreen] = useState(0);

  // Screen cycler
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreen(prev => {
        const maxScreens = devices[activeDevice].screens.length;
        if (prev + 1 >= maxScreens) {
          // If on mobile, cycle device. If on desktop, cycle screens for ALL devices simultaneously? 
          // Actually, let's just cycle the screen index. Desktop shows all 3 devices simultaneously.
          return 0; // Just loop the screen index globally
        }
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [activeDevice]);

  // Mobile Device Cycler (only matters for mobile view)
  useEffect(() => {
    const mobileTimer = setInterval(() => {
      setActiveDevice(d => (d + 1) % devices.length);
    }, 8000);
    return () => clearInterval(mobileTimer);
  }, []);

  const mobileDevice = devices[activeDevice];
  const screenIdx = activeScreen % 2; // Safeguard if arrays are different lengths

  return (
    <section className="py-20 px-6 lg:px-0 overflow-hidden">
      <div className="text-center mb-14 lg:mb-24">
        <span className="text-[10px] lg:text-sm uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">Multi-Platform</span>
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-2">One Codebase. Every Screen.</h2>
        <p className="text-white/60 lg:text-xl">Phone. Tablet. Desktop.</p>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP VIEW: Massive Overlapping 3D Layout               */}
      {/* ========================================================= */}
      <div className="hidden lg:block relative max-w-[1400px] mx-auto h-[650px] perspective-[2000px]">
        {devices.map((d, i) => (
          <div 
            key={d.name} 
            className={`absolute ${d.desktopPos} ${d.desktopFrame} border-[#2a2a2a] bg-black overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out hover:z-40 hover:scale-[1.03] hover:-translate-y-4`}
          >
            {d.notch && (
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 ${d.notchWidth} h-[22px] lg:h-[30px] bg-[#111] rounded-b-[14px] lg:rounded-b-[20px] z-30`} />
            )}
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`${i}-${screenIdx}`}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ScreenContent screen={d.screens[screenIdx]} />
              </motion.div>
            </AnimatePresence>

            {d.notch && (
              <div className="absolute bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 w-[80px] lg:w-[120px] h-[3px] lg:h-[5px] bg-white/30 rounded-full z-20" />
            )}
          </div>
        ))}
      </div>

      {/* ========================================================= */}
      {/* MOBILE VIEW: 3D Carousel                                  */}
      {/* ========================================================= */}
      <div className="flex lg:hidden flex-col items-center">
        <div className="h-[400px] flex items-center justify-center relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDevice}
              className={`${mobileDevice.mobileFrame} border-[#2a2a2a] bg-black relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9)]`}
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              transition={{ type: 'spring', stiffness: 150, damping: 25 }}
            >
              {mobileDevice.notch && (
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 ${mobileDevice.notchWidth} h-[22px] bg-black rounded-b-[14px] z-20`} />
              )}
  
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeDevice}-${screenIdx}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ScreenContent screen={mobileDevice.screens[screenIdx]} />
                </motion.div>
              </AnimatePresence>
  
              {mobileDevice.notch && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80px] h-[3px] bg-white/30 rounded-full z-20" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-4 mt-8">
          {devices.map((d, i) => (
            <button
              key={d.name}
              onClick={() => { setActiveDevice(i); setActiveScreen(0); }}
              className="flex flex-col items-center gap-1.5"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <motion.div
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activeDevice ? 'bg-apple-blue shadow-[0_0_10px_rgba(10,132,255,1)]' : 'bg-white/20'}`}
                animate={{ scale: i === activeDevice ? 1.3 : 1 }}
              />
              <span className={`text-[9px] font-bold uppercase tracking-widest ${i === activeDevice ? 'text-white/70' : 'text-white/30'}`}>
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
