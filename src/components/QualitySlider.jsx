import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function QualitySlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="w-full py-32 px-6 flex flex-col items-center select-none overflow-hidden">
      <div className="max-w-6xl w-full text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Focus on What Matters.</h2>
        <p className="text-gray-400">Drag to compare cluttered Universal SaaS vs a tailored Custom Workflow.</p>
      </div>

      <div 
        className="relative w-full max-w-4xl h-[500px] bg-black rounded-3xl overflow-hidden cursor-ew-resize border-2 border-white/10"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const p = ((e.clientX - rect.left) / rect.width) * 100;
          setSliderPos(Math.min(Math.max(p, 0), 100));
        }}
        onTouchMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const p = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
          setSliderPos(Math.min(Math.max(p, 0), 100));
        }}
      >
        {/* Support One Custom (Background/Right) */}
        <div className="absolute inset-0 bg-[#0a0a0a] flex flex-col items-end justify-center p-20 z-0">
          <div className="w-1/2 flex flex-col items-end opacity-90">
             <h3 className="text-3xl font-bold text-white mb-6">Your Exact Workflow</h3>
             <div className="space-y-4 w-full bg-cyan-900/20 p-6 rounded-xl border border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,204,0.1)]">
               <div className="flex justify-between items-center mb-4">
                 <span className="text-cyan-400 font-bold">Today's Priorities</span>
                 <div className="w-8 h-8 rounded-md bg-cyan-400/20" />
               </div>
               <div className="h-6 bg-cyan-400 rounded-md w-full" />
               <div className="h-6 bg-cyan-400/50 rounded-md w-full" />
               <div className="h-6 bg-cyan-400/30 rounded-md w-full" />
             </div>
             <p className="text-cyan-400 mt-6 tracking-widest uppercase font-bold text-xs">Zero Clutter. 100% Signal.</p>
          </div>
        </div>

        {/* Universal Bloat (Foreground/Left Clipped) */}
        <div 
          className="absolute inset-0 bg-gray-900 flex flex-col items-start justify-center p-20 z-10 border-r-2 border-cyan-400 shadow-[2px_0_20px_rgba(0,255,204,0.5)]"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div className="w-1/2 flex flex-col items-start opacity-70 blur-[1px]">
             <h3 className="text-3xl font-bold text-gray-500 mb-6">Generic Universal UI</h3>
             <div className="grid grid-cols-2 gap-2 w-full bg-gray-800 p-4 rounded-xl border border-gray-700">
               <div className="h-4 bg-gray-600 rounded-sm w-full mb-4 col-span-2 flex items-center px-2 text-[10px] text-black">Menu 1</div>
               <div className="h-10 bg-gray-700 rounded-sm w-full flex items-center justify-center text-[10px] text-gray-400">Hospital A Module</div>
               <div className="h-10 bg-gray-700 rounded-sm w-full flex items-center justify-center text-[10px] text-gray-400">Clinic B Module</div>
               <div className="h-10 bg-gray-700 rounded-sm w-full flex items-center justify-center text-[10px] text-gray-400">Irrelevant Feature</div>
               <div className="h-10 bg-gray-700 rounded-sm w-full flex items-center justify-center text-[10px] text-gray-400">Ads Tracker</div>
             </div>
             <p className="text-red-500 mt-6 tracking-widest uppercase font-bold text-xs">Lost in the noise</p>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-cyan-400 z-20 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-8 h-8 bg-black border-2 border-cyan-400 rounded-full shadow-[0_0_10px_#00ffcc] flex items-center justify-center">
            <div className="w-4 h-1 bg-cyan-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
