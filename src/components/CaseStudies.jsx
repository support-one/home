import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const studies = [
  { id: 1, title: 'HealthSync (iOS)', desc: 'Secure medical ERP integrated with native Apple Health API.' },
  { id: 2, title: 'Bolt Logistics (Android)', desc: 'Real-time high-frequency telemetry dashboard for rugged devices.' },
  { id: 3, title: 'FinancePro (macOS)', desc: 'Lightning fast bulk-data visualization engine using Metal compute.' },
  { id: 4, title: 'Retail Commander (Windows)', desc: 'Point of sale kiosk software running rock-solid offline sync.' },
  { id: 5, title: 'Pulse CRM (Cross-Native)', desc: 'Unified native architectures for desktop and mobile.' },
];

export default function CaseStudies() {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <section className="relative w-full py-32 overflow-hidden flex flex-col justify-center">
      <div className="px-6 md:px-20 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h2>
        <p className="text-gray-400 max-w-2xl">Swipe through our recent deployments. All custom. All native.</p>
      </div>

      <motion.div ref={carouselRef} className="cursor-grab overflow-hidden px-6 md:px-20 active:cursor-grabbing">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -carouselWidth }} 
          className="flex space-x-8"
        >
          {studies.map(study => (
            <motion.div 
              key={study.id} 
              className="min-w-[300px] md:min-w-[400px] h-[400px] bg-[#0a0a0a] rounded-3xl p-8 border border-white/5 flex flex-col justify-end relative overflow-hidden group"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              {/* Abstract Background pattern */}
              <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-700 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900 via-black to-black" />
              
              <div className="z-20 relative">
                <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-gray-400">{study.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
