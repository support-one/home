import React, { useMemo } from 'react';
import { motion, useTime, useTransform } from 'framer-motion';

const ecosystemNodes = [
  { img: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Healthcare" },
  { img: "https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Manufacturing" },
  { img: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Logistics" },
  { img: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Retail" },
  { img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Hospitality" },
  { img: "https://images.pexels.com/photos/2219035/pexels-photo-2219035.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Architecture" },
  { img: "https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Beauty" },
  { img: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Corporate" },
  { img: "https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Agriculture" }
];

const OrbitalEcosystemMobile = () => {
  const radius = 220; // Reduced radius for better mobile fit
  const totalCards = ecosystemNodes.length;
  const time = useTime();
  
  // Create a pulsing rhythmic rotation (non-linear speed shifts)
  const rotation = useTransform(time, [0, 10000, 20000, 30000, 40000], [0, 120, 180, 300, 360], { clamp: false });

  return (
    <section className="py-24 w-full h-[700px] flex flex-col items-center justify-center relative overflow-hidden bg-black">
      
      <div className="absolute top-10 text-center z-50 px-6 w-full">
        <h2 className="text-4xl font-black tracking-tight mb-2 text-white italic underline decoration-apple-blue/20">CONNECTED</h2>
        <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold">One Ecosystem • Every Device</p>
      </div>

      <div className="relative w-full h-full flex items-center justify-center scale-75 sm:scale-95 translate-y-[10%]">

        
        {/* Center Support One Node */}
        <div className="absolute m-auto w-72 h-72 rounded-full z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-3xl p-6 text-center">
            {/* Core Glow Particle */}
            <motion.div 
               animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute inset-0 rounded-full bg-apple-blue/20 blur-3xl -z-10"
            />
            
            {/* Triple Telemetry Rings */}
            <motion.div 
              className="absolute -inset-4 border border-apple-blue/10 rounded-full -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div 
              className="absolute -inset-8 border border-white/5 rounded-full -z-10"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            />
            
            <h2 className="text-4xl font-black mb-1 text-white leading-tight relative z-20">
               CORE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-3xl">SUITE</span>
            </h2>
            <div className="h-px w-12 bg-white/20 mb-2" />
            <p className="text-[10px] font-bold text-apple-blue tracking-[0.2em] uppercase">Status: Unified</p>
        </div>

        {/* Orbit Group */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Tracking Rings */}
          <div className="absolute rounded-full border border-cyan-400/5" style={{ width: radius * 3.5, height: radius * 3.5 }} />
          <div className="absolute rounded-full border border-cyan-400/10" style={{ width: radius * 2.5, height: radius * 2.5 }} />
          <div className="absolute rounded-full border border-cyan-400/20" style={{ width: radius * 1.5, height: radius * 1.5 }} />

          {/* Individual Dynamic Cards */}
          {ecosystemNodes.map((node, index) => {
            const baseAngle = (index / totalCards) * 360;
            return <OrbitalCard key={index} index={index} baseAngle={baseAngle} radius={radius} rotation={rotation} node={node} />;
          })}
        </div>
      </div>
    </section>
  );
};

const OrbitalCard = ({ index, baseAngle, radius, rotation, node }) => {
  // Combine base angle with the current master rotation
  const angleValue = useTransform(rotation, (r) => (r + baseAngle) % 360);
  
  // Map x/y based on the combined angle
  const x = useTransform(angleValue, (a) => Math.cos((a * Math.PI) / 180) * radius);
  const y = useTransform(angleValue, (a) => Math.sin((a * Math.PI) / 180) * radius);
  
  // Depth Effects: Front (90deg) should be large and bright
  const scale = useTransform(angleValue, [0, 90, 180, 270, 360], [0.8, 1.25, 0.8, 0.5, 0.8]);
  const opacity = useTransform(angleValue, [0, 90, 180, 270, 360], [0.4, 1, 0.4, 0.2, 0.4]);
  const zIndex = useTransform(angleValue, [0, 90, 180, 270, 360], [10, 50, 10, 5, 10]);
  const blur = useTransform(angleValue, [0, 90, 180, 270, 360], ["blur(3px)", "blur(0px)", "blur(3px)", "blur(6px)", "blur(3px)"]);

  return (
    <motion.div
      className="absolute w-48 h-36 bg-[#050505] border border-white/5 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      style={{
        left: '50%',
        top: '50%',
        translateX: '-50%',
        translateY: '-50%',
        x,
        y,
        scale,
        opacity,
        zIndex,
        filter: blur,
        borderRadius: '24px',
        willChange: 'transform, opacity'
      }}
    >
      <img src={node.img} alt={node.label} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      
      {/* Glint Effect Layer */}
      <motion.div 
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]"
      />

      <div className="absolute bottom-4 inset-x-0 w-full flex flex-col items-center gap-1">
         <span className="text-[9px] font-black text-cyan-400 tracking-[0.3em] uppercase opacity-60">NODE {index + 1}</span>
         <div className="bg-white/5 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
             <span className="text-[11px] font-bold text-white tracking-wide">{node.label}</span>
         </div>
      </div>
    </motion.div>
  );
};

export default OrbitalEcosystemMobile;
