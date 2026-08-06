import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const notifications = [
  { title: 'Build Complete', sub: 'iOS app compiled successfully', icon: '✓', color: '#34C759', time: 'now' },
  { title: 'Payment Received', sub: '₹2,40,000 — Project Milestone 2', icon: '₹', color: '#0A84FF', time: '2m ago' },
  { title: 'App Deployed', sub: 'v2.1.4 pushed to production', icon: '🚀', color: '#AF52DE', time: '5m ago' },
  { title: 'New Client', sub: 'Sharma Textiles onboarded', icon: '+', color: '#FF9500', time: '12m ago' },
  { title: 'Security Scan', sub: 'Zero vulnerabilities found', icon: '🛡', color: '#5AC8FA', time: '1h ago' },
];

const NotificationToastStack = () => {
  const [active, setActive] = useState([0, 1, 2]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => {
        const next = prev.map(i => (i + 1) % notifications.length);
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="text-center mb-14 lg:mb-20">
        <span className="text-[10px] lg:text-sm uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">Real-Time</span>
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-2">Always Updated</h2>
        <p className="text-white/60 lg:text-xl">Your business, live.</p>
      </div>

      <div className="relative h-[260px] lg:h-[350px] max-w-sm lg:max-w-xl mx-auto perspective-1000">
        <AnimatePresence mode="popLayout">
          {active.map((notifIdx, stackIdx) => {
            const notif = notifications[notifIdx];
            return (
              <motion.div
                key={`${notifIdx}-${stackIdx}`}
                className="absolute w-full left-0"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ 
                  opacity: 1 - stackIdx * 0.25, 
                  y: stackIdx * 28,
                  scale: 1 - stackIdx * 0.05,
                  zIndex: 10 - stackIdx
                }}
                exit={{ opacity: 0, x: -300, rotate: -5 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              >
                <div className="material-thick glare-edge p-4 lg:p-6 flex items-center gap-4 lg:gap-6" style={{ borderRadius: '20px' }}>
                  <div 
                    className="w-11 h-11 lg:w-16 lg:h-16 rounded-[14px] lg:rounded-[20px] flex items-center justify-center text-lg lg:text-2xl font-bold flex-shrink-0 shadow-lg"
                    style={{ backgroundColor: notif.color + '30', color: notif.color }}
                  >
                    {notif.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-0.5 lg:mb-2">
                      <span className="text-sm lg:text-xl font-bold text-white truncate">{notif.title}</span>
                      <span className="text-[9px] lg:text-sm text-white/30 font-mono ml-2 flex-shrink-0">{notif.time}</span>
                    </div>
                    <p className="text-xs lg:text-base text-white/50 truncate">{notif.sub}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NotificationToastStack;
