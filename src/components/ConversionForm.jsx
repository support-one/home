import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ConversionForm() {
  const [formData, setFormData] = useState({ name: '', company: '', needs: '', platforms: [] });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const InputField = ({ label, type = "text", name }) => (
    <div className="relative group w-full mb-6">
      <input 
        type={type} 
        required 
        value={formData[name]}
        onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
        className="peer w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white outline-none focus:border-cyan-500/50 transition-colors"
      />
      <label className={`absolute left-4 transition-all duration-300 pointer-events-none text-gray-500
        ${formData[name] ? 'top-2 text-xs text-cyan-500' : 'top-4 text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-500'}
      `}>
        {label}
      </label>
    </div>
  );

  return (
    <section className="w-full min-h-screen py-32 px-6 flex flex-col items-center justify-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">Define Your Standard.</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Detail your operational bottlenecks, and our architects will design your proprietary native solution.
          </p>
        </motion.div>

        {/* Right Form Area */}
        <motion.div 
          className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col relative z-10">
              <InputField label="Name / Identity" name="name" />
              <InputField label="Organization" name="company" />
              
              <div className="relative group w-full mb-8">
                <textarea 
                  required
                  rows="4"
                  value={formData.needs}
                  onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                  className="peer w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white outline-none focus:border-cyan-500/50 transition-colors resize-none"
                />
                <label className={`absolute left-4 transition-all duration-300 pointer-events-none text-gray-500
                  ${formData.needs ? 'top-2 text-xs text-cyan-500' : 'top-4 text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-500'}
                `}>
                  Project Architecture Vision
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black font-semibold rounded-xl flex items-center justify-center overflow-hidden relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">
                  {isSubmitting ? "Initializing..." : "Commit Request"}
                </span>
              </motion.button>
            </form>
          ) : (
            <motion.div 
              className="py-20 flex flex-col items-center justify-center text-center space-y-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
            >
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold">Request Committed</h3>
              <p className="text-gray-400">Our architects will reach out shortly.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
