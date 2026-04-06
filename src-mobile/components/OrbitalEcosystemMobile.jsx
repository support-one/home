import React from 'react';
import { motion } from 'framer-motion';

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
  // Use a mobile-optimized radius
  const radius = 240; 
  const totalCards = ecosystemNodes.length;

  return (
    <section className="py-24 w-full h-[700px] flex flex-col items-center justify-center relative overflow-hidden bg-black">
      
      <div className="absolute top-10 text-center z-50 px-6 w-full">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Connected Everywhere</h2>
        <p className="text-white/60">One system. Every device.</p>
      </div>

      {/* Scaled wrapper to ensure the orbit fits on mobile */}
      <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] flex items-center justify-center scale-[0.6] sm:scale-75 translate-y-[20%]">
        
        {/* Center Node — Support One Logo */}
        <div className="absolute m-auto w-64 h-64 rounded-full z-50 flex flex-col items-center justify-center shadow-[0_0_80px_rgba(10,132,255,0.3)] bg-black/80 border border-apple-blue/10 backdrop-blur-2xl p-8 text-center overlow-hidden">
            <motion.div 
              className="absolute -inset-6 border-[0.5px] border-dashed border-apple-blue/10 rounded-full pointer-events-none -z-10"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
            
            <motion.div
              className="relative z-30"
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <img 
                src={`${import.meta.env.BASE_URL}support-one-logo.png`} 
                alt="Support One" 
                className="w-32 h-32 rounded-3xl shadow-[0_0_50px_rgba(10,132,255,0.4)]"
              />
              <motion.div 
                className="absolute -inset-2 bg-apple-blue/20 rounded-full blur-2xl -z-10"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

           <motion.div 
             animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
             transition={{ duration: 5, repeat: Infinity }}
             className="absolute inset-1 border border-cyan-400/10 rounded-full z-40 pointer-events-none"
           />
        </div>

        {/* Orbit Wheel */}
        <motion.div 
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative flex items-center justify-center z-10"
          style={{ willChange: 'transform' }}
        >
          {/* Tracking Rings */}
          <motion.div 
            animate={{ rotateZ: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full border border-dashed border-cyan-400/30" 
            style={{ width: radius * 2.2, height: radius * 2.2 }}
          />
          <div className="absolute rounded-full border border-cyan-400/10" style={{ width: radius * 2, height: radius * 2 }} />

          {/* Cards */}
          {ecosystemNodes.map((node, index) => {
            const angle = (index / totalCards) * 360;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;

            return (
              <motion.div
                key={index}
                className="absolute w-44 h-32 bg-[#080808] border border-white/10 overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.6)] cursor-pointer"
                initial={{ opacity: 0, scale: 0.1, x: 0, y: 0 }}
                whileInView={{ opacity: 1, scale: 1, x: x, y: y }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 120, 
                  damping: 18, 
                  delay: 0.1 + (index * 0.08) 
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  translateX: '-50%',
                  translateY: '-50%',
                  rotateZ: angle + 90, 
                  borderRadius: '24px',
                  willChange: 'transform'
                }}
                whileTap={{ scale: 1.1, zIndex: 60, borderColor: "rgba(10, 132, 255, 0.6)" }}
              >
                <img 
                  src={node.img} 
                  alt={node.label} 
                  className="w-full h-full object-cover opacity-70"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 inset-x-0 w-full flex justify-center">
                   <div className="bg-black/90 px-3 py-1 rounded-full border border-cyan-400/20 shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
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
};

export default OrbitalEcosystemMobile;
