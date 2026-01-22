import React from 'react';
import { Check } from 'lucide-react';
import { momentumIntelligenceData } from '../../data/mock';

const MomentumIntelligence = () => {
  return (
    <section id="intelligence" className="bg-black py-20 lg:py-28 border-t border-white/5">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Content */}
          <div className="flex-1">
            <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">Core Technology</span>
            <h2 
              className="text-white font-semibold mt-3 leading-tight"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
            >
              {momentumIntelligenceData.title}
            </h2>
            <p className="text-white/40 text-base mt-5 leading-relaxed max-w-md">
              {momentumIntelligenceData.description}
            </p>
          </div>

          {/* Right - Capabilities */}
          <div className="flex-1">
            <div className="space-y-0 border-t border-white/10">
              {momentumIntelligenceData.capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 py-5 border-b border-white/5 hover:border-white/10 transition-colors"
                >
                  <Check className="text-[#00FFD1] flex-shrink-0" size={16} />
                  <p className="text-white/70 text-sm">{capability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentumIntelligence;
