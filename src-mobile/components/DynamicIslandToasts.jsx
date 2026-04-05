import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicIslandToasts = () => {
  const [toast, setToast] = useState(null);

  // Expose a global method to push toasts (for demo purposes)
  useEffect(() => {
    window.pushNotification = (title, subtitle) => {
      setToast({ title, subtitle });
      setTimeout(() => setToast(null), 3000);
    };
    

  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-2 pointer-events-none">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: -50, scale: 0.8, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -50, scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="bg-black text-white px-4 py-2 flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10"
            style={{ borderRadius: '24px' }}
          >
            <div className="w-6 h-6 rounded-full bg-[#34C759] flex items-center justify-center">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                 <polyline points="20 6 9 17 4 12"></polyline>
               </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-bold leading-tight">{toast.title}</span>
              {toast.subtitle && <span className="text-[10px] text-white/50 leading-tight">{toast.subtitle}</span>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DynamicIslandToasts;
