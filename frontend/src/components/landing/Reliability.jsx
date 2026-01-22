import React from 'react';
import { reliabilityData } from '../../data/mock';

const Reliability = () => {
  return (
    <section id="reliability" className="bg-[#050505] py-20 lg:py-28">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">Standards</span>
          <h2 
            className="text-white font-semibold mt-3 leading-tight"
            style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
          >
            {reliabilityData.title}
          </h2>
          <p className="text-white/40 text-sm mt-3">
            {reliabilityData.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {reliabilityData.features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-black hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-[#00FFD1]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00FFD1] text-xs font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TradingView Badge */}
        <div className="mt-12 p-8 border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#00FFD1]/10 border border-[#00FFD1]/30 flex items-center justify-center">
              <span className="text-[#00FFD1] text-lg font-bold">TV</span>
            </div>
            <div>
              <p className="text-white font-medium">TradingView Integration</p>
              <p className="text-white/40 text-sm">Professional-grade platform compatibility</p>
            </div>
          </div>
          <span className="text-white/20 text-xs uppercase tracking-wider">Native Integration</span>
        </div>
      </div>
    </section>
  );
};

export default Reliability;
