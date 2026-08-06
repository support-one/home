import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Compass, Layers, Zap, MonitorSmartphone, Cpu, Star, User, MessageCircle } from 'lucide-react';

const DesktopSidebar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { name: 'Home', icon: Home, href: '#home', id: 'home' },
    { name: 'Dashboard', icon: Compass, href: '#dashboard', id: 'dashboard' },
    { name: 'Ecosystem', icon: Layers, href: '#ecosystem', id: 'ecosystem' },
    { name: 'Difference', icon: Zap, href: '#difference', id: 'difference' },
    { name: 'Platforms', icon: MonitorSmartphone, href: '#multiplatform', id: 'multiplatform' },
    { name: 'Technology', icon: Cpu, href: '#technology', id: 'technology' },
    { name: 'Trust', icon: Star, href: '#trust', id: 'trust' },
    { name: 'Developer', icon: User, href: '#developer', id: 'developer' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 300; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(links[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.aside 
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="hidden lg:flex w-[280px] h-screen flex-col border-r border-white/10 bg-black/50 backdrop-blur-3xl sticky top-0 left-0 z-[100] py-10 px-8"
    >
      <div className="flex items-center gap-3 mb-16">
        <img 
          src={`${import.meta.env.BASE_URL}support-one-logo.png`} 
          alt="Support One" 
          className="w-10 h-10 rounded-xl object-contain"
        />
        <span className="font-bold text-xl tracking-tight">Support One</span>
      </div>

      <nav className="flex flex-col gap-4 flex-1 mt-6">
        <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">Navigation</div>
        {links.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`flex items-center gap-4 transition-colors group p-2 -ml-2 rounded-xl ${isActive ? 'text-white bg-white/5' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-apple-blue/20 text-apple-blue' : 'bg-white/5 group-hover:bg-apple-blue/20 group-hover:text-apple-blue'}`}>
                <link.icon size={20} />
              </div>
              <span className={`font-semibold text-sm tracking-wide ${isActive ? 'text-white' : ''}`}>{link.name}</span>
            </a>
          );
        })}
      </nav>

      <div className="mt-auto">
        <button 
          onClick={() => window.dispatchEvent(new Event('open-lets-talk'))}
          className="w-full material-thick glass-edge py-4 px-6 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
        >
          <MessageCircle size={18} className="text-apple-blue" />
          <span className="font-bold text-sm tracking-wide">Let's Talk</span>
        </button>
      </div>
    </motion.aside>
  );
};

export default DesktopSidebar;
