import React from 'react';
import OrbitalEcosystem from './OrbitalEcosystem';
import ProcessTimeline from './ProcessTimeline';
import DeliverableChecklist from './DeliverableChecklist';

const DesktopEcosystem = () => {
  return (
    <section className="w-full relative bg-black overflow-hidden z-30">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-8 py-20 flex flex-col">
        
        {/* Top Row: Text + Deliverables (left) | Orbit (right) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 mb-16 flex-1">
          
          {/* Left Column (42%): Text Block + Deliverables */}
          <div className="w-full lg:w-[42%] flex flex-col justify-center">
            <span className="text-[10px] lg:text-sm font-bold tracking-widest text-apple-blue uppercase mb-4 block">Ecosystem & Process</span>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight mb-4 leading-tight">
              We build systems,<br/>not just screens.
            </h2>
            <p className="text-white/60 text-base lg:text-lg mb-10 max-w-md">
              Every business is a complex ecosystem. We map your operations, define the deliverables, and execute precisely.
            </p>
            <DeliverableChecklist hideHeader={true} />
          </div>

          {/* Right Column (58%): Orbital – no clip, allow overflow */}
          <div className="w-full lg:w-[58%] flex items-center justify-center lg:justify-end lg:pr-16 xl:pr-20 overflow-visible">
            <div className="scale-[0.72] lg:scale-[0.65] xl:scale-[0.75] origin-center flex justify-center" style={{ minWidth: '600px' }}>
              <OrbitalEcosystem hideHeader={true} className="!h-[600px] !py-0" />
            </div>
          </div>
        </div>

        {/* Bottom Row: Process Timeline */}
        <div className="w-full border-t border-white/10 pt-10">
          <ProcessTimeline isDesktop={true} hideHeader={true} />
        </div>

      </div>
    </section>
  );
};

export default DesktopEcosystem;
