import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BiometricVaultMobile = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePointerDown = () => {
    if (isAuthenticated) return;
    setIsAuthenticating(true);
    
    // Simulate biometric delay
    setTimeout(() => {
      setIsAuthenticating(false);
      setIsAuthenticated(true);
      
      // Reset after a bit
      setTimeout(() => setIsAuthenticated(false), 3000);
    }, 1500);
  };

  const handlePointerUp = () => {
    if (!isAuthenticated) setIsAuthenticating(false);
  };

  return (
    <section className="py-12 px-6">
      <div className="material-regular glass-edge p-8 overflow-hidden relative flex flex-col items-center justify-center min-h-[400px]" style={{ borderRadius: '40px' }}>
        
        <div className="text-center z-10 mb-10">
          <h2 className="text-2xl font-bold mb-2">Biometric Vault</h2>
          <p className="text-white/60 text-sm max-w-[240px] px-4">Military-grade protection bound straight to your device Secure Enclave.</p>
        </div>

        {/* Interactive Zone */}
        <motion.div
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="relative z-10 w-28 h-28 flex items-center justify-center cursor-pointer"
          animate={{ scale: isAuthenticating ? 0.9 : 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 20 }}
          style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'none' }}
        >
          {/* Ripple rings */}
          <AnimatePresence>
            {isAuthenticating && !isAuthenticated && (
              <motion.div
                key="ripple"
                className="absolute inset-0 rounded-full border border-[#0A84FF]"
                initial={{ opacity: 0.8, scale: 0.8 }}
                animate={{ opacity: 0, scale: 2 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>

          <motion.div 
            className={`w-full h-full rounded-full flex flex-col items-center justify-center transition-colors duration-500 ${isAuthenticated ? 'bg-[#34C759]/20 border border-[#34C759]/50' : 'bg-white/5 border border-white/10 backdrop-blur-md'}`}
          >
            {isAuthenticated ? (
              <motion.svg
                initial={{ pathLength: 0, scale: 0.5 }}
                animate={{ pathLength: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#34C759" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </motion.svg>
            ) : (
              <motion.svg 
                animate={{ 
                  scale: isAuthenticating ? 1.1 : 1,
                  opacity: isAuthenticating ? 1 : 0.7 
                }}
                width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={isAuthenticating ? "#0A84FF" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M12 22v-4"></path>
                <path d="M12 8V4"></path>
                <path d="M6 16.5l-2.5 1.5"></path>
                <path d="M18 16.5l2.5 1.5"></path>
                <path d="M5 6.5L2.5 4"></path>
                <path d="M19 6.5L21.5 4"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              </motion.svg>
            )}
          </motion.div>
        </motion.div>

        <p className="mt-8 text-xs font-semibold text-white/40 uppercase tracking-widest z-10">
          {isAuthenticated ? 'Unlocked' : 'Hold to Authenticate'}
        </p>

        {/* Ambient glow reacting to state */}
        <motion.div 
          className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
          animate={{ 
            background: isAuthenticated ? 'radial-gradient(circle at 50% 60%, #34C759, transparent 60%)' :
                        isAuthenticating ? 'radial-gradient(circle at 50% 60%, #0A84FF, transparent 60%)' : 
                        'radial-gradient(circle at 50% 60%, rgba(255,255,255,0.2), transparent 60%)'
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </section>
  );
};

export default BiometricVaultMobile;
