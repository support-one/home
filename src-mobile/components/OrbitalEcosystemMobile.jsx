import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';

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
  const radius = 280; 
  const totalCards = ecosystemNodes.length;
  const cardAngle = 360 / totalCards;
  
  // Interactive Physics State
  const dragX = useMotionValue(0);
  const rotationRaw = useTransform(dragX, (x) => x * 0.5); // Map drag distance to angle
  const rotationSpring = useSpring(rotationRaw, { stiffness: 400, damping: 30 });
  const [isHovered, setIsHovered] = useState(false);

  // Auto-Orbit Logic
  useEffect(() => {
    if (!isHovered) {
      const controls = animate(dragX, [dragX.get(), dragX.get() + 360], {
        duration: 30,
        repeat: Infinity,
        ease: "linear"
      });
      return controls.stop;
    }
  }, [isHovered]);

  const onDragStart = () => setIsHovered(true);
  const onDragEnd = () => {
    // Magnetic Snap: Force stop on a card notch
    const currentRot = rotationRaw.get();
    const snapRot = Math.round(currentRot / cardAngle) * cardAngle;
    animate(dragX, snapRot * 2, { type: 'spring', stiffness: 300, damping: 30 });
    
    // Resume auto-orbit after 3s
    setTimeout(() => setIsHovered(false), 3000);
  };

  return (
    <section className="py-24 w-full h-[700px] flex flex-col items-center justify-center relative overflow-hidden bg-black touch-none">
      
      <div className="absolute top-10 text-center z-50 px-6 w-full pointer-events-none">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Connected Everywhere</h2>
        <p className="text-white/60 text-sm">Grab and spin the ecosystem.</p>
      </div>

      <div className="relative w-[320px] h-[320px] flex items-center justify-center scale-[0.6] sm:scale-75 translate-y-[20%]">
        
        {/* Center Node */}
        <div className="absolute m-auto w-64 h-64 rounded-full z-50 flex flex-col items-center justify-center shadow-[0_0_80px_rgba(10,132,255,0.3)] bg-black/90 border border-apple-blue/20 backdrop-blur-2xl p-6 text-center select-none pointer-events-none">
            <h2 className="text-3xl font-black mb-2 text-white leading-tight">
               Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Software</span>
            </h2>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Interactive Control</p>
        </div>

        {/* Orbit Wheel Wrapper (The Flywheel) */}
        <motion.div 
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          style={{ rotateZ: rotationSpring, willChange: 'transform' }}
          className="relative flex items-center justify-center z-10 cursor-grab active:cursor-grabbing"
        >
          {/* Tracking Rings */}
          <div className="absolute rounded-full border border-dashed border-cyan-400/20" style={{ width: radius * 2.2, height: radius * 2.2 }} />
          <div className="absolute rounded-full border border-cyan-400/10" style={{ width: radius * 2, height: radius * 2 }} />

          {/* Nodes */}
          {ecosystemNodes.map((node, index) => {
            const angle = index * cardAngle;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;

            return (
              <motion.div
                key={index}
                className="absolute w-44 h-32 bg-[#080808] border border-white/10 overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                style={{
                  left: '50%',
                  top: '50%',
                  translateX: '-50%',
                  translateY: '-50%',
                  x: x, 
                  y: y,
                  rotateZ: angle + 90, 
                  borderRadius: '24px',
                  willChange: 'transform'
                }}
                whileTap={{ scale: 1.15, zIndex: 100, borderColor: "rgba(10, 132, 255, 0.8)" }}
              >
                {/* Visual Feedback on Tap: The Data-Ping */}
                <motion.div 
                   className="absolute inset-0 bg-apple-blue/5 opacity-0"
                   whileTap={{ opacity: 1, scale: [1, 1.1, 1], transition: { duration: 0.3 } }}
                />
                
                <img 
                  src={node.img} 
                  alt={node.label} 
                  className="w-full h-full object-cover opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 inset-x-0 w-full flex justify-center">
                   <div className="bg-black/95 px-3 py-1 rounded-full border border-cyan-400/30">
                       <span className="text-[10px] font-black text-white tracking-widest uppercase">{node.label}</span>
                   </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Touch Instruction */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        className="absolute bottom-12 flex items-center gap-2 pointer-events-none"
      >
        <span className="w-12 h-[1px] bg-white/20" />
        <span className="text-[9px] uppercase tracking-widest">Swipe left or right to explore</span>
        <span className="w-12 h-[1px] bg-white/20" />
      </motion.div>
    </section>
  );
};

export default OrbitalEcosystemMobile;
