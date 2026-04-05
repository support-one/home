import React from 'react';
import { motion } from 'framer-motion';

export default function TeamMatrix() {
  const team = [
    { name: "John Doe", title: "Principal Kotlin Engineer", skill: "10,000+ Hrs Android" },
    { name: "Sarah Smith", title: "Swift Architecture Lead", skill: "Metal & Compute" },
    { name: "Mike Tech", title: "C# / Desktop Engineer", skill: "Enterprise Windows" }
  ];

  return (
    <section className="w-full py-32 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">The Architects.</h2>

      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-8 px-6">
        {team.map((member, i) => (
          <motion.div 
            key={i}
            className="group relative h-96 bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden cursor-crosshair"
            whileHover={{ scale: 1.02 }}
          >
            {/* Fake Portrait Layer */}
            <div className="absolute inset-0 bg-gray-800 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center text-gray-500 font-bold tracking-widest uppercase">
              Portrait.jpg
            </div>

            {/* Glitch Tech Layer */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center font-mono text-cyan-400 p-6 text-center shadow-[inset_0_0_50px_rgba(0,255,204,0.1)]">
              <div className="w-full h-full border border-cyan-400/20 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] flex flex-col items-center justify-center p-4">
                <span className="text-2xl font-bold mb-2 uppercase glitch-text">{member.name}</span>
                <span className="text-white/80 text-sm mb-4">{member.title}</span>
                <span className="bg-cyan-900/50 text-cyan-200 px-3 py-1 rounded-full text-xs border border-cyan-400/30">
                  {member.skill}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
