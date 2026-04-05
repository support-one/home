import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Compass, Layers, User } from 'lucide-react';

const DynamicTabNavigation = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: 'Home', icon: Home },
    { name: 'Explore', icon: Compass },
    { name: 'Stack', icon: Layers },
    { name: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full pb-safe px-6 z-50 pointer-events-none mb-6">
      <div className="pointer-events-auto material-thick flex justify-between items-center py-4 px-8 mx-auto w-full rounded-full">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = index === activeTab;
          
          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(index)}
              className="relative flex flex-col items-center justify-center w-12 h-12"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <motion.div
                animate={{ 
                  scale: isActive ? 1.15 : 1,
                  color: isActive ? '#0A84FF' : 'rgba(255, 255, 255, 0.4)'
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </motion.div>
              
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-apple-blue shadow-[0_0_12px_rgba(10,132,255,1)]"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DynamicTabNavigation;
