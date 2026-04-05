import React from 'react';
import { motion } from 'framer-motion';

export default function TechMarquee() {
  const technologies = [
    "Swift", "Kotlin", "React Native", "C#", "C++", "Objective-C", "Java", "Electron", "Figma", ".NET Core", "Node.js"
  ];

  const repeatedTech = [...technologies, ...technologies];

  return (
    <div className="w-full py-10 bg-white/[0.02] border-y border-white/5 overflow-hidden flex flex-col items-center">
      <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-6">Technologies Engineered</p>
      
      <div className="relative w-full flex overflow-hidden group">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {repeatedTech.map((tech, idx) => (
            <span key={idx} className="mx-8 text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-700 opacity-50 hover:opacity-100 transition-opacity">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
