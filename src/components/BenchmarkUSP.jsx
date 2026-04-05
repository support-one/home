import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const competitors = [
  "Forces you to adapt your workflow to their generic software",
  "Bloated with hundreds of features you pay for but never use",
  "Built to cater to thousands of different businesses, not yours",
];

const pureNative = [
  "Software tailored perfectly around your unique operations",
  "Streamlined logic built precisely for your employees",
  "Total ownership of the exact architecture you need to scale",
];

export default function BenchmarkUSP() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-32 px-6 overflow-hidden snap-center">
      {/* Animated Glowing Separator */}
      <motion.div 
        className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <div className="max-w-6xl w-full z-10 flex flex-col items-center">
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          The Era of Generic SaaS is Over.
        </motion.h2>

        <motion.p 
          className="text-gray-400 max-w-2xl text-center mb-20 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Stop paying for "Universal" software built to cater to thousands of other companies. We build software from the ground up tailored exclusively to your specific business needs.
        </motion.p>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-12 w-full">
          {/* Universal Left Side */}
          <motion.div 
            className="flex flex-col items-start space-y-6 opacity-50 backdrop-blur-sm bg-white/[0.02] border border-white/5 p-10 rounded-3xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.5, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-500">Universal Off-the-Shelf Apps</h3>
            <ul className="space-y-4">
              {competitors.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-400">
                  <XCircle className="w-5 h-5 mr-3 text-red-500/50 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support One Standard Right Side */}
          <motion.div 
            className="relative flex flex-col items-start space-y-6 bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 p-10 rounded-3xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Subtle glow behind the right card */}
            <div className="absolute -inset-1 bg-cyan-500/20 rounded-3xl blur-2xl -z-10" />
            
            <h3 className="text-2xl font-semibold text-white">Support One Custom</h3>
            <ul className="space-y-4">
              {pureNative.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-center text-white"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + (idx * 0.15) }}
                >
                  <CheckCircle2 className="w-5 h-5 mr-3 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
