import React from 'react';
import { motion } from 'framer-motion';
import { TabletSmartphone, Code2, AppWindow, MonitorPlay, Braces } from 'lucide-react';

export default function OrbitalStack() {
  const icons = [
    { Icon: TabletSmartphone, angle: 0 },
    { Icon: AppWindow, angle: 72 },
    { Icon: Code2, angle: 144 },
    { Icon: MonitorPlay, angle: 216 },
    { Icon: Braces, angle: 288 },
  ];

  return (
    <section className="relative w-full min-h-screen py-32 flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        className="z-10 text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Precision Engineered</h2>
        <p className="text-gray-400">Architected precisely around the microscopic nuances of your daily operations.</p>
      </motion.div>

      {/* Orbital Container */}
      <div className="relative w-96 h-96 flex items-center justify-center">
        {/* Central Core Element */}
        <motion.div 
          className="absolute z-20 w-32 h-32 rounded-full bg-[#111] border border-cyan-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,204,0.1)] backdrop-blur-xl"
          animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 20px rgba(0,255,204,0.1)", "0px 0px 50px rgba(0,255,204,0.3)", "0px 0px 20px rgba(0,255,204,0.1)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-bold text-white text-xl text-center leading-tight">SUPPORT <br/>ONE</span>
        </motion.div>

        {/* Orbit Track */}
        <div className="absolute w-full h-full rounded-full border border-white/5 border-dashed" />

        {/* Orbiting Icons */}
        <motion.div 
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {icons.map((item, index) => {
            const IconComp = item.Icon;
            return (
              <motion.div
                key={index}
                className="absolute w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                style={{
                  top: '50%',
                  left: '50%',
                  margin: '-1.5rem',
                  transform: `rotate(${item.angle}deg) translate(12rem) rotate(-${item.angle}deg)`,
                }}
              >
                {/* Counter rotate the icon so it stays upright! */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <IconComp className="w-6 h-6 text-cyan-400" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}
