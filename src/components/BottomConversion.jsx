import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, X } from 'lucide-react';

const BottomConversion = () => {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('open-lets-talk', handler);
    return () => window.removeEventListener('open-lets-talk', handler);
  }, []);

  return (
    <section className="py-8 px-6 pb-16 flex justify-center w-full">
      
      <motion.button
        onClick={() => setIsOpen(true)}
        className="w-full max-w-sm lg:max-w-4xl material-regular glass-edge py-5 lg:py-8 px-6 lg:px-12 flex justify-between items-center text-lg lg:text-4xl font-semibold active:scale-[0.98] transition-transform"
        style={{ borderRadius: '24px', WebkitTapHighlightColor: 'transparent' }}
      >
        <span className="text-vibrant tracking-tight">Let's Talk.</span>
        <div className="w-10 h-10 rounded-full bg-apple-blue flex items-center justify-center">
          <ChevronUp size={20} className="text-white" />
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />

            <div className="fixed inset-0 pointer-events-none z-[70] flex items-end justify-center lg:items-center">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                drag="y"
                dragConstraints={{ top: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.y > 100 || velocity.y > 500) {
                    setIsOpen(false);
                  }
                }}
                className="w-full lg:w-[600px] pointer-events-auto material-thick pt-4 pb-safe lg:pb-8 px-6 lg:px-10 rounded-t-[40px] lg:rounded-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/10 lg:border"
              >
              <motion.div 
                className="w-12 h-1.5 bg-white/30 rounded-full mx-auto mb-8 cursor-pointer" 
                whileTap={{ scaleY: 1.5, backgroundColor: 'rgba(255,255,255,0.7)' }}
              />
              
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">Tell us what you need built.</h3>
                  <p className="text-white/60 text-sm mt-1">Get a custom estimate within 24 hours.</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                >
                  <X size={16} />
                </button>
              </div>

              <form className="space-y-4 mb-8" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-apple-blue focus:bg-white/10 transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Work Email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-apple-blue focus:bg-white/10 transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="What workflows do you need solved?" 
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-apple-blue focus:bg-white/10 transition-colors resize-none"
                  />
                </div>
                
                <button className="w-full bg-apple-blue text-white font-bold tracking-wide py-4 rounded-2xl mt-4 border border-apple-blue hover:bg-blue-600 transition-colors">
                  Build Your App
                </button>
              </form>
              
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
};

export default BottomConversion;
