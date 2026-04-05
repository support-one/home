import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const steps = [
    { num: "01", title: "Discovery & Blueprint", desc: "We map out your business workflow meticulously. No universal assumptions—just the raw reality of how you operate." },
    { num: "02", title: "Architecture Design", desc: "Our engineers craft the framework for your native models focusing on absolute performance and scale." },
    { num: "03", title: "Native Execution", desc: "Hand-tooled in Swift, Kotlin, or C#. No wrappers. We build pure native applications that command attention." },
    { num: "04", title: "Deployment & Scaling", desc: "Flawless rollouts. As your small business scales, your proprietary software infrastructure scales ahead of it." },
  ];

  return (
    <section ref={containerRef} className="relative w-full py-32 px-6 flex flex-col items-center justify-center min-h-[150vh]">
      <div className="max-w-4xl w-full text-center py-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">The Support One Method</h2>
        <p className="text-gray-400">Engineering perfection takes discipline. We follow a strict operational pipeline.</p>
      </div>

      <div className="relative max-w-4xl w-full flex">
        {/* Progress Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full overflow-hidden">
          <motion.div 
            className="w-full bg-cyan-400 origin-top"
            style={{ scaleY: pathLength }}
          />
        </div>

        {/* Steps */}
        <div className="w-full flex flex-col space-y-32 py-10">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`relative flex w-full justify-start md:justify-between items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full border-4 border-black bg-[#111] shadow-[0_0_20px_rgba(0,255,204,0.3)] z-10 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Content */}
                <div className="w-full md:w-5/12 pl-24 md:pl-0">
                  <motion.div 
                    className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl"
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                  >
                    <span className="text-cyan-500 font-bold tracking-widest text-sm mb-4 block">STEP {step.num}</span>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-medium">{step.desc}</p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
