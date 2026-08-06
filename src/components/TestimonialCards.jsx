import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ExternalLink, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Balaji Infra ERP',
    subtitle: 'Construction & Infrastructure',
    description: 'Full-stack ERP system for operations, procurement, and project tracking across multiple construction sites.',
    tag: 'Enterprise ERP',
    color: '#FF9500',
    file: 'balaji-infra-erp.pdf',
    type: 'pdf',
  },
  {
    title: 'MedPlus Clinical Suite',
    subtitle: 'Healthcare & Clinical Operations',
    description: 'End-to-end clinical management system including OPD, IPD, pharmacy, and patient records.',
    tag: 'Healthcare Platform',
    color: '#30D158',
    file: 'medplus-erp.pdf',
    type: 'pdf',
  },
  {
    title: 'tvOS Enterprise Dashboard',
    subtitle: 'Apple TV Enterprise App',
    description: 'Native tvOS dashboard for live operational metrics, designed for large-format wall displays.',
    tag: 'Native tvOS',
    color: '#5AC8FA',
    file: 'tvos-dashboard.pdf',
    type: 'pdf',
  },
  {
    title: 'Balaji Infra - Network',
    subtitle: 'On-Site Infrastructure',
    description: 'Comprehensive network architecture and on-site hardware deployment for remote construction sites.',
    tag: 'Infrastructure',
    color: '#FF453A',
    file: 'balaji-infra-network.pdf',
    type: 'pdf',
  },
  {
    title: 'Aabo Ring Technologies',
    subtitle: 'Wearable Tech & Data Analytics',
    description: 'Developed the companion beta testing research app for continuous vitals tracking, advanced health analytics, and smart ring hardware integration.',
    tag: 'IoT & Health',
    color: '#BF5AF2',
    file: 'aabo-ring-mockup.png',
    type: 'image',
    link: 'https://aabo.in/',
  },
  {
    title: 'SVKM Attendance Forecast',
    subtitle: 'Predictive Analytics Platform',
    description: 'A predictive modeling application utilizing historical attendance data to forecast student engagement and streamline administrative resource planning.',
    tag: 'Data & Analytics',
    color: '#32ADE6',
    file: 'svkm-attendance-brochure.png',
    type: 'image',
  }
];

