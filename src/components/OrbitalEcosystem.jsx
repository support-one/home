import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ecosystemNodes = [
  { img: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Healthcare" },
  { img: "https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Manufacturing" },
  { img: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Logistics" },
  { img: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Retail" },
  { img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Hospitality" },
  { img: "https://images.pexels.com/photos/2219035/pexels-photo-2219035.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Architecture" },
  { img: "https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Beauty" },
  { img: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Corporate" },
  { img: "https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Agriculture" },
  { img: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400", label: "SaaS / IT" },
  { img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Real Estate" },
  { img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Fitness" },
];

export default function OrbitalEcosystem() {
  const radius = 360; 
  const totalCards = ecosystemNodes.length;

  return (
    <section className="w-full h-screen min-h-[600px] md:min-h-[1000px] flex flex-col items-center justify-center relative overflow-hidden bg-[#020202]">
      
      {/* Responsive Scaling Wrapper for the entire layout */}
      <div className="relative w-full h-[800px] flex items-center justify-center scale-[0.35] sm:scale-[0.5] md:scale-75 lg:scale-100">
        
        {/* Central Support One Content & Logo - Permanently On Top */}
        <div className="absolute m-auto w-[400px] h-[400px] rounded-full z-50 flex flex-col items-center justify-center shadow-[0_0_150px_rgba(0,100,255,0.2)] bg-[#050505]/90 overflow-hidden border border-cyan-400/20 backdrop-blur-2xl p-10 text-center text-balance group cursor-default">
           
           {/* Faded Background Logo */}
           <img 
             src="/logo_concept_6_gear_1775322574453.png" 
             alt="Support One Center Logo" 
             className="absolute inset-0 w-full h-full object-cover scale-[1.7] opacity-10 pointer-events-none z-10 blur-sm mix-blend-screen group-hover:opacity-20 transition-opacity duration-1000"
           />
           
           <div className="relative z-20 flex flex-col items-center">
             <div className="text-cyan-400 font-bold tracking-widest text-xs uppercase mb-2">Native Command</div>
             <h2 className="text-4xl md:text-5xl font-black mb-3 text-white leading-tight">
                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Custom</span> Logic
             </h2>
             <p className="text-gray-400 font-medium text-base leading-relaxed max-w-[280px]">
                Stop adapting to generic software. Make your software adapt to your business.
             </p>
           </div>

           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/5 to-transparent pointer-events-none z-30" />
           
           {/* Pulsing center glow */}
           <motion.div 
             animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="absolute inset-x-0 inset-y-0 border-2 border-cyan-500/30 rounded-full z-40 pointer-events-none m-4"
           />
        </div>

        {/* The Straight Flat Inner Wheel */}
        <motion.div 
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="relative w-[800px] h-[800px] flex items-center justify-center z-10"
        >
          {/* Glowing Track Rings - Opposite Rotation */}
          <motion.div 
            animate={{ rotateZ: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[800px] h-[800px] rounded-full border border-dashed border-cyan-400/20" 
          />
          <div className="absolute w-[800px] h-[800px] rounded-full border border-cyan-400/10 shadow-[0_0_100px_rgba(0,255,204,0.05)_inset]" />

          {/* Orbiting Business Cards */}
          {ecosystemNodes.map((node, index) => {
            const angle = (index / totalCards) * 360;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;

            return (
              <motion.div
                key={index}
                className="absolute w-44 h-32 bg-[#111] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] cursor-pointer group"
                style={{
                  left: '50%',
                  top: '50%',
                  x: `calc(-50% + ${x}px)`,
                  y: `calc(-50% + ${y}px)`,
                  // Rotates to face center tangentially
                  rotateZ: angle + 90, 
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.15, zIndex: 50, borderColor: "rgba(0, 255, 204, 0.8)", boxShadow: "0 0 40px rgba(0, 255, 204, 0.4)" }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.1, 
                  type: "spring"
                }}
              >
                {/* Images are now fully visible in high color by default */}
                <img src={node.img} alt={node.label} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                
                {/* Subtle gradient only on the bottom to support the industry label text */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity pointer-events-none" />
                
                {/* Advanced Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/20 to-transparent transition-opacity pointer-events-none" />
                
                {/* Industry Label inside the card */}
                <div className="absolute bottom-3 inset-x-0 w-full flex justify-center translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                   <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-400/30 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                       <span className="text-[10px] font-bold text-white tracking-wider uppercase">{node.label}</span>
                   </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}
