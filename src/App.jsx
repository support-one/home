import React from 'react';
import CursorSpotlight from './components/CursorSpotlight';
import HeroSection from './components/HeroSection';
import BenchmarkUSP from './components/BenchmarkUSP';
import PlatformMatrix from './components/PlatformMatrix';

import ConversionForm from './components/ConversionForm';
import TechMarquee from './components/TechMarquee';
import SmallBusinessROI from './components/SmallBusinessROI';
import WaterfallTypography from './components/WaterfallTypography';
import LiquidBento from './components/LiquidBento';
import MagneticDock from './components/MagneticDock';

import CodeDecoder from './components/CodeDecoder';
import QualitySlider from './components/QualitySlider';
import TeamMatrix from './components/TeamMatrix';



import HardwareMatrix from './components/HardwareMatrix';
import SyncSimulator from './components/SyncSimulator';
import BiometricVault from './components/BiometricVault';
import EfficiencyGraph from './components/EfficiencyGraph';
import NativeScale from './components/NativeScale';
import GestureSandbox from './components/GestureSandbox';
import CoreMLScanner from './components/CoreMLScanner';
import OrbitalEcosystem from './components/OrbitalEcosystem';

function App() {
  return (
    <div className="bg-[#000000] text-white selection:bg-cyan-500/30 w-full min-h-screen relative font-sans">
      <CursorSpotlight />
      <MagneticDock />
      <main className="w-full h-full flex flex-col items-center">
        <HeroSection />
        <OrbitalEcosystem />
        
        <WaterfallTypography />
        <LiquidBento />
        
        <BenchmarkUSP />
        <QualitySlider />
        <CodeDecoder />
        
        {/* --- Native Power Batch --- */}
        <HardwareMatrix />
        <NativeScale />
        <SyncSimulator />
        <EfficiencyGraph />
        <BiometricVault />
        <GestureSandbox />
        <CoreMLScanner />
        
        <PlatformMatrix />
        <TechMarquee />
        <TeamMatrix />
        <ConversionForm />
      </main>
    </div>
  );
}

export default App;