const PDFPanel = ({ project, onClose }) => {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    if (project) {
      setIsReady(false);
      const timer = setTimeout(() => setIsReady(true), 450); // wait for slide animation
      return () => clearTimeout(timer);
    } else {
      setIsReady(false);
    }
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[80]"
          />

          {/* Slide-in Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 h-full w-full lg:w-[780px] z-[90] bg-[#0a0a0a] border-l border-white/10 flex flex-col shadow-[−20px_0_80px_rgba(0,0,0,0.8)]"
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: project.color + '20' }}>
                  <FileText size={20} style={{ color: project.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{project.title}</h3>
                  <p className="text-xs text-white/40 font-medium">{project.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={project.link ? project.link : `${import.meta.env.BASE_URL}${project.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white transition-colors px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10"
                >
                  <ExternalLink size={14} />
                  {project.link ? 'Visit Site' : 'Open Full'}
                </a>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <X size={18} className="text-white/60" />
                </button>
              </div>
            </div>

            {/* Viewer */}
            <div className="flex-1 overflow-hidden relative bg-[#111]">
              {!isReady && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-2 border-[#BF5AF2] border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs text-white/40 font-bold uppercase tracking-widest">Loading Media...</span>
                  </div>
                </div>
              )}
              {isReady && project.type === 'pdf' && (
                <iframe
                  src={`${import.meta.env.BASE_URL}${project.file}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                  className="w-full h-full"
                  title={project.title}
                  style={{ border: 'none', background: '#111' }}
                />
              )}
              {isReady && project.type === 'image' && (
                <div className="w-full h-full overflow-y-auto bg-black flex items-start justify-center p-4">
                  <img 
                    src={`${import.meta.env.BASE_URL}${project.file}`} 
                    alt={project.title}
                    className="w-full max-w-2xl rounded-2xl shadow-2xl object-contain"
                  />
                </div>
              )}
            </div>
            
            {/* Mobile Bottom Close Button */}
            <div className="lg:hidden p-4 border-t border-white/10 bg-[#0a0a0a] pb-safe z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.5)] flex-shrink-0">
              <button
                onClick={onClose}
                className="w-full bg-white/10 active:bg-white/20 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <X size={18} />
                Close Document
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const TestimonialCards = () => {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section id="trust" className="pt-2 pb-16 lg:pt-6 lg:pb-24 overflow-hidden">
      <div className="text-center mb-14 lg:mb-20 px-6 lg:px-8 max-w-[1600px] mx-auto">
        <span className="text-[10px] lg:text-sm uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">Client Trust</span>
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-2">Project Portfolio</h2>
        <p className="text-white/60 lg:text-xl">Click any project to view the full brochure.</p>
      </div>
      <div className="px-6 lg:px-8 w-full max-w-[1600px] mx-auto">
        
        {/* Featured App Pane */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-[#0a0a0a] border border-[#BF5AF2]/30 rounded-[32px] p-8 lg:p-12 mb-8 relative overflow-hidden group flex flex-col lg:flex-row items-center gap-10"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-[#BF5AF2]/10 blur-[120px] pointer-events-none" />

          {/* Left: App Icon & Laurels */}
          <div className="relative z-10 flex flex-col items-center gap-6 flex-shrink-0 lg:w-44">
            <img 
              src={`${import.meta.env.BASE_URL}svkm-attendance-logo.webp`} 
              alt="SVKM Attendance Forecast" 
              className="w-32 h-32 lg:w-44 lg:h-44 rounded-3xl lg:rounded-[2.5rem] shadow-[0_20px_60px_rgba(191,90,242,0.4)]"
            />
            
            {/* Achievement Laurels & Rating */}
            <div className="flex items-center justify-between w-full text-[#FFD60A] bg-[#FFD60A]/10 px-4 py-3 rounded-2xl border border-[#FFD60A]/20">
              {/* Left Laurel */}
              <svg width="20" height="24" viewBox="0 0 24 32" fill="currentColor" className="opacity-90">
                <path d="M22 30C12 30 2 20 2 10C2 5 5 1 9 0C4 4 1 9 1 15C1 23 8 30 18 32Z" />
                <path d="M14 26C5 24 0 16 0 8C0 5 1 2 3 0C0 4 0 9 2 13C4 18 8 22 12 24Z" />
              </svg>
              
              <div className="text-center">
                <div className="text-xl font-black leading-none tracking-tight">4.0</div>
                <div className="text-[7px] uppercase tracking-[0.2em] font-bold mt-1 text-[#FFD60A]/80">App Store</div>
              </div>

              {/* Right Laurel */}
              <svg width="20" height="24" viewBox="0 0 24 32" fill="currentColor" className="opacity-90" style={{ transform: 'scaleX(-1)' }}>
                <path d="M22 30C12 30 2 20 2 10C2 5 5 1 9 0C4 4 1 9 1 15C1 23 8 30 18 32Z" />
                <path d="M14 26C5 24 0 16 0 8C0 5 1 2 3 0C0 4 0 9 2 13C4 18 8 22 12 24Z" />
              </svg>
            </div>
          </div>

          {/* Right: Info */}
          <div className="relative z-10 flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#BF5AF2]/15 text-[#BF5AF2] mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#BF5AF2]" />
              Live on App Store
            </div>
            
            <h3 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4">SVKM Attendance Forecast</h3>
            <p className="text-white/60 lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              A bespoke native iOS application that accurately forecasts student attendance by algorithmically parsing SAP PDFs and mapping subject-wise weather.
            </p>
            
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <button 
                onClick={() => window.open('https://apps.apple.com/in/app/svkm-attendance-forecast/id6758021185', '_blank')}
                className="w-full lg:w-auto bg-[#BF5AF2] hover:bg-[#a84ee0] text-white font-bold px-8 h-14 rounded-2xl flex items-center justify-center gap-3 transition-colors flex-shrink-0"
              >
                <ExternalLink size={18} />
                View on App Store
              </button>
              
              <div className="w-full lg:w-auto flex items-center gap-3 px-6 h-14 rounded-2xl bg-[#BF5AF2]/10 border border-[#BF5AF2]/20 flex-shrink-0 justify-center">
                <span className="text-xl">🚀</span>
                <div className="text-left">
                  <div className="font-black text-[#BF5AF2] text-[15px] leading-none">1,500+</div>
                  <div className="text-[9px] text-[#BF5AF2]/70 uppercase tracking-widest font-bold mt-1">Downloads Crossed</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4-Column Grid for PDF Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {projects.map((p, i) => (
            <motion.button
              key={i}
              onClick={() => setOpenProject(p)}
              className="text-left bg-[#0a0a0a] border border-white/8 hover:border-white/20 rounded-[24px] p-6 lg:p-8 transition-all duration-300 hover:bg-[#0f0f0f] group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-15 transition-opacity duration-300 group-hover:opacity-35" style={{ backgroundColor: p.color }} />

              {/* Header Row */}
              <div className="flex items-start justify-between mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ backgroundColor: p.color + '15', color: p.color }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                  {p.tag}
                </div>
              </div>

              <h4 className="text-lg lg:text-xl font-bold text-white tracking-tight mb-1">{p.title}</h4>
              <p className="text-xs text-white/40 font-medium mb-4">{p.subtitle}</p>
              <p className="text-sm text-white/60 leading-relaxed mb-6">{p.description}</p>

              {/* Footer CTA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold" style={{ color: p.color }}>
                  <FileText size={14} />
                  View Brochure
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* PDF Panel */}
      <PDFPanel project={openProject} onClose={() => setOpenProject(null)} />

      <style dangerouslySetInnerHTML={{ __html: `.hide-scrollbars::-webkit-scrollbar { display: none; }` }} />
    </section>
  );
};

export default TestimonialCards;
