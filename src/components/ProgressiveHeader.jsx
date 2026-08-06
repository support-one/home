import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const menuItems = [
  { label: 'Home', target: 'home', index: '01' },
  { label: 'What We Build', target: 'what-we-build', index: '02' },
  { label: 'Industries', target: 'industries', index: '03' },
  { label: 'Our Process', target: 'process', index: '04' },
  { label: 'The Developer', target: 'developer', index: '05' },
];

const ProgressiveHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  
  const backdropBlur = useTransform(scrollY, [0, 80], ['blur(0px)', 'blur(24px)']);
  const backgroundColor = useTransform(scrollY, [0, 80], ['rgba(10,10,10,0)', 'rgba(10,10,10,0.65)']);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(m => m.target);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const scrollTo = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 400);
  };

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 w-full z-50 pt-safe"
        style={{ 
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
          backgroundColor: backgroundColor,
        }}
      >
        <div className="px-6 md:px-12 max-w-7xl mx-auto py-4 flex justify-between items-center relative">
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onClick={() => scrollTo('home')}
          >
            <img src={`${import.meta.env.BASE_URL}support-one-logo.png`} alt="Support One" className="w-8 h-8 rounded-lg" />
            <span className="text-lg font-bold tracking-tight text-white">Support One</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item) => (
              <button 
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className={`text-sm font-semibold tracking-tight transition-colors hover:text-white ${activeSection === item.target ? 'text-white' : 'text-white/40'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button 
              onClick={() => scrollTo('developer')}
              className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Start Build
            </button>
          </div>
          
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center relative z-[70]" 
            style={{ WebkitTapHighlightColor: 'transparent' }}
            whileTap={{ scale: 0.85 }}
          >
            <motion.div 
              className="absolute inset-0 rounded-full border border-apple-blue/40"
              animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute inset-0 rounded-full bg-white/5"
              animate={isOpen ? { backgroundColor: 'rgba(10,132,255,0.15)' } : { backgroundColor: 'rgba(255,255,255,0.05)' }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative w-[18px] h-[14px] flex flex-col justify-between items-center">
              <motion.span 
                className="block w-full h-[1.5px] rounded-full origin-center"
                animate={isOpen 
                  ? { rotate: 45, y: 6, width: '100%', backgroundColor: '#0A84FF' } 
                  : { rotate: 0, y: 0, width: '100%', backgroundColor: 'rgba(255,255,255,0.9)' }
                }
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.span 
                className="block h-[1.5px] rounded-full"
                animate={isOpen 
                  ? { opacity: 0, width: 0, backgroundColor: '#0A84FF' } 
                  : { opacity: 1, width: '60%', backgroundColor: 'rgba(255,255,255,0.5)' }
                }
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="block w-full h-[1.5px] rounded-full origin-center"
                animate={isOpen 
                  ? { rotate: -45, y: -6, width: '100%', backgroundColor: '#0A84FF' } 
                  : { rotate: 0, y: 0, width: '70%', backgroundColor: 'rgba(255,255,255,0.7)' }
                }
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>
          </motion.button>

          <motion.div 
            className="absolute bottom-0 left-0 w-full h-[0.5px] bg-white opacity-20"
            style={{ opacity: borderOpacity }}
          />
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[55]"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#080808]/98 border-l border-white/5 z-[60] flex flex-col p-8 pt-24"
              style={{ willChange: 'transform' }}
            >
              <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/5">
                <img src={`${import.meta.env.BASE_URL}support-one-logo.png`} alt="S1" className="w-12 h-12 rounded-xl" />
                <div>
                  <p className="text-lg font-bold text-white tracking-tight">Support One</p>
                  <p className="text-[10px] text-white/30 uppercase font-black tracking-widest">Custom Apps</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {menuItems.map((item, i) => {
                  const isActive = activeSection === item.target;
                  return (
                    <motion.button
                      key={item.label}
                      onClick={() => scrollTo(item.target)}
                      className="group flex items-center gap-4 py-4 px-4 rounded-2xl text-left w-full relative overflow-hidden active:bg-white/5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-apple-blue' : 'text-white/20'}`}>
                        {item.index}
                      </span>
                      <span className={`text-[17px] font-bold tracking-tight ${isActive ? 'text-white' : 'text-white/40'}`}>
                        {item.label}
                      </span>
                      {isActive && (
                        <motion.div 
                          layoutId="active-pill"
                          className="absolute left-0 w-1 h-6 bg-apple-blue rounded-full"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              <div className="mt-auto pt-6 border-t border-white/5">
                <motion.button
                  onClick={() => scrollTo('developer')}
                  className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase text-xs tracking-widest"
                  whileTap={{ scale: 0.95 }}
                >
                  Start A Build
                </motion.button>
                <p className="text-[8px] text-white/10 text-center mt-6 font-mono">v2.1 — Desktop Optimized</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProgressiveHeader;
