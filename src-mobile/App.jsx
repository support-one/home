import React from 'react';
import { motion } from 'framer-motion';
import ProgressiveHeader from './components/ProgressiveHeader';
import HeroSection from './components/HeroSection';

import DynamicIslandToasts from './components/DynamicIslandToasts';

// Main Components Matching Desktop Component Rendering Order
import OrbitalEcosystemMobile from './components/OrbitalEcosystemMobile';
import LiquidBentoMobile from './components/LiquidBentoMobile';
import SaasVsCustom from './components/SaasVsCustom';
import CodeDecoderMobile from './components/CodeDecoderMobile';
import HardwareStackMobile from './components/HardwareStackMobile';
import SyncSimulatorMobile from './components/SyncSimulatorMobile';
import BiometricVaultMobile from './components/BiometricVaultMobile';
import CoreMLScannerMobile from './components/CoreMLScannerMobile';
import TechMarqueeMobile from './components/TechMarqueeMobile';

import ProcessTimelineMobile from './components/ProcessTimelineMobile';

// import BottomConversionMobile from './components/BottomConversionMobile';

// NEW Premium Visual Components
import FloatingAppDock from './components/FloatingAppDock';
import LiveScreenMockup from './components/LiveScreenMockup';
import PlatformLogosStrip from './components/PlatformLogosStrip';

import IndustryImageGrid from './components/IndustryImageGrid';
import CodeTerminalWindow from './components/CodeTerminalWindow';

import DeliverableChecklist from './components/DeliverableChecklist';
import DeviceFrameCarousel from './components/DeviceFrameCarousel';
import FounderCard from './components/FounderCard';
import FooterMobile from './components/FooterMobile';

const Section = ({ children, id }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="w-full relative py-12 transform-gpu"
    style={{ willChange: 'transform, opacity' }}
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
      className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-apple-blue/10 to-transparent"
    />
  </div>
);

function App() {
  return (
    <div className="bg-noise bg-black text-white w-full relative font-sans selection:bg-apple-blue/30">
      <DynamicIslandToasts />
      <ProgressiveHeader />
      
      <main className="w-full relative z-20">
        {/* === HERO === */}
        <Section id="home">
          <HeroSection />
        </Section>
        
        <SectionDivider />

        {/* === SOCIAL PROOF — Platform Logos === */}
        <Section>
          <PlatformLogosStrip />
        </Section>
        
        <SectionDivider />

        {/* === WHAT WE BUILD — App Icons + Bento === */}
        <Section id="what-we-build">
          <FloatingAppDock />
          <LiquidBentoMobile />
        </Section>
        
        <SectionDivider />

        {/* === LIVE DEMO — Phone Mockup + Terminal === */}
        <Section>
          <LiveScreenMockup />
          <CodeTerminalWindow />
        </Section>
        
        <SectionDivider />

        {/* === ECOSYSTEM — Industries === */}
        <Section id="industries">
          <OrbitalEcosystemMobile />
          <IndustryImageGrid />
        </Section>
        
        <SectionDivider />

        {/* === DEVICES — Multi-Platform === */}
        <Section>
          <DeviceFrameCarousel />
          <HardwareStackMobile />
        </Section>
        
        <SectionDivider />

        {/* === DIFFERENTIATION — USP + Code === */}
        <Section>
          <SaasVsCustom />
          <CodeDecoderMobile />
        </Section>
        
        <SectionDivider />

        {/* === PROCESS — Timeline + Deliverables === */}
        <Section id="process">
          <ProcessTimelineMobile />
          <DeliverableChecklist />
        </Section>
        
        <SectionDivider />

        {/* === TECHNICAL — Sync + Biometric + ML === */}
        <Section>
          <SyncSimulatorMobile />
          <BiometricVaultMobile />
          <CoreMLScannerMobile />
          <TechMarqueeMobile />
        </Section>
        
        <SectionDivider />

        {/* === DEVELOPER === */}
        <Section id="developer">
          <FounderCard />
        </Section>
        
        <FooterMobile />
      </main>


    </div>
  );
}

export default App;
