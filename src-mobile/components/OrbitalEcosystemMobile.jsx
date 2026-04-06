import React from 'react';
import { motion } from 'framer-motion';

const ecosystemNodes = [
  { img: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Healthcare", back: "Remote Patient Monitoring & HIPAA Vault" },
  { img: "https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Manufacturing", back: "Real-time Floor Analytics & Custom ERP" },
  { img: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Logistics", back: "Smart Routing & Fleet Telematics" },
  { img: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Retail", back: "Omnichannel POS & Inventory Sync" },
  { img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Hospitality", back: "Contactless Booking & Guest CRM" },
  { img: "https://images.pexels.com/photos/2219035/pexels-photo-2219035.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Architecture", back: "BIM Rendering & Field Collaboration" },
  { img: "https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Beauty", back: "AI Appointment Scheduler & Store Apps" },
  { img: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Corporate", back: "Secure Intranets & Workforce Admin" },
  { img: "https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=400", label: "Agriculture", back: "Precision IoT & Supply Chain Proof" }
];

const OrbitalEcosystemMobile = () => {
  const [flippedIndex, setFlippedIndex] = React.useState(null);
  const radius = 240; 
  const totalCards = ecosystemNodes.length;

  return (
    <section className="py-24 w-full h-[700px] flex flex-col items-center justify-center relative overflow-hidden bg-black">
      
      <div className="absolute top-10 text-center z-50 px-6 w-full">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Connected Everywhere</h2>
        <p className="text-white/60">One system. Every device.</p>
        <p className="text-[10px] text-apple-blue font-bold uppercase tracking-widest mt-2">TAP A CARD TO REVEAL SOLUTIONS</p>
      </div>

      <div className="relative w-[320px] h-[320px] flex items-center justify-center scale-[0.6] sm:scale-75 translate-y-[20%]">
        
        {/* Center Node */}
        <div className="absolute m-auto w-64 h-64 rounded-full z-50 flex flex-col items-center justify-center shadow-[0_0_80px_rgba(10,132,255,0.3)] bg-black/80 border border-apple-blue/20 backdrop-blur-2xl p-6 text-center">
            <motion.div 
              className="absolute -inset-4 border-2 border-dashed border-apple-blue/20 rounded-full pointer-events-none -z-10"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            <h2 className="text-3xl font-black mb-2 text-white leading-tight relative z-20">
               Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Software</span>
            </h2>
           <motion.div 
             animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="absolute inset-2 border border-cyan-400/30 rounded-full z-40 pointer-events-none"
           />
        </div>

        {/* Orbit Wheel */}
        <motion.div 
          animate={{ rotateZ: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="relative flex items-center justify-center z-10"
          style={{ willChange: 'transform' }}
        >
          {/* Tracking Rings */}
          <motion.div 
            animate={{ rotateZ: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full border border-dashed border-cyan-400/30" 
            style={{ width: radius * 2.2, height: radius * 2.2 }}
          />

          {/* Cards */}
          {ecosystemNodes.map((node, index) => {
            const angle = (index / totalCards) * 360;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const isFlipped = flippedIndex === index;

            return (
              <div
                key={index}
                className="absolute w-44 h-32"
                style={{
                  left: '50%',
                  top: '50%',
                  translateX: '-50%',
                  translateY: '-50%',
                  x: x, 
                  y: y,
                  rotateZ: angle + 90, 
                  perspective: '1000px'
                }}
              >
                <motion.div
                  className="w-full h-full relative cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                  onClick={() => setFlippedIndex(isFlipped ? null : index)}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute inset-0 bg-[#080808] border border-white/10 overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.6)] rounded-[24px] z-10"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img src={node.img} className="w-full h-full object-cover opacity-70" alt={node.label}/>
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-3 inset-x-0 w-full flex justify-center">
                       <div className="bg-black/90 px-3 py-1 rounded-full border border-cyan-400/20 shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                           <span className="text-[10px] font-bold text-white tracking-wider uppercase">{node.label}</span>
                       </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div 
                    className="absolute inset-0 bg-[#0a1628] border border-cyan-400/40 p-4 flex flex-col items-center justify-center text-center shadow-[0_15px_30px_rgba(10,132,255,0.2)] rounded-[24px]"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                    <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-2 border-b border-cyan-400/20 pb-1">{node.label}</span>
                    <p className="text-[10px] leading-tight font-bold text-white tracking-tight">{node.back}</p>
                    <div className="mt-2 w-4 h-4 rounded-full bg-apple-blue/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-apple-blue animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
};

export default OrbitalEcosystemMobile;
