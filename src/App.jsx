import React from 'react';
import { motion } from 'framer-motion';
import DesktopSidebar from './components/DesktopSidebar';

// Main Components Matching Desktop Component Rendering Order
import DesktopCommandCenter from './components/DesktopCommandCenter';
import DesktopEcosystem from './components/DesktopEcosystem';
import SaasVsCustom from './components/SaasVsCustom';
import DesktopHero from './components/DesktopHero';
import SyncSimulator from './components/SyncSimulator';
import BiometricVault from './components/BiometricVault';
import CoreMLScanner from './components/CoreMLScanner';
import TechMarquee from './components/TechMarquee';

// import BottomConversion from './components/BottomConversion';

// NEW Premium Visual Components
import FloatingAppDock from './components/FloatingAppDock';
import LiveScreenMockup from './components/LiveScreenMockup';
import PlatformLogosStrip from './components/PlatformLogosStrip';
import IndustryImageGrid from './components/IndustryImageGrid';
import DeviceFrameCarousel from './components/DeviceFrameCarousel';
import FounderCard from './components/FounderCard';
import TestimonialCards from './components/TestimonialCards';
import BottomConversion from './components/BottomConversion';
import Footer from './components/Footer';
import DynamicTabNavigation from './components/DynamicTabNavigation';

const Section = ({ children, id }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="w-full relative"
  >
    {children}
  </motion.section>
);

const SectionDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent my-2 relative">
    <motion.div 
      initial={{ x: "-100%" }}
      whileInView={{ x: "100%" }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-apple-blue/10 to-transparent transform-gpu"
      style={{ willChange: 'transform' }}
    />
  </div>
);

function App() {
  // Always start at top on reload
  React.useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-noise bg-black text-white w-full min-h-screen relative font-sans selection:bg-apple-blue/30 lg:flex">
      <DesktopSidebar />
      
      <main className="w-full lg:flex-1 relative z-20 overflow-x-hidden">
        {/* === HERO === */}
        <Section id="home">
          <DesktopHero />
        </Section>
        
        <SectionDivider />

        {/* === SOCIAL PROOF — Platform Logos === */}
        <Section>
          <PlatformLogosStrip />
        </Section>
        
        <SectionDivider />

        {/* === WHAT WE BUILD & DEMO (Command Center) === */}
        <Section id="dashboard">
          <DesktopCommandCenter />
        </Section>
        
        <SectionDivider />

        {/* === ECOSYSTEM & PROCESS === */}
        <Section id="ecosystem">
          <DesktopEcosystem />
        </Section>
        
        <SectionDivider />

        {/* === DIFFERENTIATION — USP === */}
        <Section id="difference">
          <SaasVsCustom />
        </Section>
        
        <SectionDivider />

        {/* === DEVICES — Multi-Platform === */}
        <Section id="multiplatform">
          <DeviceFrameCarousel />
        </Section>
        
        <SectionDivider />

        {/* === TECHNICAL — Sync + Biometric + ML === */}
        <Section id="technology">
          <div className="pt-16 lg:pt-24 w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 lg:px-8 mb-12">
            <SyncSimulator />
            <BiometricVault />
            <CoreMLScanner />
          </div>
          <TechMarquee />
        </Section>
        
        <SectionDivider />

        {/* === CLIENT TRUST === */}
        <Section id="trust">
          <TestimonialCards />
        </Section>
        
        <SectionDivider />

        {/* === DEVELOPER === */}
        <Section id="developer">
          <FounderCard />
        </Section>
        
        <BottomConversion />
        <Footer />
      </main>

      {/* Mobile Tab Navigation */}
      <div className="lg:hidden">
        <DynamicTabNavigation />
      </div>

    </div>
  );
}

export default App;
