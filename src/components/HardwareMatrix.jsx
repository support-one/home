import React from 'react';
import { motion } from 'framer-motion';
import { FileQuestion, AlertCircle, RefreshCw, XOctagon } from 'lucide-react';

export default function HardwareMatrix() {
  const checkpoints = [
    { icon: FileQuestion, name: "Confusing Menus you never use", color: "text-red-400", shadow: "shadow-[0_0_20px_#F87171]" },
    { icon: RefreshCw, name: "Endless loading and syncing", color: "text-orange-400", shadow: "shadow-[0_0_20px_#FB923C]" },
    { icon: AlertCircle, name: "Irrelevant Prompts", color: "text-yellow-400", shadow: "shadow-[0_0_20px_#FACC15]" },
    { icon: XOctagon, name: "Feature Paywalls", color: "text-pink-400", shadow: "shadow-[0_0_20px_#F472B6]" }
  ];

  return (
    <section className="w-full py-32 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">The Straight Line to Success.</h2>
        <p className="text-gray-400">Generic mass-market apps are filled with rigid checkpoints and detours. Custom software removes all the clutter, giving your employees a straight line to getting the job done.</p>
      </div>

      <div className="w-full max-w-6xl flex justify-center mb-12">
        <div className="w-full max-w-3xl h-2 bg-gradient-to-r from-cyan-400 via-cyan-400 to-transparent relative rounded-full">
           <motion.div 
             className="absolute -top-3 left-0 w-8 h-8 rounded bg-white shadow-[0_0_20px_#fff]"
             animate={{ left: ["0%", "100%"] }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
           />
           <div className="absolute top-8 left-1/2 -translate-x-1/2 text-cyan-400 font-bold uppercase tracking-widest text-xs tracking-widest">Your Custom App (Zero Detours)</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {checkpoints.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <motion.div 
              key={idx}
              className="bg-[#111] border border-red-500/20 rounded-3xl p-8 flex flex-col items-center justify-center cursor-not-allowed group relative overflow-hidden opacity-50"
              whileHover={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="absolute inset-x-0 bottom-0 h-1 bg-red-500/50" />
              
              <div className={`w-20 h-20 rounded-full bg-black border border-white/20 mb-6 flex items-center justify-center transition-all duration-300 group-hover:border-transparent group-hover:${item.shadow}`}>
                <IconComp className={`w-10 h-10 text-gray-500 group-hover:${item.color} transition-colors duration-300`} />
              </div>
              
              <h3 className="text-sm font-bold text-center text-gray-500">Generic App Roadblock</h3>
              <p className="text-xs text-red-400 mt-2 text-center">{item.name}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
