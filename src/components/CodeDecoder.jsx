import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function CodeDecoder() {
  return (
    <section className="w-full py-32 px-6 bg-[#020202] border-t border-cyan-900/50 relative flex justify-center">
      <div className="max-w-6xl w-full">
        
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">From Generic Mess to Custom Speed.</h2>
          <p className="text-gray-400">
            Universal platforms force your team into endless checklists and manual data entry just to complete a simple task. We strip away the bloat and code the workflow exclusively for you.
          </p>
        </div>

        {/* Mobile responsive flex-col to md:grid layout */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Generic SaaS Workflow (Bloated) */}
          <motion.div 
            className="w-full bg-[#0a0a0a] border border-gray-800 rounded-3xl p-6 md:p-8 flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-gray-800">
              <AlertTriangle className="text-red-500 w-6 h-6" />
              <div>
                <h3 className="font-bold text-gray-300">Generic Mass-Market App</h3>
                <p className="text-xs text-gray-500">12 Minutes Per Task</p>
              </div>
            </div>
            
            {/* The Messy Workflow */}
            <div className="flex flex-col space-y-4 text-sm text-gray-400 flex-grow pt-2">
              <div className="flex items-start space-x-3 opacity-60">
                <span className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
                <span>Log into bloated third-party dashboard</span>
              </div>
              <div className="flex items-start space-x-3 opacity-60">
                <span className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
                <span>Navigate past 6 menus you don't use</span>
              </div>
              <div className="flex items-start space-x-3 opacity-60">
                <span className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5">3</span>
                <span>Manually export CSV data from CRM</span>
              </div>
              <div className="flex items-start space-x-3 opacity-60">
                <span className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5">4</span>
                <span>Format spreadsheet to match generic template</span>
              </div>
              <div className="flex items-start space-x-3 opacity-60">
                <span className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5">5</span>
                <span>Upload file and pray it doesn't error</span>
              </div>
              <div className="flex items-start space-x-3 opacity-60">
                <span className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5">6</span>
                <span>Manually configure billing variables</span>
              </div>
            </div>
          </motion.div>

          {/* Custom Software Workflow (Streamlined) */}
          <motion.div 
            className="w-full bg-[#050505] border border-cyan-400/40 rounded-3xl p-6 md:p-8 flex flex-col shadow-[0_0_50px_rgba(0,150,255,0.1)] relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Glossy Overlay */}
            <div className="absolute top-0 right-0 p-32 bg-cyan-400/5 blur-[100px] pointer-events-none" />

            <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-white/10 relative z-10">
              <CheckCircle className="text-cyan-400 w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,204,0.6)]" />
              <div>
                <h3 className="font-bold text-white">Support One Custom App</h3>
                <p className="text-xs text-cyan-400">0.2 Seconds Per Task</p>
              </div>
            </div>
            
            {/* The Clean Workflow */}
            <div className="flex flex-col space-y-6 text-base text-gray-200 flex-grow pt-2 relative z-10 justify-center h-full">
              
              <div className="bg-cyan-950/30 border border-cyan-400/20 p-5 rounded-2xl flex items-center space-x-4">
                 <div className="bg-cyan-400/10 p-3 rounded-xl border border-cyan-400/30 shadow-[0_0_15px_rgba(0,255,204,0.3)]">
                   <Clock className="w-6 h-6 text-cyan-400" />
                 </div>
                 <div>
                   <p className="font-bold text-white text-lg">Single Click Automation</p>
                   <p className="text-sm text-gray-400 mt-1">Data is instantly pulled, formatted, and synced perfectly to your database. No manual steps.</p>
                 </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
