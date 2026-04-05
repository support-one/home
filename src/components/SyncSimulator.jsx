import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToggleLeft, ToggleRight } from 'lucide-react';

export default function SyncSimulator() {
  const [forcingDetour, setForcingDetour] = useState(false);

  return (
    <section className="w-full py-32 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Rules. Not Theirs.</h2>
        <p className="text-gray-400">Toggle a sudden business change to see how Generic mass-market apps block you, while Custom software effortlessly adapts to your new rules.</p>
        
        <button 
          onClick={() => setForcingDetour(!forcingDetour)}
          className={`mt-8 px-6 py-3 rounded-full font-bold flex items-center justify-center mx-auto transition-colors ${!forcingDetour ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' : 'bg-red-500/20 text-red-400 border border-red-500/50'}`}
        >
          {!forcingDetour ? <ToggleLeft className="w-6 h-6 mr-3" /> : <ToggleRight className="w-6 h-6 mr-3 text-red-400" />}
          {!forcingDetour ? "Normal Day" : "Sudden Business Workflow Change"}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Generic App */}
        <div className="h-[500px] border-4 border-gray-800 rounded-[3rem] bg-black p-4 relative overflow-hidden flex flex-col">
          <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-xl w-32 mx-auto z-20" />
          <h3 className="text-center text-gray-500 font-bold mb-4 mt-8">Generic App Templates</h3>
          
          <div className="flex-1 w-full bg-[#111] rounded-2xl flex items-center justify-center relative px-6">
            <div className="w-full flex items-center">
               <motion.div 
                 className="w-12 h-12 bg-white rounded-full flex-shrink-0 z-10"
                 animate={{ x: forcingDetour ? 50 : 200 }}
                 transition={{ type: "spring", stiffness: 100 }}
               />
               <div className="h-2 bg-gray-800 w-full rounded relative overflow-hidden ml-4">
                  {forcingDetour && (
                     <motion.div 
                       className="absolute left-[30px] top-0 bottom-0 w-8 bg-red-500 shadow-[0_0_20px_#ef4444]"
                       initial={{ scaleY: 0 }}
                       animate={{ scaleY: 1 }}
                     />
                  )}
               </div>
            </div>
            {forcingDetour && <p className="absolute bottom-10 text-red-500 text-sm font-bold uppercase text-center w-full">"Sorry, you can't add that workflow here."</p>}
          </div>
        </div>

        {/* Custom Native Phone */}
        <div className="h-[500px] border-4 border-gray-800 rounded-[3rem] bg-black p-4 relative overflow-hidden flex flex-col shadow-[0_0_30px_rgba(0,255,204,0.1)]">
          <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-xl w-32 mx-auto z-20" />
          <h3 className="text-center text-cyan-400 font-bold mb-4 mt-8">Your Custom Software</h3>
          
          <div className="flex-1 w-full bg-[#0a0a0a] rounded-2xl flex items-center justify-center p-6 relative overflow-hidden">
            <div className="w-full flex items-center justify-between">
               <motion.div 
                 className="w-12 h-12 bg-cyan-400 rounded-full flex-shrink-0 z-10 shadow-[0_0_20px_#00ffcc]"
                 animate={{ x: 200 }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
               <div className="absolute inset-x-6 h-2 bg-gray-800 w-full rounded relative overflow-hidden -z-10 ml-4">
                 {forcingDetour && (
                     <motion.div 
                       className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
                       animate={{ x: [-200, 200] }}
                       transition={{ duration: 1, repeat: Infinity }}
                     />
                  )}
               </div>
            </div>

            {forcingDetour ? (
              <motion.div 
                className="absolute bottom-10 font-bold text-sm text-cyan-400 text-center w-full uppercase"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                Workflow Adjusted. Keep Moving.
              </motion.div>
            ) : (
              <div className="absolute bottom-10 text-gray-500 text-sm font-bold uppercase text-center w-full">Smooth Sailing</div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
